"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Mode = 'dev' | 'it';
export type Appearance = 'dark' | 'light';

interface ModeContextType {
  mode: Mode;
  toggleMode: (selected: Mode) => void;
  appearance: Appearance;
  toggleAppearance: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('dev');
  const [appearance, setAppearance] = useState<Appearance>('dark');

  useEffect(() => {
    const storedMode = localStorage.getItem('portfolio_mode') as Mode | null;
    const storedAppearance = localStorage.getItem('portfolio_appearance') as Appearance | null;
    if (storedMode === 'dev' || storedMode === 'it') {
      setMode(storedMode);
    }
    if (storedAppearance === 'dark' || storedAppearance === 'light') {
      setAppearance(storedAppearance);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio_mode', mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem('portfolio_appearance', appearance);
  }, [appearance]);

  const toggleMode = (selected: Mode) => setMode(selected);
  const toggleAppearance = () =>
    setAppearance((prev) => (prev === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    document.documentElement.dataset.appearance = appearance;
    document.documentElement.style.colorScheme = appearance;
  }, [appearance]);

  useEffect(() => {
    // Match `ref_project` conventions so global styles/utilities can be reused.
    document.documentElement.classList.toggle("dark", appearance === "dark");
  }, [appearance]);

  useEffect(() => {
    // Match `ref_project` conventions for persona styling hooks.
    document.documentElement.classList.toggle("persona-it", mode === "it");
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, toggleMode, appearance, toggleAppearance }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) throw new Error('useMode must be used within a ModeProvider');
  return context;
}
