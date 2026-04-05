import Section from '../Section';
import { Sprout, Tractor, Brain, FlaskConical, ArrowRight } from 'lucide-react';
import { services } from '../../data';

const iconMap: Record<string, any> = {
  Sprout,
  Tractor,
  Brain,
  FlaskConical,
};

const Services = () => {
  return (
    <Section id="services" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-label font-semibold tracking-widest uppercase mb-4 block">What We Offer</span>
            <h2 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight">Comprehensive Agri-Solutions</h2>
          </div>
          <p className="text-on-surface-variant max-w-sm">From the first seed to the final harvest, we provide the expertise and infrastructure to succeed.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div 
                key={index} 
                className="group bg-surface rounded-3xl p-8 hover:bg-primary transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 border border-stone-100/50"
              >
                <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors shadow-inner">
                  {Icon && <Icon className="text-on-primary-container group-hover:text-white" size={32} />}
                </div>
                <h3 className="font-headline font-bold text-2xl mb-4 group-hover:text-white">{service.title}</h3>
              <p className="text-on-surface-variant group-hover:text-white/80 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a 
                className="text-primary group-hover:text-white font-bold flex items-center gap-2 text-sm uppercase tracking-wider transition-colors" 
                href={service.link}
              >
                Learn More <ArrowRight size={16} />
              </a>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Services;
