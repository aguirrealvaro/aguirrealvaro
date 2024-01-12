import { HTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { NAVIGATION_LINKS } from "@/config";
import { useKeyPress } from "@/hooks";
import { cn } from "@/utils/cn";
import { getIsExternalLink } from "@/utils/get-is-external-link";

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  navbarHeight: number | undefined;
  closeMobileMenu: () => void;
  isUnmounting: boolean;
} & HTMLAttributes<HTMLDivElement>;

const MobileMenu = ({
  isMobileMenuOpen,
  navbarHeight,
  closeMobileMenu,
  isUnmounting,
}: MobileMenuProps) => {
  const router = useRouter();

  useKeyPress({
    targetKey: "Escape",
    handler: closeMobileMenu,
    enabled: isMobileMenuOpen,
  });

  const handleClick = (href: string) => {
    router.push(href);
    closeMobileMenu();
  };

  return (
    <div
      style={{ top: `${navbarHeight}px` }}
      className={cn(
        "flex items-center justify-center",
        "fixed inset-x-0 bottom-0 bg-bg-secondary",
        isMobileMenuOpen && !isUnmounting && "animate-fade-in",
        isUnmounting && "animate-fade-out"
      )}
    >
      <nav className="mb-4">
        <ul className="flex flex-col gap-4">
          {NAVIGATION_LINKS.map((link, index) => {
            const renderLink = () => {
              if (getIsExternalLink(link)) {
                const { name, externalHref } = link;

                return (
                  <a
                    href={externalHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded p-1.5 transition hover:bg-hover-primary"
                  >
                    {name}
                  </a>
                );
              } else {
                const { name, href } = link;

                return (
                  <button
                    onClick={() => handleClick(href)}
                    className="rounded p-1.5 transition hover:bg-hover-primary"
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
    </div>
  );
};

export { MobileMenu };
