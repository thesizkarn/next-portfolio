"use client";
import PictoIcon from "@/public/picto.svg";
import LogoIcon from "@/public/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../mode-toggle";
import { Menu } from "lucide-react";

export default function HeaderNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const servicesChild = [
    {
      name: "Web Design",
      description: "Création de maquette sur mesure de votre futur site web",
      href: "/services/web-design",
    },
    {
      name: "Création de site web",
      description: "Création de site internet WordPress ou sur mesure",
      href: "/services/creation-site-internet",
    },
    {
      name: "Création de site e-commerce",
      description: "Création de site e-commerce facile d'utilisation",
      href: "/services/creation-site-e-commerce",
    },
  ];

  const navigation = [
    {
      name: "Services",
      href: "/services",
      child: servicesChild,
    },
    { name: "Projets", href: "/projets" },
  ];

  const isActive = (href: string) => pathname === href;
  const isServiceActive = servicesChild.some(
    (child) => pathname === child.href
  );

  return (
    <header className="bg-background/70 sticky top-0 z-50 border-b border-border/50 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 flex h-[var(--header-height)] items-center justify-between gap-3">
        {/* Logo */}
        <div className="flex items-center gap-1.5 lg:flex-1">
          <Link
            href="/"
            className="flex items-center space-x-2 text-foreground"
            aria-label="Allain Web"
          >
            <PictoIcon className="size-6 lg:size-8" />
            <LogoIcon className="w-[130px] lg:w-[160px]" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="gap-x-8">
            {navigation.map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.child ? (
                  <>
                    <NavigationMenuTrigger
                      className={cn(
                        "text-sm font-semibold flex items-center gap-1 p-0 bg-transparent hover:bg-transparent",
                        isServiceActive || isActive(item.href)
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      )}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-1"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-64 p-1 space-y-2">
                        {item.child.map((subItem) => (
                          <li key={subItem.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className={cn(
                                  "block rounded p-2 text-sm transition-colors",
                                  isActive(subItem.href)
                                    ? "text-primary bg-muted/50"
                                    : "text-foreground hover:bg-muted/50 hover:text-primary"
                                )}
                              >
                                <p className="font-medium">{subItem.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {subItem.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-sm font-semibold",
                        isActive(item.href)
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Section */}
        <div className="flex items-center justify-end gap-1.5 lg:flex-1">
          <ModeToggle />
          {/* Mobile Menu Trigger */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm p-0">
              <SheetHeader className="bg-background/75 border-b border-border/50 backdrop-blur-sm p-0">
                <div className="container mx-auto px-4 sm:px-6 flex h-[var(--header-height)] items-center justify-between gap-3">
                  <SheetTitle>
                    <Link
                      href="/"
                      className="flex items-center space-x-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <PictoIcon className="size-6" />
                      <LogoIcon className="w-[130px]" />
                    </Link>
                  </SheetTitle>
                </div>
              </SheetHeader>
              <nav className="px-4 space-y-3">
                <Accordion type="single" collapsible>
                  <AccordionItem value="services">
                    <AccordionTrigger className="text-sm font-semibold py-2">
                      Services
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-2.5 space-y-2 border-l border-border">
                        {servicesChild.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                              "block pl-4 text-sm border-l",
                              isActive(item.href)
                                ? "text-primary border-primary"
                                : "text-muted-foreground border-transparent hover:text FOV-foreground hover:border-muted"
                            )}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {navigation
                  .filter((item) => !item.child)
                  .map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "block text-sm font-semibold py-2",
                        isActive(item.href)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
