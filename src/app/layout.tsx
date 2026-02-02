// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ModeProvider } from "@/context/ModeContext";
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import AppShell from "@/components/AppShell";

export const metadata: Metadata = {
  title: "Nicholas Ho | Freelance Portfolio",
  description: "Backend developer & IT specialist available for freelance projects.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          // Avoid theme/persona flash by applying saved state before React mounts.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=localStorage.getItem('portfolio_mode');var a=localStorage.getItem('portfolio_appearance');var r=document.documentElement;if(a==='dark'){r.classList.add('dark')}else if(a==='light'){r.classList.remove('dark')}if(m==='it'){r.classList.add('persona-it')}else if(m==='dev'){r.classList.remove('persona-it')}}catch(e){}})();`,
          }}
        />
        <ModeProvider>
          <AppShell>
            <Navbar />
            <main className="min-h-screen pb-28">{children}</main>
            <ContactBar />
            <Footer />
          </AppShell>
        </ModeProvider>
      </body>
    </html>
  );
}
