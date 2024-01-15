"use client";

import { useEffect, useRef, useState } from "react";
import { MainMenu, ThemeToggle, MediaLinks, Logo, BurgerRadix } from "./components";
import { Wrapper } from "@/components";
import { cn } from "@/utils/cn";

const Navbar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    setNavbarHeight(containerRef.current?.offsetHeight);
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
          <div className="flex items-center gap-4">
            <MediaLinks />
            <ThemeToggle />
            <BurgerRadix navbarHeight={navbarHeight} />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export { Navbar };
