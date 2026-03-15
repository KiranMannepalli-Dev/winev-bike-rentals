
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
import { Zap, ShieldCheck, Wrench, Sprout, Star, MessageCircle, Bike as BikeIcon, ArrowRight, CreditCard, UserCheck, GraduationCap } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { BikeDetails } from '@/components/BikeDetails';
import { motion } from "framer-motion";
import { type Bike } from '@/types/bikes';
import { LeadCaptureModal } from '@/components/LeadCaptureModal';
import { ContactModal } from '@/components/ContactModal';
import { PromotionalModal } from '@/components/PromotionalModal';
import { useEffect } from 'react';

const featuredBikes = bikesData.slice(0, 4);

const whyChooseUsItems = [
    {
        icon: Zap,
        title: "Fast Charging",
        description: "Charge up to 80% in just 45 minutes at Ather or Vida power stations."
    },
    {
        icon: ShieldCheck,
        title: "Minimal Deposit",
        description: "Enjoy premium rentals with a minimal refundable security deposit of just ₹2,000."
    },
    {
        icon: Wrench,
        title: "Weekly Rentals",
        description: "Special long-term rates starting at ₹2,200/week for unbeatable value."
    },
    {
        icon: Sprout,
        title: "High Performance",
        description: "Bikes with 100km range and 80kmh top speed for a powerful urban commute."
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
        name: "Mothilal Dharavath",
        role: "Verified Rider",
        avatar: "MD",
        text: "The best service in Hyderabad. Really good response and great communication with customers. Highly recommended! ❤️"
    },
    {
        name: "Pavanchowdary",
        role: "Daily Commuter",
        avatar: "P",
        text: "Smooth ride, low cost, best EV rental experience in the city. Truly value for money. 👍"
    },
    {
        name: "PASUNURI RAMU",
        role: "Frequent User",
        avatar: "PR",
        text: "My friend took a scooty on rent here. They have all new scooties and they even provided free charging! Excellent service."
    },
    {
        name: "Lala",
        role: "Verified Rider",
        avatar: "L",
        text: "Great experience with Winev. Their services are very professional and the cost is very friendly for students and professionals alike."
    },
    {
        name: "Santosh P",
        role: "Local Guide",
        avatar: "SP",
        text: "Good rental service available all over Hyderabad and Telangana. The bikes are well-maintained and reliable."
    },
    {
        name: "Dharavath Anil",
        role: "Verified Rider",
        avatar: "DA",
        text: "The best and most friendly service in Hyderabad. The staff is very cooperative and helpful throughout the process."
    }
];

const faqItems = [
    {
        question: "What documents are required?",
        answer: "A valid original Driving License, Aadhaar or PAN Card, and a proof of local address (utility bill/rental agreement)."
    },
    {
        question: "Is there a security deposit?",
        answer: "Yes, a minimal refundable deposit of ₹2,000 is required for all premium electric bike rentals."
    },
    {
        question: "What is the charging speed?",
        answer: "Our fleet supports fast charging at both Ather and Vida power stations, reaching 80% in just 45 minutes."
    },
    {
        question: "Do you offer weekly rates?",
        answer: "Yes! Weekly rentals start at just ₹2,200, offering a significant discount for long-term commuters."
    },
];

export default function Home() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
    const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [leadBikeName, setLeadBikeName] = useState("General Inquiry");

    const handleViewDetails = (bike: Bike) => {
        setSelectedBike(bike);
    };

    const handleCloseDetails = () => {
        setSelectedBike(null);
    };

    const openLeadModal = (bikeName?: string) => {
        setLeadBikeName(bikeName || "General Inquiry");
        setIsLeadModalOpen(true);
    };

    const openContactModal = () => {
        setIsContactModalOpen(true);
    };

    return (
        <div className="pt-12">
            <HeroSection onWhatsAppClick={() => openLeadModal("Hero Promo")} />
            <StatsSection />
            <WhyChooseUs />
            <FeaturedFleet onViewDetails={handleViewDetails} />
            <HowItWorks />
            <DocumentsSection />
            <Testimonials />
            <FaqSection />
            <CtaSection onCtaClick={openContactModal} />
            
            <LeadCaptureModal 
                isOpen={isLeadModalOpen} 
                onClose={() => setIsLeadModalOpen(false)} 
                bikeName={leadBikeName} 
            />
            
            <PromotionalModal />
            <ContactModal 
                isOpen={isContactModalOpen} 
                onClose={() => setIsContactModalOpen(false)} 
            />
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

function TypingHeadline({ mobileText, desktopText, isMobile }: { mobileText: string[], desktopText: string[], isMobile: boolean }) {
    const fullText = (isMobile ? mobileText : desktopText).join("");
    const [displayedText, setDisplayedText] = useState("");
    const [key, setKey] = useState(0);

    useEffect(() => {
        setDisplayedText("");
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setDisplayedText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);

        const resetTimeout = setTimeout(() => {
            setKey(prev => prev + 1);
        }, 15000);

        return () => {
            clearInterval(typingInterval);
            clearTimeout(resetTimeout);
        };
    }, [key, fullText]);

    // Added "Premium Rides" and "Every Journey" to the highlights
    const parts = displayedText.split(/(EV Bikes|Rentals|Premium Rides|Every Journey)/gi);

    return (
        <span className="inline-block min-h-[1.2em]">
            {parts.map((part, i) => {
                const lower = part.toLowerCase();
                const isHighlight = lower === "ev bikes" || lower === "rentals" || lower === "premium rides" || lower === "every journey";
                return (
                    <span
                        key={i}
                        className={isHighlight ? "text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-emerald-500 animate-pulse-subtle" : ""}
                    >
                        {part}
                    </span>
                );
            })}
        </span>
    );
}

function HeroSection({ onWhatsAppClick }: { onWhatsAppClick: () => void }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="relative h-[70vh] min-h-[450px] md:h-[85vh] lg:h-[90vh] text-white overflow-hidden bg-black">
            <div className="absolute inset-0">
                <Image
                    src={isMobile ? '/hero/Hero Bg Mobile screen 1.png' : '/hero/Hero Bg Webscreen 2.png'}
                    alt="Rent premium electric scooters in Hyderabad - Winev"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>
            
            {/* Premium Multi-layered Overlays (Targeted 45-55% coverage) */}
            {/* 1. Horizontal Overlay for Left-side Text (50% coverage) */}
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent w-full md:w-[50%]" />
            
            {/* 2. Mobile-specific Top-down Overlay (55% coverage) */}
            {isMobile && (
                <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/95 via-black/60 to-transparent h-[55%]" />
            )}
            
            <div className="relative z-10 h-full flex flex-col items-start justify-start pt-14 md:justify-center md:pt-0 text-left container px-8 sm:px-8 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-md md:max-w-2xl"
                >
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-headline font-semibold tracking-tight text-white drop-shadow-2xl leading-tight whitespace-nowrap">
                        <TypingHeadline 
                            mobileText={["Premium ", "EV Scooters", " Rentals"]} 
                            desktopText={[SITE_CONFIG.tagline]} 
                            isMobile={isMobile}
                        />
                    </h1>
                    <p className="mt-3 text-[10px] sm:text-xs md:text-sm lg:text-base text-zinc-100 drop-shadow-lg max-w-[300px] md:max-w-xl leading-relaxed opacity-95 font-medium">
                        Rent from our fleet of 20+ premium electric scooters in Hyderabad from ₹35/hr. <br className="hidden md:block" />
                        Minimal deposit, GPS tracked & cleaned fleet. Book on WhatsApp instantly.
                    </p>
                    <div className="mt-5 flex justify-start">
                        <Button 
                            size="sm" 
                            className="w-[120px] md:w-[200px] h-8 md:h-12 rounded-full shadow-2xl hover:scale-105 transition-all bg-primary text-white border-none font-bold text-[9px] md:text-sm tracking-widest uppercase group px-0" 
                            onClick={onWhatsAppClick}
                        >
                            <span>Book Now</span>
                            <ArrowRight className="ml-1.5 h-2.5 w-2.5 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function StatsSection() {
    return (
        <section className="bg-card border-y">
            <div className="container py-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
                    <div className="p-2 border-r last:border-0">
                        <p className="text-lg font-semibold text-primary">{SITE_CONFIG.stats.range}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">Top Range</p>
                    </div>
                    <div className="p-2 border-r last:border-0">
                        <p className="text-lg font-semibold text-primary">{SITE_CONFIG.stats.speed}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">Top Speed</p>
                    </div>
                     <div className="p-2 border-r last:border-0">
                        <p className="text-lg font-semibold text-primary">₹{SITE_CONFIG.stats.weeklyRent}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">Weekly Rent</p>
                    </div>
                    <div className="p-2">
                        <p className="text-lg font-semibold text-primary">₹{SITE_CONFIG.stats.deposit}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">Minimal Deposit</p>
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
                        Premium EV services with Ather & Vida power station support.
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
                    <h2 className="text-lg md:text-xl font-headline font-semibold">Our Featured Scooters</h2>
                    <p className="mt-2 text-[11px] md:text-sm text-muted-foreground">
                        Top-of-the-line electric scooters for every city commute.
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
                              <Badge variant={bike.isAvailable ? 'available' : 'unavailable'} className="text-[8px] px-1 py-0 h-4">
                                {bike.isAvailable ? 'Available' : 'Booked'}
                              </Badge>
                            </div>
                            {/* Category badge removed as only scooters are available */}
                          </CardContent>
                          <CardFooter className="p-2 pt-0 flex justify-between items-center">
                            <div className="font-semibold text-xs">
                              ₹{bike.pricePerHour}
                              <span className="text-[10px] font-normal text-muted-foreground">/hr</span>
                            </div>
                            <Button asChild size="sm" variant="default" className="h-7 px-3 rounded-full text-[9px] font-bold shadow-sm" onClick={() => onViewDetails(bike)}>
                             <span className="cursor-pointer">View Details</span>
                            </Button>
                          </CardFooter>
                       </Card>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <Button asChild size="default" variant="outline" className="rounded-full shadow-sm">
                        <Link href="/bikes">
                            See All Scooters <ArrowRight className="ml-1.5" />
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
                        Renting an electric scooter has never been easier.
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

function DocumentsSection() {
    const docs = [
        {
            icon: UserCheck,
            title: "License & ID",
            description: "Valid Driving License and Aadhaar Card or PAN Card (Original)."
        },
        {
            icon: CreditCard,
            title: "Address Proof",
            description: "Proof of local address (Electricity bill, rental agreement, or similar)."
        },
        {
            icon: GraduationCap,
            title: "Student ID (Optional)",
            description: "College ID for students to unlock exclusive discount rates."
        }
    ];

    return (
        <section className="py-8 md:py-12 bg-card/30 border-y">
            <div className="container">
                <div className="text-center max-w-xl mx-auto mb-8">
                    <h2 className="text-lg md:text-xl font-headline font-semibold">Required Documents</h2>
                    <p className="mt-2 text-[11px] md:text-xs text-muted-foreground">
                        Please bring the following original documents for a quick and easy pickup.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {docs.map((doc, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-4">
                            <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                                <doc.icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="text-sm font-semibold mb-2">{doc.title}</h3>
                            <p className="text-[10px] md:text-[11px] text-muted-foreground leading-relaxed">
                                {doc.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Testimonials() {
    return (
        <section id="reviews" className="py-12 md:py-16 bg-card border-y border-border">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <Badge variant="outline" className="mb-3 border-border bg-background shadow-sm py-1 px-3">
                        <motion.div
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="mr-2"
                        >
                            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                        </motion.div>
                        <span className="font-bold text-foreground mr-1">4.9/5</span> Google Rating
                    </Badge>
                    <h2 className="text-xl md:text-3xl font-headline font-semibold">What Our Riders Say</h2>
                    <p className="mt-3 text-xs md:text-base text-muted-foreground">
                        Don't just take our word for it. Join the {SITE_CONFIG.stats.rides} happy riders who trust Winev for their daily mobility.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name} className="relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                            <CardContent className="p-5">
                                <motion.div 
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ 
                                        duration: 4, 
                                        repeat: Infinity, 
                                        ease: "easeInOut",
                                        delay: Math.random() * 2
                                    }}
                                    className="absolute top-4 right-4 opacity-85 group-hover:opacity-100 transition-opacity pointer-events-none"
                                >
                                    <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                    </svg>
                                </motion.div>
                                
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-10 w-10 border border-primary/10 shadow-sm">
                                        <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} alt={testimonial.name} />
                                        <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">{testimonial.avatar}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-bold text-sm tracking-tight">{testimonial.name}</p>
                                        <p className="text-[10px] uppercase tracking-widest text-primary font-semibold">{testimonial.role}</p>
                                    </div>
                                </div>
                                
                                <div className="mt-4 flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                                    ))}
                                </div>
                                
                                <p className="mt-4 text-xs md:text-sm text-muted-foreground leading-relaxed italic">
                                    "{testimonial.text}"
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                
                <div className="mt-10 text-center">
                    <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
                        <a href={SITE_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <span>Read all 150+ reviews on Google</span>
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </Button>
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

function CtaSection({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="py-8 md:py-12 border-t bg-card overflow-hidden">
       <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-left"
              >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                      <BikeIcon className="h-5 w-5 text-primary" />
                  </div>
                  
                  <h2 className="text-lg md:text-xl font-semibold mb-3 tracking-tight">
                    Start Your <span className="text-primary italic">Electric</span> Adventure
                  </h2>
                  
                  <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed max-w-sm">
                    Join thousands of happy riders in Hyderabad. Experience the future of eco-friendly urban travel with Winev.
                  </p>
                  
                  <div className="flex justify-start">
                      <Button 
                          size="sm" 
                          className="rounded-full shadow-md px-8 h-9 text-[11px] font-bold tracking-tight transition-all hover:scale-105 active:scale-95 bg-primary" 
                          onClick={onCtaClick}
                      >
                          Enquire Now & Book
                      </Button>
                  </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative hidden md:flex justify-end items-center"
              >
                <div className="relative z-10 max-w-[320px]">
                    {/* Animated Speed Smoke/Mist Effect */}
                    <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 0, scale: 0.8 }}
                                animate={{ 
                                    opacity: [0, 0.15, 0], 
                                    x: [0, 60], 
                                    scale: [0.8, 2.5],
                                    filter: ["blur(8px)", "blur(24px)"]
                                }}
                                transition={{ 
                                    duration: 2.5, 
                                    repeat: Infinity, 
                                    delay: i * 0.8,
                                    ease: "easeOut" 
                                }}
                                className="absolute top-0 right-0 w-16 h-8 bg-white/40 rounded-full"
                                style={{ top: `${i * 10 - 15}px`, right: `${i * -5}px` }}
                            />
                        ))}
                    </div>

                    <Image
                      src="/CTA Section bike png.png"
                      alt="Winev Electric Bike"
                      width={320}
                      height={220}
                      className="w-full h-auto drop-shadow-xl relative z-10"
                    />
                    {/* Enhanced Multi-layered Ground Glow for Depth */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-white/40 blur-2xl rounded-[100%] pointer-events-none" />
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[60%] h-2 bg-white/60 blur-lg rounded-[100%] pointer-events-none" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
              </motion.div>
          </div>
       </div>
    </section>
  )
}

    