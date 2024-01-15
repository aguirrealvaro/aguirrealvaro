import { ButtonHTMLAttributes } from "react";
import { Menu, X } from "lucide-react";
import { IconButton } from "@/components/ui";
import { DEFAULT_ICON_SIZE } from "@/constants";

type BurgerProps = {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Burger = ({ isMobileMenuOpen, toggleMobileMenu, ...restProps }: BurgerProps) => {
  return (
    <div className="hidden sm:block">
      <IconButton onClick={toggleMobileMenu} {...restProps}>
        <Menu size={DEFAULT_ICON_SIZE} className={isMobileMenuOpen ? "hidden" : "block"} />
        <X size={DEFAULT_ICON_SIZE} className={isMobileMenuOpen ? "block" : "hidden"} />
      </IconButton>
    </div>
  );
};

export { Burger };
