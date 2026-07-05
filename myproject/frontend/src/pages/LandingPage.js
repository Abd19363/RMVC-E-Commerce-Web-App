import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LandingPage() {
  const navigate = useNavigate();

  const HandleShopRedirect = () => {
    navigate("/Logosec");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-zinc-900 to-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 flex flex-col">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-rose-600 text-slate-950 text-center py-2 px-4 text-xs font-bold uppercase tracking-widest shadow-md">
        ✨ Free Express Shipping on Premium Orders & Exclusive Launches ✨
      </div>

      {/* Reusable Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="relative py-16 lg:py-24 overflow-hidden flex-grow">
        {/* Decorative Gradients */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container max-w-7xl mx-auto px-4 relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest text-amber-400 uppercase bg-amber-950/40 border border-amber-500/30 rounded-full">
                Premium Est. 2026
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 font-serif">
                <span className="block text-slate-200">ELEVATE YOUR</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
                  SIGNATURE STYLE
                </span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Step into a world of curated elegance. From precision timepieces and premium streetwear chains to elite designer eyewear, find the pieces that define who you are.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-4">
                <button
                  onClick={HandleShopRedirect}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  Explore Store <i className="bi bi-arrow-right ml-2"></i>
                </button>
                <a
                  href="#featured"
                  className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold rounded-xl border border-slate-800 hover:border-slate-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 no-underline"
                >
                  <i className="bi bi-play-circle-fill text-amber-400 text-lg"></i> Watch lookbook
                </a>
              </div>
            </div>

            {/* Hero Video Display */}
            <div className="col-lg-6">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Frame decoration */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-rose-600 rounded-3xl blur opacity-30 hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-slate-900 rounded-2xl border border-slate-800 p-3 shadow-2xl">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-950">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/app-logo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  {/* Subtitle bar under video */}
                  <div className="mt-3 flex justify-between items-center px-2 py-1 text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    <span>RMVC Visual Showcase</span>
                    <span className="flex items-center gap-1.5 text-amber-500">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> LIVE REEL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Core Values Section */}
      <section className="py-12 bg-slate-900/40 border-y border-slate-900">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-900/60 transition-colors duration-200">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-xl shrink-0">
                  <i className="bi bi-shield-check"></i>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-200">100% Premium Quality</h4>
                  <p className="text-sm text-slate-400 mt-1">Sourced from top creators and crafted with durable, grade-A luxury materials.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-900/60 transition-colors duration-200">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-xl shrink-0">
                  <i className="bi bi-truck"></i>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-200">Express Delivery</h4>
                  <p className="text-sm text-slate-400 mt-1">Securely packaged and shipped right to your doorstep with tracking.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-900/60 transition-colors duration-200">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-xl shrink-0">
                  <i className="bi bi-arrow-repeat"></i>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-200">Satisfaction Guaranteed</h4>
                  <p className="text-sm text-slate-400 mt-1">Easy size exchanges and dedicated support for a seamless experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section id="collections" className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Curated Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 text-slate-100 font-serif">
              EXPLORE THE COLLECTIONS
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm">
              Hand-picked essentials designed to enhance your aesthetic and turn heads.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Collection 1: Watch */}
            <div className="col-lg-4 col-md-6">
              <div className="group relative bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950 relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="/bi1.jpg"
                    alt="Luxury Timepiece"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
                </div>
                <div className="p-6 relative">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Timepieces</span>
                  <h3 className="text-xl font-bold mt-2 text-slate-100 group-hover:text-amber-300 transition-colors duration-200">Luxury Watches</h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    Sophisticated chronographs, classic automatics, and statement wristwatches tailored for style.
                  </p>
                  <button
                    onClick={() => navigate("/Watch")}
                    className="mt-5 w-full py-3 bg-slate-800 group-hover:bg-amber-500 text-slate-300 group-hover:text-slate-950 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View Watches <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Collection 2: Chain */}
            <div className="col-lg-4 col-md-6">
              <div className="group relative bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950 relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="/Threesome chain.jfif"
                    alt="Threesome Chain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
                </div>
                <div className="p-6 relative">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Accessories</span>
                  <h3 className="text-xl font-bold mt-2 text-slate-100 group-hover:text-amber-300 transition-colors duration-200">Signature Chains</h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    Bold sterling silver, iced necklaces, and premium curb/cuban link statement chains.
                  </p>
                  <button
                    onClick={() => navigate("/BuyPage")}
                    className="mt-5 w-full py-3 bg-slate-800 group-hover:bg-amber-500 text-slate-300 group-hover:text-slate-950 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View Chains <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Collection 3: Glasses */}
            <div className="col-lg-4 col-md-6">
              <div className="group relative bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950 relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="/squareglasses.jpg"
                    alt="Designer Glasses"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
                </div>
                <div className="p-6 relative">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Eyewear</span>
                  <h3 className="text-xl font-bold mt-2 text-slate-100 group-hover:text-amber-300 transition-colors duration-200">Designer Glasses</h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    Polarized lenses, UV400 square frames, and custom sunglasses designed to fit any face.
                  </p>
                  <button
                    onClick={() => navigate("/Logosec")}
                    className="mt-5 w-full py-3 bg-slate-800 group-hover:bg-amber-500 text-slate-300 group-hover:text-slate-950 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View Glasses <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Collection 4: Custom combos */}
            <div className="col-lg-6 col-md-12">
              <div className="group relative bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5">
                <div className="row g-0 align-items-center">
                  <div className="col-md-5 overflow-hidden bg-slate-950 aspect-[4/3] md:aspect-auto md:h-64">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src="/modifiedchain.jpg"
                      alt="Modified Chain Set"
                    />
                  </div>
                  <div className="col-md-7 p-6">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Limited Edition</span>
                    <h3 className="text-xl font-bold mt-2 text-slate-100 group-hover:text-amber-300 transition-colors duration-200">Custom Necklaces & Combos</h3>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      Unique, custom-engineered hardware and bespoke jewelry sets. Stand out with RMVC exclusive designs.
                    </p>
                    <button
                      onClick={() => navigate("/Logosec")}
                      className="mt-4 px-6 py-2.5 bg-slate-800 group-hover:bg-amber-500 text-slate-300 group-hover:text-slate-950 font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 w-fit"
                    >
                      View Combo Deals
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Collection 5: Specials */}
            <div className="col-lg-6 col-md-12">
              <div className="group relative bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5">
                <div className="row g-0 align-items-center">
                  <div className="col-md-5 overflow-hidden bg-slate-950 aspect-[4/3] md:aspect-auto md:h-64">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src="/exchangepic.jpg"
                      alt="Special Deals"
                    />
                  </div>
                  <div className="col-md-7 p-6">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Value Exchange</span>
                    <h3 className="text-xl font-bold mt-2 text-slate-100 group-hover:text-amber-300 transition-colors duration-200">Luxury For Less</h3>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      Premium quality products at direct-to-consumer prices. Your style upgrade shouldn't break the bank.
                    </p>
                    <button
                      onClick={() => navigate("/Logosec")}
                      className="mt-4 px-6 py-2.5 bg-slate-800 group-hover:bg-amber-500 text-slate-300 group-hover:text-slate-950 font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 w-fit"
                    >
                      Explore Specials
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lookbook Video / GIF Section */}
      <section id="featured" className="py-20 bg-slate-950 border-t border-slate-900 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container max-w-5xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
              Cinematic Reel
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 text-slate-100 font-serif">
              THE RMVC EXPERIENCE
            </h2>
            <p className="text-slate-400 mt-2 text-sm max-w-md mx-auto">
              A quick glimpse into our aesthetics and product feel. Feel the texture, witness the shimmer.
            </p>
          </div>

          <div className="relative mx-auto rounded-3xl overflow-hidden border border-slate-800 shadow-2xl aspect-[16/9] bg-slate-900 max-w-4xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/rmvcgif.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay elements */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-slate-800 gap-3">
              <div>
                <h4 className="text-sm font-bold text-slate-200">Official Lookbook 2026</h4>
                <p className="text-xs text-slate-400">Discover our newly released chains, frames & watches.</p>
              </div>
              <button
                onClick={() => navigate("/Logosec")}
                className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-all duration-200 uppercase tracking-wider shrink-0"
              >
                Shop the Look
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About / Pride Section */}
      <section id="about" className="py-20 bg-slate-900/20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-200 font-serif">
            "Your Trust is Our Pride"
          </h3>
          <p className="text-slate-400 text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            At RMVC, we believe that fashion isn't just about what you wear, but the statement you make to the world. We are dedicated to bringing you high-quality, hand-inspected jewelry and accessories that add sophistication and luxury to your everyday wardrobe.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <div className="text-center px-4 py-2 border-r border-slate-800">
              <span className="block text-2xl font-extrabold text-amber-400">5,000+</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Happy Customers</span>
            </div>
            <div className="text-center px-4 py-2 border-r border-slate-800">
              <span className="block text-2xl font-extrabold text-amber-400">100%</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Premium Craft</span>
            </div>
            <div className="text-center px-4 py-2">
              <span className="block text-2xl font-extrabold text-amber-400">24/7</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Direct Concierge</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-slate-950 via-zinc-900 to-slate-950 border-t border-slate-900">
        <div className="container max-w-xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-slate-200">Join the RMVC Inner Circle</h3>
          <p className="text-sm text-slate-400 mt-2">Get notified about private drops, limited restocks, and exclusive promotions.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-slate-900/60 border border-slate-800 text-slate-200 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500/50 grow"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-colors duration-200 shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
