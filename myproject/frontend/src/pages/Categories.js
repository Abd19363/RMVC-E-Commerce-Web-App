import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Categories() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const categories = [
    {
      id: "watchpage",
      route: "/Watch",
      icon: "bi-watch",
      title: "Luxury Watches",
      subtitle: "Timepieces",
      desc: "Rolex, Casio, Citizen & more — precision chronographs and statement wristwatches.",
      img: "/bi1.jpg",
      badge: "35+ Models",
    },
    {
      id: "bandpage",
      route: "/Logosec?category=Accessories",
      icon: "bi-gem",
      title: "Premium Bracelets",
      subtitle: "Wristwear",
      desc: "Handcrafted sterling silver, beaded combos, joker & themed bangles.",
      img: "/bracelet1.jfif",
      badge: "20+ Styles",
    },
    {
      id: "chainpage",
      route: "/Logosec?category=Chains",
      icon: "bi-link-45deg",
      title: "Signature Chains",
      subtitle: "Accessories",
      desc: "Cuban links, curb chains, anchor combos, and iced necklace sets.",
      img: "/Threesome chain.jfif",
      badge: "25+ Designs",
    },
  ];

  const HandleNext = () => {
    const cat = categories.find((c) => c.id === selected);
    if (cat) navigate(cat.route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-zinc-900 to-slate-950 text-slate-100 font-sans flex flex-col justify-between">
      {/* Reusable Navbar */}
      <Navbar />

      {/* Page Hero */}
      <div className="py-16 text-center relative overflow-hidden flex-grow-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest text-amber-400 uppercase bg-amber-950/40 border border-amber-500/30 rounded-full">
          Step 1 of 2
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-serif">
          <span className="text-slate-200">Choose Your</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500">Category</span>
        </h1>
        <p className="text-slate-400 mt-3 text-base max-w-md mx-auto">
          Select the collection you'd like to explore. Each category features hand-picked, premium items.
        </p>
      </div>

      {/* Category Selection Cards */}
      <div className="container max-w-5xl mx-auto px-4 pb-12 flex-grow">
        <div className="row g-4 justify-content-center">
          {categories.map((cat) => (
            <div className="col-lg-4 col-md-6" key={cat.id}>
              <label htmlFor={cat.id} className="d-block h-100 cursor-pointer" style={{ cursor: "pointer" }}>
                <div
                  className={`h-100 bg-slate-900/50 rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 ${
                    selected === cat.id
                      ? "border-amber-500 shadow-xl shadow-amber-500/20"
                      : "border-slate-800 hover:border-amber-500/40"
                  }`}
                >
                  {/* Card Image */}
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      src={cat.img}
                      alt={cat.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent"></div>
                    {/* Badge */}
                    <span className="absolute top-3 right-3 px-2 py-1 text-xs font-bold text-slate-950 bg-amber-400 rounded-full">
                      {cat.badge}
                    </span>
                    {/* Selected checkmark */}
                    {selected === cat.id && (
                      <div className="absolute top-3 left-3 w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center">
                        <i className="bi bi-check-lg text-slate-950 text-sm font-bold"></i>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 text-left">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{cat.subtitle}</span>
                    <h3 className="text-lg font-bold mt-1 mb-2 text-slate-100">{cat.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{cat.desc}</p>

                    {/* Hidden radio input */}
                    <input
                      type="radio"
                      id={cat.id}
                      name="category"
                      className="d-none"
                      onChange={() => setSelected(cat.id)}
                    />

                    <div
                      className={`mt-4 py-2 px-4 rounded-xl text-center text-sm font-bold transition-all duration-200 ${
                        selected === cat.id
                          ? "bg-amber-500 text-slate-950"
                          : "bg-slate-800 text-slate-300"
                      }`}
                    >
                      {selected === cat.id ? "✓ Selected" : `Choose ${cat.subtitle}`}
                    </div>
                  </div>
                </div>
              </label>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={HandleNext}
            disabled={!selected}
            className={`px-12 py-4 font-bold rounded-2xl text-base transition-all duration-300 ${
              selected
                ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 hover:from-amber-400 hover:to-yellow-400 hover:-translate-y-0.5 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40"
                : "bg-slate-800 text-slate-600 cursor-not-allowed"
            }`}
          >
            {selected ? (
              <>
                Explore Collection <i className="bi bi-arrow-right ml-2"></i>
              </>
            ) : (
              "Select a Category First"
            )}
          </button>
          {!selected && <p className="text-slate-600 text-xs mt-3">Please select a category above to continue</p>}
        </div>
      </div>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}

export default Categories;
