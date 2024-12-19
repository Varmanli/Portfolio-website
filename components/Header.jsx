import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="py-4 text-white top-0 w-full">
      <div className="container mx-auto flex justify-between items-center flex-row-reverse">
        {/* لوگو */}
        <Link href="/">
          <h1
            className="text-3xl font-bold tracking-tight cursor-pointer text-white hover:text-accent transition-all font-primary "
          >
            Amir<span className="text-accent">.V</span>
          </h1>
        </Link>

        {/* منوی دسکتاپ */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent-dark text-black px-5 py-2 rounded-lg transition-all duration-300">
              استخدام من
            </Button>
          </Link>
          <Nav />
        </div>

        {/* منوی موبایل */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
