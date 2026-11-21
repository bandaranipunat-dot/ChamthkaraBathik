import { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { BRAND, PageRoute, buildWhatsAppUrl } from '../data/catalog';
import { BatikImage } from './BatikImage';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

const NAV_ITEMS: { route: PageRoute; label: string }[] = [
  { route: 'home', label: 'Home' },
  { route: 'collections', label: 'Collections' },
  { route: 'about-us', label: 'About Us' },
  { route: 'heritage-and-craft', label: 'Heritage & Craft' },
  { route: 'contact', label: 'Contact' },
];

export function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (route: PageRoute) => {
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Slim Announcement Strip */}
      <div className="hidden sm:flex bg-secondary-container text-on-secondary-container px-4 py-1.5 text-center text-[10px] font-semibold tracking-[0.12em] uppercase items-center justify-center gap-2">
        <span className="opacity-85">Artisan Hand-Dyed Sri Lankan Batik</span>
        <span className="text-primary opacity-60" aria-hidden="true">·</span>
        <span className="opacity-85">Islandwide &amp; Worldwide Delivery</span>
        <span className="text-primary opacity-60" aria-hidden="true">·</span>
        <span className="text-primary font-bold">Bespoke Orders via WhatsApp</span>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-18 sm:h-20 bg-surface/92 backdrop-blur-xl border-b border-outline-variant/40 transition-all">
        <div className="w-full max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-4 lg:gap-8">
          {/* Brand Zone */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border border-primary/40 shrink-0 bg-surface-container">
              <BatikImage
                src={BRAND.logoUrl}
                alt="Chamathkara Bathik Emblem"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-semibold text-primary tracking-[0.12em] uppercase leading-tight whitespace-nowrap group-hover:text-primary-fixed transition-colors">
                Chamathkara Bathik
              </span>
              <span className="hidden md:block text-[10px] font-medium text-on-surface-variant tracking-[0.12em] uppercase opacity-75 whitespace-nowrap">
                {BRAND.tagline}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => handleNavClick(item.route)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-xs font-semibold uppercase tracking-[0.1em] py-2 px-3.5 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? 'bg-primary-container text-on-primary font-bold shadow-sm'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={buildWhatsAppUrl(
                'Hello CHAMATHKARA Bathik, I would like to inquire about a bespoke batik order.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary text-xs font-semibold uppercase tracking-[0.08em] px-3.5 sm:px-4 py-2.5 rounded hover:bg-primary transition-all shadow-[0_0_15px_rgba(196,154,82,0.18)] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">Order via WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2.5 rounded bg-surface-container text-on-surface hover:text-primary border border-outline-variant/50 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-low/98 backdrop-blur-xl border-b border-outline-variant/60 px-4 py-4 shadow-2xl">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => handleNavClick(item.route)}
                  className={`w-full text-left px-4 py-3 rounded text-sm font-semibold uppercase tracking-[0.1em] transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-primary-container text-on-primary font-bold'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
