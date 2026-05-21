import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const plans = [
    {
        name: 'Product Design',
        price: '$2,200',
        frequency: 'One-time',
        description: 'Perfect for startups needing a high-fidelity prototype or a landing page.',
        features: ['High-fidelity Prototypes', 'Landing Page Design', 'Source Files Included', '2 Rounds of Revisions'],
        buttonText: 'Get Started',
        highlight: false
    },
    {
        name: 'Design Partner',
        price: '$4,000',
        frequency: 'Monthly',
        description: 'Your dedicated design team for ongoing product development and scaling.',
        features: ['Unlimited Design Requests', 'Fast Turnaround (24-48h)', 'Daily Communication', 'Cancel Anytime'],
        buttonText: 'Start Subscription',
        highlight: true
    },
    {
        name: 'Custom',
        price: '$9,000',
        frequency: 'Starts at',
        description: 'Tailored solutions for complex enterprise projects and full brand identity.',
        features: ['Full Brand Strategy', 'Complex Web Applications', 'Custom Illustrations', 'Priority Support'],
        buttonText: 'Contact Us',
        highlight: false
    }
];

const Pricing: React.FC = () => {
    return (
        <section className="pricing section-padding" id="pricing">
            <div className="container">
                <div className="pricing-header">
                    <span className="section-subtitle">Transparent Pricing</span>
                    <h2 className="section-title">Choose the right <span className="text-gradient">plan</span> for you</h2>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div key={index} className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                            {plan.highlight && <div className="popular-badge">Most Popular</div>}
                            <h3>{plan.name}</h3>
                            <div className="price-row">
                                <span className="price-amount">{plan.price}</span>
                                <span className="price-frequency">/{plan.frequency}</span>
                            </div>
                            <p className="plan-description">{plan.description}</p>

                            <ul className="plan-features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <Check size={18} className="check-icon" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`btn-${plan.highlight ? 'accent' : 'secondary'} plan-btn`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
