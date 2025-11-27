import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import './Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "A Gestão da Sua Empresa Começa Aqui";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 50); // Typing speed
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-background">
                <motion.div
                    className="shape shape-1"
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="shape shape-2"
                    animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="glow-overlay"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    className="hero-text-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title">
                        {text}<span className="cursor">|</span>
                    </h1>
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        A planilha empresarial mais completa, simples e inteligente que você já viu.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.8 }}
                    >
                        <Button variant="primary" className="hero-btn">Começar Agora</Button>
                        <Button variant="outline" className="hero-btn">Ver Demo</Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    {/* Placeholder for Dashboard UI */}
                    <div className="dashboard-mockup glass">
                        <div className="mockup-header">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <div className="mockup-body">
                            <div className="chart-placeholder">
                                <div className="bar" style={{ height: '40%' }}></div>
                                <div className="bar" style={{ height: '70%' }}></div>
                                <div className="bar" style={{ height: '50%' }}></div>
                                <div className="bar" style={{ height: '90%' }}></div>
                                <div className="bar" style={{ height: '60%' }}></div>
                            </div>
                            <div className="stats-row">
                                <div className="stat-card glass"></div>
                                <div className="stat-card glass"></div>
                                <div className="stat-card glass"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
