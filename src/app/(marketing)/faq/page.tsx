import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
    {
        question: "What documents are required to rent a bike?",
        answer: "To rent a bike, you must provide a valid original Driving License, an Aadhaar Card or PAN Card, and a valid Local Address Proof (such as a utility bill or rental agreement)."
    },
    {
        question: "Is there a security deposit?",
        answer: "Yes, we maintain a minimal security deposit of ₹2,000 to ensure the safety and maintenance of our premium electric fleet. This is fully refundable upon the safe return of the vehicle."
    },
    {
        question: "What are the performance specs of the bikes?",
        answer: "Our premium EV fleet offers a range of up to 100km on a full charge and a top speed of 80kmh. We also provide support for both Ather and Vida power stations for quick 45-minute charging (up to 80%)."
    },
    {
        question: "Do you offer weekly or long-term rentals?",
        answer: "Absolutely! We offer special weekly rental rates starting at ₹2,200. This is perfect for commuters or travelers looking for an affordable long-term mobility solution."
    },
    {
        question: "What is the booking process?",
        answer: "You can book easily through WhatsApp. Just send us a message to our primary number (90148 27770) or our secondary line (78931 16525), and our team will guide you through the instant booking process."
    }
];

export default function FaqPage() {
    return (
        <div className="pt-12">
            <header className="py-6 md:py-8 text-center bg-card border-b">
                <div className="container">
                    <h1 className="text-lg md:text-2xl font-semibold">Frequently Asked Questions</h1>
                    <p className="mt-2 text-xs text-muted-foreground max-w-2xl mx-auto">
                        Find answers to common questions about our bike rental service.
                    </p>
                </div>
            </header>

            <main className="py-8 md:py-10">
                <div className="container max-w-2xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-[11px] hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-[10px] text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </main>
        </div>
    );
}
