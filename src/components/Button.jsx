import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import './Button.css'; // We'll create this or use inline styles/modules. I'll use inline/styled for simplicity or a CSS file.

// Let's use a CSS file for specific component styles to keep it clean, or just use the global CSS classes we defined + some specific ones.
// Actually, for "ultra professional", I'll add a specific CSS file for the button to handle the glow/hover effects nicely.

const Button = ({ children, variant = 'primary', className, ...props }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={clsx('custom-btn', variant, className)}
            {...props}
        >
            {children}
            {variant === 'primary' && <div className="btn-glow" />}
        </motion.button>
    );
};

export default Button;
