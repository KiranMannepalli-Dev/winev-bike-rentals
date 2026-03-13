import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    {
        question: "What happens if the bike breaks down?",
        answer: "All our bikes are regularly serviced. However, in the rare case of a breakdown, we offer 24/7 roadside assistance. Just give us a call, and we'll be there to help."
    },
    {
        question: "How and when do I pay for the rental?",
        answer: "Payment can be made upfront via UPI, credit/debit card, or net banking. Our team will provide you with a payment link once your booking is confirmed."
    },
    {
        question: "Are helmets provided with the bike?",
        answer: "Yes, we provide one complimentary helmet with every rental for the rider's safety. A second helmet for a pillion rider is available for a small additional fee."
    },
    {
        question: "Is there a limit on the kilometers I can ride?",
        answer: "No, all our rentals come with unlimited kilometers, so you can explore without any worries. Ride as much as you want!"
    }
];

export default function FaqPage() {
    return (
        <div className="pt-14">
            <header className="py-8 md:py-10 text-center bg-card border-b">
                <div className="container">
                    <h1 className="text-xl md:text-2xl font-bold">Frequently Asked Questions</h1>
                    <p className="mt-2 text-xs text-muted-foreground max-w-2xl mx-auto">
                        Find answers to common questions about our bike rental service.
                    </p>
                </div>
            </header>

            <main className="py-8 md:py-12">
                <div className="container max-w-2xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-xs hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-[11px] text-muted-foreground">
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
