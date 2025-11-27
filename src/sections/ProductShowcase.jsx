import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ProductShowcase.css';

const ProductShowcase = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5], [45, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section id="produto" className="product-section section-padding" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Visual Profissional, <span className="text-gradient">Dados Claros</span></h2>
                    <p className="section-subtitle">Planejamento nunca foi tão fácil. Tenha o controle total na palma da sua mão.</p>
                </div>

                <div className="showcase-stage">
                    <motion.div
                        className="device-group"
                        style={{ rotateX, scale, opacity }}
                    >
                        {/* Laptop */}
                        <div className="device laptop glass">
                            <div className="screen">
                                <div className="app-header"></div>
                                <div className="app-sidebar"></div>
                                <div className="app-content">
                                    <div className="app-card big"></div>
                                    <div className="app-row">
                                        <div className="app-card"></div>
                                        <div className="app-card"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="keyboard"></div>
                        </div>

                        {/* Tablet */}
                        <motion.div
                            className="device tablet glass"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="screen">
                                <div className="app-content-mobile"></div>
                            </div>
                        </motion.div>

                        {/* Mobile */}
                        <motion.div
                            className="device mobile glass"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="screen">
                                <div className="app-content-mobile"></div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
