import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ClientSide } from "@/components";
import { IconButton } from "@/components/ui";
import { DEFAULT_ICON_SIZE } from "@/constants";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const isLightTheme = resolvedTheme === "light";

  const handleToggle = () => {
    setTheme(isLightTheme ? "dark" : "light");
  };

  return (
    <IconButton onClick={handleToggle}>
      <ClientSide>
        {isLightTheme ? <Sun size={DEFAULT_ICON_SIZE} /> : <Moon size={DEFAULT_ICON_SIZE} />}
      </ClientSide>
    </IconButton>
  );
};

export { ThemeToggle };
