"use client";

import clsx from "clsx";
import type { ReactNode } from "react";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className={clsx("min-h-screen w-full", "bg-background text-foreground")}>{children}</div>
  );
}
