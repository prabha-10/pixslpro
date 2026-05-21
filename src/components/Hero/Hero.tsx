import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="status-badge"
                >
                    <span className="pulse"></span>
                    Open for work
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-title"
                >
                    Web & Brand Design For <span className="text-gradient">Ambitious Founders</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="hero-subtitle"
                >
                    Helping startups scale with premium design and high-performance Framer websites.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="hero-actions"
                >
                    <button className="btn-primary">Book A Call</button>
                    <button className="btn-secondary">View Projects</button>
                </motion.div>

                <div className="hero-floating-elements">
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="floating-card c1"
                    >
                        <div className="avatar">JH</div>
                        <div>
                            <p className="name">James H. • Founder</p>
                            <p className="quote">"Exceptional work quality!"</p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                        className="floating-card c2"
                    >
                        <div className="avatar accent">SM</div>
                        <div>
                            <p className="name">Sarah M. • CEO</p>
                            <p className="quote">"Highly recommended!"</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
