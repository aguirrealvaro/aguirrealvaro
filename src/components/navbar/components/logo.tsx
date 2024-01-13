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
        className="h-11 w-11 object-contain"
      />
    </Link>
  );
};

export { Logo };
