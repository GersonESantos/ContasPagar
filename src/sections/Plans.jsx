import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '../components/Button';
import './Plans.css';

const plans = [
    {
        name: "Essencial",
        price: "R$ 49",
        period: "/mês",
        features: [
            "Gestão de Contas a Pagar",
            "Relatórios Básicos",
            "1 Usuário",
            "Suporte por Email"
        ]
    },
    {
        name: "Profissional",
        price: "R$ 99",
        period: "/mês",
        popular: true,
        features: [
            "Tudo do Essencial",
            "Gestão de Receitas",
            "Projeção de Fluxo de Caixa",
            "5 Usuários",
            "Suporte Prioritário"
        ]
    },
    {
        name: "Empresa Plus",
        price: "R$ 199",
        period: "/mês",
        features: [
            "Tudo do Profissional",
            "API de Integração",
            "Múltiplas Empresas",
            "Usuários Ilimitados",
            "Gerente de Conta Dedicado"
        ]
    }
];

const Plans = () => {
    return (
        <section id="planos" className="plans-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Planos que cabem no seu <span className="text-gradient">bolso</span></h2>
                    <p className="section-subtitle">Escolha a melhor opção para o tamanho da sua empresa.</p>
                </div>

                <div className="plans-grid">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`plan-card glass ${plan.popular ? 'popular' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -15 }}
                        >
                            {plan.popular && <div className="popular-badge">Mais Escolhido</div>}
                            <h3 className="plan-name">{plan.name}</h3>
                            <div className="plan-price">
                                <span className="currency">R$</span>
                                <span className="amount">{plan.price.replace('R$ ', '')}</span>
                                <span className="period">{plan.period}</span>
                            </div>

                            <ul className="plan-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <Check size={18} className="check-icon" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.popular ? 'primary' : 'outline'}
                                className="plan-btn"
                            >
                                Assinar Agora
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plans;
