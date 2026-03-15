"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site";
import { Send, Phone, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  message: z.string().min(5, "Please tell us a bit more about your requirement"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    // Prepare WhatsApp message as a fallback/direct action
    const whatsappMessage = `Hello Winev! I'm ${values.name}. I'm interested in renting a bike. \n\nMessage: ${values.message} \n\nMy number: ${values.phone}`;
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    toast({
      title: "Enquiry Sent!",
      description: "We've received your details. Connecting you to WhatsApp for instant confirmation...",
    });

    // Opening WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      onClose();
      form.reset();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[450px] border-primary/20 bg-background/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">Get in Touch</DialogTitle>
          <DialogDescription className="text-muted-foreground italic">
            Thinking about a ride? Leave your details and we'll help you pick the perfect EV.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="rounded-xl border-primary/10 bg-primary/5 focus:bg-background transition-all" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="98480 12345" {...field} className="rounded-xl border-primary/10 bg-primary/5 focus:bg-background transition-all" />
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
                  <FormLabel className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Special Requirements
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="I want to rent a scooter for 3 days..." 
                      className="min-h-[100px] rounded-xl border-primary/10 bg-primary/5 focus:bg-background transition-all resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full rounded-full h-12 text-lg font-bold shadow-xl hover:scale-[1.02] transition-all group" size="lg">
              <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Send Enquiry
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
