import { motion } from 'framer-motion';
import { stats, siteConfig, images } from '../../data';

const Hero = () => {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0 scale-105">
        <img 
          className="w-full h-full object-cover brightness-[0.7] transform-gpu transition-all duration-700" 
          alt="expansive lush green crop field under a vibrant sunrise"
          src={images.hero} 
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white w-full">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary/30 backdrop-blur-md px-4 py-1 rounded-full text-xs font-label tracking-widest uppercase mb-6 inline-block border border-white/10"
          >
            {siteConfig.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl font-headline font-extrabold tracking-tight mb-6 leading-[1.1]"
          >
            The Future of Agriculture is <span className="text-primary-fixed">Organic & Precise</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-surface-variant/90 mb-10 leading-relaxed font-body max-w-2xl"
          >
            Leveraging advanced agronomy and sustainable practices to empower the next generation of global farmers with precision-engineered organic solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#products" className="signature-gradient text-white px-8 py-4 rounded-xl font-bold text-center shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all">
              Explore Products
            </a>
            <a href="#contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-white/20 hover:-translate-y-1 transition-all">
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-4xl font-headline font-extrabold text-primary-fixed">{stat.value}</span>
              <span className="text-surface-variant font-label text-sm uppercase tracking-wider opacity-80">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
