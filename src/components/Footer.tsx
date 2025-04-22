
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-nextdot-950 border-t border-nextdot-800 pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h3 className="font-satoshi text-xl font-bold mb-4">
              next<span className="text-accent">dot</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              We craft fast, responsive, and SEO-friendly websites for startups and businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-nextdot-800 hover:text-accent">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-nextdot-800 hover:text-accent">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-nextdot-800 hover:text-accent">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-nextdot-800 hover:text-accent">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">WordPress Development</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">Shopify Development</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">E-commerce Solutions</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">Custom Web Apps</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">SEO & Marketing</a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-r-none border-r-0 bg-nextdot-900 border-nextdot-800"
              />
              <Button className="rounded-l-none bg-accent hover:bg-accent/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-nextdot-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} NextDot. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
