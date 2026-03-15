import { Bike } from "@/types/bikes";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const bikesData: Bike[] = [
  {
    id: "vida-vx2",
    name: "Vida VX2",
    category: "Scooter",
    pricePerHour: 55,
    isAvailable: true,
    images: [
      { id: 'vx2-1', description: 'Vida VX2', imageUrl: '/EV 1.jpg', imageHint: 'White electric scooter' },
      { id: 'vx2-2', description: 'Vida VX2 Backup', imageUrl: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=800&auto=format&fit=crop', imageHint: 'White electric scooter' },
    ],
    range: 80,
    speed: 80,
    description: "The Hero Vida VX2 is an affordable, family-friendly electric scooter with a 6kW motor, 3 ride modes plus Boost mode, and dual removable batteries. Perfect for daily city commutes."
  },
  {
    id: "hero-vida-v1-pro",
    name: "Hero Vida V1 Pro",
    category: "Scooter",
    pricePerHour: 80,
    isAvailable: true,
    images: [
      { id: 'vida-1', description: 'Hero Vida Front', imageUrl: '/EV 2.jpg', imageHint: 'Modern electric scooter' },
      { id: 'vida-2', description: 'Hero Vida Backup', imageUrl: 'https://images.unsplash.com/photo-1695034604505-1a8779b5bb80?q=80&w=800&auto=format&fit=crop', imageHint: 'Modern electric scooter' },
    ],
    range: 165,
    speed: 80,
    description: "The Hero Vida V1 Pro is a premium electric scooter providing an excellent blend of performance, range, and smart features, perfect for city commutes."
  },
  {
    id: "bajaj-chetak",
    name: "Bajaj Chetak",
    category: "Scooter",
    pricePerHour: 65,
    isAvailable: true,
    images: [
      { id: 'chetak-1', description: 'Classic Electric Scooter', imageUrl: '/EV 3.jpg', imageHint: 'Classic red electric scooter' },
      { id: 'chetak-2', description: 'Classic Electric Scooter Backup', imageUrl: 'https://images.unsplash.com/photo-1594140027720-6cb2e761dfa1?q=80&w=800&auto=format&fit=crop', imageHint: 'Classic red electric scooter' },
    ],
    range: 126,
    speed: 73,
    description: "The iconic Bajaj Chetak returns in an all-electric avatar. Known for its elegant design, robust metal body, and smooth performance."
  },
  {
    id: "honda-activa-ev",
    name: "Honda Activa EV",
    category: "Scooter",
    pricePerHour: 75,
    isAvailable: true,
    images: [
      { id: 'activa-ev-1', description: 'Daily Commuter EV', imageUrl: '/EV 4.jpg', imageHint: 'Grey electric scooter' },
      { id: 'activa-ev-2', description: 'Daily Commuter EV Backup', imageUrl: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=800&auto=format&fit=crop', imageHint: 'Grey electric scooter' },
    ],
    range: 104,
    speed: 80,
    description: "Honda's most trusted brand goes electric. The Activa EV offers the same reliability and comfort with a silent, efficient motor."
  },
  {
    id: "ather-450x",
    name: "Ather 450X",
    category: "Scooter",
    pricePerHour: 70,
    isAvailable: true,
    images: [
      { id: 'ather-1', description: 'Performance Scooter', imageUrl: '/EV 5.jpg', imageHint: 'Black performance scooter' },
      { id: 'ather-2', description: 'Performance Scooter Backup', imageUrl: 'https://images.unsplash.com/photo-1668412854089-9a70617ba8f6?q=80&w=800&auto=format&fit=crop', imageHint: 'Black performance scooter' },
    ],
    range: 150,
    speed: 90,
    description: "The Ather 450X is a high-performance electric scooter known for its quick acceleration and futuristic design."
  },
  {
    id: "ola-s1-pro",
    name: "Ola S1 Pro",
    category: "Scooter",
    pricePerHour: 75,
    isAvailable: true,
    images: [
      { id: 'ola-1', description: 'Premium Scooter', imageUrl: '/EV 6.jpg', imageHint: 'White premium scooter' },
      { id: 'ola-2', description: 'Premium Scooter Backup', imageUrl: 'https://images.unsplash.com/photo-1620540130138-02685764d0d0?q=80&w=800&auto=format&fit=crop', imageHint: 'White premium scooter' },
    ],
    range: 195,
    speed: 120,
    description: "The Ola S1 Pro is a premium electric scooter that boasts a long range, powerful motor, and a host of smart features."
  },
  {
    id: "tvs-iqube",
    name: "TVS iQube",
    category: "Scooter",
    pricePerHour: 60,
    isAvailable: true,
    images: [
      { id: 'iqube-1', description: 'Family Scooter', imageUrl: '/EV0.jpg', imageHint: 'Reliable electric scooter' },
      { id: 'iqube-2', description: 'TVS iQube Titanium Grey', imageUrl: 'https://www.tvsmotor.com/electric-scooters/tvs-iqube/-/media/Vehicles/Feature/Iqube/Variant/TVS-iQube/Color_Images/Titanium-Grey-Glossy/titanim-grey-glossy03.webp', imageHint: 'TVS iQube Titanium Grey' },
    ],
    range: 100,
    speed: 78,
    description: "The TVS iQube is a reliable and comfortable electric scooter, perfect for daily city commutes."
  },
  {
    id: "hero-vida-v1-plus",
    name: "Hero Vida V1 Plus",
    category: "Scooter",
    pricePerHour: 70,
    isAvailable: true,
    images: [
      { id: 'vida-plus-1', description: 'Hero Vida V1 Plus', imageUrl: '/EV11.jpg', imageHint: 'Modern electric scooter' },
    ],
    range: 143,
    speed: 80,
    description: "The Hero Vida V1 Plus offers a great balance of features and performance, making it an excellent choice for city riding."
  },
];
