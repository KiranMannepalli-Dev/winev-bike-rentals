# **App Name**: Winev Bike Rental

## Core Features:

- Bike Catalog Browsing: Enable users to browse through an organized catalog of electric bikes and cycles, featuring key details and options to filter listings by category.
- Detailed Bike View: Provide dedicated pages for each bike model, showcasing multiple images, comprehensive specifications, flexible pricing plans (hourly/daily/weekly), and real-time availability status.
- Rental Enquiry System: Implement a secure form-based system for users to submit rental inquiries, capturing their details, preferred bike model, rental duration, and special requirements. Includes client-side validation and robust server-side processing with rate limiting and bot protection.
- Direct WhatsApp Contact: Integrate direct communication channels via WhatsApp, allowing users to initiate inquiries or booking requests through pre-filled messages instantly, directly addressing the business goal of conversion.
- Interactive Location Map: Display the Winev Bike Rental shop's primary location in Hyderabad on an interactive, dark-themed map, complete with business hours, address, phone number, and a 'Get Directions' option.
- Customer Testimonials Showcase: Feature customer testimonials and Google review highlights to build trust and showcase the quality of service, reinforcing the 5-star rating.
- Informational Content Pages: Dedicated pages for 'About Us' to share brand story, 'Contact Us' with full form and details, and an 'FAQ' section with accordion UI for common queries.

## Style Guidelines:

- Primary action color: Brand Green (#22C55E) will be used for key call-to-action buttons and interactive elements, reflecting the EV/eco theme and providing clear contrast on dark backgrounds.
- Dominant background color: A near-black shade (#0A0A0A) forms the base of the design, contributing to a premium, minimalist, and sleek dark aesthetic throughout the application.
- Accent color: A soft green-yellow (#D5D98C) will be used for subtle highlights and complementary elements, providing visual interest without competing with the primary action color. (Calculated from HSL: 117, 50%, 70%).
- Hero and headline text: 'Syne' (proportional sans-serif, 700 and 800 weights) provides a bold and modern display, suitable for impactful section titles and hero content.
- Body and UI text: 'Inter' (grotesque-style sans-serif, 400, 500, and 600 weights) ensures excellent readability for general content and user interface elements, maintaining a contemporary feel.
- Monospaced for pricing and numerical data: 'JetBrains Mono' (monospaced sans-serif) offers precise and clear presentation for prices and other numerical information like stats.
- Icon set: Lucide React for all iconography, ensuring consistency, high quality, and a minimal aesthetic that aligns with the premium design.
- Mobile-first approach: All design elements and layouts are primarily built for smaller screens, gradually scaling up to larger viewports. Fluid typography (clamp()) and grid layouts starting with 'grid-cols-1' ensure optimal responsiveness.
- Subtle border styling: Cards and interactive elements feature a maximum border-radius of 4px-8px, typically defined by a 1px solid border in Accent Dark (#2A2A2A) with no box-shadows, maintaining a clean and modern structure.
- Purposeful, smooth animations: Scroll-triggered staggered fade-up effects (40px translateY, opacity 0→1, 0.5s duration, cubic-bezier easing) will enhance user experience, while strictly adhering to 'prefers-reduced-motion' for accessibility.