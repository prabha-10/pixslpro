import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './ProjectShowcase.css';

const projects = [
    {
        id: 1,
        title: 'Neural Flow',
        category: 'AI Platform',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        title: 'EcoSphere',
        category: 'SaaS Design',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        title: 'Vortex Finance',
        category: 'Fintech App',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 4,
        title: 'Horizon Analytics',
        category: 'Data viz',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    }
];

const ProjectShowcase: React.FC = () => {
    return (
        <section className="projects section-padding" id="work">
            <div className="container">
                <div className="projects-header">
                    <h2 className="section-title">Selected <span className="text-gradient">Projects</span></h2>
                    <button className="btn-secondary">View All Work <ArrowRight size={16} style={{ marginLeft: '8px' }} /></button>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ y: -10 }}
                            className="project-card"
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <button className="btn-primary">View Case Study</button>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
