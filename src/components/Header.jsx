import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`header ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container header-content">
                <div className="logo">
                    <span className="logo-icon">⚡</span>
                    Contas<span className="highlight">Pagar</span>
                </div>

                <nav className="nav-links">
                    <a href="#beneficios">Benefícios</a>
                    <a href="#produto">Produto</a>
                    <a href="#planos">Planos</a>
                    <a href="#depoimentos">Depoimentos</a>
                </nav>

                <div className="header-actions">
                    <Button variant="outline" className="login-btn">Login</Button>
                    <Button variant="primary">Começar Agora</Button>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
