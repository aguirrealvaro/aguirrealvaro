import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="mr-4 text-lg font-medium text-text-heading">
        <span className="sm:hidden">Alvaro Aguirre</span>
        <span className="hidden sm:block">AA</span>
      </h1>
    </Link>
  );
};

export { Logo };
