import { motion } from 'motion/react';
import { PageShell } from '../components/PageShell';

const sections = [
  { title: 'Information We Collect', body: 'We collect information you provide directly when you submit quote requests, contact forms, warranty registrations, or purchase orders through our website. This includes: name, email address, phone number, delivery address, and project details. We also collect standard web analytics data (page views, browser type, referral source) through privacy-respecting analytics tools.' },
  { title: 'How We Use Your Information', body: 'We use your information to: process quote requests and purchase orders; respond to customer service enquiries; send warranty confirmation and product update notifications (with your consent); improve our website and product offerings; comply with legal obligations under Sri Lankan law.' },
  { title: 'Information Sharing', body: 'We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share information with: authorised dealers fulfilling your order; logistics partners for delivery; payment processors for transaction security; legal authorities if required by Sri Lankan law.' },
  { title: 'Data Security', body: 'We implement industry-standard security measures including SSL encryption for data transmission, secure server infrastructure, and access controls limiting data access to authorised personnel only. No method of electronic transmission is 100% secure; we cannot guarantee absolute security.' },
  { title: 'Cookies', body: 'Our website uses essential cookies required for site functionality, and optional analytics cookies to understand site usage. You can disable cookies through your browser settings. Disabling cookies may affect certain website features.' },
  { title: 'Your Rights', body: 'You have the right to: access the personal information we hold about you; request correction of inaccurate information; request deletion of your information (subject to legal retention requirements); opt out of marketing communications at any time.' },
  { title: 'Contact', body: 'For privacy-related queries, contact our Data Protection Officer at: privacy@ipanel.lk or by writing to i-Panel, No. 42, Industrial Zone, Homagama, Sri Lanka.' },
];

export function PrivacyPolicy() {
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
            Privacy Policy
          </motion.h1>
          <p className="text-white/40 text-xs mt-3 font-sans">Last updated: March 2025</p>
        </section>
        <article className="max-w-3xl mx-auto px-6 py-20 space-y-10">
          <p className="text-brand-muted text-[14px] font-sans leading-relaxed border-l-4 border-brand-charcoal/20 pl-6">
            i-Panel (a trading name of [Company Name], registered in Sri Lanka) is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information.
          </p>
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-serif text-xl text-brand-charcoal mb-3">{s.title}</h2>
              <p className="text-brand-muted text-[13px] font-sans leading-relaxed">{s.body}</p>
            </div>
          ))}
        </article>
      </div>
    </PageShell>
  );
}
