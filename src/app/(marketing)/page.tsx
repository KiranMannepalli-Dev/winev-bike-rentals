import { Metadata } from 'next';
import HomeContent from './HomeContent';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Premium EV Scooter Rentals in Hyderabad | Eco-Friendly Urban Mobility',
  description: 'Rent premium electric scooters in Hyderabad starting at ₹20/hr. Minimal deposit, GPS-tracked fleet, and instant WhatsApp booking. Join the green revolution with Winev.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/og-image.png`,
    '@id': SITE_CONFIG.url,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.full,
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500000', // Assuming a general one if not precise
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.coordinates.lat,
      longitude: SITE_CONFIG.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
    priceRange: '₹₹',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  );
}