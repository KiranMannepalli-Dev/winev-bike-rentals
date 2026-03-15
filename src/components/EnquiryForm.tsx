
"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { SITE_CONFIG } from "@/config/site";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10-digit phone number." }),
  bike: z.string(),
});

type EnquiryFormProps = {
  bikeName: string;
  onFormSubmit: () => void;
};

export function EnquiryForm({ bikeName, onFormSubmit }: EnquiryFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      bike: bikeName,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // 1. Save data for the owner (optional/mocked for now based on your setup)
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      // 2. Prepare WhatsApp message
      const message = `Hi Winev! I'm ${values.name} (${values.phone}). I would like to book the ${bikeName}. Please let me know the availability.`;
      const whatsappUrl = `https://wa.me/${SITE_CONFIG.phone}?text=${encodeURIComponent(message)}`;

      // 3. Inform the user and redirect
      toast({
        title: "Redirecting to WhatsApp...",
        description: `Thanks ${values.name}! Taking you to WhatsApp to complete your booking for the ${bikeName}.`,
      });

      // We wait a tiny bit for the toast to be seen
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        form.reset();
        onFormSubmit();
      }, 1000);

    } catch (error) {
      // If the API call fails, we still allow them to go to WhatsApp but show a warning
      const message = `Hi Winev! I'm ${values.name} (${values.phone}). I would like to book the ${bikeName}.`;
      const whatsappUrl = `https://wa.me/${SITE_CONFIG.phone}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      onFormSubmit();
    }
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Enquire Now</DialogTitle>
        <DialogDescription>
          Interested in the {bikeName}? Fill out your details below and we'll get in touch with you shortly.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="9876543210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="bike"
            render={({ field }) => (
              <FormItem className="hidden">
                <FormLabel>Scooter</FormLabel>
                <FormControl>
                  <Input readOnly {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter className="pt-4 flex flex-col sm:flex-row gap-3">
            <DialogClose asChild>
                <Button type="button" variant="ghost" className="rounded-full flex-1 h-10">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="rounded-full flex-1 h-10 font-bold">Submit Enquiry</Button>
          </DialogFooter>
        </form>
      </Form>
    </>
  );
}
