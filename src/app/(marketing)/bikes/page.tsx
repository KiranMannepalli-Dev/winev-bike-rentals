
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
import { EnquiryForm } from '@/components/EnquiryForm';

const categories: ['All', ...BikeCategory[]] = ['All', 'Scooter', 'Motorcycle', 'Moped', 'Mountain Bike'];

function BikeCard({ bike, onEnquire }: { bike: Bike; onEnquire: (bikeName: string) => void; }) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0">
        <Image
          src={bike.image.imageUrl}
          alt={bike.name}
          width={600}
          height={400}
          className="rounded-t-md object-cover aspect-[3/2]"
          data-ai-hint={bike.image.imageHint}
        />
      </CardHeader>
      <CardContent className="flex-grow p-2.5">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xs font-semibold">{bike.name}</CardTitle>
          <Badge variant={bike.isAvailable ? 'available' : 'unavailable'} className="text-[9px]">
            {bike.isAvailable ? 'Available' : 'Booked'}
          </Badge>
        </div>
        <Badge variant="category" className="mt-1 text-[9px]">{bike.category}</Badge>
        
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
      <CardFooter className="p-2.5 pt-0 flex justify-between items-center">
        <div className="font-bold text-xs">
          ₹{bike.pricePerHour}
          <span className="text-[11px] font-normal text-muted-foreground">/hr</span>
        </div>
        <Button size="sm" disabled={!bike.isAvailable} onClick={() => onEnquire(bike.name)}>Enquire Now</Button>
      </CardFooter>
    </Card>
  );
}

export default function BikesPage() {
  const [filter, setFilter] = useState<BikeCategory | 'All'>('All');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedBike, setSelectedBike] = useState('');

  const handleEnquire = (bikeName: string) => {
    setSelectedBike(bikeName);
    setIsEnquiryOpen(true);
  };

  const handleFormSubmit = () => {
    setIsEnquiryOpen(false);
  };

  const filteredBikes = filter === 'All'
    ? bikesData
    : bikesData.filter((bike) => bike.category === filter);

  return (
    <div className="pt-12">
      <header className="py-6 md:py-8 text-center bg-card border-b">
        <div className="container">
          <h1 className="text-lg md:text-2xl font-bold">Our Fleet</h1>
          <p className="mt-2 text-[11px] text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of premium electric bikes. Perfect for every journey.
          </p>
        </div>
      </header>

      <main className="py-8 md:py-10">
        <div className="container">
          <div className="flex justify-center mb-6">
            <Tabs value={filter} onValueChange={(value) => setFilter(value as any)}>
              <TabsList className="grid grid-cols-3 sm:grid-cols-5 h-auto">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="text-xs">{category}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {filteredBikes.map((bike) => (
              <BikeCard key={bike.id} bike={bike} onEnquire={handleEnquire} />
            ))}
          </div>

          {filteredBikes.length === 0 && (
             <div className="text-center col-span-full py-16">
                <p className="text-muted-foreground text-sm">No bikes available in this category at the moment.</p>
             </div>
          )}
        </div>
      </main>

      <Dialog open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen}>
        <DialogContent>
            <EnquiryForm bikeName={selectedBike} onFormSubmit={handleFormSubmit} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
