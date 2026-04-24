"use client";
import Link from "next/link";
import { useMode } from "@/context/ModeContext";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Code2, Wrench, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { personal } from "@/data/site";

export default function Navbar() {
  const { mode, toggleMode, appearance, toggleAppearance } = useMode();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const focusRing = clsx(
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:ring-[color:var(--color-persona-primary)]",
    "focus-visible:ring-offset-[color:var(--color-background)]"
  );

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    ...(mode === "dev" ? [{ name: "Projects", href: "/projects" }] : []),
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? clsx(
                "backdrop-blur-nav shadow-sm border-b",
                appearance === "light" ? "bg-stone-50/80 border-stone-300" : "bg-stone-950/80 border-stone-800"
              )
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className={clsx("text-xl font-semibold hover:opacity-80 transition-opacity", focusRing)}>
              {personal.name}
            </Link>

            <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      "text-sm transition-colors",
                      focusRing,
                      isActive
                        ? clsx("font-semibold", "text-[color:var(--color-persona-primary)]")
                        : appearance === "light"
                          ? "text-stone-700 hover:text-stone-950"
                          : "text-stone-300 hover:text-stone-50"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <div className={clsx("relative p-1 rounded-[999px] flex items-center", appearance === "light" ? "bg-stone-200" : "bg-stone-800")}>
                <div
                  className="absolute top-1 bottom-1 rounded-[999px] transition-all duration-300 ease-out"
                  style={{
                    width: "calc(50% - 4px)",
                    left: mode === "dev" ? "4px" : "calc(50% + 0px)",
                    backgroundColor: "var(--color-persona-primary)",
                  }}
                />
                <button
                  type="button"
                  onClick={() => toggleMode("dev")}
                  className={clsx(
                    "relative z-10 px-4 py-2 text-xs font-medium rounded-[999px] transition-colors flex items-center gap-1.5",
                    focusRing,
                    mode === "dev" ? "text-white" : appearance === "light" ? "text-stone-600" : "text-stone-400"
                  )}
                  aria-label="Switch to Developer persona"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">DEV</span>
                </button>
                <button
                  type="button"
                  onClick={() => toggleMode("it")}
                  className={clsx(
                    "relative z-10 px-4 py-2 text-xs font-medium rounded-[999px] transition-colors flex items-center gap-1.5",
                    focusRing,
                    mode === "it" ? "text-white" : appearance === "light" ? "text-stone-600" : "text-stone-400"
                  )}
                  aria-label="Switch to IT persona"
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">IT</span>
                </button>
              </div>

              <button
                type="button"
                onClick={toggleAppearance}
                className={clsx(
                  "p-2.5 rounded-full transition-colors",
                  focusRing,
                  appearance === "light" ? "bg-stone-200 text-stone-700 hover:bg-stone-300" : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                )}
                aria-label={`Switch to ${appearance === "light" ? "dark" : "light"} mode`}
              >
                {appearance === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={clsx(
                  "lg:hidden p-2.5 rounded-full transition-colors",
                  focusRing,
                  appearance === "light" ? "bg-stone-200 text-stone-700 hover:bg-stone-300" : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                )}
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.15 }}
              className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
              className={clsx(
                "fixed top-20 left-0 right-0 bottom-0 z-40 lg:hidden overflow-y-auto",
                appearance === "light" ? "bg-stone-50" : "bg-stone-950"
              )}
            >
              <div className="px-6 py-8">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={clsx(
                          "text-left text-lg py-4 px-4 rounded-xl transition-colors",
                          focusRing,
                          isActive
                            ? clsx("text-[color:var(--color-persona-primary)]", appearance === "light" ? "bg-stone-100" : "bg-stone-900")
                            : appearance === "light"
                              ? "text-stone-800 hover:bg-stone-200"
                              : "text-stone-200 hover:bg-stone-900"
                        )}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
