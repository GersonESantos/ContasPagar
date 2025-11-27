import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section section-padding">
            <div className="cta-background">
                <div className="cta-glow"></div>
            </div>

            <div className="container cta-content">
                <motion.h2
                    className="cta-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Transforme sua gestão empresarial <br />
                    <span className="highlight-white">hoje mesmo.</span>
                </motion.h2>

                <motion.div
                    className="cta-action"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <Button variant="primary" className="cta-btn-giant">
                        Começar Gratuitamente
                    </Button>
                    <p className="cta-note">Sem cartão de crédito necessário. 14 dias grátis.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
