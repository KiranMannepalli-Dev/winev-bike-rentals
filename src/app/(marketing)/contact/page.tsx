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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Server error");

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
      form.reset();
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Could not send your message. Please try again.",
      });
    }
  }

  return (
    <div className="pt-16">
      <header className="py-10 md:py-12 text-center bg-card border-b">
        <div className="container">
          <h1 className="text-2xl md:text-3xl font-headline font-bold">Contact Us</h1>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
            Have questions or need support? We're here to help.
          </p>
        </div>
      </header>
      
      <section className="py-10 md:py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-headline text-foreground">Get in Touch</h2>
              <p className="mt-2 text-sm text-muted-foreground">Fill out the form and we'll get back to you as soon as possible.</p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
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
                          <Textarea placeholder="How can we help you?" {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="sm">Send Message</Button>
                </form>
              </Form>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-headline text-foreground">Our Location</h3>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{SITE_CONFIG.address.full}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-primary">{SITE_CONFIG.phoneDisplay}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
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
                      className="rounded-md aspect-[4/3] object-cover"
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
