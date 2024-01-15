import * as Dialog from "@radix-ui/react-dialog";
import { Menu } from "lucide-react";
import { IconButton } from "@/components/ui";
import { DEFAULT_ICON_SIZE } from "@/constants";
import { cn } from "@/utils/cn";

type BurgerRadixProps = {
  navbarHeight: number | undefined;
};

const BurgerRadix = ({ navbarHeight }: BurgerRadixProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <IconButton>
          <Menu size={DEFAULT_ICON_SIZE} />
        </IconButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content
          style={{ top: `${navbarHeight}px` }}
          className={cn(
            "flex items-center justify-center z-navbar",
            "fixed inset-x-0 bottom-0 bg-bg-secondary",
            "data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
          )}
        >
          Content!
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { BurgerRadix };
