import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">
                            <span className="logo-icon">⚡</span>
                            Contas<span className="highlight">Pagar</span>
                        </div>
                        <p className="footer-desc">
                            A revolução na gestão financeira da sua empresa. Simples, inteligente e poderoso.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Produto</h4>
                            <a href="#beneficios">Benefícios</a>
                            <a href="#planos">Preços</a>
                            <a href="#funcionalidades">Funcionalidades</a>
                        </div>
                        <div className="link-group">
                            <h4>Empresa</h4>
                            <a href="#sobre">Sobre Nós</a>
                            <a href="#carreiras">Carreiras</a>
                            <a href="#contato">Contato</a>
                        </div>
                        <div className="link-group">
                            <h4>Legal</h4>
                            <a href="#privacidade">Privacidade</a>
                            <a href="#termos">Termos de Uso</a>
                        </div>
                    </div>

                    <div className="footer-social">
                        <h4>Siga-nos</h4>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 ContasPagar. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
