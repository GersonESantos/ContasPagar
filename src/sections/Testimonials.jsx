import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        name: "Carlos Mendes",
        role: "CEO, TechSolutions",
        text: "A ContasPagar revolucionou a forma como gerenciamos nossas finanças. A clareza dos dados é impressionante.",
        avatar: "https://i.pravatar.cc/150?u=1"
    },
    {
        name: "Fernanda Lima",
        role: "Diretora Financeira, Grupo Alpha",
        text: "Simplesmente a melhor ferramenta do mercado. O suporte é incrível e a plataforma é muito intuitiva.",
        avatar: "https://i.pravatar.cc/150?u=2"
    },
    {
        name: "Ricardo Souza",
        role: "Fundador, StartupX",
        text: "Conseguimos reduzir nossos custos em 20% apenas usando os insights automáticos da plataforma.",
        avatar: "https://i.pravatar.cc/150?u=3"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="depoimentos" className="testimonials-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">O que dizem nossos <span className="text-gradient">clientes</span></h2>
                </div>

                <div className="testimonial-carousel">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="testimonial-card glass"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
                                ))}
                            </div>
                            <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>

                            <div className="testimonial-author">
                                <img
                                    src={testimonials[currentIndex].avatar}
                                    alt={testimonials[currentIndex].name}
                                    className="avatar"
                                />
                                <div className="author-info">
                                    <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                                    <span className="author-role">{testimonials[currentIndex].role}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="carousel-indicators">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
