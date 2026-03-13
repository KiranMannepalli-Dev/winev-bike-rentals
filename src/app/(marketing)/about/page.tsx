import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Building, Target, Users } from 'lucide-react';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');

  const teamMembers = [
    { name: 'Ashwin Kumar', role: 'Founder & CEO', avatar: 'AK' },
    { name: 'Priya Sharma', role: 'Operations Head', avatar: 'PS' },
    { name: 'Rohan Reddy', role: 'Lead Technician', avatar: 'RR' },
  ];

  return (
    <div className="pt-16">
      <header className="py-12 md:py-16 text-center bg-card border-b">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-headline font-bold">About Winev Bike Rental</h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            We are revolutionizing urban mobility in Hyderabad with our fleet of premium, eco-friendly electric bikes.
          </p>
        </div>
      </header>
      
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="prose prose-invert max-w-none text-muted-foreground text-sm">
              <h2 className="text-2xl font-headline text-foreground">Our Story</h2>
              <p>
                Founded in 2023, Winev Bike Rental started with a simple mission: to provide an affordable, convenient, and sustainable transportation solution for the people of Hyderabad. We saw the growing traffic congestion and pollution, and knew there had to be a better way to get around the city.
              </p>
              <p>
                From a small fleet of just ten bikes, we've grown into a trusted name in the local community, known for our well-maintained vehicles, exceptional customer service, and commitment to a greener future.
              </p>
            </div>
            <div>
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={800}
                  height={600}
                  className="rounded-lg shadow-md"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-card">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-headline text-foreground">Our Mission & Values</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We are driven by a core set of values that guide everything we do.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <Target className="h-10 w-10 mx-auto text-primary"/>
              <h3 className="mt-4 text-base font-headline text-foreground">Our Mission</h3>
              <p className="mt-2 text-xs text-muted-foreground">To provide seamless and sustainable urban travel solutions that enhance the lives of our customers and the health of our city.</p>
            </div>
            <div className="p-4">
              <Building className="h-10 w-10 mx-auto text-primary"/>
              <h3 className="mt-4 text-base font-headline text-foreground">Our Vision</h3>
              <p className="mt-2 text-xs text-muted-foreground">To be Hyderabad's leading micro-mobility provider, creating a network of electric vehicles that are accessible to everyone.</p>
            </div>
            <div className="p-4">
              <Users className="h-10 w-10 mx-auto text-primary"/>
              <h3 className="mt-4 text-base font-headline text-foreground">Our Values</h3>
              <p className="mt-2 text-xs text-muted-foreground">Customer-centricity, Sustainability, Reliability, and Innovation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-headline text-center text-foreground">Meet the Team</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="p-6">
                  <Avatar className="h-20 w-20 mx-auto">
                    <AvatarImage src={`https://picsum.photos/seed/${member.avatar}/80/80`} />
                    <AvatarFallback>{member.avatar}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{member.name}</h3>
                  <p className="text-xs text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
