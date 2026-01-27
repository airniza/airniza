import { navItems } from "@/lib/constants";
import Link from "next/link";
import MobileNavigation from "./MobileNavigation";
import Image from "next/image";
import LocationSearch from "./LocationSearch";

export default function NewNavigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top row */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center py-3 md:h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href={"/"}>
              <div className="ml-2">
                <Image
                              src="/logo.png"
                              width={140}
                              height={140}
                              alt="airniza logo"
                               />
              </div>
            </Link>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 justify-center mx-6">
            <div className="max-w-md w-full">
              <LocationSearch />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-primary hover:text-destructive transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center ml-auto">
            <MobileNavigation />
          </div>
        </div>

        {/* Mobile Search (separate row) */}
        <div className="block md:hidden pb-3">
          <LocationSearch />
        </div>
      </div>
    </nav>
  );
}
