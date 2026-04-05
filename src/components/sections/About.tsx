import Section from '../Section';
import { Rocket, Eye, Shield, CheckCircle, Leaf } from 'lucide-react';
import { images } from '../../data';

const About = () => {
  return (
    <Section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                className="w-full h-[600px] object-cover" 
                alt="young green sprout emerging from dark fertile soil"
                src={images.about} 
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-tertiary-fixed p-8 rounded-3xl hidden md:block max-w-xs shadow-lg border border-white/20">
              <p className="text-on-tertiary-fixed font-headline font-bold text-lg italic leading-tight">
                "Roots in tradition, vision in technology."
              </p>
            </div>
          </div>
          
          <div>
            <span className="text-primary font-label font-semibold tracking-widest uppercase mb-4 block">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-8 tracking-tight">Decades of Agronomic Excellence</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              Founded in 1994, GreenFields AgroTech began as a small seed research facility. Today, we are a beacon of sustainable innovation, bridging the gap between ancestral wisdom and cutting-edge biophysics.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-surface-container-low p-6 rounded-2xl border border-stone-100 hover:border-primary/20 transition-colors">
                <Rocket className="text-primary mb-4 w-10 h-10" />
                <h3 className="font-headline font-bold text-xl mb-2">Our Mission</h3>
                <p className="text-on-surface-variant text-sm">To provide precision tools and organic inputs that maximize yield while regenerating local ecosystems.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-2xl border border-stone-100 hover:border-tertiary/20 transition-colors">
                <Eye className="text-tertiary mb-4 w-10 h-10" />
                <h3 className="font-headline font-bold text-xl mb-2">Our Vision</h3>
                <p className="text-on-surface-variant text-sm">A global agricultural landscape where productivity and planetary health are inextricably linked.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-8 grayscale opacity-60">
              <Shield size={40} />
              <CheckCircle size={40} />
              <Leaf size={40} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
