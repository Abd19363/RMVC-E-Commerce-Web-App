import React from 'react';

function ProductCard({ img, label, tag, badge, onEnquire }) {
  return (
    <div className="group bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-amber-500/40 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col h-100">
      {/* Image Container */}
      <div className="aspect-square overflow-hidden relative bg-slate-950">
        <img
          src={img}
          alt={label}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {badge && (
          <span className="absolute top-3 right-3 px-2.5 py-1 text-2xs font-extrabold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full shadow-md">
            {badge}
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">{tag}</span>
        <h3 className="text-sm font-extrabold text-slate-200 mt-1 mb-4 flex-grow tracking-wide">{label}</h3>
        <button
          onClick={onEnquire}
          className="w-full py-2.5 text-xs font-bold bg-slate-800 group-hover:bg-amber-500 text-slate-300 group-hover:text-slate-950 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md shadow-slate-950/20"
        >
          <i className="bi bi-tag-fill"></i> View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
