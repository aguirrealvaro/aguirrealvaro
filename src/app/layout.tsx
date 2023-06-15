import "@/styles/globals.css";
import { FunctionComponent, ReactNode } from "react";
import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SessionFetch } from "@/components/session-fetch";
import { QueryProvider, ThemeProvider } from "@/providers";
import { cn } from "@/utils/cn";
import { raleway } from "@/utils/fonts";

const TITLE = "Alvaro Aguirre";
const DESCRIPTION =
  "Alvaro Aguirre's website. Here you fill find some of my personal projects, my trajectory, and publishing articles about topics that interest me and things I've learned throughout my career.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => {
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
            <SessionFetch />
            <div className="flex h-screen flex-col">
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
