"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { SITE_CONFIG } from "@/config/site";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const mapImage = PlaceHolderImages.find((p) => p.id === 'contact-map');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // TODO: Awaiting API implementation
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="pt-20">
      <header className="py-16 md:py-24 text-center bg-card border-b">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions or need support? We're here to help.
          </p>
        </div>
      </header>
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-headline text-foreground">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">Fill out the form and we'll get back to you as soon as possible.</p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help you?" {...field} rows={6} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg">Send Message</Button>
                </form>
              </Form>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-headline text-foreground">Our Location</h3>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>{SITE_CONFIG.address.full}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-primary">{SITE_CONFIG.phoneDisplay}</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-primary">{SITE_CONFIG.email}</a>
                  </div>
                </div>
              </div>
              <div>
                {mapImage && (
                  <a href={SITE_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={mapImage.imageUrl}
                      alt={mapImage.description}
                      width={600}
                      height={450}
                      className="rounded-lg shadow-lg aspect-[4/3] object-cover"
                      data-ai-hint={mapImage.imageHint}
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
