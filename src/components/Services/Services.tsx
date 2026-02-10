import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap, Code, Layout, Smartphone } from 'lucide-react';
import './Services.css';

const services = [
    {
        id: 's1',
        title: 'No-code Development',
        description: 'We build fast, responsive, and scalable websites using Framer and Webflow. Perfect for startups looking to launch quickly.',
        icon: <Zap size={24} />,
        details: ['Framer UI/UX', 'SEO Optimization', 'Custom Animations', 'CMS Integration']
    },
    {
        id: 's2',
        title: 'Product Design',
        description: 'User-centric interface and experience design that converts. We focus on utility and aesthetic excellence.',
        icon: <Layout size={24} />,
        details: ['Mobile Apps', 'Web Platforms', 'Design Systems', 'Prototyping']
    },
    {
        id: 's3',
        title: 'MVP Prototyping',
        description: 'From idea to a clickable prototype in weeks. We help you validate your product vision with real users.',
        icon: <Smartphone size={24} />,
        details: ['User Research', 'Wireframing', 'High-fidelity Prototypes', 'User Testing']
    },
    {
        id: 's4',
        title: 'Brand Identity',
        description: 'Creating memorable brands that stand out in crowded markets. We define your visual language.',
        icon: <Code size={24} />,
        details: ['Logo Design', 'Brand Guidelines', 'Typography', 'Color Theory']
    }
];

const Services: React.FC = () => {
    const [activeId, setActiveId] = useState<string | null>(services[0].id);

    return (
        <section className="services section-padding" id="services">
            <div className="container">
                <div className="services-header">
                    <span className="section-subtitle">What we do</span>
                    <h2 className="section-title">Our specialized <span className="text-gradient">expertise</span></h2>
                </div>

                <div className="services-list">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`service-item ${activeId === service.id ? 'active' : ''}`}
                            onClick={() => setActiveId(activeId === service.id ? null : service.id)}
                        >
                            <div className="service-header-row">
                                <div className="service-title-group">
                                    <div className="service-icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                </div>
                                <motion.div
                                    animate={{ rotate: activeId === service.id ? 180 : 0 }}
                                    className="chevron"
                                >
                                    <ChevronDown size={20} />
                                </motion.div>
                            </div>

                            <AnimatePresence>
                                {activeId === service.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="service-content"
                                    >
                                        <p>{service.description}</p>
                                        <ul className="service-tags">
                                            {service.details.map((detail, idx) => (
                                                <li key={idx}>{detail}</li>
                                            ))}
                                        </ul>
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

export default Services;
