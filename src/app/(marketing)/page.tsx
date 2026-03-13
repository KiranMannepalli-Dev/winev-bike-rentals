
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { bikesData } from '@/lib/bikes-data';
import { Badge } from '@/components/ui/badge';
import { SITE_CONFIG } from '@/config/site';
import { Zap, ShieldCheck, Wrench, Sprout, Star, MessageCircle, Bike as BikeIcon, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { BikeDetails } from '@/components/BikeDetails';
import { type Bike } from '@/types/bikes';

const featuredBikes = bikesData.slice(0, 4);

const whyChooseUsItems = [
    {
        icon: Zap,
        title: "Instant Booking",
        description: "Book your favorite EV bike in minutes via WhatsApp. No lengthy forms."
    },
    {
        icon: ShieldCheck,
        title: "Zero Deposit",
        description: "Enjoy hassle-free rentals with our zero security deposit policy."
    },
    {
        icon: Wrench,
        title: "Well-Maintained Fleet",
        description: "Our bikes are serviced regularly to ensure a safe and smooth ride every time."
    },
    {
        icon: Sprout,
        title: "Eco-Friendly",
        description: "Reduce your carbon footprint and contribute to a greener Hyderabad with every ride."
    }
];

const howItWorksSteps = [
    {
        step: 1,
        title: "Choose Your Bike",
        description: "Browse our fleet and pick the electric bike that suits your style and needs."
    },
    {
        step: 2,
        title: "Book via WhatsApp",
        description: `Send a message to ${SITE_CONFIG.phoneDisplay} to confirm your booking instantly.`
    },
    {
        step: 3,
        title: "Pick Up & Ride",
        description: "Visit our location, pick up your sanitized bike, and start your journey."
    }
];

const testimonials = [
    {
        name: "Ravi Teja",
        role: "Student",
        avatar: "RT",
        text: "The best bike rental service in Hyderabad! The process was so simple and the bike was in perfect condition. The zero deposit is a huge plus for students like me."
    },
    {
        name: "Anusha",
        role: "IT Professional",
        avatar: "A",
        text: "I rent from Winev for my daily commute. It's affordable, convenient, and eco-friendly. Their customer service is top-notch. Highly recommended!"
    },
    {
        name: "Vikram Singh",
        role: "Tourist",
        avatar: "VS",
        text: "Exploring Hyderabad on an EV bike from Winev was a fantastic experience. The booking was instant on WhatsApp, and the staff was very helpful."
    }
];

const faqItems = [
    {
        question: "What documents are required to rent a bike?",
        answer: "You need a valid driving license, and an Aadhaar card or Passport for identity verification. For students, a valid college ID is also required for student discounts."
    },
    {
        question: "Is there a security deposit?",
        answer: "No, we offer zero-deposit rentals to make the process as smooth as possible for you. We trust our riders."
    },
    {
        question: "What is the booking process?",
        answer: "You can book a bike easily through WhatsApp. Just send us a message with your desired bike and rental duration, and our team will guide you through the next steps."
    },
];

export default function Home() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
    const [selectedBike, setSelectedBike] = useState<Bike | null>(null);

    const handleViewDetails = (bike: Bike) => {
        setSelectedBike(bike);
    };

    const handleCloseDetails = () => {
        setSelectedBike(null);
    };

    return (
        <div className="pt-12">
            <HeroSection image={heroImage} />
            <StatsSection />
            <WhyChooseUs />
            <FeaturedFleet onViewDetails={handleViewDetails} />
            <HowItWorks />
            <Testimonials />
            <FaqSection />
            <CtaSection />
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

function HeroSection({ image }: { image: typeof PlaceHolderImages[0] | undefined }) {
    return (
        <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] md:min-h-[450px] text-white">
            {image && (
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={image.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center container">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-headline font-semibold tracking-tight">
                    {SITE_CONFIG.tagline}
                </h1>
                <p className="mt-3 max-w-lg text-xs sm:text-sm text-foreground/80">
                    Rent premium electric bikes in Hyderabad from ₹35/hr. Zero deposit, instant booking.
                </p>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-sm">
                    <Button asChild size="sm" className="w-full">
                        <Link href="/bikes">Explore Our Fleet</Link>
                    </Button>
                    <Button asChild size="sm" variant="whatsapp" className="w-full">
                        <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer">
                            <MessageCircle /> Book on WhatsApp
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}

function StatsSection() {
    return (
        <section className="bg-card border-y">
            <div className="container py-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
                    <div className="p-2">
                        <p className="text-lg font-semibold text-primary">{SITE_CONFIG.stats.rides}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">Happy Rides</p>
                    </div>
                    <div className="p-2">
                        <p className="text-lg font-semibold text-primary">{SITE_CONFIG.stats.rating}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">Customer Rating</p>
                    </div>
                     <div className="p-2">
                        <p className="text-lg font-semibold text-primary">0</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">Security Deposit</p>
                    </div>
                    <div className="p-2">
                        <p className="text-lg font-semibold text-primary">&lt;{SITE_CONFIG.stats.response}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">Response Time</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WhyChooseUs() {
    return (
        <section className="py-8 md:py-10">
            <div className="container">
                <div className="text-center max-w-xl mx-auto">
                    <h2 className="text-lg md:text-xl font-headline font-semibold">Why Ride With Winev?</h2>
                    <p className="mt-2 text-[11px] md:text-sm text-muted-foreground">
                        We provide a seamless, affordable, and eco-friendly riding experience.
                    </p>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {whyChooseUsItems.map((item) => (
                        <Card key={item.title} className="text-center">
                            <CardContent className="p-4">
                                <item.icon className="h-6 w-6 mx-auto text-primary" />
                                <h3 className="mt-3 text-xs md:text-sm font-semibold">{item.title}</h3>
                                <p className="mt-1.5 text-[11px] text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeaturedFleet({ onViewDetails }: { onViewDetails: (bike: Bike) => void }) {
    return (
        <section className="py-8 md:py-10 bg-card">
            <div className="container">
                <div className="text-center max-w-xl mx-auto">
                    <h2 className="text-lg md:text-xl font-headline font-semibold">Our Featured Fleet</h2>
                    <p className="mt-2 text-[11px] md:text-sm text-muted-foreground">
                        Top-of-the-line electric bikes for every need and preference.
                    </p>
                </div>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                    {featuredBikes.map((bike) => (
                         <Card key={bike.id} className="flex flex-col">
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
                         </CardContent>
                         <CardFooter className="p-2 pt-0 flex justify-between items-center">
                           <div className="font-semibold text-xs">
                             ₹{bike.pricePerHour}
                             <span className="text-[11px] font-normal text-muted-foreground">/hr</span>
                           </div>
                           <Button asChild size="sm" variant="outline" onClick={() => onViewDetails(bike)}>
                            <span className="cursor-pointer">View Details</span>
                           </Button>
                         </CardFooter>
                       </Card>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <Button asChild size="sm" variant="outline">
                        <Link href="/bikes">
                            See All Bikes <ArrowRight className="ml-1.5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

function HowItWorks() {
    return (
        <section className="py-8 md:py-10">
             <div className="container">
                <div className="text-center max-w-xl mx-auto">
                    <h2 className="text-lg md:text-xl font-headline font-semibold">Get Rolling in 3 Simple Steps</h2>
                    <p className="mt-2 text-[11px] md:text-sm text-muted-foreground">
                        Renting an electric bike has never been easier.
                    </p>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {howItWorksSteps.map((step) => (
                        <div key={step.step} className="text-center p-2">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 border-2 border-primary text-primary mx-auto">
                                <span className="text-base font-semibold">{step.step}</span>
                            </div>
                            <h3 className="mt-3 text-xs md:text-sm font-semibold">{step.title}</h3>
                            <p className="mt-1.5 text-[11px] text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    );
}

function Testimonials() {
    return (
        <section className="py-8 md:py-10 bg-card">
            <div className="container">
                <div className="text-center max-w-xl mx-auto">
                    <h2 className="text-lg md:text-xl font-headline font-semibold">What Our Riders Say</h2>
                     <p className="mt-2 text-[11px] md:text-sm text-muted-foreground">
                        We're proud to have happy riders who love our service.
                    </p>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name}>
                            <CardContent className="p-4">
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-7 w-7">
                                        <AvatarImage src={`https://picsum.photos/seed/${testimonial.avatar}/32/32`} />
                                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-xs">{testimonial.name}</p>
                                        <p className="text-[11px] text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="mt-3 text-[11px] text-muted-foreground italic">"{testimonial.text}"</p>
                                <div className="mt-2 flex gap-0.5 text-primary">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FaqSection() {
    return (
        <section className="py-8 md:py-10">
            <div className="container grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                <div className="max-w-md">
                    <h2 className="text-lg md:text-xl font-headline font-semibold">Common Questions</h2>
                    <p className="mt-2 text-[11px] md:text-sm text-muted-foreground">
                        Have a question? We've got answers. If you can't find what you're looking for, feel free to contact us.
                    </p>
                     <Button asChild size="sm" variant="outline" className="mt-4">
                        <Link href="/faq">
                            See All FAQs
                        </Link>
                    </Button>
                </div>
                <div>
                     <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-[11px] md:text-xs hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-[10px] md:text-[11px] text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

function CtaSection() {
  return (
    <section className="py-8 md:py-10 border-t bg-primary/5">
       <div className="container text-center">
          <BikeIcon className="h-8 w-8 mx-auto text-primary" />
          <h2 className="mt-3 text-lg md:text-xl font-headline font-semibold">Ready to Start Your Journey?</h2>
          <p className="mt-2 max-w-lg mx-auto text-[11px] md:text-sm text-muted-foreground">
            Join thousands of happy riders in Hyderabad. Book your electric bike today and experience the future of urban travel.
          </p>
          <div className="mt-5 flex justify-center flex-col sm:flex-row gap-3">
            <Button asChild size="sm">
              <Link href="/bikes">
                Browse Bikes
              </Link>
            </Button>
            <Button asChild size="sm" variant="whatsapp">
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer">
                Book on WhatsApp
              </a>
            </Button>
          </div>
       </div>
    </section>
  )
}

    