
'use client';

import { Bike } from '@/types/bikes';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Zap, Gauge } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';
import { Dialog, DialogContent } from './ui/dialog';
import { useState } from 'react';

type BikeDetailsProps = {
    bike: Bike;
};

export function BikeDetails({ bike }: BikeDetailsProps) {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    
    const handleEnquire = () => {
        setIsEnquiryOpen(true);
    };

    const handleFormSubmit = () => {
        setIsEnquiryOpen(false);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Carousel className="w-full">
                        <CarouselContent>
                            {bike.images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <Card>
                                        <CardContent className="p-0">
                                            <Image
                                                src={image.imageUrl}
                                                alt={`${bike.name} image ${index + 1}`}
                                                width={600}
                                                height={400}
                                                className="rounded-md object-cover aspect-[3/2]"
                                                data-ai-hint={image.imageHint}
                                            />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-2" />
                        <CarouselNext className="absolute right-2" />
                    </Carousel>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold">{bike.name}</h2>
                    <div className="flex items-center gap-2 mt-2">
                        <Badge variant={bike.isAvailable ? 'available' : 'unavailable'}>
                            {bike.isAvailable ? 'Available' : 'Booked'}
                        </Badge>
                        {/* Category removed as only scooters exist */}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">{bike.description}</p>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-primary" />
                            <div>
                                <p className="font-semibold">{bike.range} km</p>
                                <p className="text-xs text-muted-foreground">Range</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Gauge className="h-4 w-4 text-primary" />
                            <div>
                                <p className="font-semibold">{bike.speed} km/h</p>
                                <p className="text-xs text-muted-foreground">Top Speed</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-4">
                         <div className="flex justify-between items-center">
                            <p className="text-xl font-bold">
                                ₹{bike.pricePerHour}
                                <span className="text-sm font-normal text-muted-foreground">/hr</span>
                            </p>
                            <Button size="default" className="rounded-full shadow-md font-bold" disabled={!bike.isAvailable} onClick={handleEnquire}>
                                Enquire Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen}>
                <DialogContent>
                    <EnquiryForm bikeName={bike.name} onFormSubmit={handleFormSubmit} />
                </DialogContent>
            </Dialog>
        </>
    );
}
