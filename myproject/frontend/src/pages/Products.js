import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const products = [
  { 
    id: 1, 
    img: "/Threesome chain.jfif", 
    label: "Triple Chain Combo", 
    tag: "Chains", 
    badge: "Best Seller",
    price: "3,800 PKR",
    desc: "Our signature layered metal accessory. Includes three premium alloy link chains of varying lengths, designed to give the ultimate modern streetwear style.",
    specs: ["Lengths: 45cm, 50cm, 55cm", "Material: Premium Rhodium Plated Alloy", "Clasp: Secure Lobster Claw"]
  },
  { 
    id: 2, 
    img: "/anchor_combo_of3.jfif", 
    label: "Anchor Trio Set", 
    tag: "Chains", 
    badge: "New",
    price: "4,200 PKR",
    desc: "A themed maritime layered set featuring a subtle anchor pendant along with classic rope and curb links. Perfect for both casual and high-end wear.",
    specs: ["Pendant Size: 2cm", "Material: Marine Grade Stainless Steel", "Rust & Tarnish Resistant"]
  },
  { 
    id: 3, 
    img: "/bbchain.jfif", 
    label: "Bold & Black Chain", 
    tag: "Chains", 
    badge: null,
    price: "2,500 PKR",
    desc: "A thick, matte black plated chain that adds a strong industrial edge to any outfit. Engineered for durability and comfortable daily wear.",
    specs: ["Width: 8mm", "Finish: Premium Matte Black", "Material: Corrosion-resistant Steel"]
  },
  { 
    id: 4, 
    img: "/skullchain.jfif", 
    label: "Skull Chain", 
    tag: "Chains", 
    badge: "Limited",
    price: "2,900 PKR",
    desc: "Showcase your gothic edge with this intricate skull motif link chain. Hand-finished details on every skull link ensure an elite aesthetic.",
    specs: ["Weight: 65g", "Material: Aged Silver Finish Alloy", "Length: 50cm"]
  },
  { 
    id: 5, 
    img: "/RMVC Crust Combo.jfif", 
    label: "Crust Combo", 
    tag: "Accessories", 
    badge: "New",
    price: "3,200 PKR",
    desc: "A bold combination of natural stone beads and hand-crafted leather bands, offering a rugged yet polished masculine look.",
    specs: ["Bead Size: 8mm", "Materials: Onyx, Lava Stone & Cowhide Leather", "Closure: Adjustable Drawstring"]
  },
  { 
    id: 6, 
    img: "/boyring.jfif", 
    label: "Boy Ring", 
    tag: "Rings", 
    badge: null,
    price: "1,500 PKR",
    desc: "A sleek, minimalist signet ring with a polished flat surface. Excellent for everyday style or engraving personalized initials.",
    specs: ["Width: 10mm", "Sizes Available: 8, 9, 10, 11", "Material: High-Polished Titanium Steel"]
  },
  { 
    id: 7, 
    img: "/po3white.jfif", 
    label: "White Pearl Combo", 
    tag: "Accessories", 
    badge: null,
    price: "3,600 PKR",
    desc: "A modern luxury combination of organic freshwater pearl strands paired with high-polish silver micro-bead chains.",
    specs: ["Pearl Type: Selected Freshwater White Pearls", "Bead Size: 6mm", "Hypoallergenic & Nickle-Free"]
  },
  { 
    id: 8, 
    img: "/po3golden.jfif", 
    label: "Golden Pearl Set", 
    tag: "Accessories", 
    badge: "Premium",
    price: "4,000 PKR",
    desc: "An opulent statement set combining golden pearl-replica beads and 18k gold-plated accents. Designed to bring absolute class.",
    specs: ["Plating: 18K Yellow Gold Plating", "Strand Count: 2 Layers", "Material: Glass-Core Pearls & Brass"]
  },
];

function Products() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  
  // State for selected product details modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = categoryFilter
    ? products.filter(p => p.tag.toLowerCase() === categoryFilter.toLowerCase())
    : products;

  const HandleEnquire = (product) => {
    if (isLoggedIn) {
      setSelectedProduct(product);
    } else {
      alert("Please log in your account.");
      navigate("/Home");
    }
  };

  const HandleOrder = (productLabel) => {
    alert(`Order inquiry for "${productLabel}" received! Our service team will message you shortly to confirm your delivery address.`);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-zinc-900 to-slate-950 text-slate-100 font-sans flex flex-col justify-between">
      {/* Reusable Navbar */}
      <Navbar />

      {/* Page Hero */}
      <div className="py-14 text-center relative overflow-hidden flex-grow-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest text-amber-400 uppercase bg-amber-950/40 border border-amber-500/30 rounded-full">
          RMVC Showcase
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-serif">
          <span className="text-slate-200">
            {categoryFilter ? `${categoryFilter}` : "All"}
          </span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500">Collections</span>
        </h1>
        <p className="text-slate-400 mt-3 text-sm max-w-md mx-auto">
          {categoryFilter 
            ? `Viewing our premium collection of ${categoryFilter.toLowerCase()}.`
            : "Browse our complete catalog of premium chains, rings, watches, and accessories."
          }
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link to="/BuyPage" className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all duration-200 no-underline shadow-lg shadow-amber-500/20 text-sm">
            <i className="bi bi-bag-check-fill"></i> Shop by Category
          </Link>
          {categoryFilter && (
            <Link to="/Logosec" className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold rounded-xl border border-slate-800 transition-all duration-200 no-underline text-sm">
              Show All Products
            </Link>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="container max-w-7xl mx-auto px-4 pb-20 flex-grow">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <i className="bi bi-inbox text-5xl text-slate-600 block mb-4"></i>
            <p className="text-slate-500">No products found in this category.</p>
          </div>
        ) : (
          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                <ProductCard
                  img={product.img}
                  label={product.label}
                  tag={product.tag}
                  badge={product.badge}
                  onEnquire={() => HandleEnquire(product)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Details Modal (Visible only when logged in and product selected) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/60 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-all duration-200 z-10"
            >
              <i className="bi bi-x-lg text-sm"></i>
            </button>

            <div className="row g-0">
              {/* Product Image Column */}
              <div className="col-md-6 bg-slate-950 aspect-square md:aspect-auto md:h-[450px]">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.label}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info Column */}
              <div className="col-md-6 p-6 flex flex-col justify-between h-[450px] overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                      {selectedProduct.tag}
                    </span>
                    {selectedProduct.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-bold text-slate-950 bg-amber-400 rounded-full">
                        {selectedProduct.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-100 tracking-wide font-serif mb-2">
                    {selectedProduct.label}
                  </h2>
                  <div className="text-lg font-black text-amber-400 mb-4">
                    {selectedProduct.price}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {selectedProduct.desc}
                  </p>

                  {/* Specifications */}
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Specifications</h4>
                  <ul className="list-disc list-inside text-[11px] text-slate-500 space-y-1 pl-1">
                    {selectedProduct.specs.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => HandleOrder(selectedProduct.label)}
                    className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold rounded-xl text-xs transition-all duration-200 uppercase tracking-wider shadow-lg shadow-amber-500/20"
                  >
                    Order Now
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition-all duration-200 uppercase tracking-wider border border-slate-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}

export default Products;
