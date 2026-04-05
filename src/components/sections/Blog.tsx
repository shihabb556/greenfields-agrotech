import Section from '../Section';
import { articles } from '../../data';
import { ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  return (
    <Section id="blog" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-primary font-label font-semibold tracking-widest uppercase mb-4 block">Knowledge Center</span>
            <h2 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight">Seasonal Guides & Innovations</h2>
          </div>
          <a className="text-primary font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-1 flex items-center gap-1 group" href="#">
            View All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="rounded-3xl overflow-hidden mb-6 aspect-[4/3] relative border border-stone-100">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={article.title}
                  src={article.image}
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className={`backdrop-blur-md text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm ${
                    article.category === 'Innovation' ? 'bg-primary/90 text-white' : 
                    article.category === 'Sustainability' ? 'bg-tertiary/90 text-white' : 
                    'bg-emerald-600/90 text-white'
                  }`}>
                    {article.category}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-4 group-hover:text-primary transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-on-surface-variant text-sm mb-6 line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-on-surface-variant text-[10px] font-label uppercase tracking-wider">
                <span>{article.date}</span>
                <span className="opacity-30">•</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Blog;
