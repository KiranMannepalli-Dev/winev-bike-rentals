import { Bike } from "@/types/bikes";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const bikesData: Bike[] = [
  {
    id: "revolt-rv-400",
    name: "Revolt RV 400",
    category: "Motorcycle",
    pricePerHour: 70,
    isAvailable: true,
    images: [
      PlaceHolderImages.find(p => p.id === 'bike-05-1')!,
      PlaceHolderImages.find(p => p.id === 'bike-05-2')!,
      PlaceHolderImages.find(p => p.id === 'bike-05-3')!,
    ],
    range: 150,
    speed: 85,
    description: "The Revolt RV 400 is India's first AI-enabled electric motorcycle. It's a perfect blend of performance and smart features, making it ideal for the tech-savvy urban commuter."
  },
  {
    id: "ather-450x",
    name: "Ather 450X",
    category: "Scooter",
    pricePerHour: 60,
    isAvailable: true,
    images: [
      PlaceHolderImages.find(p => p.id === 'bike-01-1')!,
      PlaceHolderImages.find(p => p.id === 'bike-01-2')!,
      PlaceHolderImages.find(p => p.id === 'bike-01-3')!,
    ],
    range: 110,
    speed: 90,
    description: "The Ather 450X is a high-performance electric scooter known for its quick acceleration and futuristic design. It offers a thrilling ride with its advanced features and connectivity."
  },
  {
    id: "ola-s1-pro",
    name: "Ola S1 Pro",
    category: "Scooter",
    pricePerHour: 65,
    isAvailable: false,
    images: [
      PlaceHolderImages.find(p => p.id === 'bike-02-1')!,
      PlaceHolderImages.find(p => p.id === 'bike-02-2')!,
      PlaceHolderImages.find(p => p.id === 'bike-02-3')!,
    ],
    range: 181,
    speed: 116,
    description: "The Ola S1 Pro is a premium electric scooter that boasts a long range, powerful motor, and a host of smart features. It's designed for those who want the best of technology and performance."
  },
  {
    id: "tvs-iqube",
    name: "TVS iQube",
    category: "Moped",
    pricePerHour: 50,
    isAvailable: true,
    images: [
      PlaceHolderImages.find(p => p.id === 'bike-04-1')!,
      PlaceHolderImages.find(p => p.id === 'bike-04-2')!,
      PlaceHolderImages.find(p => p.id === 'bike-04-3')!,
    ],
    range: 100,
    speed: 78,
    description: "The TVS iQube is a reliable and comfortable electric scooter, perfect for daily city commutes. It offers a silent ride, practical features, and a sleek, modern design."
  },
  {
    id: "hero-lectro-c5",
    name: "Hero Lectro C5",
    category: "Mountain Bike",
    pricePerHour: 35,
    isAvailable: true,
    images: [
      PlaceHolderImages.find(p => p.id === 'bike-03-1')!,
      PlaceHolderImages.find(p => p.id === 'bike-03-2')!,
      PlaceHolderImages.find(p => p.id === 'bike-03-3')!,
    ],
    range: 30,
    speed: 25,
    description: "The Hero Lectro C5 is an electric bicycle that combines the fun of cycling with the convenience of an electric motor. It's great for leisurely rides and light commutes."
  },
  {
    id: "emotorad-e-mx",
    name: "EMotorad E-MX",
    category: "Mountain Bike",
    pricePerHour: 40,
    isAvailable: true,
    images: [
      PlaceHolderImages.find(p => p.id === 'bike-06-1')!,
      PlaceHolderImages.find(p => p.id === 'bike-06-2')!,
      PlaceHolderImages.find(p => p.id === 'bike-06-3')!,
    ],
    range: 40,
    speed: 25,
    description: "The EMotorad E-MX is a versatile electric mountain bike designed for both on-road and off-road adventures. Its powerful motor and rugged build make it a joy to ride on any terrain."
  },
];
