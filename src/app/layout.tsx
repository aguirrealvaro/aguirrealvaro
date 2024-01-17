import "@/styles/globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Navbar, Footer, ErrorBoundary } from "@/components";
import { ThemeProvider } from "@/providers";
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

export const dynamic = "force-dynamic";
// export const revalidate = 0;

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
            <div className="flex min-h-screen flex-col">
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
