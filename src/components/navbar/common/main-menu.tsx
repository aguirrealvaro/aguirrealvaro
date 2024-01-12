import { FunctionComponent, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_LINKS } from "@/constants";
import { cn } from "@/utils/cn";

const MainMenu: FunctionComponent = () => {
  const pathname = usePathname();
  const listRef = useRef<HTMLUListElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  const [activeElement, setActiveElement] = useState<number | undefined>(undefined);

  const siblingSizes = (() => {
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
            siblingSizes ? "opacity-100" : "opacity-0"
          )}
          style={{
            width: `${siblingSizes?.width}px`,
            height: `${siblingSizes?.height}px`,
            left: `${siblingSizes?.left}px`,
          }}
        />
        {NAVIGATION_LINKS.map(({ name, href, externalHref }, index) => {
          const isActive = pathname === href;

          const commonProps = {
            onMouseEnter: () => setActiveElement(index),
            ref: (el: HTMLAnchorElement | null) => {
              if (el) {
                linksRef.current[index] = el;
              }
            },
          };

          return (
            <li
              key={index}
              className={cn(
                "flex h-full items-center border-b-2 border-transparent",
                isActive ? "border-sky-500" : ""
              )}
            >
              {externalHref ? (
                <a
                  href={externalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...commonProps}
                  className="-mb-0.5 px-4 py-2 transition"
                >
                  {name}
                </a>
              ) : (
                <Link
                  href={href || ""}
                  {...commonProps}
                  className={cn(
                    "-mb-0.5 px-4 py-2 transition",
                    isActive ? "text-text-heading" : ""
                  )}
                >
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { MainMenu };
