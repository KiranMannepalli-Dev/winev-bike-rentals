
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Bike, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { SITE_CONFIG } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { TypingAnimation } from '../TypingAnimation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/bikes', label: 'Bikes' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 80 && window.scrollY > lastScrollY) {
          setHidden(true);
        } else {
          setHidden(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Bike className="h-5 w-5 text-primary" />
          <TypingAnimation text="WINEV" className="text-lg font-bold text-foreground uppercase" />
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground",
                pathname === link.href && "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground hover:text-foreground">
                <Phone className="h-3 w-3" />
                {SITE_CONFIG.phoneDisplay}
            </a>
          <Button asChild size="sm">
            <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer">Book a Ride</a>
          </Button>
        </div>
        <div className="lg:hidden">
          {isMounted && (
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 w-[80%] max-w-xs border-l-border p-0">
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  <SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>
                  <div className="flex flex-col h-full">
                      <div className="flex justify-between items-center p-4 border-b border-border">
                          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                              <Bike className="h-5 w-5 text-primary" />
                              <span className="text-base font-bold text-foreground uppercase">
                                  WINEV
                              </span>
                          </Link>
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setMobileMenuOpen(false)}>
                              <X className="h-4 w-4" />
                              <span className="sr-only">Close menu</span>
                          </Button>
                      </div>
                      <nav className="flex-1 flex flex-col justify-center items-center gap-y-6">
                          {navLinks.map((link) => (
                          <Link
                              key={link.href}
                              href={link.href}
                              className="text-base font-medium text-foreground transition-colors hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                          >
                              {link.label}
                          </Link>
                          ))}
                      </nav>
                      <div className="p-4 border-t border-border">
                          <Button asChild className="w-full" size="default">
                            <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer">Book a Ride</a>
                          </Button>
                      </div>
                  </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </motion.header>
  );
}
