/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  Shield, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Star, 
  Menu, 
  X, 
  ChevronRight, 
  Clock, 
  Award, 
  History, 
  Settings, 
  LayoutDashboard,
  Diamond,
  Phone,
  Mail,
  Globe,
  Share2,
  MessageSquare,
  HelpCircle,
  MoreVertical,
  CreditCard,
  Bell,
  User
} from 'lucide-react';

// --- Types ---
type Screen = 'home' | 'booking' | 'confirmation' | 'profile';

// --- Shared Components ---

const Navbar = ({ currentScreen, setScreen }: { currentScreen: Screen, setScreen: (s: Screen) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', screen: 'home' as Screen },
    { label: 'Packages', screen: 'home' as Screen },
    { label: 'Locations', screen: 'home' as Screen },
    { label: 'Profile', screen: 'profile' as Screen },
  ];

  return (
    <nav className="glass-header shadow-sm">
      <div className="flex justify-between items-center px-8 h-20 max-w-screen-2xl mx-auto">
        <div 
          className="text-2xl font-black tracking-tighter text-primary cursor-pointer"
          onClick={() => setScreen('home')}
        >
          LuxeWash Dubai
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setScreen(item.screen)}
              className={`font-headline font-bold tracking-tight transition-all hover:text-primary ${
                currentScreen === item.screen ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => setScreen('booking')}
            className="bg-primary text-white px-6 py-2.5 rounded-full font-bold tracking-tight active:scale-95 duration-200 transition-all hover:opacity-90"
          >
            Book Now
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-surface-container-high p-6 space-y-4"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => { setScreen(item.screen); setIsMenuOpen(false); }}
                className="block w-full text-left font-headline font-bold text-lg text-on-surface-variant"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => { setScreen('booking'); setIsMenuOpen(false); }}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg"
            >
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="w-full py-12 px-8 border-t border-surface-container-high bg-surface-container-low mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="space-y-4">
          <div className="text-lg font-bold text-primary font-headline">LuxeWash Dubai</div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            The premier destination for mobile car care in the UAE. Redefining precision one vehicle at a time.
          </p>
        </div>
        <div className="space-y-4">
          <h5 className="text-primary font-bold uppercase tracking-wider text-xs">Service Areas</h5>
          <ul className="space-y-2 text-on-surface-variant text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Palm Jumeirah</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Downtown Dubai</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Dubai Marina</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="text-primary font-bold uppercase tracking-wider text-xs">Navigation</h5>
          <ul className="space-y-2 text-on-surface-variant text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Packages</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Gallery</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="text-primary font-bold uppercase tracking-wider text-xs">Support</h5>
          <ul className="space-y-2 text-on-surface-variant text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-surface-container-high flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-xs">© 2024 LuxeWash Precision Car Care Dubai</p>
        <div className="flex gap-6 text-on-surface-variant">
          <Globe size={18} className="cursor-pointer hover:text-primary" />
          <Phone size={18} className="cursor-pointer hover:text-primary" />
          <Mail size={18} className="cursor-pointer hover:text-primary" />
        </div>
      </div>
    </footer>
  );
};

// --- Screen Components ---

const LandingPage = ({ onBook }: { onBook: () => void }) => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Luxury Car Wash" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2071&auto=format&fit=crop"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">The Oasis of Precision</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tighter mb-6">
              Exquisite Car Care, Delivered to Your <span className="text-primary-container">Doorstep.</span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              Experience Dubai's premier mobile detailing service. We combine maritime-grade precision with luxury concierge convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="signature-gradient text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg active:scale-95 transition-transform"
              >
                Book Now
              </button>
              <button className="bg-surface-container-high text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-highest transition-colors">
                View Packages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold tracking-tight mb-4">The Effortless Process</h2>
              <p className="text-on-surface-variant">We've refined every step to ensure your vehicle receives world-class treatment without interrupting your day.</p>
            </div>
            <div className="h-1 w-32 bg-primary-container hidden md:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: '01', title: 'Request', desc: 'Select your preferred package and time through our mobile platform or WhatsApp concierge.' },
              { num: '02', title: 'We Arrive', desc: 'Our fully equipped mobile studio arrives at your location—home, office, or hotel.' },
              { num: '03', title: 'Clean & Shine', desc: 'Our technicians perform a precision detail, leaving your car in showroom condition.' }
            ].map((step, i) => (
              <div key={i} className="group relative pt-12">
                <div className="absolute top-0 left-0 text-8xl font-black text-surface-container-highest/50 select-none">{step.num}</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-on-surface">Precision Tiers</h2>
            <p className="text-on-surface-variant">Tailored care for every level of automotive excellence.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Express */}
            <div className="relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="mb-[-24px] -mt-16 ml-[-24px] w-[calc(100%+48px)] overflow-hidden rounded-xl shadow-xl">
                <img 
                  alt="Express Service" 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1931&auto=format&fit=crop"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-12">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">Express</h3>
                  <span className="text-primary font-bold">AED 150</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-6">A meticulous exterior hand wash and interior vacuum for the busy professional.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm"><CheckCircle size={18} className="text-primary" /> Foam cannon bath</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle size={18} className="text-primary" /> Wheel & tire cleaning</li>
                </ul>
                <button 
                  onClick={onBook}
                  className="w-full py-3 bg-surface-container-high text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all"
                >
                  Select
                </button>
              </div>
            </div>

            {/* Deep Clean */}
            <div className="relative bg-primary p-10 rounded-3xl shadow-2xl group -mt-4 lg:-mt-8 ring-8 ring-white/10">
              <div className="mb-[-24px] -mt-20 ml-[-24px] w-[calc(100%+48px)] overflow-hidden rounded-xl shadow-2xl">
                <img 
                  alt="Deep Clean" 
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=2076&auto=format&fit=crop"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-12 text-white">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">Deep Clean</h3>
                  <span className="text-tertiary font-bold text-xl">AED 350</span>
                </div>
                <p className="text-sm opacity-80 mb-6">Restorative care including interior steam cleaning and clay bar treatment.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm"><Star size={18} className="text-white fill-white" /> Leather conditioning</li>
                  <li className="flex items-center gap-2 text-sm"><Star size={18} className="text-white fill-white" /> Engine bay dressing</li>
                </ul>
                <button 
                  onClick={onBook}
                  className="w-full py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:bg-opacity-90 transition-all"
                >
                  Most Popular
                </button>
              </div>
            </div>

            {/* Ceramic */}
            <div className="relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="mb-[-24px] -mt-16 ml-[-24px] w-[calc(100%+48px)] overflow-hidden rounded-xl shadow-xl">
                <img 
                  alt="Ceramic Coating" 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  src="https://images.unsplash.com/photo-1552933529-e359b2477252?q=80&w=2070&auto=format&fit=crop"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-12">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">Ceramic</h3>
                  <span className="text-primary font-bold">From AED 950</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-6">Advanced hydrophobic protection for permanent gloss and UV resistance.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm"><Shield size={18} className="text-primary" /> 3-Year protection</li>
                  <li className="flex items-center gap-2 text-sm"><Shield size={18} className="text-primary" /> Paint correction included</li>
                </ul>
                <button 
                  onClick={onBook}
                  className="w-full py-3 bg-surface-container-high text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold tracking-tight mb-16 text-center">Client Impressions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 bg-white p-10 rounded-3xl shadow-sm flex flex-col justify-between border-l-4 border-primary">
              <p className="text-xl font-medium italic text-on-surface leading-relaxed mb-8">
                "The convenience of having a showroom-level detail performed in my driveway while I attend meetings is unparalleled. LuxeWash is the only service I trust with my collection."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=ahmed" alt="Ahmed" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold">Ahmed Al-Maktoum</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">Palm Jumeirah Resident</p>
                </div>
              </div>
            </div>
            <div className="bg-primary text-white p-8 rounded-3xl flex flex-col justify-between">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-white" />)}
              </div>
              <p className="text-sm leading-relaxed mb-6">"Incredible attention to detail. My car hasn't looked this good since I drove it off the lot."</p>
              <h4 className="font-bold text-sm">Sarah Jenkins</h4>
            </div>
            <div className="bg-surface-container-high p-8 rounded-3xl flex flex-col justify-between">
              <p className="text-sm font-medium text-on-surface leading-relaxed mb-6">"Finally, a mobile car wash that understands luxury vehicles. Their steam cleaning process is magic."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full signature-gradient flex items-center justify-center text-white text-[10px] font-bold">MK</div>
                <h4 className="font-bold text-sm">Marcus Kane</h4>
              </div>
            </div>
            <div className="md:col-span-4 bg-surface-container-low p-8 rounded-3xl flex items-center justify-between">
              <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                <div className="text-center md:text-left">
                  <div className="text-4xl font-black text-primary mb-1">5000+</div>
                  <div className="text-xs uppercase tracking-widest text-on-surface-variant">Cars Revitalized</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-surface-container-highest"></div>
                <div className="text-center md:text-left">
                  <div className="text-4xl font-black text-primary mb-1">4.9/5</div>
                  <div className="text-xs uppercase tracking-widest text-on-surface-variant">Customer Rating</div>
                </div>
                <div className="flex-grow"></div>
                <button 
                  onClick={onBook}
                  className="signature-gradient text-white px-8 py-3 rounded-full font-bold"
                >
                  Join the Elite
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const BookingPage = ({ onConfirm }: { onConfirm: () => void }) => {
  const [step, setStep] = useState(1);
  const [carType, setCarType] = useState('Sedan');
  const [packageType, setPackageType] = useState('Ceramic Shield');

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <header className="mb-16">
        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Reservation Portal</span>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]">
          Precision detailing, <br/>
          <span className="text-primary">delivered to your door.</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          Experience Dubai's most refined mobile car care. Choose your service requirements below to secure your appointment.
        </p>
      </header>

      {/* Stepper */}
      <div className="mb-12 flex items-center justify-between gap-4 overflow-x-auto pb-4">
        {[
          { n: 1, l: 'Car Type' },
          { n: 2, l: 'Package' },
          { n: 3, l: 'Schedule' },
          { n: 4, l: 'Location' }
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= s.n ? 'bg-primary text-white' : 'bg-surface-container-highest text-on-surface-variant'}`}>{s.n}</div>
            <span className={`font-bold text-sm tracking-tight ${step >= s.n ? 'text-on-surface' : 'text-on-surface-variant'}`}>{s.l}</span>
            {i < 3 && <div className="h-px w-12 bg-surface-container-highest mx-2"></div>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-16">
          {/* Car Type */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tight">1. Select your vehicle class</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: 'Sedan', icon: <Car />, desc: 'Compact & Executive cars' },
                { id: 'SUV', icon: <Car />, desc: 'Crossovers & 4x4 vehicles' },
                { id: 'Luxury', icon: <Diamond />, desc: 'Supercars & Long Wheelbase' }
              ].map((t) => (
                <button 
                  key={t.id}
                  onClick={() => setCarType(t.id)}
                  className={`p-6 rounded-2xl border-2 transition-all text-left ${carType === t.id ? 'bg-white border-primary shadow-lg' : 'bg-white border-transparent hover:border-primary/30'}`}
                >
                  <div className={`mb-4 ${carType === t.id ? 'text-primary' : 'text-on-surface-variant'}`}>{t.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{t.id}</h3>
                  <p className="text-on-surface-variant text-sm">{t.desc}</p>
                </button>
              ))}
            </div>
          </section>

          {/* Treatment */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tight">2. Choose your treatment</h2>
            <div className="space-y-4">
              {[
                { id: 'Signature Oasis Wash', price: '150', time: '45 Mins', img: 'https://images.unsplash.com/photo-1552933529-e359b2477252?q=80&w=2070&auto=format&fit=crop' },
                { id: 'Ceramic Shield', price: '380', time: '120 Mins', img: 'https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=2076&auto=format&fit=crop', popular: true }
              ].map((p) => (
                <div 
                  key={p.id}
                  onClick={() => setPackageType(p.id)}
                  className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all flex flex-col md:flex-row gap-8 items-center ${packageType === p.id ? 'bg-white border-primary shadow-xl' : 'bg-white border-transparent hover:border-primary/30'}`}
                >
                  {p.popular && <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-xl text-[10px] font-bold">POPULAR</div>}
                  <div className="w-full md:w-48 h-32 shrink-0 overflow-hidden rounded-xl">
                    <img src={p.img} className="w-full h-full object-cover" alt={p.id} referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-xl">{p.id}</h3>
                      <span className="font-extrabold text-primary">AED {p.price}</span>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-4">Professional detailing with premium products.</p>
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1 text-xs font-bold text-on-surface-variant"><Clock size={14} /> {p.time}</span>
                      <span className="flex items-center gap-1 text-xs font-bold text-on-surface-variant"><Shield size={14} /> High Gloss</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Schedule */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tight">3. Schedule your slot</h2>
            <div className="bg-white p-8 rounded-2xl border border-surface-container-highest">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-bold text-xs uppercase tracking-widest text-on-surface-variant mb-4">Preferred Date</label>
                  <input type="date" className="w-full bg-surface-container-low border-none rounded-xl p-4 font-bold" defaultValue="2024-10-24" />
                </div>
                <div>
                  <label className="block font-bold text-xs uppercase tracking-widest text-on-surface-variant mb-4">Dubai Standard Time (GST)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['09:00', '11:30', '14:00', '16:30', '19:00', '21:00'].map(t => (
                      <button key={t} className={`p-3 text-xs font-bold rounded-xl border transition-all ${t === '11:30' ? 'bg-primary text-white border-primary' : 'border-surface-container-highest hover:border-primary'}`}>{t}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Location */}
          <section className="space-y-8">
            <div className="flex justify-between items-end">
              <h2 className="text-2xl font-bold tracking-tight">4. Service location</h2>
              <button className="text-primary text-sm font-bold flex items-center gap-1"><MapPin size={14} /> Use Current Location</button>
            </div>
            <div className="space-y-4">
              <input className="w-full bg-white border border-surface-container-highest rounded-xl p-4" placeholder="Villa/Apartment No, Building, Street" defaultValue="Villa 14, Frond G, Palm Jumeirah" />
              <div className="h-64 rounded-2xl overflow-hidden relative bg-surface-container-highest">
                <img src="https://images.unsplash.com/photo-1582470658458-39d248c56639?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover opacity-50 grayscale" alt="Map" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary p-3 rounded-full text-white shadow-2xl animate-bounce">
                    <MapPin />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="pt-8">
            <button 
              onClick={onConfirm}
              className="w-full bg-primary text-white py-6 rounded-2xl font-extrabold text-xl shadow-2xl hover:shadow-primary/20 transition-all active:scale-[0.98]"
            >
              Confirm Booking
            </button>
            <p className="text-center text-on-surface-variant text-sm mt-6">By confirming, you agree to our <a href="#" className="underline">Terms of Service</a></p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="sticky top-32 space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-surface-container-highest shadow-sm">
            <h3 className="font-extrabold text-xl mb-6">Booking Summary</h3>
            <div className="space-y-6">
              {[
                { l: 'Vehicle', v: carType },
                { l: 'Package', v: packageType },
                { l: 'Appointment', v: 'Thu, 24 Oct • 11:30 AM' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">{item.l}</p>
                    <p className="font-bold">{item.v}</p>
                  </div>
                  <CheckCircle size={20} className="text-primary fill-primary/10" />
                </div>
              ))}
              <div className="pt-6 border-t border-surface-container-highest">
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Total Amount</p>
                <p className="text-3xl font-black text-primary">AED {packageType === 'Ceramic Shield' ? '380' : '150'}</p>
              </div>
            </div>
          </div>
          <div className="bg-tertiary text-white p-6 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <HelpCircle />
            </div>
            <div>
              <p className="font-bold leading-tight">Need assistance?</p>
              <p className="text-sm opacity-80">Call our 24/7 concierge</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

const ConfirmationPage = ({ onReschedule }: { onReschedule: () => void }) => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-primary">
            <CheckCircle size={20} className="fill-primary/10" />
            <span className="font-bold uppercase tracking-widest text-xs">Booking Confirmed</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">Precision care is on its way.</h1>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-surface-container-highest flex flex-col items-center justify-center min-w-[180px]">
          <span className="text-on-surface-variant text-[10px] uppercase tracking-tighter mb-1">Booking ID</span>
          <span className="text-primary font-bold text-lg">LW-8829-DXB</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-surface-container-low rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Car size={120} />
          </div>
          <h2 className="text-xl font-bold mb-10 relative z-10">Live Status</h2>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {[
                { l: 'Assigned', t: '10:15 AM', i: <CheckCircle />, active: true },
                { l: 'On the Way', t: 'ETA: 8 mins', i: <Car />, active: true, current: true },
                { l: 'Wash in Progress', t: 'Pending', i: <Clock />, active: false },
                { l: 'Completed', t: 'Pending', i: <Award />, active: false }
              ].map((s, i) => (
                <div key={i} className={`flex md:flex-col items-center md:items-start gap-4 md:gap-6 ${!s.active ? 'opacity-40' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 ${s.current ? 'bg-primary text-white ring-4 ring-white' : s.active ? 'bg-primary text-white' : 'bg-surface-container-highest'}`}>
                    {s.i}
                  </div>
                  <div className="flex flex-col">
                    <span className={`font-bold ${s.current ? 'text-primary' : 'text-on-surface'}`}>{s.l}</span>
                    <span className={`text-sm ${s.current ? 'text-primary font-medium' : 'text-on-surface-variant'}`}>{s.t}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-surface-container-highest">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container-highest">
                <img src="https://i.pravatar.cc/150?u=detailer" alt="Detailer" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Ahmed R.</h3>
                <div className="flex items-center gap-1 text-tertiary">
                  <Star size={14} className="fill-tertiary" />
                  <span className="text-sm font-bold">4.9</span>
                  <span className="text-xs text-on-surface-variant font-normal ml-1">(240+ Washes)</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-surface-container-high text-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-all">
              <MessageSquare size={18} /> Contact Detailer
            </button>
          </div>
          <div className="bg-tertiary/10 text-tertiary rounded-3xl p-6">
            <h4 className="font-bold mb-2">Did you know?</h4>
            <p className="text-sm leading-relaxed opacity-80">Our signature ceramic spray protects your car's paint from Dubai's harsh UV rays for up to 3 weeks.</p>
          </div>
        </div>

        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { l: 'Time & Date', v1: 'Today, Oct 24', v2: '10:30 AM - 11:30 AM', i: <Calendar /> },
            { l: 'Location', v1: 'Palm Jumeirah', v2: 'Villa 14, Frond G, Dubai', i: <MapPin /> },
            { l: 'Package', v1: 'Precision Exterior', v2: 'with Graphene Sealant', i: <Shield /> }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-surface-container-highest">
              <div className="flex items-center gap-3 mb-4 text-primary">
                {item.i}
                <span className="font-bold uppercase text-xs tracking-widest">{item.l}</span>
              </div>
              <p className="text-xl font-bold">{item.v1}</p>
              <p className="text-on-surface-variant">{item.v2}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-wrap gap-4 justify-center">
        <button 
          onClick={onReschedule}
          className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95"
        >
          Reschedule Appointment
        </button>
        <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-bold hover:bg-surface-container-high transition-all">
          Cancel Booking
        </button>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-12 px-8">
      <header className="mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-on-surface mb-2">Welcome back, Ahmed</h1>
        <p className="text-on-surface-variant max-w-2xl text-lg">Manage your premium fleet, review your detailing history, and personalize your LuxeWash experience from your private dashboard.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-surface-container-highest space-y-1">
            {[
              { l: 'Dashboard', i: <LayoutDashboard />, active: true },
              { l: 'My Garage', i: <Car /> },
              { l: 'Orders', i: <History /> },
              { l: 'Settings', i: <Settings /> }
            ].map((item, i) => (
              <button key={i} className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all ${item.active ? 'bg-primary text-white shadow-lg' : 'hover:bg-surface-container-low text-on-surface-variant'}`}>
                {item.i}
                <span className="font-bold uppercase tracking-widest text-[10px]">{item.l}</span>
              </button>
            ))}
          </div>
          <div className="signature-gradient p-6 rounded-2xl text-white overflow-hidden relative">
            <div className="relative z-10">
              <p className="uppercase tracking-widest text-[10px] opacity-80 mb-1 font-bold">Platinum Member</p>
              <h3 className="text-xl font-bold mb-4">480 LuxePoints</h3>
              <div className="w-full bg-white/20 h-1.5 rounded-full mb-2">
                <div className="bg-white h-full rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-xs opacity-90">20 more points to your next free Ceramic Coating.</p>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <Diamond size={96} />
            </div>
          </div>
        </aside>

        <section className="lg:col-span-9 space-y-12">
          <div>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-bold tracking-tight">My Garage</h2>
              <button className="text-primary font-bold text-sm hover:underline">+ Add New Vehicle</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Tesla Model 3', desc: 'Pearl White Multi-Coat • Dubai 5-8821', tag: 'DAILY DRIVE', last: '3 days ago', img: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop' },
                { name: 'Nissan Patrol', desc: 'Titanium Grey • Dubai K-40922', tag: 'OFF-ROAD', last: '14 days ago', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop' }
              ].map((v, i) => (
                <div key={i} className="group bg-white p-6 rounded-2xl border border-surface-container-highest flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className={`inline-block px-2 py-1 text-[10px] font-bold rounded mb-2 ${i === 0 ? 'bg-primary/10 text-primary' : 'bg-tertiary/10 text-tertiary'}`}>{v.tag}</span>
                      <h3 className="text-xl font-bold">{v.name}</h3>
                      <p className="text-sm text-on-surface-variant">{v.desc}</p>
                    </div>
                    <MoreVertical size={20} className="text-on-surface-variant cursor-pointer" />
                  </div>
                  <div className="relative h-32">
                    <img src={v.img} className="absolute -right-4 bottom-0 w-48 h-32 object-contain group-hover:scale-110 transition-transform duration-500" alt={v.name} referrerPolicy="no-referrer" />
                    <div className="absolute bottom-0 left-0">
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Last Wash</p>
                      <p className="text-sm font-medium">{v.last}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Order History</h2>
            <div className="bg-white rounded-2xl border border-surface-container-highest overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-surface-container-low">
                    <tr>
                      {['Service', 'Vehicle', 'Date', 'Status', 'Action'].map(h => (
                        <th key={h} className="px-6 py-4 font-bold uppercase tracking-widest text-[10px] text-on-surface-variant">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-highest">
                    {[
                      { s: 'Signature Interior Detail', loc: 'LuxeWash Palm Jumeirah', v: 'Tesla Model 3', d: 'Oct 24, 2024' },
                      { s: 'Desert Recovery Wash', loc: 'Mobile Van #04', v: 'Nissan Patrol', d: 'Oct 12, 2024' },
                      { s: 'Ceramic Maintenance', loc: 'Downtown Dubai Hub', v: 'Tesla Model 3', d: 'Sep 28, 2024' }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-surface-container-low transition-colors">
                        <td className="px-6 py-6">
                          <p className="font-bold text-sm">{row.s}</p>
                          <p className="text-xs text-on-surface-variant">{row.loc}</p>
                        </td>
                        <td className="px-6 py-6 text-sm">{row.v}</td>
                        <td className="px-6 py-6 text-sm">{row.d}</td>
                        <td className="px-6 py-6">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">Completed</span>
                        </td>
                        <td className="px-6 py-6 text-right">
                          <button className="text-primary font-bold text-sm hover:underline">Rebook</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { l: 'Payment Methods', v: 'Visa ending in 4421', i: <CreditCard />, btn: 'Update details' },
              { l: 'Saved Locations', v: 'Home (Palm Jumeirah), Work (DIFC)', i: <MapPin />, btn: 'Manage addresses' },
              { l: 'Notification Preferences', v: 'Email and WhatsApp active', i: <Bell />, btn: 'Edit settings' }
            ].map((item, i) => (
              <div key={i} className="bg-surface-container-low p-6 rounded-2xl border border-surface-container-highest">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary mb-4 shadow-sm">
                  {item.i}
                </div>
                <h4 className="font-bold mb-2">{item.l}</h4>
                <p className="text-xs text-on-surface-variant mb-4">{item.v}</p>
                <button className="text-primary text-xs font-bold hover:underline">{item.btn}</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentScreen={screen} setScreen={setScreen} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {screen === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LandingPage onBook={() => setScreen('booking')} />
            </motion.div>
          )}
          {screen === 'booking' && (
            <motion.div
              key="booking"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <BookingPage onConfirm={() => setScreen('confirmation')} />
            </motion.div>
          )}
          {screen === 'confirmation' && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ConfirmationPage onReschedule={() => setScreen('booking')} />
            </motion.div>
          )}
          {screen === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <ProfilePage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
