import { siteConfig } from '../data';
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-20 px-6 mt-20 bg-stone-100/50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-16">
          <div className="max-w-md w-full">
            <div className="text-2xl font-black text-emerald-950 mb-6 tracking-tight">{siteConfig.name}</div>
            <p className="text-stone-500 mb-8 text-sm font-body leading-relaxed max-w-sm">
              © {new Date().getFullYear()} {siteConfig.name}. Harvesting the future through precision-engineered organic solutions for a healthier planet.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {['Privacy Policy', 'Terms of Service', 'Sustainability Report', 'Career'].map((link) => (
                <a 
                  key={link}
                  className="text-stone-500 hover:text-emerald-700 transition-colors text-[10px] font-black uppercase tracking-widest hover:underline decoration-emerald-500/30 underline-offset-4" 
                  href="#"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-auto bg-white p-10 rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 relative group">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <h4 className="font-headline font-extrabold text-xl mb-6 text-emerald-900">Join our newsletter</h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:bg-white w-full sm:w-72 text-sm outline-none transition-all" 
                placeholder="Email address" 
                type="email"
              />
              <button className="signature-gradient text-white px-8 py-3 rounded-xl text-sm font-bold scale-95-on-click transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                Subscribe <Send size={14} />
              </button>
            </div>
            <p className="text-[10px] text-stone-400 mt-4 uppercase tracking-[0.2em] font-label font-bold">
              No spam, just seasonal insights.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
