
'use client';

import { useState, useEffect } from 'react';
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
import { Zap, ShieldCheck, Wrench, Sprout, Star, MessageCircle, Bike as BikeIcon, ArrowRight, CreditCard, UserCheck, GraduationCap, Clock, CalendarDays, Leaf, Search, Smile, CheckCircle2, IndianRupee, Gauge } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { BikeDetails } from '@/components/BikeDetails';
import { motion } from "framer-motion";
import { type Bike } from '@/types/bikes';
import { LeadCaptureModal } from '@/components/LeadCaptureModal';
import { ContactModal } from '@/components/ContactModal';

const featuredBikes = bikesData.slice(0, 5);

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

const whyChooseUsItems = [
    {
        icon: IndianRupee,
        title: "Affordable EV Rentals",
        description: "Premium rides that fit your budget, starting as low as ₹15.27 per hour."
    },
    {
        icon: UserCheck,
        title: "Flexible Rental Plans",
        description: "From hourly errands to monthly commutes, we have a plan for every need."
    },
    {
        icon: Search,
        title: "Easy Online Booking",
        description: "Hassle-free booking instantly via WhatsApp and smooth documentation."
    },
    {
        icon: Leaf,
        title: "Eco-Friendly Electric Bikes",
        description: "Zero emissions, 100% sustainable. Join the green revolution in Hyderabad."
    },
    {
        icon: ShieldCheck,
        title: "Smooth and Reliable Rides",
        description: "Well-maintained, sanitized, and GPS-tracked fleet for your absolute safety."
    }
];

const rentalPlans = [
    {
        id: "hourly",
        title: "Hourly Rentals",
        subtitle: "Perfect for short rides around the city.",
        price: "₹20",
        unit: "per hour",
        details: [
            { label: "Minimum Booking", value: "6 hours" },
            { label: "Ideal for", value: "Quick trips, errands & short commutes" }
        ],
        highlight: false
    },
    {
        id: "daily",
        title: "Daily Rentals",
        subtitle: "Best option for full-day usage and city travel.",
        price: "₹449",
        unit: "per day",
        details: [
            { label: "Hourly Rate", value: "₹18.75 /hr" },
            { label: "Ideal for", value: "Daily commuting & city exploration" }
        ],
        highlight: false
    },
    {
        id: "weekly",
        title: "Weekly Rentals",
        subtitle: "Great for longer usage with better savings.",
        price: "₹2,199",
        unit: "per week",
        details: [
            { label: "Per Day", value: "₹366" },
            { label: "Per Hour", value: "₹15.27" },
            { label: "Ideal for", value: "Work commute & extended usage" }
        ],
        highlight: true
    },
    {
        id: "monthly",
        title: "Monthly Rentals",
        subtitle: "Most economical option for regular riders.",
        price: "₹8,799",
        unit: "per month",
        details: [
            { label: "Weekly Equivalent", value: "₹2,199" },
            { label: "Ideal for", value: "Daily commuters & maximum savings" }
        ],
        highlight: false
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
        image: "/indian_man_customer_1_1773649197608.png",
        text: "The best service in Hyderabad. Really good response and great communication with customers. Highly recommended! ❤️"
    },
    {
        name: "Pavanchowdary",
        role: "Daily Commuter",
        avatar: "P",
        image: "/indian_man_customer_3_1773649257654.png",
        text: "Smooth ride, low cost, best EV rental experience in the city. Truly value for money. 👍"
    },
    {
        name: "PASUNURI RAMU",
        role: "Frequent User",
        avatar: "PR",
        image: "/indian_man_customer_2_1773649217238.png",
        text: "My friend took a scooty on rent here. They have all new scooties and they even provided free charging! Excellent service."
    },
    {
        name: "Lala",
        role: "Verified Rider",
        avatar: "L",
        image: "/indian_woman_customer_1_1773649236229.png",
        text: "Great experience with Winev. Their services are very professional and the cost is very friendly for students and professionals alike."
    },
    {
        name: "Santosh P",
        role: "Local Guide",
        avatar: "SP",
        image: "/indian_man_customer_4_1773649277389.png",
        text: "Good rental service available all over Hyderabad and Telangana. The bikes are well-maintained and reliable."
    },
    {
        name: "Dharavath Anil",
        role: "Verified Rider",
        avatar: "DA",
        image: "/indian_woman_customer_2_1773649297395.png",
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
        answer: "Yes! Weekly rentals start at just ₹2,199, offering a significant discount for long-term commuters."
    },
];

export default function Home() {
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
            <HeroSection onWhatsAppClick={() => openLeadModal("Premium Scooter")} />
            <StatsSection />
            <WhyChooseUs />
            <RentalPlansSection />
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

function ElectricBolt({ delay = 0, top, left, right, bottom, scale = 1, rotate = 0 }: { delay?: number; top?: string; left?: string; right?: string; bottom?: string; scale?: number; rotate?: number }) {
    return (
        <motion.div
            style={{ position: 'absolute', top, left, right, bottom, zIndex: 30 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
                opacity: [0, 0.8, 0, 1, 0.2, 0.9, 0],
                scale: [scale * 0.8, scale * 1.2, scale],
                x: [0, -2, 2, -1, 0],
                y: [0, 2, -2, 1, 0]
            }}
            transition={{ 
                duration: 0.2, 
                repeat: Infinity, 
                repeatDelay: 2 + Math.random() * 3,
                delay 
            }}
            className="pointer-events-none"
        >
            <svg 
                width="40" 
                height="60" 
                viewBox="0 0 24 24" 
                fill="none" 
                style={{ transform: `rotate(${rotate}deg)`, filter: 'drop-shadow(0 0 8px #10b981)' }}
            >
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#10b981" />
            </svg>
        </motion.div>
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
        <section className="relative min-h-[500px] md:h-[65vh] lg:h-[70vh] text-white overflow-hidden bg-black flex items-center pt-24 md:pt-4 pb-12 md:pb-24">
            <div className="absolute inset-0 z-0 bg-black" />
            <div className="container relative z-10 px-6 sm:px-8 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-sm md:max-w-xl z-20"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <BikeIcon className="h-3 w-3 text-primary" />
                            <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-500">Premium Mobility</span>
                        </div>

                        <h1 className="text-2xl md:text-2xl lg:text-3xl font-headline font-bold tracking-tight text-white drop-shadow-2xl leading-[1.2] mb-4">
                            <TypingHeadline 
                                mobileText={["Premium EV ", "Scooter Rentals"]} 
                                desktopText={["Premium Rides for Every Journey."]} 
                                isMobile={isMobile}
                            />
                        </h1>
                        <p className="mt-4 text-[11px] sm:text-xs md:text-sm lg:text-[15px] text-zinc-400 drop-shadow-lg max-w-[320px] md:max-w-md leading-relaxed opacity-95 font-medium">
                            Rent from our fleet of 15+ premium electric scooters in Hyderabad from ₹20/hr. <br className="hidden md:block" />
                            Minimal deposit, GPS tracked & cleaned fleet. Book on WhatsApp instantly.
                        </p>
                        <div className="mt-10 md:mt-10 flex justify-start">
                            <Button 
                                size="sm" 
                                className="w-[140px] md:w-[180px] h-10 md:h-11 rounded-full shadow-2xl hover:scale-105 transition-all bg-primary text-white border-none font-bold text-[11px] md:text-sm tracking-widest uppercase group px-0" 
                                onClick={onWhatsAppClick}
                            >
                                <span className="mr-2">Book Now</span>
                                <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative flex justify-center md:justify-end items-center z-10 mt-8 md:mt-0"
                    >
                        <div className="relative w-full max-w-[150px] sm:max-w-[190px] md:max-w-[190px] lg:max-w-[230px]">
                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[100%] h-14 bg-white/10 blur-[50px] rounded-[100%] pointer-events-none z-0" />
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-white/20 blur-[25px] rounded-[100%] pointer-events-none z-0" />
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[50%] h-2 bg-zinc-100/40 blur-[10px] rounded-[100%] pointer-events-none z-0" />

                            <div className="absolute inset-0 z-20 pointer-events-none overflow-visible">
                                <ElectricBolt delay={0} top="20%" left="10%" scale={0.5} rotate={45} />
                                <ElectricBolt delay={1.5} top="40%" right="-10%" scale={0.7} rotate={-30} />
                                <ElectricBolt delay={0.8} bottom="10%" left="30%" scale={0.6} rotate={180} />
                                <ElectricBolt delay={2.2} top="10%" right="20%" scale={0.4} rotate={90} />
                                <ElectricBolt delay={1.2} top="50%" left="50%" scale={0.8} rotate={0} />
                                <ElectricBolt delay={3.0} bottom="30%" right="10%" scale={0.5} rotate={-120} />
                            </div>

                            <Image
                                src={'/Bikes/Hero BG web and Tab home page.png'}
                                alt="Premium Winev Scooter"
                                width={480}
                                height={360}
                                className="w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(16,185,129,0.3)] z-10 animate-pulse-gentle"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}

function StatsSection() {
    return (
        <section className="bg-card border-y border-zinc-800/50">
            <div className="container py-4 md:py-3">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-2 text-center items-center">
                    <div className="p-2 border-r border-zinc-800 last:border-0">
                        <p className="text-xl md:text-lg font-bold text-primary tracking-tight">{SITE_CONFIG.stats.range}</p>
                        <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mt-1">Top Range</p>
                    </div>
                    <div className="p-2 md:border-r border-zinc-800 last:border-0">
                        <p className="text-xl md:text-lg font-bold text-primary tracking-tight">{SITE_CONFIG.stats.speed}</p>
                        <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mt-1">Top Speed</p>
                    </div>
                    <div className="p-2 border-r border-zinc-800 last:border-0 border-t md:border-t-0 border-zinc-800/30 pt-6 md:pt-2">
                        <p className="text-xl md:text-lg font-bold text-primary tracking-tight">₹{SITE_CONFIG.stats.weeklyRent}</p>
                        <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mt-1">Weekly Rent</p>
                    </div>
                    <div className="p-2 border-t md:border-t-0 border-zinc-800/30 pt-6 md:pt-2">
                        <p className="text-xl md:text-lg font-bold text-primary tracking-tight">₹{SITE_CONFIG.stats.deposit}</p>
                        <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mt-1">Minimal Deposit</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WhyChooseUs() {
    return (
        <section className="py-12 md:py-20 bg-background overflow-hidden">
            <div className="container relative">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5 text-primary py-1 px-4 text-[10px] tracking-widest uppercase font-bold">The Winev Advantage</Badge>
                    <h2 className="text-2xl md:text-4xl font-headline font-semibold text-foreground tracking-tight">Why Choose Winev?</h2>
                    <p className="mt-4 text-xs md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
                        We don't just rent bikes; we provide a seamless, sustainable, and premium mobility experience tailored for Hyderabad.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
                    {whyChooseUsItems.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="h-full border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all group">
                                <CardContent className="p-6 text-center flex flex-col items-center">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-sm md:text-base font-bold text-foreground mb-3">{item.title}</h3>
                                    <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[150px] -z-10 rounded-full" />
            </div>
        </section>
    );
}

function RentalPlansSection() {
    return (
        <section className="py-12 md:py-24 bg-zinc-950/50 border-y border-white/5 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl font-headline font-semibold text-white tracking-tight">Our Rental Plans</h2>
                    <div className="h-1 w-16 bg-primary mx-auto my-6 rounded-full" />
                    <p className="mt-4 text-[13px] md:text-base text-zinc-400 leading-relaxed">
                        At Winev Bike Rentals, we provide flexible rental options so you can ride when you want and for as long as you need.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {rentalPlans.map((plan, idx) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <Card className={`h-full relative overflow-hidden transition-all duration-300 ${
                                plan.highlight 
                                ? 'bg-zinc-900 border-primary/40 shadow-[0_0_40px_rgba(16,185,129,0.1)] scale-105 z-20' 
                                : 'bg-zinc-900/40 border-white/10 hover:border-white/25 z-10'
                            }`}>
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0">
                                        <Badge className="rounded-none rounded-bl-lg bg-primary text-[10px] font-bold py-1 px-3">Most Popular</Badge>
                                    </div>
                                )}
                                
                                <CardHeader className="pb-4">
                                    <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-zinc-200'}`}>{plan.title}</h3>
                                    <p className="text-[11px] text-zinc-500 line-clamp-2 leading-relaxed">{plan.subtitle}</p>
                                </CardHeader>

                                <CardContent className="pb-8">
                                    <div className="flex items-baseline gap-1 mb-6">
                                        <span className={`text-3xl font-bold ${plan.highlight ? 'text-primary' : 'text-white'}`}>{plan.price}</span>
                                        <span className="text-xs text-zinc-500">{plan.unit}</span>
                                    </div>
                                    
                                    <div className="space-y-4 border-t border-white/5 pt-6">
                                        {plan.details.map((detail, dIdx) => (
                                            <div key={dIdx} className="flex flex-col gap-1">
                                                <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">{detail.label}</span>
                                                <span className={`text-xs font-medium ${plan.highlight ? 'text-zinc-200' : 'text-zinc-400'}`}>
                                                    {detail.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/2 rounded-full blur-[100px]" />
        </section>
    );
}

function FeaturedFleet({ onViewDetails }: { onViewDetails: (bike: Bike) => void }) {
    return (
        <section className="py-16 md:py-24 bg-card">
            <div className="container">
                <div className="mb-12 flex flex-col items-center">
                    <h2 className="text-xl md:text-3xl font-headline font-semibold text-foreground tracking-tight">Our Featured Scooters</h2>
                    <div className="h-1 w-12 bg-primary rounded-full mt-3" />
                    <p className="mt-4 text-xs md:text-base text-muted-foreground max-w-lg mx-auto text-center leading-relaxed">
                        Explore our top-of-the-line electric scooters meticulously maintained for every city commute.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {featuredBikes.map((bike) => (
                        <BikeCard key={bike.id} bike={bike} onViewDetails={onViewDetails} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button asChild size="default" variant="outline" className="rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors">
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
        { icon: UserCheck, title: "License & ID", description: "Valid Driving License and Aadhaar Card or PAN Card (Original)." },
        { icon: CreditCard, title: "Address Proof", description: "Proof of local address (Electricity bill, rental agreement, or similar)." },
        { icon: GraduationCap, title: "Student ID (Optional)", description: "College ID for students to unlock exclusive discount rates." }
    ];

    return (
        <section className="py-8 md:py-12 bg-card/30 border-y">
            <div className="container">
                <div className="text-center max-w-xl mx-auto mb-8">
                    <h2 className="text-lg md:text-xl font-headline font-semibold">Required Documents</h2>
                    <p className="mt-2 text-[11px] md:text-xs text-muted-foreground">Please bring the following original documents for a quick and easy pickup.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {docs.map((doc, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-4">
                            <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                                <doc.icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="text-sm font-semibold mb-2">{doc.title}</h3>
                            <p className="text-[10px] md:text-[11px] text-muted-foreground leading-relaxed">{doc.description}</p>
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
                        <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mr-2">
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
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name} className="relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                            <CardContent className="p-5">
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-10 w-10 border border-primary/10 shadow-sm">
                                        <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                                        <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">{testimonial.avatar}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-bold text-sm tracking-tight">{testimonial.name}</p>
                                        <p className="text-[10px] uppercase tracking-widest text-primary font-semibold">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />)}
                                </div>
                                <p className="mt-4 text-xs md:text-sm text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
                        <a href={SITE_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <span>Read all reviews on Google</span>
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
                    <p className="mt-2 text-[11px] md:text-sm text-muted-foreground">Have a question? We've got answers.</p>
                     <Button asChild size="sm" variant="outline" className="mt-4">
                        <Link href="/faq">See All FAQs</Link>
                    </Button>
                </div>
                <div>
                     <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-[11px] md:text-xs hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-[10px] md:text-[11px] text-muted-foreground">{item.answer}</AccordionContent>
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
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-left">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                      <BikeIcon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-lg md:text-xl font-semibold mb-3 tracking-tight">Start Your <span className="text-primary italic">Electric</span> Adventure</h2>
                  <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed max-w-sm">Join thousands of happy riders in Hyderabad. Experience the future of eco-friendly urban travel with Winev.</p>
                  <div className="flex justify-start">
                      <Button size="sm" className="rounded-full shadow-md px-8 h-9 text-[11px] font-bold tracking-tight transition-all hover:scale-105 active:scale-95 bg-primary" onClick={onCtaClick}>Enquire Now & Book</Button>
                  </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative hidden md:flex justify-end items-center">
                <div className="relative z-10 max-w-[320px]">
                    <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: 0, scale: 0.8 }} animate={{ opacity: [0, 0.15, 0], x: [0, 60], scale: [0.8, 2.5], filter: ["blur(8px)", "blur(24px)"] }} transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }} className="absolute top-0 right-0 w-16 h-8 bg-white/40 rounded-full" style={{ top: `${i * 10 - 15}px`, right: `${i * -5}px` }} />
                        ))}
                    </div>
                    <Image src="/CTA Section bike png.png" alt="Winev Electric Bike" width={320} height={220} className="w-full h-auto drop-shadow-xl relative z-10" />
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-white/40 blur-2xl rounded-[100%] pointer-events-none" />
                </div>
              </motion.div>
          </div>
       </div>
    </section>
  )
}