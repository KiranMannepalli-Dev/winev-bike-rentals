import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'Our Journey & Story',
  description: 'Learn about Winev Bike Rentals, our mission to revolutionize urban mobility in Hyderabad, and the passionate team behind our eco-friendly electric scooter fleet.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
