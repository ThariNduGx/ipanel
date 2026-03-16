import { motion } from 'motion/react';
import { PageShell } from '../components/PageShell';

const sections = [
  { title: '1. Acceptance of Terms', body: 'By accessing or using the i-Panel website (ipanel.lk) or purchasing i-Panel products, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.' },
  { title: '2. Products & Pricing', body: 'All prices shown on the i-Panel website are in Sri Lankan Rupees (LKR) inclusive of applicable taxes unless stated otherwise. Prices are indicative and subject to change. The confirmed price is the price stated in your purchase order confirmation. We reserve the right to withdraw any product from sale at any time.' },
  { title: '3. Orders & Payment', body: 'Online orders are subject to availability and acceptance by i-Panel. We reserve the right to refuse any order. Payment is required in full before goods are dispatched unless credit terms have been agreed in writing for authorised dealer accounts.' },
  { title: '4. Delivery', body: 'Delivery lead times are estimates only. i-Panel is not liable for delays caused by third-party logistics providers, weather events, or circumstances beyond our reasonable control. Risk of loss passes to the buyer upon delivery.' },
  { title: '5. Returns & Refunds', body: 'Panels may be returned within 14 days of delivery if: (a) they are in original, undamaged condition; (b) they were not cut or installed; (c) a valid proof of purchase is provided. Custom-ordered or cut panels are non-returnable. Restocking fees may apply.' },
  { title: '6. Warranty', body: 'i-Panel products are covered by the manufacturer warranty terms described on our Warranty page (ipanel.lk/warranty). Warranty coverage does not affect your statutory consumer rights under Sri Lankan law.' },
  { title: '7. Intellectual Property', body: 'All content on this website — including images, text, logos, and technical documents — is the intellectual property of i-Panel or its licensors and may not be reproduced, distributed, or used without written permission.' },
  { title: '8. Limitation of Liability', body: 'To the maximum extent permitted by Sri Lankan law, i-Panel\'s liability for any claim arising from the use of our products or website shall not exceed the purchase price of the product in question. We are not liable for indirect, consequential, or economic losses.' },
  { title: '9. Governing Law', body: 'These Terms are governed by the laws of Sri Lanka. Any disputes shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.' },
];

export function TermsAndConditions() {
  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        <section className="bg-brand-charcoal py-24 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-medium text-white"
          >
            Terms &amp; Conditions
          </motion.h1>
          <p className="text-white/40 text-xs mt-3 font-sans">Last updated: March 2025</p>
        </section>
        <article className="max-w-3xl mx-auto px-6 py-20 space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-serif text-lg text-brand-charcoal mb-2">{s.title}</h2>
              <p className="text-brand-muted text-[13px] font-sans leading-relaxed">{s.body}</p>
            </div>
          ))}
        </article>
      </div>
    </PageShell>
  );
}
