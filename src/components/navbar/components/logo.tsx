import * as ContextMenu from "@radix-ui/react-context-menu";
import { Component, Copy, HomeIcon, Terminal } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Svg } from ".";
import { cn } from "@/lib/cn";

const Logo = () => {
  const router = useRouter();

  const copySvg = () => {
    navigator.clipboard.writeText("wip :)");
  };

  const openUiKit = (url: string) => {
    window.open(url, "_blank");
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
                "flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-hover-primary",
                "cursor-pointer"
              )}
            >
              <HomeIcon size={16} />
              Home Page
            </ContextMenu.Item>
            <ContextMenu.Item
              onSelect={copySvg}
              className={cn(
                "flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-hover-primary",
                "cursor-default"
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
            onSelect={() => openUiKit("https://template.aguirrealvaro.dev")}
            className={cn(
              "flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-hover-primary",
              "cursor-pointer"
            )}
          >
            <Terminal size={16} />
            next-aa-app
          </ContextMenu.Item>
          <ContextMenu.Item
            onSelect={() => openUiKit("https://ui-kit7.vercel.app")}
            className={cn(
              "flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-hover-primary",
              "cursor-pointer"
            )}
          >
            <Component size={16} />
            ui
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};

export { Logo };
