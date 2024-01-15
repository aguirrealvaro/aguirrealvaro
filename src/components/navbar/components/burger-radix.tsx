"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
// import { useRouter } from "next/router";
import { IconButton, Link } from "@/components/ui";
import { NAVIGATION_LINKS } from "@/config";
import { DEFAULT_ICON_SIZE } from "@/constants";
import { cn } from "@/utils/cn";
import { getIsExternalLink } from "@/utils/get-is-external-link";

/* 
    TO DO:
    - fix router
    - dialog or menu?
*/

type BurgerRadixProps = {
  navbarHeight: number | undefined;
};

const BurgerRadix = ({ navbarHeight }: BurgerRadixProps) => {
  //const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!open) return;
    const onClose = () => setOpen(false);
    window.addEventListener("resize", onClose);
    return () => window.removeEventListener("resize", onClose);
  }, [open]);

  const handleClick = (href: string) => {
    // router.push(href);
    setOpen(false);
  };

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
            <Dialog.Title className="sr-only">Mobile menu</Dialog.Title>
            <nav className="mb-4">
              <ul className="flex flex-col gap-4">
                {NAVIGATION_LINKS.map((link, index) => {
                  const renderLink = () => {
                    if (getIsExternalLink(link)) {
                      const { name, externalHref } = link;

                      return (
                        <Link
                          colorScheme="neutral"
                          underline={false}
                          href={externalHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded px-4 py-1.5 transition hover:bg-hover-primary"
                        >
                          {name}
                        </Link>
                      );
                    } else {
                      const { name, href } = link;

                      return (
                        <button
                          onClick={() => handleClick(href)}
                          className="rounded px-4 py-1.5 transition hover:bg-hover-primary"
                        >
                          {name}
                        </button>
                      );
                    }
                  };

                  return (
                    <li key={index} className="text-center">
                      {renderLink()}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export { BurgerRadix };
