
"use client";

import Link from 'next/link';
import { Instagram, Youtube, Facebook, Bike } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { useEffect, useState } from 'react';
import { TypingAnimation } from '../TypingAnimation';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const links = {
    quick: [
      { href: '/', label: 'Home' },
      { href: '/bikes', label: 'Bikes' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/faq', label: 'FAQ' },
      { href: '/privacy', label: 'Privacy Policy' },
    ],
    services: [
      { href: '/bikes', label: 'Hourly Rental' },
      { href: '/bikes', label: 'Daily Rental' },
      { href: '/bikes', label: 'Weekly Rental' },
      { href: '/bikes', label: 'Monthly Rental' },
    ],
  };

  const social = [
    { name: 'instagram', href: '#', icon: Instagram },
    { name: 'youtube', href: '#', icon: Youtube },
    { name: 'facebook', href: '#', icon: Facebook },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Bike className="h-5 w-5 text-primary" />
              <TypingAnimation text="WINEV" className="text-base font-bold text-foreground uppercase" />
            </Link>
            <p className="text-muted-foreground text-xs max-w-xs">
              {SITE_CONFIG.description.split('.')[0]}.
            </p>
            <div className="flex space-x-4">
              {social.map((item) => (
                <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <item.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground tracking-wider text-sm">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {links.quick.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-xs">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground tracking-wider text-sm">Services</h3>
            <ul className="mt-4 space-y-2">
              {links.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-xs">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground tracking-wider text-sm">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-xs">
              <li className="flex items-start">
                <span className="mt-1 mr-3 shrink-0">📍</span>
                <span className="text-muted-foreground">{SITE_CONFIG.address.full}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 shrink-0">📞</span>
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 shrink-0">✉️</span>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 shrink-0">🕐</span>
                <span className="text-muted-foreground">{SITE_CONFIG.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {currentYear ? `${currentYear} ` : ''}{SITE_CONFIG.legalName}. All Rights Reserved.</p>
          <p className="mt-4 sm:mt-0">Made with ❤️ in Hyderabad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
