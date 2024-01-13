import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        alt="logo Aguirre Alvaro"
        src="/aa-logo.png"
        width={326}
        height={326}
        className="h-10 w-10 object-contain"
      />
    </Link>
  );
};

export { Logo };
