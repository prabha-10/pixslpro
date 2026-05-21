import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary, but a landing page typically takes 2-3 weeks, while a more complex web application might take 6-10 weeks from discovery to launch."
    },
    {
        question: "Do you offer web development?",
        answer: "Yes, we specialize in high-performance Framer and Webflow development. For complex web applications, we use modern technologies like React, Next.js, and Supabase."
    },
    {
        question: "Can I cancel my monthly subscription anytime?",
        answer: "Absolutely. Our Design Partner plan is month-to-month with no long-term commitment. You can pause or cancel at any time."
    },
    {
        question: "What design tools do you use?",
        answer: "We primarily use Figma for design and Framer/Webflow for development. We also use Adobe Creative Suite for branding and specialized graphic work."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="faq section-padding" id="faq">
            <div className="container">
                <div className="faq-header">
                    <h2 className="section-title">Common <span className="text-gradient">Questions</span></h2>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <button
                                className="faq-question"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span>{faq.question}</span>
                                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="faq-answer"
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
