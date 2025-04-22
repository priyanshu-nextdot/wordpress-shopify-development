
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? "py-4 bg-nextdot-950/80 backdrop-blur-lg border-b border-nextdot-900" : "py-6 bg-transparent"}`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-bold text-xl md:text-2xl font-satoshi tracking-tight">
            next<span className="text-accent">dot</span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="bg-accent hover:bg-accent/90 text-white">
            <a href="#contact">Get in Touch</a>
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-nextdot-950 border-nextdot-800">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-4 border-b border-nextdot-800">
                  <span className="font-bold text-xl font-satoshi tracking-tight">
                    next<span className="text-accent">dot</span>
                  </span>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex-1 py-8">
                  <ul className="space-y-4">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <SheetTrigger asChild>
                          <a 
                            href={item.href}
                            className="block py-2 text-lg font-medium hover:text-accent transition-colors"
                          >
                            {item.name}
                          </a>
                        </SheetTrigger>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="pt-4 border-t border-nextdot-800">
                  <SheetTrigger asChild>
                    <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white">
                      <a href="#contact">Get in Touch</a>
                    </Button>
                  </SheetTrigger>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
