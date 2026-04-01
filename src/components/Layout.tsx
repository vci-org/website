import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Mail, MapPin } from 'lucide-react';
import { SiFacebook, SiInstagram } from '@icons-pack/react-simple-icons';
import { NAV_ITEMS } from '../constants';
import LogoMain from '../assets/VCI LOGO.png';
import LogoBlu from '../assets/vci BLU.png';

interface LayoutProps {
  children: React.ReactNode;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-vci-beige/95 backdrop-blur-sm shadow-sm border-b border-vci-yellow/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleNav('/')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <img 
            src={LogoMain} 
            alt="VCI Logo" 
            className="h-12 w-auto group-hover:scale-105 transition-transform duration-300" 
          />
          <div className="flex flex-col border-l border-vci-yellow/20 pl-3">
            <span className="font-bold text-vci-yellow text-lg leading-tight tracking-tight">Veneto Comunità</span>
            <span className="font-light text-vci-yellow text-sm leading-tight tracking-widest uppercase">Itinerante</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-6">
          {NAV_ITEMS.filter(item => item.path !== '/partecipa').map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${isActive
                  ? 'text-vci-yellow font-bold border-b-2 border-vci-yellow'
                  : 'text-gray-600 hover:text-vci-yellow'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button
            onClick={() => handleNav('/partecipa')}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 font-bold text-white transition-all duration-300 bg-vci-yellow rounded-full hover:bg-vci-gold shadow-lg hover:shadow-vci-yellow/30 hover:-translate-y-0.5"
          >
            <span className="relative">Partecipa</span>
            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden p-2 text-vci-green"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-vci-beige shadow-xl border-t border-gray-100 flex flex-col p-4 space-y-4 xl:hidden animate-fade-in-down">
          {NAV_ITEMS.filter(item => item.path !== '/partecipa').map((item) => (
            <button
              key={item.path}
              onClick={() => handleNav(item.path)}
              className={`text-left text-lg py-2 px-2 rounded-lg ${location.pathname === item.path
                ? 'bg-vci-yellow/10 text-vci-yellow font-bold'
                : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('/partecipa')}
            className="w-full bg-vci-yellow text-white py-4 rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform"
          >
            Partecipa Ora
          </button>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-vci-yellow text-vci-darkBlue pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="space-y-4">
          <img src={LogoBlu} alt="VCI Logo Blue" className="h-16 w-auto brightness-0 invert opacity-20 absolute pointer-events-none" />
          <h3 className="font-serif text-3xl font-bold relative z-10">VCI</h3>
          <p className="text-vci-darkBlue/80 text-sm leading-relaxed font-medium relative z-10">
            Camminiamo per unire comunità, territori e persone del Veneto. Unisciti al movimento che rallenta per andare lontano.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-vci-blue">Esplora</h4>
          <ul className="space-y-2 text-sm text-vci-darkBlue/70">
            <li><NavLink to="/chi-siamo" className="hover:text-vci-darkBlue hover:underline">Chi Siamo</NavLink></li>
            <li><NavLink to="/progetti" className="hover:text-vci-darkBlue hover:underline">Progetti</NavLink></li>
            <li><NavLink to="/associazioni" className="hover:text-vci-darkBlue hover:underline">Rete Associativa</NavLink></li>
          </ul>
        </div>

        {/* Legal / Practical */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-vci-blue">Info</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><NavLink to="/info" className="hover:text-white hover:underline">FAQ</NavLink></li>
            <li><NavLink to="/partecipa" className="hover:text-white hover:underline">Diventa Volontario</NavLink></li>
            <li><span className="opacity-50">Privacy Policy</span></li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-vci-blue">Contatti</h4>
          <div className="space-y-3 text-sm text-gray-200">
            <p className="flex items-center gap-2"><MapPin size={16} /> Veneto, Italia</p>
            <p className="flex items-center gap-2"><Mail size={16} /> venetocomunitaitinerante@oltrevia.it</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <SiFacebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <SiInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-vci-darkBlue/10 text-center text-xs text-vci-darkBlue/50">
        © {new Date().getFullYear()} Veneto Comunità Itinerante - Tutti i diritti riservati.
      </div>
    </footer>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};