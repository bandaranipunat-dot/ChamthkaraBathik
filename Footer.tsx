import { Headphones } from 'lucide-react';
import { BRAND, PageRoute, ProductCategory, buildWhatsAppUrl } from '../data/catalog';
import { BatikImage } from './BatikImage';

interface FooterProps {
  onNavigate: (route: PageRoute, category?: ProductCategory) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full bg-surface-container-lowest relative text-on-surface border-t border-outline-variant/30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {/* Brand Overview */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-primary/40 shrink-0">
              <BatikImage
                src={BRAND.logoUrl}
                alt="Chamathkara Bathik Emblem"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold text-primary tracking-[0.12em] uppercase leading-tight">
                Chamathkara Bathik
              </span>
              <span className="text-[10px] font-semibold text-on-surface-variant tracking-[0.12em] uppercase">
                Authentic Sri Lankan Couture
              </span>
            </div>
          </div>

          <p className="text-sm text-on-surface-variant max-w-sm leading-relaxed">
            Preserving the timeless heritage of Sri Lankan wax-resist batik textiles through
            artisanal silhouettes, custom silk infusions, and bespoke handcrafted design.
          </p>

          <div>
            <a
              href={buildWhatsAppUrl(
                'Hello CHAMATHKARA Bathik, I would like to speak with the atelier concierge.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary-fixed uppercase tracking-[0.08em] transition-colors"
            >
              <Headphones className="w-4 h-4" aria-hidden="true" />
              <span>Concierge: {BRAND.whatsappDisplay}</span>
            </a>
          </div>
        </div>

        {/* Couture Collections */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
            Couture Collections
          </span>
          <ul className="flex flex-col gap-2 text-sm text-on-surface-variant">
            {(
              [
                { label: 'Batik Sarees', category: 'sarees' },
                { label: 'Batik Frocks', category: 'frocks' },
                { label: 'Batik Sarongs', category: 'sarongs' },
                { label: 'Batik Night Dresses', category: 'nightwear' },
              ] as const
            ).map((item) => (
              <li key={item.category}>
                <button
                  type="button"
                  onClick={() => onNavigate('collections', item.category)}
                  className="hover:text-primary transition-colors text-left cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* The Atelier */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
            The Atelier
          </span>
          <ul className="flex flex-col gap-2 text-sm text-on-surface-variant">
            <li>
              <button
                type="button"
                onClick={() => onNavigate('about-us')}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('heritage-and-craft')}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Heritage &amp; Craft
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('collections')}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Bespoke Process
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Boutique Contact
              </button>
            </li>
          </ul>
        </div>

        {/* White-Glove Service */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
            White-Glove Service
          </span>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Worldwide shipping insured via DHL Express. Tailored consultations available through our
            direct WhatsApp artisan link.
          </p>
          <div className="p-4 rounded bg-surface-container border border-primary/20">
            <span className="text-[10px] uppercase tracking-[0.12em] text-secondary font-bold block mb-1">
              Atelier &amp; Custom Inquiries
            </span>
            <span className="text-xs text-on-surface block mb-1">{BRAND.location}</span>
            <span className="text-xs text-on-surface-variant block">
              Mon – Sat: 9:00 AM – 7:00 PM IST
            </span>
          </div>
        </div>
      </div>

      <div className="w-full bg-surface-container-low py-4 border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <span className="text-xs text-on-surface-variant">
            © 2024 CHAMATHKARA Bathik. Handcrafted in {BRAND.location}. All Rights Reserved.
          </span>
          <div className="flex items-center gap-5 text-[11px] text-on-surface-variant uppercase tracking-[0.08em]">
            <span>Private Policy</span>
            <span>Terms of Craft</span>
            <span>Islandwide Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
