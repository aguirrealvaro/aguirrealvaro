import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Slot } from "@radix-ui/react-slot";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { IconButton, Link } from "@/components/ui";
import { NAVIGATION_LINKS } from "@/config";
import { DEFAULT_ICON_SIZE } from "@/constants";
import { useDisableScroll } from "@/hooks";
import { cn } from "@/lib/cn";
import { getIsExternalLink } from "@/utils/get-is-external-link";

type BurgerProps = {
  navbarHeight: number | undefined;
};

const Burger = ({ navbarHeight }: BurgerProps) => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!open) return;
    const onClose = () => setOpen(false);
    window.addEventListener("resize", onClose);
    return () => window.removeEventListener("resize", onClose);
  }, [open]);

  useDisableScroll(open);

  const handleClick = (href: string) => {
    setOpen(false);
    router.push(href);
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
              "z-navbar flex items-center justify-center",
              "fixed inset-x-0 bottom-0 bg-bg-secondary",
              "data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in"
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
                        >
                          {name}
                        </Link>
                      );
                    } else {
                      const { name, href } = link;

                      return <button onClick={() => handleClick(href)}>{name}</button>;
                    }
                  };

                  return (
                    <li key={index} className="text-center">
                      <Slot className="rounded px-4 py-1.5 transition hover:bg-hover-primary">
                        {renderLink()}
                      </Slot>
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

export { Burger };
