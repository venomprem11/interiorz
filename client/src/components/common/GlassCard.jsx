
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', tilt = true }) => {
    return (
        <motion.div
            whileHover={tilt ? { scale: 1.02, rotateY: 5, rotateX: 5 } : { scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`glass p-6 rounded-2xl relative overflow-hidden ${className}`}
        >
            {/* Decorative gradient blob inside card */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

export default GlassCard;
