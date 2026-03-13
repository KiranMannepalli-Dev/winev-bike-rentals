
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { bikesData } from '@/lib/bikes-data';
import { Bike, BikeCategory } from '@/types/bikes';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Gauge, Zap } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { BikeDetails } from '@/components/BikeDetails';

const categories: ['All', ...BikeCategory[]] = ['All', 'Scooter', 'Motorcycle', 'Moped', 'Mountain Bike'];

function BikeCard({ bike, onViewDetails }: { bike: Bike; onViewDetails: (bike: Bike) => void; }) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0">
        <Image
          src={bike.images[0].imageUrl}
          alt={bike.name}
          width={600}
          height={400}
          className="rounded-t-md object-cover aspect-[3/2]"
          data-ai-hint={bike.images[0].imageHint}
        />
      </CardHeader>
      <CardContent className="flex-grow p-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-[11px] font-semibold">{bike.name}</CardTitle>
          <Badge variant={bike.isAvailable ? 'available' : 'unavailable'}>
            {bike.isAvailable ? 'Available' : 'Booked'}
          </Badge>
        </div>
        <Badge variant="category" className="mt-1">{bike.category}</Badge>
        
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
        <Button size="sm" variant="outline" onClick={() => onViewDetails(bike)}>View Details</Button>
      </CardFooter>
    </Card>
  );
}

export default function BikesPage() {
  const [filter, setFilter] = useState<BikeCategory | 'All'>('All');
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);

  const handleViewDetails = (bike: Bike) => {
    setSelectedBike(bike);
  };

  const handleCloseDetails = () => {
    setSelectedBike(null);
  };

  const filteredBikes = filter === 'All'
    ? bikesData
    : bikesData.filter((bike) => bike.category === filter);

  return (
    <div className="pt-12">
      <header className="py-6 md:py-8 text-center bg-card border-b">
        <div className="container">
          <h1 className="text-lg md:text-2xl font-semibold">Our Fleet</h1>
          <p className="mt-2 text-[11px] text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of premium electric bikes. Perfect for every journey.
          </p>
        </div>
      </header>

      <main className="py-8 md:py-10">
        <div className="container">
          <div className="flex justify-center mb-6">
            <Tabs value={filter} onValueChange={(value) => setFilter(value as any)}>
              <TabsList className="grid grid-cols-3 sm:grid-cols-5 h-9">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="text-[11px]">{category}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
            {filteredBikes.map((bike) => (
              <BikeCard key={bike.id} bike={bike} onViewDetails={handleViewDetails} />
            ))}
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
          {selectedBike && <BikeDetails bike={selectedBike} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
