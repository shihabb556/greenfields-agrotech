import Section from '../Section';
import { Quote } from 'lucide-react';
import { images } from '../../data';

const Projects = () => {
  return (
    <Section id="projects" className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-primary font-label font-semibold tracking-widest uppercase mb-4 block text-center">Impact & Results</span>
        <h2 className="text-xl md:text-4xl font-headline font-extrabold text-on-surface text-center mb-16 tracking-tight">Success Stories from the Field</h2>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="relative rounded-[3rem] overflow-hidden h-[500px] shadow-2xl group border border-stone-200/50">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="happy elder farmer standing in a flourishing cornfield"
                src={images.caseStudy}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <span className="bg-tertiary px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block shadow-lg">Case Study: Valley View Farm</span>
                <h3 className="text-2xl md:text-xl font-headline font-bold mb-4">35% Increase in Yield, 100% Organic</h3>
                <p className="text-white/80 leading-relaxed max-w-lg">
                  By implementing our BioBoost system and automated sensors, Valley View Farm transformed their dry-land operations into a thriving organic oasis.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-8">
              <div className="bg-surface p-10 rounded-[2rem] border border-stone-100 shadow-sm relative group hover:border-primary/20 transition-all duration-500">
                <Quote className="text-tertiary-fixed-dim absolute -top-4 -left-4 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity" />
                <p className="text-lg md:text-xl text-on-surface italic mb-8 relative z-10 leading-relaxed">
                  "Switching to GreenFields wasn't just a business move, it was a legacy move. My soil is healthier today than it was when my grandfather farmed it, and our profits have never been higher."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-stone-200 border-2 border-primary/20">
                    <img
                      className="w-full h-full object-cover"
                      alt="David Miller"
                      src={images.testimonial}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">David Miller</h4>
                    <p className="text-on-surface-variant text-sm">3rd Generation Grain Farmer</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary p-10 rounded-[2rem] text-on-primary shadow-xl shadow-primary/20 group hover:bg-on-primary-fixed-variant transition-colors duration-500">
                <h4 className="font-headline font-bold text-2xl mb-4 text-primary-fixed">12,000+ Tonnes</h4>
                <p className="opacity-80 leading-relaxed">
                  Of carbon sequestered by our partner farms last year through precise regenerative soil management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
