import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const watchBrands = [
  {
    name: "Casio",
    color: "from-blue-900/40 to-blue-950/60",
    accent: "text-blue-400",
    border: "border-blue-800/40",
    icon: "bi-stopwatch-fill",
    models: [
      { name: "AMW-880D-1AVDF", tag: "Analog-Digital", price: "28,500 PKR", desc: "A robust analog-digital fusion watch featuring a sturdy stainless steel chain, dual time zones, stopwatch, and 100m water resistance." },
      { name: "GST-B400D-1ADR", tag: "G-Shock", price: "72,000 PKR", desc: "Elite G-Shock steel design with Bluetooth smart link, solar charging, carbon core guard structure, and unmatched shock resistance." },
      { name: "LQ-139BMV-1BLDF", tag: "Ladies", price: "6,500 PKR", desc: "Simple, elegant watch with a lightweight resin strap and a minimal clean face. Perfect for daily wear." },
      { name: "PRJ-B001-7DR", tag: "Pro-Trek", price: "45,000 PKR", desc: "Built for the wild outdoors. Comes equipped with compass, altimeter, barometer, and temperature sensors." },
      { name: "AE-1500WH-8BVDF", tag: "World Time", price: "9,800 PKR", desc: "A sporty digital timepiece with a wide screen, 10-year battery life, world maps, and dual alarms." },
    ],
  },
  {
    name: "Citizen",
    color: "from-emerald-900/40 to-emerald-950/60",
    accent: "text-emerald-400",
    border: "border-emerald-800/40",
    icon: "bi-sun-fill",
    models: [
      { name: "ATTESA HAKUTO-R", tag: "Signature", price: "380,000 PKR", desc: "Bespoke collaboration titanium watch featuring GPS satellite wave timekeeping, moonphase indicator, and super hard Duratect surface finish." },
      { name: "Series8 880 GMT", tag: "GMT", price: "245,000 PKR", desc: "Automatic luxury GMT timepiece featuring an integrated bracelet, bi-color bezel, and a highly anti-magnetic mechanical movement." },
      { name: "The CITIZEN", tag: "Flagship", price: "490,000 PKR", desc: "Ultra-precision Eco-Drive watch with an annual accuracy of +/- 5 seconds. Beautiful hand-crafted Washi paper dial." },
      { name: "Garrison", tag: "Military", price: "52,000 PKR", desc: "Field-style watch featuring large legible numerals, Eco-Drive solar charging, and a rugged olive green canvas strap." },
      { name: "Suratto", tag: "Fashion", price: "32,000 PKR", desc: "Elegant watch adorned with subtle sapphire crystals, polished gold-tone metal, and clean design elements." },
    ],
  },
  {
    name: "Luminox",
    color: "from-slate-800/60 to-slate-900/80",
    accent: "text-slate-300",
    border: "border-slate-700/40",
    icon: "bi-moon-stars-fill",
    models: [
      { name: "Navy SEAL, 45mm", tag: "Dive", price: "95,000 PKR", desc: "The official timepiece of the Navy SEALs. Features Carbonox case material, 200m water resistance, and always-on micro gas tubes." },
      { name: "MIL-SPEC, 46MM", tag: "Military", price: "140,000 PKR", desc: "Strictly manufactured to military specification standards. Features Titanium bezel inserts and high-torque movement." },
      { name: "PACIFIC DIVER RIPPLE", tag: "Sport", price: "115,000 PKR", desc: "Clean sporty diver with sapphire crystal and eye-catching ocean blue rubber strap. Ready for diving or dinners." },
      { name: "MASTER CARBON SEAL AUTO", tag: "Automatic", price: "220,000 PKR", desc: "Premium automatic movement inside a lightweight, ultra-tough Carbonox+ case. Features a custom exhibition back." },
      { name: "LEATHERBACK SEA TURTLE", tag: "Outdoor", price: "68,000 PKR", desc: "Luminox design at an accessible scale. Slim body profile, turtle-shell protective shape, and durable rubber strap." },
    ],
  },
  {
    name: "Philipp Plein",
    color: "from-purple-900/40 to-purple-950/60",
    accent: "text-purple-400",
    border: "border-purple-800/40",
    icon: "bi-diamond-fill",
    models: [
      { name: "The $keleton King", tag: "Skeleton", price: "185,000 PKR", desc: "An aggressive, oversized luxury fashion piece showcasing a cut-out skeleton face, skull bone bridges, and purple crystal dial trims." },
      { name: "Plein Extreme", tag: "Sport", price: "95,000 PKR", desc: "Engineered for maximum presence. Features gold plating, hexagonal screw details, and a silicone sports strap." },
      { name: "The Skull", tag: "Limited", price: "120,000 PKR", desc: "Featuring a huge 3D skull motif in the center of the dial. Limited edition release reflecting streetwear couture." },
      { name: "Plein Empire", tag: "Classic", price: "88,000 PKR", desc: "Elegant metal chain bracelet watch with logo print markings and minimalist hands. Perfect for semi-formal nights." },
      { name: "Plein Blaze", tag: "Fashion", price: "150,000 PKR", desc: "Fully iced-out watch bezel and strap. Shimmers bright under party lights, making a major lifestyle statement." },
    ],
  },
  {
    name: "Rolex",
    color: "from-amber-900/40 to-amber-950/60",
    accent: "text-amber-400",
    border: "border-amber-800/40",
    icon: "bi-crown-fill",
    models: [
      { name: "GMT-Master II", tag: "Traveller", price: "4,600,000 PKR", desc: "The iconic Pepsi ceramic bezel watch. Dual time zone reading for pilots and frequent travellers, in full Oystersteel." },
      { name: "Rolex Deepsea", tag: "Dive", price: "3,800,000 PKR", desc: "Extreme dive watch built to survive depths of up to 3,900 meters (12,800 feet). Features Helium escape valve." },
      { name: "Sky-Dweller", tag: "Complication", price: "7,800,000 PKR", desc: "Rolex's most complex watch. Features annual calendar, dual time, and command ring rotating bezel." },
      { name: "Day-Date 40", tag: "Prestige", price: "9,200,000 PKR", desc: "The president's watch. Rendered in solid 18k yellow gold, displaying both day of the week and date on the dial." },
      { name: "Cosmograph Daytona", tag: "Racing", price: "8,500,000 PKR", desc: "The legendary racing chronograph with Tachymetric bezel. Features caliber 4131 and solid platinum body." },
    ],
  },
];

function Watches() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  
  // State for watch details modal
  const [selectedWatch, setSelectedWatch] = useState(null);

  const HandleEnquire = (item) => {
    if (isLoggedIn) {
      if (item.models) {
        // Enquiring about a whole brand
        alert(`Your inquiry regarding ${item.name} has been submitted! Our concierge service will get in touch shortly.`);
      } else {
        // Clicking specific model
        setSelectedWatch(item);
      }
    } else {
      alert("Please log in your account.");
      navigate("/Home");
    }
  };

  const HandleBooking = (watchName) => {
    alert(`Inquiry for "${watchName}" submitted! Our private concierge will contact you on your registered details within 12 hours.`);
    setSelectedWatch(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-zinc-900 to-slate-950 text-slate-100 font-sans flex flex-col justify-between">
      {/* Reusable Navbar */}
      <Navbar />

      {/* Hero */}
      <div className="py-14 text-center relative overflow-hidden flex-grow-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest text-amber-400 uppercase bg-amber-950/40 border border-amber-500/30 rounded-full">
          Timepieces Collection
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-serif">
          <span className="text-slate-200">Luxury</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500">Watches</span>
        </h1>
        <p className="text-slate-400 mt-3 text-sm max-w-lg mx-auto">
          5 world-renowned brands. 25+ precision-crafted models. Choose your statement wristpiece.
        </p>
      </div>

      {/* Watch Catalog */}
      <div className="container max-w-7xl mx-auto px-4 pb-20 flex-grow">
        <div className="row g-4">
          {watchBrands.map((brand) => (
            <div className="col-xl-4 col-lg-6" key={brand.name}>
              <div className={`h-100 rounded-2xl border bg-gradient-to-br ${brand.color} ${brand.border} p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] flex flex-col justify-between`}>
                <div>
                  {/* Brand Header */}
                  <div className="flex items-center space-x-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-slate-950/40 flex items-center justify-center ${brand.accent} text-lg`}>
                      <i className={`bi ${brand.icon}`}></i>
                    </div>
                    <div>
                      <h2 className={`text-xl font-extrabold tracking-wide ${brand.accent} mb-0`}>{brand.name}</h2>
                      <span className="text-xs text-slate-500 font-semibold uppercase tracking-widest">
                        {brand.models.length} Models
                      </span>
                    </div>
                  </div>

                  {/* Model List */}
                  <ul className="list-none p-0 m-0 space-y-2">
                    {brand.models.map((model, i) => (
                      <li 
                        key={i} 
                        onClick={() => HandleEnquire(model)}
                        className="flex items-center justify-between py-2.5 px-3 bg-slate-950/30 rounded-xl border border-slate-800/30 hover:bg-slate-950/60 hover:border-slate-700/50 transition-all duration-200 group cursor-pointer"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                          <span className="text-slate-200 text-sm font-medium group-hover:text-amber-300 transition-colors duration-200">
                            {model.name}
                          </span>
                        </div>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${brand.accent} bg-slate-950/40 border border-slate-800/30`}>
                          {model.tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Brand CTA */}
                <button
                  onClick={() => HandleEnquire(brand)}
                  className={`mt-6 w-full py-2.5 rounded-xl text-sm font-bold border ${brand.border} ${brand.accent} bg-slate-950/30 hover:bg-slate-950/60 transition-all duration-200 flex items-center justify-center gap-2`}
                >
                  <i className="bi bi-bag-plus"></i> Enquire about {brand.name}
                </button>
              </div>
            </div>
          ))}

          {/* Hero Watch Image Card */}
          <div className="col-xl-4 col-lg-6">
            <div className="h-100 rounded-2xl border border-amber-800/30 overflow-hidden relative bg-slate-900/50 min-h-[300px]">
              <img
                src="/bi1.jpg"
                alt="Luxury Watch"
                className="w-full h-full object-cover"
                style={{ minHeight: "300px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Featured</span>
                <h3 className="text-xl font-extrabold text-white mt-1">The RMVC Timepiece Edit</h3>
                <p className="text-slate-400 text-sm mt-1">Precision, prestige, and pure craftsmanship on your wrist.</p>
                <Link to="/BuyPage" className="mt-3 inline-block px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-all duration-200 no-underline">
                  Browse Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Watch Detail Modal */}
      {selectedWatch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-200 text-left">
            {/* Close Button */}
            <button
              onClick={() => setSelectedWatch(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/60 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-all duration-200"
            >
              <i className="bi bi-x-lg text-sm"></i>
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-xl">
                <i className="bi bi-stopwatch"></i>
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">{selectedWatch.tag}</span>
                <h3 className="text-xl font-extrabold text-slate-100 tracking-wide font-serif">{selectedWatch.name}</h3>
              </div>
            </div>

            <div className="text-xl font-black text-amber-400 mb-4">{selectedWatch.price}</div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">{selectedWatch.desc}</p>

            <div className="flex gap-3">
              <button
                onClick={() => HandleBooking(selectedWatch.name)}
                className="flex-grow py-3.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold rounded-xl text-xs transition-all duration-200 uppercase tracking-wider shadow-lg shadow-amber-500/20"
              >
                Book Consultation
              </button>
              <button
                onClick={() => setSelectedWatch(null)}
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition-all duration-200 uppercase tracking-wider border border-slate-700"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Watches;
