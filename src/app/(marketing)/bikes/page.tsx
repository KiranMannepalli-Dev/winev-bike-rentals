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

const categories: ['All', ...BikeCategory[]] = ['All', 'Scooter', 'Motorcycle', 'Moped', 'Mountain Bike'];

function BikeCard({ bike }: { bike: Bike }) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0">
        <Image
          src={bike.image.imageUrl}
          alt={bike.name}
          width={600}
          height={400}
          className="rounded-t-lg object-cover aspect-[3/2]"
          data-ai-hint={bike.image.imageHint}
        />
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-headline">{bike.name}</CardTitle>
          <Badge variant={bike.isAvailable ? 'available' : 'unavailable'} className="text-xs">
            {bike.isAvailable ? 'Available' : 'Booked'}
          </Badge>
        </div>
        <Badge variant="category" className="mt-1">{bike.category}</Badge>
        
        <div className="mt-4 flex justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>{bike.range} km Range</span>
            </div>
            <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4 text-primary" />
                <span>{bike.speed} km/h Top Speed</span>
            </div>
        </div>

      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="text-lg font-bold">
          ₹{bike.pricePerHour}
          <span className="text-sm font-normal text-muted-foreground">/hr</span>
        </div>
        <Button disabled={!bike.isAvailable}>Enquire Now</Button>
      </CardFooter>
    </Card>
  );
}

export default function BikesPage() {
  const [filter, setFilter] = useState<BikeCategory | 'All'>('All');

  const filteredBikes = filter === 'All'
    ? bikesData
    : bikesData.filter((bike) => bike.category === filter);

  return (
    <div className="pt-20">
      <header className="py-16 md:py-24 text-center bg-card border-b">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Fleet</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our wide range of premium electric bikes. Perfect for every journey.
          </p>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container">
          <div className="flex justify-center mb-8">
            <Tabs value={filter} onValueChange={(value) => setFilter(value as any)}>
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBikes.map((bike) => (
              <BikeCard key={bike.id} bike={bike} />
            ))}
          </div>

          {filteredBikes.length === 0 && (
             <div className="text-center col-span-full py-16">
                <p className="text-muted-foreground">No bikes available in this category at the moment.</p>
             </div>
          )}
        </div>
      </main>
    </div>
  );
}
