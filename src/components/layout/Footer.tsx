import Link from 'next/link';
import { Instagram, Youtube, Facebook, Bike } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

const Footer = () => {
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
      { href: '#', label: 'Hourly Rental' },
      { href: '#', label: 'Daily Rental' },
      { href: '#', label: 'Weekly Rental' },
      { href: '#', label: 'Monthly Rental' },
      { href: '#', label: 'Fleet for Business' },
      { href: '#', label: 'EV Bikes' },
    ],
  };

  const social = [
    { href: '#', icon: Instagram },
    { href: '#', icon: Youtube },
    { href: '#', icon: Facebook },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Bike className="h-8 w-8 text-primary" />
              <span className="font-headline font-bold text-xl text-foreground">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              {SITE_CONFIG.description.split('.')[0]}.
            </p>
            <div className="flex space-x-4">
              {social.map((item) => (
                <Link key={item.href} href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-foreground tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {links.quick.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-foreground tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              {links.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-foreground tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm">
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

        <div className="mt-16 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.legalName}. All Rights Reserved.</p>
          <p className="mt-4 sm:mt-0">Made with ❤️ in Hyderabad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
