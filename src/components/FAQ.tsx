import React, { useState } from 'react';
import { BlurReveal } from './BlurReveal';
import { ChevronDown, PhoneCall, ArrowRight } from 'lucide-react';

const faqs = [
    {
        category: "Materials & Composition",
        question: "What are i-Panel ceiling panels made of?",
        answer: "i-Panel ceiling panels are made from a combination of PVC and calcium carbonate, ensuring a robust, lightweight, and highly durable architectural solution that stands the test of time."
    },
    {
        category: "Water Resistance",
        question: "Are they suitable for wet areas?",
        answer: "Yes, i-Panel ceiling panels are completely waterproof and ideal for use in wet areas such as bathrooms, kitchens, and exterior soffits without the risk of rot or water damage."
    },
    {
        category: "Installation",
        question: "How easy is the installation process?",
        answer: "i-Panel ceiling panels are designed for efficient installation. They are lightweight, easy to handle, and can be easily cut using a saw or a sharp blade, allowing for seamless integration into any space."
    },
    {
        category: "Temperature Performance",
        question: "What temperatures can they withstand?",
        answer: "Yes, i-Panel ceiling panels can withstand a maximum continuous temperature of up to 60°C, making them perfectly suited for the Sri Lankan climate and standard interior environments."
    },
    {
        category: "Maintenance",
        question: "How do I maintain and clean them?",
        answer: "Maintenance is virtually zero. Simply use a damp cloth or a soft, non-abrasive cleaning agent when needed. Avoid using abrasive surfaces or harsh chemicals to preserve their luxury finish."
    },
    {
        category: "Availability",
        question: "Where can I purchase in Sri Lanka?",
        answer: "i-Panel ceiling panels are available through our extensive network of certified retailers and official showrooms across Sri Lanka, including major home improvement centers."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 md:py-32 bg-brand-surface relative overflow-hidden border-t border-black/5">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-brand-gold/5 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />
            <div className="noise-overlay z-10 opacity-10"></div>

            <div className="container mx-auto px-6 relative z-20">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
                    <BlurReveal>
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/5 bg-white shadow-sm mb-8">
                            <span className="text-brand-charcoal/80 text-[10px] uppercase font-sans tracking-[0.3em] font-bold">
                                Support
                            </span>
                        </div>
                    </BlurReveal>

                    <BlurReveal delay={0.2}>
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-medium tracking-tight leading-[1.05] mb-6 text-brand-charcoal">
                            Frequently Asked <span className="italic text-brand-gold-dark font-light">Questions.</span>
                        </h2>
                    </BlurReveal>

                    <BlurReveal delay={0.3}>
                        <p className="text-brand-muted text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
                            Get instant answers to common questions about our i-Panel ceiling solutions and installation process.
                        </p>
                    </BlurReveal>
                </div>

                {/* Accordion List */}
                <div className="max-w-4xl mx-auto mb-32">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <BlurReveal key={index} delay={0.2 + index * 0.1}>
                                <div
                                    className={`border-b border-black/5 transition-all duration-500 overflow-hidden ${isOpen ? 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.02)] rounded-2xl border-transparent -mx-6 px-6 md:-mx-8 md:px-8 mb-4' : 'hover:bg-black/[0.02]'}`}
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none group"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                                            <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-brand-gold-dark/60 w-32 md:w-48 transition-colors duration-300 group-hover:text-brand-gold-dark">
                                                {faq.category}
                                            </span>
                                            <h3 className={`text-lg md:text-xl font-serif font-medium transition-colors duration-300 ${isOpen ? 'text-brand-gold-dark' : 'text-brand-charcoal group-hover:text-brand-dark'}`}>
                                                {faq.question}
                                            </h3>
                                        </div>
                                        <div className={`flex-shrink-0 ml-4 w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-500 ${isOpen ? 'bg-brand-gold-dark border-brand-gold-dark text-white rotate-180' : 'border-black/10 text-brand-muted group-hover:border-brand-gold-dark group-hover:text-brand-gold-dark'}`}>
                                            <ChevronDown size={18} strokeWidth={1.5} />
                                        </div>
                                    </button>

                                    <div
                                        className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'}`}
                                    >
                                        <div className="md:pl-[14rem] max-w-3xl">
                                            <p className="text-brand-muted font-light leading-relaxed text-sm md:text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </BlurReveal>
                        );
                    })}
                </div>

                {/* Final Call to Action */}
                <BlurReveal delay={0.6}>
                    <div className="max-w-5xl mx-auto bg-brand-charcoal rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-[0_30px_60px_rgba(28,28,28,0.2)]">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.15),transparent_60%)] pointer-events-none" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                            <div className="text-center lg:text-left">
                                <h3 className="text-3xl md:text-4xl font-serif font-medium text-white mb-4 tracking-tight">
                                    Ready to elevate your space?
                                </h3>
                                <p className="text-white/60 font-light text-base md:text-lg max-w-md">
                                    Speak directly with our architectural specialists or request physical samples for your project.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
                                <a href="tel:+94112345678" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-brand-charcoal transition-all w-full sm:w-auto text-sm uppercase tracking-wider font-sans font-bold group">
                                    <PhoneCall size={16} className="group-hover:animate-pulse" />
                                    +94 11 234 5678
                                </a>
                                <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-gold-dark text-white hover:bg-brand-gold transition-all shadow-[0_10px_30px_rgba(197,160,89,0.3)] w-full sm:w-auto text-sm uppercase tracking-wider font-sans font-bold group">
                                    Request a Sample
                                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </BlurReveal>

            </div>
        </section>
    );
}
