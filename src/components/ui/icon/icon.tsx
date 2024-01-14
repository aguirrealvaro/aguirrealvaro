import { LucideIcon, LucideProps } from "lucide-react";
import { ClientSide } from "@/components";

type IconProps = {
  icon: LucideIcon;
  size?: string | number;
} & LucideProps;

const Icon = ({ icon: IconComponent, size = 20, ...restProps }: IconProps) => {
  return (
    <ClientSide>
      <IconComponent size={size} {...restProps} />
    </ClientSide>
  );
};

export { Icon };
