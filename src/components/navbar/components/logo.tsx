import * as ContextMenu from "@radix-ui/react-context-menu";
import { Component, Copy, HomeIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Svg } from ".";
import { cn } from "@/lib/cn";

const Logo = () => {
  const router = useRouter();

  const copySvg = () => {
    navigator.clipboard.writeText("wip :)");
  };

  const openUiKit = () => {
    window.open("https://ui-kit7.vercel.app", "_blank");
  };

  return (
    <ContextMenu.Root modal={false}>
      <ContextMenu.Trigger asChild>
        <Link href="/">
          <Svg />
        </Link>
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content
          className={cn(
            "z-context-menu min-w-56 overflow-hidden rounded-md border bg-bg-secondary p-2 shadow-md",
            "data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in"
          )}
        >
          <ContextMenu.Label className="mb-1 text-sm text-text-secondary">
            Platform
          </ContextMenu.Label>
          <ContextMenu.Group>
            <ContextMenu.Item
              onSelect={() => router.push("/")}
              className={cn(
                "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-hover-primary",
                "cursor-pointer"
              )}
            >
              <HomeIcon size={16} />
              Home Page
            </ContextMenu.Item>
            <ContextMenu.Item
              onSelect={copySvg}
              className={cn(
                "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-hover-primary"
              )}
            >
              <Copy size={16} />
              Copy Logo as SVG
            </ContextMenu.Item>
          </ContextMenu.Group>
          <ContextMenu.Separator className="my-2 h-px bg-border-primary" />
          <ContextMenu.Label className="mb-1 text-sm text-text-secondary">
            Projects
          </ContextMenu.Label>
          <ContextMenu.Item
            onSelect={openUiKit}
            className={cn(
              "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-hover-primary",
              "cursor-pointer"
            )}
          >
            <Component size={16} />
            UI Kit
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};

export { Logo };
