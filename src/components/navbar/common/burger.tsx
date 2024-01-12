import { ButtonHTMLAttributes } from "react";
import { Menu, X } from "lucide-react";
import { Icon, IconButton } from "@/components/ui";

type BurgerProps = {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Burger = ({ isMobileMenuOpen, toggleMobileMenu, ...restProps }: BurgerProps) => {
  const icon = isMobileMenuOpen ? X : Menu;

  return (
    <div className="hidden sm:block">
      <IconButton onClick={toggleMobileMenu} {...restProps}>
        <Icon icon={icon} />
      </IconButton>
    </div>
  );
};

export { Burger };
