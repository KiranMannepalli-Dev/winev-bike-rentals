import { Bike } from "@/types/bikes";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const bikesData: Bike[] = [
  {
    id: "revolt-rv-400",
    name: "Revolt RV 400",
    category: "Motorcycle",
    pricePerHour: 70,
    isAvailable: true,
    image: PlaceHolderImages.find(p => p.id === 'bike-05')!,
    range: 150,
    speed: 85
  },
  {
    id: "ather-450x",
    name: "Ather 450X",
    category: "Scooter",
    pricePerHour: 60,
    isAvailable: true,
    image: PlaceHolderImages.find(p => p.id === 'bike-01')!,
    range: 110,
    speed: 90
  },
  {
    id: "ola-s1-pro",
    name: "Ola S1 Pro",
    category: "Scooter",
    pricePerHour: 65,
    isAvailable: false,
    image: PlaceHolderImages.find(p => p.id === 'bike-02')!,
    range: 181,
    speed: 116
  },
  {
    id: "tvs-iqube",
    name: "TVS iQube",
    category: "Moped",
    pricePerHour: 50,
    isAvailable: true,
    image: PlaceHolderImages.find(p => p.id === 'bike-04')!,
    range: 100,
    speed: 78
  },
  {
    id: "hero-lectro-c5",
    name: "Hero Lectro C5",
    category: "Mountain Bike",
    pricePerHour: 35,
    isAvailable: true,
    image: PlaceHolderImages.find(p => p.id === 'bike-03')!,
    range: 30,
    speed: 25
  },
  {
    id: "emotorad-e-mx",
    name: "EMotorad E-MX",
    category: "Mountain Bike",
    pricePerHour: 40,
    isAvailable: true,
    image: PlaceHolderImages.find(p => p.id === 'bike-06')!,
    range: 40,
    speed: 25
  },
];
