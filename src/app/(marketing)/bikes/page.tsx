
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { bikesData } from '@/lib/bikes-data';
import { Bike, BikeCategory } from '@/types/bikes';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Gauge, Zap, Bike as BikeIcon, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { BikeDetails } from '@/components/BikeDetails';

// Redundant categories removed as only Scooters are available now

function BikeCard({ bike, onViewDetails }: { bike: Bike; onViewDetails: (bike: Bike) => void; }) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0 overflow-hidden">
        <div className="bg-zinc-50/80 p-8 flex items-center justify-center aspect-square">
          <Image
            src={bike.images[0].imageUrl}
            alt={bike.name}
            width={240}
            height={240}
            className="w-full h-full object-contain"
            data-ai-hint={bike.images[0].imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-[11px] font-semibold">{bike.name}</CardTitle>
          <Badge variant={bike.isAvailable ? 'available' : 'unavailable'}>
            {bike.isAvailable ? 'Available' : 'Booked'}
          </Badge>
        </div>
        {/* Category badge removed as all items are scooters */}
        
        <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
            <div className="flex items-center gap-1.5">
                <Zap className="h-3 w-3 text-primary" />
                <span>{bike.range} km</span>
            </div>
            <div className="flex items-center gap-1.5">
                <Gauge className="h-3 w-3 text-primary" />
                <span>{bike.speed} km/h</span>
            </div>
        </div>

      </CardContent>
      <CardFooter className="p-2 pt-0 flex justify-between items-center">
        <div className="font-semibold text-xs">
          ₹{bike.pricePerHour}
          <span className="text-[11px] font-normal text-muted-foreground">/hr</span>
        </div>
        <Button size="sm" variant="outline" className="rounded-full px-4" onClick={() => onViewDetails(bike)}>View Details</Button>
      </CardFooter>
    </Card>
  );
}

export default function BikesPage() {
  const router = useRouter();
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleNextPage = async () => {
    setIsLoading(true);
    // 1 second delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.location.href = '/bikes#models';
  };

  const handleViewDetails = (bike: Bike) => {
    setSelectedBike(bike);
  };

  const handleCloseDetails = () => {
    setSelectedBike(null);
  };

  const filteredBikes = bikesData;

  return (
    <div className="pt-12">
      <section className="relative w-full bg-zinc-950 overflow-hidden border-b border-zinc-900 mt-2">
        <div className="container max-w-6xl py-12 md:py-20 flex items-center min-h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center w-full">
            {/* Left Side: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 pl-4 md:pl-0"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <BikeIcon className="h-3.5 w-3.5 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Premium Fleet</span>
              </div>
              
              <h1 className="text-2xl md:text-5xl font-headline font-medium text-white tracking-tight leading-none mb-6 md:whitespace-nowrap">
                Explore Our <span className="text-primary italic">Scooter</span> Universe
              </h1>
              
              <p className="text-[13px] md:text-base text-zinc-400 leading-relaxed text-justify tracking-tight opacity-95 max-w-md mb-8">
                Experience the next generation of urban mobility with our fleet of 15+ specialized electric scooters. Each unit is meticulously maintained, GPS-tracked, and sanitized after every trip to provide Hyderabad with the most reliable and eco-friendly ride available today.
              </p>

              <div className="flex items-center gap-10">
                  <div className="text-center">
                      <p className="text-xl font-bold text-white">15+</p>
                      <p className="text-[9px] uppercase tracking-widest text-emerald-500 font-bold">Units</p>
                  </div>
                  <div className="h-8 w-[1px] bg-zinc-800" />
                  <div className="text-center">
                      <p className="text-xl font-bold text-white">100km</p>
                      <p className="text-[9px] uppercase tracking-widest text-emerald-500 font-bold">Range</p>
                  </div>
                  <div className="h-8 w-[1px] bg-zinc-800" />
                  <div className="text-center">
                      <p className="text-xl font-bold text-white">80kmh</p>
                      <p className="text-[9px] uppercase tracking-widest text-emerald-500 font-bold">Speed</p>
                  </div>
              </div>
            </motion.div>

            {/* Placeholder to maintain grid spacing */}
            <div className="hidden md:block" />
          </div>
        </div>

        {/* Right Side: Image Fixed to Absolute Edge of Section */}
        <div className="absolute right-0 bottom-0 h-full w-1/2 hidden md:block pointer-events-none select-none">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="absolute right-0 bottom-0 flex items-end justify-end h-full w-full overflow-visible"
          >
            <div className="relative h-full w-full flex items-end justify-end">
              {/* Soft White Bottom Shadow - Smooth Glow Type */}
              <div className="absolute -bottom-10 right-0 w-[90%] h-24 bg-white/10 blur-[100px] -z-10" />
              <div className="absolute -bottom-4 right-10 w-[70%] h-12 bg-white/20 blur-[60px] -z-10 scale-y-[0.2]" />
              <div className="absolute -bottom-2 right-20 w-[50%] h-6 bg-white/40 blur-[30px] -z-10 scale-y-[0.3]" />
              
              <Image
                src="/Bikes/PhotoshopExtension_Image (8).png"
                alt="Premium Winev Scooter Fleet"
                width={800}
                height={600}
                className="w-auto h-[75%] lg:h-[85%] object-contain object-right-bottom drop-shadow-[0_45px_45px_rgba(0,0,0,0.8)] z-10 mr-[-2px]" 
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Dynamic Background Corner Blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-emerald-900/10 rounded-full blur-[130px] pointer-events-none" />
      </section>

      <main id="models" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="mb-10 flex flex-col items-center">
            <h2 className="text-xl md:text-2xl font-headline font-semibold text-foreground">Available Models</h2>
            <div className="h-1 w-12 bg-emerald-500 rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredBikes.map((bike) => (
              <BikeCard key={bike.id} bike={bike} onViewDetails={handleViewDetails} />
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <Button 
                variant="ghost" 
                size="sm" 
                disabled={isLoading}
                className="h-8 px-0 group text-zinc-400 hover:text-primary transition-colors text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                onClick={handleNextPage}
            >
                {isLoading ? (
                  <>
                    <span>Loading</span>
                    <Loader2 className="h-3 w-3 animate-spin text-primary" />
                  </>
                ) : (
                  <>
                    <span>Next Page</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </>
                )}
            </Button>
          </div>

          {filteredBikes.length === 0 && (
             <div className="text-center col-span-full py-16">
                <p className="text-muted-foreground text-sm">No bikes available in this category at the moment.</p>
             </div>
          )}
        </div>
      </main>

      <Dialog open={!!selectedBike} onOpenChange={(isOpen) => !isOpen && handleCloseDetails()}>
        <DialogContent className="max-w-3xl p-4">
          {selectedBike && (
            <>
              <DialogTitle className="sr-only">{selectedBike.name}</DialogTitle>
              <BikeDetails bike={selectedBike} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

    