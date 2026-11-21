import { useState, useRef } from 'react';
import {
  ArrowDown,
  ArrowRight,
  Brush,
  MessageCircle,
  MessageSquare,
  Palette,
  Plane,
  Ruler,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react';
import {
  BRAND,
  CATALOG_PRODUCTS,
  CATEGORIES,
  PageRoute,
  ProductCategory,
  ProductItem,
  buildWhatsAppUrl,
} from '../data/catalog';
import { BatikImage } from '../components/BatikImage';

interface CollectionsPageProps {
  activeCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
  onNavigate: (route: PageRoute) => void;
  onOpenConcierge: (product: ProductItem) => void;
}

const FILTER_TABS: { id: ProductCategory; label: string; count: number }[] = [
  { id: 'all', label: 'All Collections', count: 29 },
  { id: 'sarees', label: 'Batik Sarees', count: 8 },
  { id: 'frocks', label: 'Batik Frocks', count: 11 },
  { id: 'sarongs', label: 'Batik Sarongs', count: 7 },
  { id: 'nightwear', label: 'Batik Night Dresses', count: 3 },
];

export function CollectionsPage({
  activeCategory,
  onCategoryChange,
  onNavigate,
  onOpenConcierge,
}: CollectionsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const catalogRef = useRef<HTMLElement | null>(null);

  const handleSelectCategory = (category: ProductCategory, shouldScroll = false) => {
    onCategoryChange(category);
    if (shouldScroll && catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredProducts = CATALOG_PRODUCTS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    if (!matchesCategory) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.trim().toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.material.toLowerCase().includes(q) ||
      item.seriesLabel.toLowerCase().includes(q) ||
      item.lotCode.toLowerCase().includes(q)
    );
  });

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* ==================== CATALOG HEADER & EDITORIAL INTRO ==================== */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-12 sm:py-16">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-secondary-container/20 blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-on-surface-variant text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
          >
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-primary/60" aria-hidden="true">
              /
            </span>
            <span className="text-primary">Collections</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-medium text-primary tracking-[0.12em] uppercase mb-2">
                <span className="w-8 h-px bg-primary" aria-hidden="true" />
                <span>Artisan Haute Couture Catalog</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-semibold text-primary tracking-tight leading-[1.12] [text-wrap:balance]">
                Authentic Hand-Drawn Sri Lankan Batik
              </h1>
              <p className="text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed">
                Each drape, silhouette, and fold reflects weeks of wax-resist meditation by Master
                Artisans in Sri Lanka. From historic Kandyan Osariyas to modern resort dresses,
                discover rare one-of-one wearable fine art.
              </p>
            </div>

            {/* Quick Concierge WhatsApp Card */}
            <a
              href={buildWhatsAppUrl(
                'Hello CHAMATHKARA Bathik, I would like to consult with your atelier concierge.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container border border-primary/25 hover:border-primary/50 p-4 rounded-xl flex items-center gap-4 self-start lg:self-end transition-colors shrink-0"
            >
              <div className="w-11 h-11 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold text-secondary uppercase tracking-[0.12em]">
                  Atelier WhatsApp
                </span>
                <span className="font-serif text-lg font-semibold text-primary">
                  {BRAND.whatsappDisplay}
                </span>
                <span className="text-[11px] text-on-surface-variant opacity-80">
                  White-glove custom inquiries
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== CATEGORY FEATURE MOSAIC ==================== */}
      <section className="w-full bg-surface-container-low py-12 sm:py-14 border-y border-outline-variant/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary block mb-1">
                Curated Disciplines
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-on-surface">
                Explore by Garment Architecture
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-on-surface-variant">
              <span>Tap to filter catalog below</span>
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleSelectCategory(cat.id, true)}
                  className={`text-left group relative overflow-hidden rounded-xl bg-surface-container p-4 transition-all duration-300 hover:bg-surface-container-high shadow-lg border cursor-pointer ${
                    isSelected ? 'border-primary/70' : 'border-primary/20'
                  }`}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-surface-dim">
                    <BatikImage
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-primary-fixed">
                      {cat.tag} · {cat.count}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary group-hover:text-primary-fixed transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-primary uppercase tracking-[0.1em]">
                    <span>View {cat.title.replace('Batik ', '')}</span>
                    <ArrowRight
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FILTER TAB INTERFACE ==================== */}
      <section
        id="catalog-section"
        ref={catalogRef}
        className="w-full bg-surface/95 py-4 sm:py-5 sticky top-[72px] sm:top-[107px] z-30 border-b border-outline-variant/30 backdrop-blur-md shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
            {FILTER_TABS.map((tab) => {
              const active = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleSelectCategory(tab.id, false)}
                  className={`px-3.5 py-2 rounded-lg text-xs uppercase tracking-[0.08em] transition-all whitespace-nowrap shrink-0 cursor-pointer tabular-nums ${
                    active
                      ? 'bg-primary-container text-on-primary font-bold shadow-sm'
                      : 'bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-64 shrink-0">
            <Search
              className="w-4 h-4 text-on-surface-variant absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search motif, silk, lot..."
              aria-label="Search batik garments"
              className="w-full pl-9 pr-8 py-2 rounded-lg bg-surface-container border border-outline-variant/60 text-xs text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ==================== HIGH-FIDELITY PRODUCT GRID ==================== */}
      <section className="w-full bg-surface py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Informational Banner */}
          <div className="mb-10 bg-surface-container-low border border-primary/20 p-5 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-4">
              <ShieldCheck className="w-7 h-7 text-primary shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-serif text-lg font-semibold text-primary">
                  Artisanal Bespoke Protocol
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5 leading-relaxed">
                  Each piece is individually batiked upon selection. Colors, pallu motifs, and
                  tailored measurements are finalized directly with our design master.
                </p>
              </div>
            </div>
            <a
              href={buildWhatsAppUrl(
                'Hello CHAMATHKARA Bathik, I would like to consult on a custom fabric order.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-4 py-2.5 rounded bg-secondary-container text-on-secondary-container text-xs font-semibold uppercase tracking-[0.08em] hover:bg-secondary hover:text-on-secondary transition-all shrink-0"
            >
              Direct Inquiry
            </a>
          </div>

          {/* Empty State if search finds nothing */}
          {filteredProducts.length === 0 ? (
            <div className="py-16 px-6 text-center rounded-xl bg-surface-container border border-primary/20">
              <p className="font-serif text-2xl text-primary">
                No garments match &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="text-sm text-on-surface-variant mt-2">
                Try clearing your filter or ask our atelier for a custom hand-waxed design.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  onCategoryChange('all');
                }}
                className="mt-5 px-5 py-2.5 rounded bg-primary-container text-on-primary text-xs font-bold uppercase tracking-[0.1em] hover:bg-primary transition-colors cursor-pointer"
              >
                Reset Catalog Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group flex flex-col rounded-xl bg-surface-container border border-primary/20 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 hover:border-primary/45"
                >
                  <button
                    type="button"
                    onClick={() => onOpenConcierge(product)}
                    className="relative w-full aspect-[3/4] bg-surface-dim overflow-hidden text-left cursor-pointer"
                  >
                    <BatikImage
                      src={product.image}
                      alt={product.title}
                      filter={product.imageFilter}
                      objectPosition={product.imagePosition}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      fallbackLabel={product.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/85 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-primary-fixed">
                      {product.material} · {product.categoryLabel}
                    </span>
                  </button>

                  <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-semibold text-primary tracking-[0.12em] uppercase">
                        {product.seriesLabel}
                      </span>
                      <h3
                        onClick={() => onOpenConcierge(product)}
                        className="font-serif text-lg font-bold text-on-surface group-hover:text-primary transition-colors mt-0.5 cursor-pointer"
                      >
                        {product.title}
                      </h3>
                      {product.subtitle && (
                        <p className="text-[11px] text-primary font-medium mt-0.5">
                          {product.subtitle}
                        </p>
                      )}
                      <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col gap-2 border-t border-outline-variant/25">
                      <span className="text-[11px] text-on-surface-variant flex items-center gap-1.5">
                        <Brush className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                        <span>{product.technique}</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => onOpenConcierge(product)}
                        className="w-full py-2.5 px-4 rounded bg-primary-container text-on-primary text-xs font-bold uppercase tracking-[0.08em] text-center flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-md cursor-pointer whitespace-nowrap"
                      >
                        <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>Order via WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ==================== BESPOKE INQUIRY & CUSTOM DYE PALETTE SECTION ==================== */}
      <section className="w-full bg-surface-container-low py-14 sm:py-16 relative overflow-hidden border-t border-outline-variant/25">
        <div
          className="absolute right-0 bottom-0 opacity-5 pointer-events-none w-96 h-96 bg-contain bg-no-repeat bg-right-bottom"
          style={{ backgroundImage: `url('${CATEGORIES[0].image}')` }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-surface-container border border-primary/25 rounded-2xl p-6 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left: Editorial explanation */}
            <div className="w-full lg:w-3/5 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-primary text-xs font-semibold tracking-[0.12em] uppercase">
                <span className="w-6 h-px bg-primary" aria-hidden="true" />
                <span>Atelier Made-to-Order Protocol</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-primary leading-tight">
                Bespoke Sizing &amp; Tailored Dye Palettes
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Every woman and gentleman deserves a drape aligned with their personal aura. We
                welcome bespoke requests: whether you desire the &ldquo;Nilambari Butterfly&rdquo;
                rendered in royal emerald silk instead of cobalt, or need custom blouse sleeves
                tailored to Kandyan Osariya measurements, our artisans cater to every specification.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                <div className="bg-surface p-4 rounded-lg border border-primary/20 flex flex-col gap-1.5">
                  <Palette className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span className="text-xs text-on-surface font-bold uppercase tracking-[0.08em]">
                    Custom Dyes
                  </span>
                  <span className="text-xs text-on-surface-variant leading-relaxed">
                    Request specific PANTONE or traditional mineral shades.
                  </span>
                </div>
                <div className="bg-surface p-4 rounded-lg border border-primary/20 flex flex-col gap-1.5">
                  <Ruler className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span className="text-xs text-on-surface font-bold uppercase tracking-[0.08em]">
                    Blouse Sizing
                  </span>
                  <span className="text-xs text-on-surface-variant leading-relaxed">
                    Send shoulder, bust, and fall lengths directly to the master tailor.
                  </span>
                </div>
                <div className="bg-surface p-4 rounded-lg border border-primary/20 flex flex-col gap-1.5">
                  <Plane className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span className="text-xs text-on-surface font-bold uppercase tracking-[0.08em]">
                    Insured Shipping
                  </span>
                  <span className="text-xs text-on-surface-variant leading-relaxed">
                    Worldwide direct doorstep dispatch via DHL Express courier.
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Action Card linking to WhatsApp */}
            <div className="w-full lg:w-2/5 bg-secondary-container/40 border border-primary/25 p-6 sm:p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center mb-4 shadow-lg">
                <MessageSquare className="w-7 h-7" aria-hidden="true" />
              </div>
              <span className="text-[10px] text-secondary uppercase tracking-[0.12em] font-bold">
                Instant Artisan Direct Link
              </span>
              <h3 className="font-serif text-xl font-semibold text-primary mt-1">
                Consult with Chamathkara
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-2 max-w-xs leading-relaxed">
                Share screenshots of the motifs you love and specify your occasion timeline. Our
                senior design concierge will reply within 30 minutes.
              </p>

              <div className="w-full mt-6 flex flex-col gap-2">
                <a
                  href={buildWhatsAppUrl(
                    'Hello CHAMATHKARA Bathik, I would like to consult about a bespoke color palette and sizing.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded bg-primary-container text-on-primary text-xs font-bold uppercase tracking-[0.1em] flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-md whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Open Atelier WhatsApp</span>
                </a>
                <span className="text-[11px] text-on-surface-variant opacity-80">
                  {BRAND.whatsappDisplay} · Mon – Sat 9AM – 7PM IST
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
