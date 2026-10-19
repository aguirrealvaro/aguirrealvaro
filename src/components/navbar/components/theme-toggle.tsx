"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { IconButton } from "@/components/ui";
import { DEFAULT_ICON_SIZE } from "@/constants";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <IconButton onClick={handleToggle}>
      <Sun size={DEFAULT_ICON_SIZE} className="block dark:hidden" />
      <Moon size={DEFAULT_ICON_SIZE} className="hidden dark:block" />
    </IconButton>
  );
};

export { ThemeToggle };
