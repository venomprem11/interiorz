
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Blobs */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-gold font-medium tracking-[0.3em] text-sm mb-4 uppercase">Modern Luxury Living</h2>
                    <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8">
                        Crafting Spaces <br /> That Inspire <span className="text-gold">Life.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-charcoal/70 dark:text-white/70 text-lg mb-12">
                        Experience the pinnacle of high-end interior design. We blend aesthetics with functionality to create
                        timeless architecture that speaks to your soul.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/portfolio" className="bg-charcoal dark:bg-gold text-white dark:text-charcoal px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform hover-glow">
                            Explore Projects <ArrowRight size={20} />
                        </Link>
                        <Link to="/contact" className="glass px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all">
                            Book a Consultation
                        </Link>
                    </div>
                </motion.div>

                {/* Statistics Placeholder */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { label: 'Completed Projects', value: '250+' },
                        { label: 'Years Experience', value: '15+' },
                        { label: 'Design Awards', value: '42' },
                        { label: 'Happy Clients', value: '180+' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h3 className="text-3xl font-bold text-gold mb-1">{stat.value}</h3>
                            <p className="text-xs uppercase tracking-widest opacity-60">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
