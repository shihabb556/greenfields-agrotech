import Section from '../Section';
import { MapPin, Phone, Mail, Globe, Share2, Camera, Send } from 'lucide-react';
import { contactInfo } from '../../data';

const Contact = () => {
  return (
    <Section id="contact" className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-surface rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-stone-200">
          {/* Form Area */}
          <div className="lg:w-3/5 p-8 md:p-16">
            <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-4 tracking-tight">Let's Grow Together</h2>
            <p className="text-on-surface-variant mb-10 leading-relaxed max-w-md">
              Have questions about our products or need a consultation? Our agronomists are ready to help.
            </p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant ml-1">Full Name</label>
                  <input 
                    className="w-full bg-surface-container-low border border-stone-100 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none text-sm" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant ml-1">Email Address</label>
                  <input 
                    className="w-full bg-surface-container-low border border-stone-100 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none text-sm" 
                    placeholder="john@farm.com" 
                    type="email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant ml-1">Inquiry Type</label>
                <select className="w-full bg-surface-container-low border border-stone-100 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none text-sm appearance-none cursor-pointer">
                  <option>Product Quote</option>
                  <option>Consultancy Services</option>
                  <option>Sustainability Partnership</option>
                  <option>Media Inquiry</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant ml-1">Your Message</label>
                <textarea 
                  className="w-full bg-surface-container-low border border-stone-100 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none text-sm" 
                  placeholder="Tell us about your land and your goals..." 
                  rows={5}
                ></textarea>
              </div>
              
              <button 
                className="signature-gradient text-on-primary py-5 px-10 rounded-2xl font-bold w-full md:w-fit scale-95-on-click transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-primary/30" 
                type="submit"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
          
          {/* Info Area */}
          <div className="lg:w-2/5 signature-gradient p-8 md:p-16 text-on-primary flex flex-col relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="mb-12 relative z-10">
              <h3 className="text-2xl font-headline font-bold mb-8 underline decoration-white/20 underline-offset-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-3 rounded-xl group-hover:bg-white/20 transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Headquarters</p>
                    <p className="opacity-80 text-sm leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-3 rounded-xl group-hover:bg-white/20 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Phone</p>
                    <p className="opacity-80 text-sm">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-3 rounded-xl group-hover:bg-white/20 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Email</p>
                    <p className="opacity-80 text-sm">{contactInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto relative z-10">
              <div className="rounded-3xl overflow-hidden h-48 mb-8 shadow-inner grayscale contrast-125 brightness-110 border border-white/10 group">
                <img 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
                  alt="map"
                  src={contactInfo.mapImage}
                  loading="lazy"
                />
              </div>
              
              <div className="flex gap-4">
                {[Globe, Share2, Camera].map((Icon, i) => (
                  <a key={i} className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 hover:-translate-y-1 transition-all border border-white/5 shadow-lg shadow-black/10" href="#">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
