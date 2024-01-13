import "@/styles/globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { QueryProvider, ThemeProvider } from "@/providers";
import { cn } from "@/utils/cn";
import { raleway } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Alvaro Aguirre",
  description:
    "I'll be sharing my journey, some of my personal projects and publishing articles about topics that interest me and things I've learned throughout my career",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-bg-primary text-text-primary antialiased",
          `${raleway.variable} font-body`
        )}
      >
        <QueryProvider>
          <ThemeProvider>
            <h1 className="sr-only">Alvaro Aguirre</h1>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
