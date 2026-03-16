import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Winev Bike Rentals in Hyderabad. Have questions about our electric scooter rentals, documentation, or pricing? We are here to help.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
