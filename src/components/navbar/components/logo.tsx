import * as ContextMenu from "@radix-ui/react-context-menu";
import { Copy, HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/cn";

const Logo = () => {
  const router = useRouter();

  return (
    <ContextMenu.Root modal={false}>
      <ContextMenu.Trigger asChild>
        <Link href="/">
          <Image alt="aguirrealvaro logo" src="/aa-logo.svg" width={40} height={40} />
        </Link>
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content
          className={cn(
            "z-context-menu min-w-32 overflow-hidden rounded-md border bg-bg-secondary p-1 shadow-md",
            "data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in"
          )}
        >
          <ContextMenu.Item
            onSelect={() => router.push("/")}
            className="flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-hover-primary"
          >
            <HomeIcon size={16} />
            Home Page
          </ContextMenu.Item>
          <ContextMenu.Item className="flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-hover-primary">
            <Copy size={16} />
            Copy SVG
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};

export { Logo };
