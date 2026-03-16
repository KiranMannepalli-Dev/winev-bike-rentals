
"use client";

import Link from 'next/link';
import { Instagram, Youtube, Facebook, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import Image from 'next/image';
import logoImage from '@/app/Winev.png';
import { SITE_CONFIG } from '@/config/site';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const links = {
    quick: [
      { href: '/', label: 'Home' },
      { href: '/bikes', label: 'Scooters' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms and Conditions' },
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
    <footer className="bg-zinc-50/80 border-t border-border/50">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logoImage} alt="Winev Logo" className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-black/70 text-xs max-w-xs leading-relaxed">
              {SITE_CONFIG.description.split('.')[0]}.
            </p>
            <div className="flex space-x-4">
              {social.map((item) => (
                <Link key={item.name} href={item.href} className="text-black/60 hover:text-emerald-900 transition-colors">
                  <item.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-emerald-900 tracking-wider text-sm uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {links.quick.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-black/70 hover:text-primary transition-colors text-xs font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-emerald-900 tracking-wider text-sm uppercase">Services</h3>
            <ul className="mt-4 space-y-2">
              {links.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-black/70 hover:text-primary transition-colors text-xs font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-emerald-900 tracking-wider text-sm uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-xs">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-emerald-900 mr-3 shrink-0 mt-0.5" />
                <span className="text-black/70 font-medium">{SITE_CONFIG.address.full}</span>
              </li>
              <li className="flex flex-col space-y-1.5 pl-7">
                <div className="flex items-center -ml-7">
                  <Phone className="h-4 w-4 text-emerald-900 mr-3 shrink-0" />
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-black/70 hover:text-emerald-900 font-medium transition-colors">
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center">
                  <a href={`tel:${SITE_CONFIG.phone2}`} className="text-black/70 hover:text-emerald-900 font-medium transition-colors">
                    {SITE_CONFIG.phone2Display}
                  </a>
                  <Badge variant="outline" className="ml-2 text-[8px] h-3.5 px-1 bg-emerald-50 text-emerald-900 border-emerald-900/20">Secondary</Badge>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-emerald-900 mr-3 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-black/70 hover:text-emerald-900 font-medium transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 text-emerald-900 mr-3 shrink-0" />
                <span className="text-black/70 font-medium whitespace-nowrap flex items-center">
                  {SITE_CONFIG.hours.split('Busy Day')[0].trim()}
                  <span className="ml-1.5 px-1.5 py-0.5 rounded bg-red-50 text-red-600 text-[9px] font-bold border border-red-100 uppercase tracking-tight shadow-sm">
                    Busy Day
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-black/60">
          <p>&copy; {currentYear ? `${currentYear} ` : ''}{SITE_CONFIG.legalName}. All Rights Reserved.</p>
          <div className="mt-4 sm:mt-0 flex flex-col items-center sm:items-end gap-2">
            <p className="flex items-center gap-1.5 font-medium">
              Made with <Heart className="h-3.5 w-3.5 text-destructive fill-destructive" /> in Hyderabad
            </p>
            <div className="flex items-center gap-2 group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
              <span className="text-[10px] text-black/50">Designed & Coded by</span>
              <span className="font-bold text-black/80 flex items-center gap-1.5">
                Tekloria Solutions
                <Image 
                  src="/tekloria-logo.png" 
                  alt="Tekloria Logo" 
                  width={16} 
                  height={16} 
                  className="w-4 h-4 object-contain rounded-sm"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
