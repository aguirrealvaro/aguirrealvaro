import { useRef, useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as ExternalLink } from "@/components/ui";
import { NAVIGATION_LINKS } from "@/config";
import { cn } from "@/lib/cn";
import { getIsExternalLink } from "@/utils/get-is-external-link";

const MainMenu = () => {
  const pathname = usePathname();
  const listRef = useRef<HTMLUListElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  const [activeElement, setActiveElement] = useState<number | undefined>(undefined);

  const floatingElementSizes = (() => {
    if (activeElement === undefined) return undefined;
    const listLeft = listRef.current?.getBoundingClientRect().left || 0;
    const activeLinkLeft = linksRef.current[activeElement]?.getBoundingClientRect().left || 0;

    return {
      left: activeLinkLeft - listLeft,
      width: linksRef.current[activeElement]?.offsetWidth,
      height: linksRef.current[activeElement]?.offsetHeight,
    };
  })();

  return (
    <nav className="h-full sm:hidden">
      <ul
        className="relative flex h-full items-center"
        ref={listRef}
        onMouseLeave={() => setActiveElement(undefined)}
      >
        <span
          role="none"
          className={cn(
            "pointer-events-none absolute rounded bg-hover-primary transition-all",
            floatingElementSizes ? "opacity-100" : "opacity-0"
          )}
          style={{
            width: `${floatingElementSizes?.width}px`,
            height: `${floatingElementSizes?.height}px`,
            left: `${floatingElementSizes?.left}px`,
          }}
        />
        {NAVIGATION_LINKS.map((link, index) => {
          const isActive = pathname === link.href;

          const renderLink = () => {
            if (getIsExternalLink(link)) {
              const { name, externalHref } = link;

              return (
                <ExternalLink
                  colorScheme="neutral"
                  underline={false}
                  href={externalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </ExternalLink>
              );
            } else {
              const { name, href } = link;
              return <Link href={href}>{name}</Link>;
            }
          };

          return (
            <li
              key={index}
              className={cn(
                "-mb-0.5 flex h-full items-center border-b-2 border-transparent",
                isActive ? "border-text-primary text-text-heading" : ""
              )}
            >
              <Slot
                className="px-4 py-2 transition"
                onMouseEnter={() => setActiveElement(index)}
                ref={(el: HTMLAnchorElement | null) => {
                  if (el) {
                    linksRef.current[index] = el;
                  }
                }}
              >
                {renderLink()}
              </Slot>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { MainMenu };
