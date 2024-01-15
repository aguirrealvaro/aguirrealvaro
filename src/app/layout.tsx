import "@/styles/globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ErrorBoundary } from "@/components/error-boundary";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { QueryProvider, ThemeProvider } from "@/providers";
import { cn } from "@/utils/cn";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Alvaro Aguirre",
  description: "Personal website & blog",
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
        <ErrorBoundary>
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
        </ErrorBoundary>
      </body>
    </html>
  );
};

export default RootLayout;
