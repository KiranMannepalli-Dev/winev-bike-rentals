import { type ImagePlaceholder } from "@/lib/placeholder-images";

export type BikeCategory = "Scooter" | "Motorcycle" | "Moped" | "Mountain Bike";

export interface Bike {
  id: string;
  name: string;
  category: BikeCategory;
  pricePerHour: number;
  isAvailable: boolean;
  image: ImagePlaceholder;
  range: number;
  speed: number;
}
