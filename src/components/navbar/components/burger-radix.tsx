"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { IconButton } from "@/components/ui";
import { DEFAULT_ICON_SIZE } from "@/constants";
import { cn } from "@/utils/cn";

/* 
    TO DO:
    - close dialog on resize
    - title and descriptions with sr-only
    - content
    - show only for mobile
    - dialog or menu?
*/
type BurgerRadixProps = {
  navbarHeight: number | undefined;
};

const BurgerRadix = ({ navbarHeight }: BurgerRadixProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="hidden sm:block">
      <Dialog.Root open={open} onOpenChange={setOpen} modal={false}>
        <Dialog.Trigger asChild>
          <IconButton>
            <Menu size={DEFAULT_ICON_SIZE} className={open ? "hidden" : "block"} />
            <X size={DEFAULT_ICON_SIZE} className={open ? "block" : "hidden"} />
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
            onInteractOutside={(e) => e.preventDefault()}
          >
            Content!
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export { BurgerRadix };
