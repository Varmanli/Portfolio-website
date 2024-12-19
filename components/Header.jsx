import Link from "next/link";

//component
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="py-8 xl:py-8 text-white lg:mx-[100px] ">
      <div className="container mx-auto flex justify-between items-center flex-row-reverse">
        {/* logo */}
        <Link href={"/"}>
          <h1 className="text-3xl font-semibold ">
            Amir <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop navbar */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/contact">
            <Button>استخدام من</Button>
          </Link>
          <Nav />
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
