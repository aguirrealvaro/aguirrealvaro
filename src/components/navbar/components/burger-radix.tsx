"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { IconButton } from "@/components/ui";
import { DEFAULT_ICON_SIZE } from "@/constants";
import { cn } from "@/utils/cn";

/* 
    TO DO:
    - content
    - use data-state on icons
    - delete old code
    - dialog or menu?
*/
type BurgerRadixProps = {
  navbarHeight: number | undefined;
};

const BurgerRadix = ({ navbarHeight }: BurgerRadixProps) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!open) return;
    const onClose = () => setOpen(false);
    window.addEventListener("resize", onClose);
    return () => window.removeEventListener("resize", onClose);
  }, [open]);

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
          <Dialog.Title className="sr-only">Mobile menu</Dialog.Title>
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
