import "@/styles/globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { raleway } from "./fonts";
import { Navbar, Footer, ErrorBoundary } from "@/components";
import { cn } from "@/lib/cn";
import { ThemeProvider } from "@/providers";

export const metadata: Metadata = {
  title: "Alvaro Aguirre",
  description: "Personal website & blog",
};

type RootLayoutProps = {
  children: ReactNode;
};

// avoid caching
export const dynamic = "force-dynamic";

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-bg-primary text-text-primary antialiased",
          `${raleway.variable} font-body`
        )}
      >
        <ErrorBoundary>
          <ThemeProvider>
            <h1 className="sr-only">Alvaro Aguirre</h1>
            <div className="flex h-dvh flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
};

export default RootLayout;
