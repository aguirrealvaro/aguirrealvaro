import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Icon, IconButton } from "@/components/ui";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const isLightTheme = resolvedTheme === "light";

  const handleToggle = () => {
    setTheme(isLightTheme ? "dark" : "light");
  };

  const icon = isLightTheme ? Sun : Moon;

  return (
    <IconButton onClick={handleToggle}>
      <Icon icon={icon} />
    </IconButton>
  );
};

export { ThemeToggle };
