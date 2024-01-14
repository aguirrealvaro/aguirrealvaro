import { ButtonHTMLAttributes } from "react";
import { Menu, X } from "lucide-react";
import { ClientSide } from "@/components";
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
        <ClientSide>
          {isMobileMenuOpen ? (
            <X size={DEFAULT_ICON_SIZE} />
          ) : (
            <Menu size={DEFAULT_ICON_SIZE} />
          )}
        </ClientSide>
      </IconButton>
    </div>
  );
};

export { Burger };
