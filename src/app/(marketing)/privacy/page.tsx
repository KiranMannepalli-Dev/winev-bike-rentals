import { SITE_CONFIG } from "@/config/site";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <header className="py-16 md:py-24 text-center bg-card border-b">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Privacy Policy</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </header>
      
      <main className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto prose prose-invert text-muted-foreground">
            <p>Welcome to {SITE_CONFIG.name}. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our bike rental services.</p>

            <h2>1. Information We Collect</h2>
            <p>We may collect personal information from you in a variety of ways, including, but not limited to, when you rent a bike, contact us, or interact with our services. The information we may collect includes:</p>
            <ul>
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, mailing address.</li>
                <li><strong>Verification Information:</strong> Government-issued ID (such as a driving license or Aadhaar card) for verification purposes.</li>
                <li><strong>Transactional Information:</strong> Details about rentals you make, including date, time, and payment information.</li>
                <li><strong>Device Information:</strong> We may collect information about the device you use to access our services, including IP address, browser type, and operating system.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including to:</p>
            <ul>
                <li>Provide, operate, and maintain our services.</li>
                <li>Process your transactions and manage your rentals.</li>
                <li>Improve, personalize, and expand our services.</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the service.</li>
                <li>For compliance purposes, including enforcing our Terms of Service, or other legal rights.</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</p>

            <h2>4. Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

            <h2>5. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h2>6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.</p>
        </div>
      </main>
    </div>
  );
}
