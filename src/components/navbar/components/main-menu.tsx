import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_LINKS } from "@/config";
import { cn } from "@/utils/cn";
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

          const commonProps = {
            onMouseEnter: () => setActiveElement(index),
            ref: (el: HTMLAnchorElement | null) => {
              if (el) {
                linksRef.current[index] = el;
              }
            },
          };

          const renderLink = () => {
            if (getIsExternalLink(link)) {
              const { name, externalHref } = link;

              return (
                <a
                  href={externalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mb-0.5 px-4 py-2 transition"
                  {...commonProps}
                >
                  {name}
                </a>
              );
            } else {
              const { name, href } = link;

              return (
                <Link
                  href={href}
                  className={cn(
                    "-mb-0.5 px-4 py-2 transition",
                    isActive ? "text-text-heading" : ""
                  )}
                  {...commonProps}
                >
                  {name}
                </Link>
              );
            }
          };

          return (
            <li
              key={index}
              className={cn(
                "flex h-full items-center border-b-2 border-transparent",
                isActive ? "border-sky-500" : ""
              )}
            >
              {renderLink()}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { MainMenu };
