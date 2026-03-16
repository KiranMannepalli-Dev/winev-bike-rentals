"use client";

import { SITE_CONFIG } from "@/config/site";
import { useEffect, useState } from "react";

export default function TermsAndConditionsPage() {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="pt-16">
      <header className="py-10 md:py-12 text-center bg-card border-b">
        <div className="container">
          <h1 className="text-2xl md:text-3xl font-headline font-semibold">Terms and Conditions</h1>
          {lastUpdated ? (
            <p className="mt-2 text-sm text-muted-foreground">Last Updated: {lastUpdated}</p>
          ) : (
            <div className="h-5 mt-2" />
          )}
        </div>
      </header>
      
      <main className="py-10 md:py-12">
        <div className="container max-w-3xl mx-auto prose prose-invert text-muted-foreground prose-sm">
            <p>Welcome to {SITE_CONFIG.name}. By using our bike rental services, you agree to the following terms and conditions. Please read them carefully.</p>

            <h2>1. Eligibility</h2>
            <p>To rent a vehicle from {SITE_CONFIG.name}, you must be at least 18 years of age and possess a valid original Driving License as per Indian law. We reserve the right to refuse service to any person who does not meet our safety or verification criteria.</p>

            <h2>2. Documentation</h2>
            <p>The following documents are mandatory for verification at the time of pickup:</p>
            <ul>
                <li>Original Driving License (valid for the class of vehicle rented).</li>
                <li>Original Aadhaar Card or PAN Card for identification.</li>
                <li>Proof of local address in Hyderabad if required.</li>
            </ul>

            <h2>3. Security Deposit</h2>
            <p>A minimal refundable security deposit of ₹{SITE_CONFIG.stats.deposit} is required for all rentals. This deposit will be refunded in full upon the safe return of the vehicle in its original condition, subject to deduction for any damages, traffic violations, or late fees.</p>

            <h2>4. Rental Period and Late Fees</h2>
            <p>The rental period starts from the time of vehicle pickup. Late returns will be charged as per our standard hourly rates or an additional day price, depending on the delay duration.</p>

            <h2>5. Vehicle Use and Safety</h2>
            <p>The rider is responsible for following all traffic rules and regulations. The vehicle must only be used within the agreed-upon geographical limits. Over-speeding, reckless driving, or using the vehicle for commercial purposes without prior permission is strictly prohibited.</p>

            <h2>6. Maintenance and Damages</h2>
            <p>All vehicles are maintained to high standards. In the event of an accident or mechanical failure, the rider must inform {SITE_CONFIG.name} immediately. The rider is responsible for costs associated with damage caused by negligence or misuse.</p>

            <h2>7. Prohibited Uses</h2>
            <p>The vehicle shall not be used for racing, towing, or any illegal activities. Carrying more than the permitted number of passengers is strictly forbidden.</p>

            <h2>8. Contact Information</h2>
            <p>For any queries regarding these terms, please contact us at <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a> or call us at {SITE_CONFIG.phoneDisplay}.</p>
        </div>
      </main>
    </div>
  );
}
