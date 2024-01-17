import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image alt="aguirrealvaro logo" src="/aa-logo.svg" width={40} height={40} />
    </Link>
  );
};

export { Logo };
