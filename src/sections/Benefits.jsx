import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, PieChart, Zap, Smartphone } from 'lucide-react';
import './Benefits.css';

const benefits = [
    {
        icon: <TrendingUp size={32} />,
        title: "Controle Automatizado",
        description: "Diga adeus às planilhas manuais. Automatize suas contas a pagar e receber com inteligência."
    },
    {
        icon: <PieChart size={32} />,
        title: "Projeção de Lucro",
        description: "Visualize o futuro do seu negócio com projeções financeiras precisas e metas claras."
    },
    {
        icon: <Zap size={32} />,
        title: "Dashboard Inteligente",
        description: "Todos os indicadores vitais da sua empresa em uma única tela, atualizados em tempo real."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Segurança Total",
        description: "Seus dados financeiros protegidos com a mais alta tecnologia de criptografia."
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut"
        }
    })
};

const Benefits = () => {
    return (
        <section id="beneficios" className="benefits-section section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Por que escolher o <span className="text-gradient">ContasPagar</span>?</h2>
                    <p className="section-subtitle">Funcionalidades pensadas para escalar o seu negócio.</p>
                </motion.div>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="benefit-card glass"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                        >
                            <div className="icon-wrapper">
                                {benefit.icon}
                            </div>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-description">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
