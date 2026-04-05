import { useState } from 'react';
import Section from '../Section';
import { products } from '../../data';

const categories = ["All Products", "Seeds", "Equipment", "Fertilizers"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts = activeCategory === "All Products" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <Section id="products" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-tertiary font-label font-semibold tracking-widest uppercase mb-4 block">Our Inventory</span>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-6 tracking-tight">Precision Farming Essentials</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' 
                  : 'bg-surface-container hover:bg-surface-container-highest text-stone-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className={`${
                product.featured ? 'md:col-span-2 flex-col md:flex-row' : 'flex-col'
              } bg-surface-container rounded-[2rem] overflow-hidden group flex transition-all duration-500 hover:shadow-2xl border border-stone-200/50`}
            >
              <div className={`${product.featured ? 'md:w-1/2 h-64 md:h-auto' : 'h-64'} overflow-hidden`}>
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt={product.title}
                  src={product.image}
                  loading="lazy"
                />
              </div>
              <div className={`${product.featured ? 'md:w-1/2' : ''} p-10 flex flex-col justify-center`}>
                {product.tag && (
                  <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2">
                    {product.tag}
                  </span>
                )}
                <h3 className={`${product.featured ? 'text-3xl' : 'text-2xl'} font-headline font-bold text-on-surface mb-4`}>
                  {product.title}
                </h3>
                <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">
                  {product.description}
                </p>
                <button className="signature-gradient text-on-primary py-4 px-8 rounded-xl font-bold w-fit scale-95-on-click shadow-lg hover:shadow-primary/30 transition-all">
                  {product.featured ? "Request Quote" : "Details"}
                </button>
              </div>
            </div>
          ))}

          {/* Small Bento Card */}
          <div className="md:col-span-2 bg-primary-container rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-10 border border-emerald-900/10">
            <div className="md:w-2/3">
              <h3 className="text-3xl font-headline font-bold text-on-primary-container mb-4">Custom Bulk Orders?</h3>
              <p className="text-on-primary-container opacity-80 mb-6">
                We provide specialized pricing and logistics for commercial farms and cooperatives managing over 500 acres.
              </p>
              <a 
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-stone-50 transition-colors shadow-xl" 
                href="#contact"
              >
                Speak to a Specialist <span className="material-symbols-outlined text-sm">chat</span>
              </a>
            </div>
            <div className="md:w-1/3 flex justify-center opacity-20 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined" style={{ fontSize: '100px' }}>local_shipping</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Products;
