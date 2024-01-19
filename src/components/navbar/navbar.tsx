"use client";

import { useEffect, useRef, useState } from "react";
import { MainMenu, ThemeToggle, MediaLinks, Logo, Burger } from "./components";
import { Wrapper } from "@/components";
import { cn } from "@/lib/cn";

const Navbar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    setNavbarHeight(containerRef.current.offsetHeight);
  }, []);

  return (
    <header
      ref={containerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-navbar h-20 bg-bg-secondary shadow",
        "flex items-center"
      )}
    >
      <Wrapper className="h-full">
        <div className="flex h-full items-center justify-between">
          <Logo />
          <MainMenu />
          <div className="flex items-center gap-3">
            <MediaLinks />
            <ThemeToggle />
            <Burger navbarHeight={navbarHeight} />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export { Navbar };
