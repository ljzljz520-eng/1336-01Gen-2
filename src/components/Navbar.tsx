import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Waves, Menu, X, Heart } from 'lucide-react';
import { navLinks } from '@/data/mockData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-ocean-500 to-coral-500 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <Waves size={24} />
            </div>
            <span
              className={`text-lg font-bold transition-colors ${
                isScrolled ? 'text-ocean-900' : 'text-white'
              }`}
            >
              OceanGuard
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-coral-500 ${
                  location.pathname === link.path
                    ? 'text-coral-600'
                    : isScrolled
                    ? 'text-slate-700'
                    : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="btn-primary !py-2 !px-5 text-sm flex items-center gap-2">
              <Heart size={16} fill="currentColor" />
              立即捐赠
            </button>
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="菜单"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 bg-white rounded-xl shadow-lg mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'bg-ocean-50 text-ocean-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                <Heart size={16} fill="currentColor" />
                立即捐赠
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
