import { Metadata } from 'next';
import BikesContent from './BikesContent';
import { bikesData } from '@/lib/bikes-data';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Our Premium Scooter Fleet',
  description: 'Browse our collection of premium electric scooters available for rent in Hyderabad. Top-of-the-line models like Ather 450X and Vida V1 Pro, meticulously maintained for your ride.',
  alternates: {
    canonical: '/bikes',
  },
};

export default function BikesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Winev Electric Scooter Fleet',
    description: 'A collection of premium electric scooters for rent in Hyderabad.',
    itemListElement: bikesData.slice(0, 10).map((bike, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: bike.name,
        description: `${bike.range}km range, ${bike.speed}km/h top speed. Available for rent starting at ₹${bike.pricePerHour}/hr.`,
        image: `${SITE_CONFIG.url}${bike.images[0].imageUrl}`,
        offers: {
          '@type': 'Offer',
          price: bike.pricePerHour,
          priceCurrency: 'INR',
          availability: bike.isAvailable ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BikesContent />
    </>
  );
}