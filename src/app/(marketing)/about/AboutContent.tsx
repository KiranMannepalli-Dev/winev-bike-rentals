"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Building, Target, Users, Bike as BikeIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutContent() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');

  const teamMembers = [
    { name: 'Y. Arun Kumar', role: 'Founder', image: '/Arun 1.jpeg' },
    { name: 'D. Anil Kumar', role: 'Founder', avatar: 'AK' },
    { name: 'Vishnu', role: 'Operations', image: '/Vishnu Operation team winev.jpeg' },
    { name: 'Kiran', role: 'Operations', image: '/Core Team operations-1.jpeg' },
    { name: 'Ella', role: 'Customer Success', image: '/Ella Operation team winev.png' },
  ];

  return (
    <main className="pt-12">
      <section className="relative w-full bg-zinc-950 overflow-hidden border-b border-zinc-900 mt-2">
        <div className="container max-w-6xl py-8 md:py-12 flex items-center min-h-[350px]">
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
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">About Our Brand</span>
              </div>
              
              <h1 className="text-2xl md:text-5xl font-headline font-medium text-white tracking-tight leading-none mb-6 md:whitespace-nowrap">
                About <span className="text-primary italic">us</span>
              </h1>
              
              <p className="text-[13px] md:text-base text-zinc-400 leading-relaxed text-justify tracking-tight opacity-95 max-w-2xl mb-8">
                Revolutionizing urban mobility in Hyderabad since 2025. We started with a mission to provide sustainable, premium electric transportation that makes city travel effortless, reliable, and eco-friendly for every citizen.
              </p>

              <div className="flex items-center gap-10">
                  <div className="text-center">
                      <p className="text-xl font-bold text-white">2025</p>
                      <p className="text-[9px] uppercase tracking-widest text-emerald-500 font-bold">Launched</p>
                  </div>
                  <div className="h-8 w-[1px] bg-zinc-800" />
                  <div className="text-center">
                      <p className="text-xl font-bold text-white">15+</p>
                      <p className="text-[9px] uppercase tracking-widest text-emerald-500 font-bold">Fleet</p>
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
            <div className="relative h-full w-full flex items-end justify-end overflow-visible">
              {/* Silver Glow/Bottom Shadow Effect - Layered for depth */}
              <div className="absolute -bottom-8 right-24 md:right-48 lg:right-56 w-[60%] h-14 bg-white/10 blur-[50px] rounded-[100%] -z-10" />
              <div className="absolute -bottom-3 right-32 md:right-56 lg:right-64 w-[40%] h-6 bg-white/20 blur-[25px] rounded-[100%] -z-10" />
              <div className="absolute -bottom-1 right-40 md:right-64 lg:right-72 w-[20%] h-2 bg-zinc-100/40 blur-[10px] rounded-[100%] -z-10" />
              
              <Image
                src="/Bikes/Scooter png 1.jpg"
                alt="Premium Winev Scooter"
                width={800}
                height={600}
                className="w-auto h-[85%] lg:h-[95%] object-contain object-bottom z-10 drop-shadow-[0_45px_45px_rgba(0,0,0,0.8)] mr-24 md:mr-48 lg:mr-56" 
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
      
      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
            {/* Text Content Side - Minimized Length */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="h-[1.5px] w-8 bg-primary/60 rounded-full" />
              <h2 className="text-xl md:text-2xl font-headline font-semibold text-foreground tracking-tight leading-tight">
                Our Journey and Story
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-[13px] leading-snug text-justify tracking-tight opacity-90">
                  Founded in 2025, Winev Scooter Rental started with a mission to provide affordable, sustainable transportation in Hyderabad. We saw growing congestion and knew there had to be a better way to get around.
                </p>
                <p className="text-[13px] leading-snug text-justify tracking-tight opacity-90">
                  From ten scooters, we've grown into a trusted local name with a fleet of 15+ premium EVs, dedicated to exceptional service and a greener future for urban mobility.
                </p>
              </div>
              
              <div className="pt-2 flex items-center gap-6">
                  <div>
                      <p className="text-lg font-bold text-foreground">2025</p>
                      <p className="text-[9px] uppercase tracking-wider text-emerald-600 font-bold">Launched</p>
                  </div>
                  <div className="h-6 w-[1px] bg-border" />
                  <div>
                      <p className="text-lg font-bold text-foreground">15+</p>
                      <p className="text-[9px] uppercase tracking-wider text-emerald-600 font-bold">Scooters</p>
                  </div>
              </div>
            </div>

            {/* Image Side - Minimal & Fully Visible */}
            <div className="flex justify-center md:justify-end">
              <div className="relative group max-w-[280px] md:max-w-md">
                {/* Minimal Frame Accent */}
                <div className="absolute -bottom-2 -right-2 w-full h-full border border-primary/10 pointer-events-none" />
                
                <div className="relative overflow-hidden shadow-xl border border-border bg-zinc-50">
                  <Image
                    src="/Arun 1.jpeg"
                    alt="Arun - Founder"
                    width={500}
                    height={600}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                  />
                  
                  {/* Targeted 20% Bottom Overlay for Contrast */}
                  <div className="absolute bottom-0 inset-x-0 h-[22%] bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-4 right-4">
                      <p className="text-white font-medium text-sm tracking-tight text-shadow-sm leading-tight">Y. Arun Kumar & D. Anil Kumar</p>
                      <p className="text-primary/90 text-[8px] uppercase tracking-widest font-bold">Founders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 md:py-16 bg-card">
        <div className="container max-w-4xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-base font-semibold text-foreground">Our Mission & Values</h2>
            <p className="mt-2 text-xs text-muted-foreground whitespace-nowrap">
              Guided by a core set of values that define our service.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
            <div className="p-2">
              <Target className="h-5 w-5 mx-auto text-emerald-900/80"/>
              <h3 className="mt-3 text-xs font-semibold text-foreground">Our Mission</h3>
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground text-center">To provide seamless urban travel solutions that enhance our city's health.</p>
            </div>
            <div className="p-2">
              <Building className="h-5 w-5 mx-auto text-emerald-900/80"/>
              <h3 className="mt-3 text-xs font-semibold text-foreground">Our Vision</h3>
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground text-center">To be Hyderabad's leading micro-mobility provider with accessible EVs.</p>
            </div>
            <div className="p-2">
              <Users className="h-5 w-5 mx-auto text-emerald-900/80"/>
              <h3 className="mt-3 text-xs font-semibold text-foreground">Our Values</h3>
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground text-center">Customer-centricity, Sustainability, Reliability, and Innovation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-zinc-950">
        <div className="container max-w-4xl">
          <h2 className="text-sm font-medium text-center text-emerald-500 mb-12 tracking-wide font-headline uppercase tracking-[0.3em]">Core Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto gap-8 px-4">
            {teamMembers.slice(2).map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="text-center border border-zinc-800 bg-zinc-900/40 shadow-2xl backdrop-blur-sm">
                  <CardContent className="p-8">
                    <Avatar className="h-20 w-20 mx-auto border-2 border-zinc-800 shadow-inner">
                      {member.image ? (
                        <AvatarImage src={member.image} className="object-cover" />
                      ) : (
                        <AvatarImage src={`https://picsum.photos/seed/${member.avatar}/80/80`} />
                      )}
                      <AvatarFallback className="bg-zinc-800 text-zinc-400 text-xs font-bold">{member.avatar}</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-5 text-sm font-medium text-white tracking-tight">{member.name}</h3>
                    <p className="text-[11px] text-emerald-500 font-semibold mt-1">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
