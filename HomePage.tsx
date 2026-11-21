import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Droplets,
  Flower2,
  Infinity as InfinityIcon,
  Layers,
  MessageCircle,
  Palette,
  PenTool,
  Ruler,
  ScrollText,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import {
  BRAND,
  CATEGORIES,
  PageRoute,
  ProductCategory,
  ProductItem,
  SEASONAL_HIGHLIGHTS,
  buildWhatsAppUrl,
} from '../data/catalog';
import { BatikImage } from '../components/BatikImage';

interface HomePageProps {
  onNavigate: (route: PageRoute, category?: ProductCategory) => void;
  onOpenConcierge: (product: ProductItem) => void;
}

export function HomePage({ onNavigate, onOpenConcierge }: HomePageProps) {
  return (
    <div className="flex flex-col w-full">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest">
        <div
          className="absolute inset-0 z-0 opacity-15 mix-blend-screen pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: `url('${BRAND.mandalaBackdropUrl}')` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/85 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary-container/30 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16 lg:pt-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              100% Handcrafted Artisanal Batik · Sri Lanka
            </span>

            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                Haute Couture &amp; Bespoke Textiles
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-semibold text-primary tracking-tight mt-2 mb-3 leading-[1.12] [text-wrap:balance]">
                The Art of Sri Lankan Batik
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-on-surface-variant max-w-xl font-normal leading-snug">
                Where Traditional Craftsmanship Meets Modern Elegance.
              </p>
            </div>

            <p className="text-base sm:text-lg text-on-surface-variant/90 max-w-xl leading-relaxed">
              Each saree, frock, and sarong is an unrepeatable masterpiece—individually conceived,
              hand-waxed with brass canting tools, and steeped in botanical pigments beneath the
              tropical sun.
            </p>

            {/* Dual CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('collections', 'all')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-primary-container text-on-primary text-xs sm:text-sm font-bold uppercase tracking-[0.1em] hover:bg-primary transition-all shadow-[0_0_20px_rgba(196,154,82,0.25)] whitespace-nowrap cursor-pointer"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('about-us')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-primary/60 text-on-surface hover:bg-primary/15 hover:text-primary-fixed transition-all text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] whitespace-nowrap cursor-pointer"
              >
                <span>Discover Our Story</span>
              </button>
            </div>

            {/* Trust Mini-Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg border-t border-outline-variant/30 mt-2">
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-semibold text-primary tabular-nums">
                  100%
                </span>
                <span className="text-[11px] uppercase tracking-[0.08em] text-on-surface-variant mt-0.5">
                  Pure Mulberry &amp; Cotton
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-semibold text-primary">
                  Zero
                </span>
                <span className="text-[11px] uppercase tracking-[0.08em] text-on-surface-variant mt-0.5">
                  Mass Production
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-semibold text-primary">
                  Bespoke
                </span>
                <span className="text-[11px] uppercase tracking-[0.08em] text-on-surface-variant mt-0.5">
                  Made to Measure
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl bg-surface-container-high aspect-[3/4] border border-primary/25">
                <BatikImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIJUPocppEegKiUKFLwL_ihSM6s9mvY_byPuKtsuQiJrz562i3Yi2OC8J2QPwC_dmMqbUXy6VQN50PIUamTNJUSVcbc2E2mQvwLvdbm6PZloZkvOE7eIkpRjpj_MUvV9P5tVStTS9EPI59MAapCUaQHh4rbvowf3EZ2d-yYYHQm-TqEAsXHWZrutb3zqNTQwIPT6xKor9nLMg5R2_95Lb51WN4MK0KEU8k7kvDIyBTLtzhiWs-Z9AigQ"
                  alt="Sri Lankan Batik Osariya in vibrant magenta"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-surface/90 backdrop-blur-md border border-primary/20">
                  <span className="text-[10px] uppercase tracking-[0.12em] text-primary font-semibold block">
                    Signature Kandyan Osariya
                  </span>
                  <span className="text-xs sm:text-sm text-on-surface">
                    Artisan hand-waxed flora on pure raw silk drape
                  </span>
                </div>
              </div>

              {/* Secondary Overlapping Visual Preview */}
              <div className="absolute -bottom-6 -left-6 w-40 sm:w-44 rounded-lg overflow-hidden shadow-2xl bg-surface-container-highest border border-primary/30 z-20 hidden sm:block">
                <BatikImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwmoYeRLasdeT67lGEnsKdOGlrk0QFCS5r6E87MqBR9NzpNWwlGfZJphyJJPUiI-2g4vsrVZSKquIyoHFtqk4RYzDZRJP0Dq63JWWZBzOXd_AxiGHvelwZqicR-Ni81rvRY5aXU5oKh84h8RBufB3lgFKkhE4tPS8ZJHmXLJXdtuc6xzIjh_t-K6UN4oet3eAy-fHeZ83lSKZNgQm7mxGo_B5a6iwle-_LK9_f3IFtNSeCtRV9GRc9rg"
                  alt="Ivory and royal crimson batik osariya"
                  className="w-full h-52 object-cover"
                />
                <div className="px-3 py-2 bg-secondary-container text-on-secondary-container">
                  <span className="text-[10px] uppercase tracking-[0.1em] block font-bold">
                    Bridal Atelier
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BRAND INTRODUCTION ==================== */}
      <section className="relative w-full py-14 sm:py-16 bg-surface-container-low border-y border-outline-variant/25">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <div className="w-11 h-11 rounded-full bg-surface-container border border-primary/30 flex items-center justify-center text-primary mb-4">
            <InfinityIcon className="w-5 h-5" aria-hidden="true" />
          </div>
          <span className="text-xs uppercase tracking-[0.14em] text-secondary font-semibold">
            Living Sri Lankan Heritage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-primary tracking-tight mt-2 max-w-2xl [text-wrap:balance]">
            A Tapestry of Heritage &amp; Contemporary Silhouette
          </h2>
          <div className="w-24 h-px bg-primary/40 my-6" />
          <blockquote className="font-serif italic text-lg sm:text-xl text-on-surface max-w-3xl leading-relaxed font-normal">
            “We do not merely apply dye to cloth. With boiling beeswax, hand-forged canting pens,
            and generational instinct, we craft wearable heirloom poetry honoring the resplendent
            soul of Sri Lanka.”
          </blockquote>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mt-5 leading-relaxed">
            Handcrafted with devotion in {BRAND.location}, Chamathkara Bathik transforms centuries
            of island textile traditions into couture gowns, classic drapes, and distinguished
            evening wear. Every crackle in the wax tells a story of human touch and natural
            elements.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-primary uppercase tracking-[0.1em] font-semibold">
            <span className="inline-flex items-center gap-1.5">
              <Flower2 className="w-4 h-4" aria-hidden="true" />
              <span>Slow Hand-Crafted Fashion</span>
            </span>
            <span className="text-outline-variant opacity-60" aria-hidden="true">
              ·
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
              <span>Bespoke Concierge Only</span>
            </span>
          </div>
        </div>
      </section>

      {/* ==================== FOUR SIGNATURE CATEGORIES ==================== */}
      <section className="w-full py-14 sm:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-[0.14em] text-secondary font-bold">
                Curated Portfolios
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-primary mt-1">
                Signature Collections
              </h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-md leading-relaxed">
              Hand-drawn motifs transformed across traditional silhouettes and modern statements.
              Select a category to begin your bespoke consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                onClick={() => onNavigate('collections', cat.id)}
                className="group relative rounded-xl overflow-hidden bg-surface-container border border-primary/20 shadow-lg flex flex-col transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 cursor-pointer"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container-high">
                  <BatikImage
                    src={cat.homeImage || cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.1em] text-primary-fixed font-semibold">
                    {cat.homeTag} · {cat.count} Pieces
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between bg-surface-container">
                  <div>
                    <span className="text-[10px] text-primary tracking-[0.12em] uppercase font-semibold">
                      {cat.portfolioIndex}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-on-surface mt-1 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                      {cat.homeDescription}
                    </p>
                  </div>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-primary group-hover:text-primary-fixed">
                    <span>View Category</span>
                    <ArrowRight
                      className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CURATED SEASONAL HIGHLIGHTS ==================== */}
      <section className="w-full py-14 sm:py-16 bg-surface-container-low border-y border-outline-variant/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-[0.14em] text-secondary font-bold">
                Direct Atelier Releases
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-primary mt-1">
                Curated Seasonal Highlights
              </h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Handcrafted one by one. Inquire through our direct artisan link to customize
              dimensions, colorway, and silk weight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEASONAL_HIGHLIGHTS.map((piece) => (
              <article
                key={piece.id}
                className="rounded-xl overflow-hidden bg-surface-container-high border border-primary/20 shadow-xl flex flex-col group hover:border-primary/45 transition-all"
              >
                <button
                  type="button"
                  onClick={() => onOpenConcierge(piece)}
                  className="relative w-full aspect-[3/4] overflow-hidden bg-surface text-left cursor-pointer"
                >
                  <BatikImage
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                    {piece.lotCode} · {piece.material}
                  </span>
                </button>

                <div className="p-5 flex flex-col flex-1 justify-between bg-surface-container-high">
                  <div>
                    <h3
                      onClick={() => onOpenConcierge(piece)}
                      className="font-serif text-lg font-semibold text-primary hover:text-primary-fixed transition-colors cursor-pointer"
                    >
                      {piece.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed line-clamp-2">
                      {piece.description}
                    </p>
                  </div>

                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => onOpenConcierge(piece)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-primary-container text-on-primary text-xs font-bold uppercase tracking-[0.08em] hover:bg-primary transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Order via WhatsApp</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SRI LANKAN CRAFTSMANSHIP & LIVING HERITAGE ==================== */}
      <section className="relative w-full py-14 sm:py-16 bg-surface-container-lowest overflow-hidden">
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[640px] h-[640px] opacity-10 mix-blend-screen pointer-events-none rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url('${BRAND.mandalaBackdropUrl}')` }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Story Column */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-secondary font-bold">
                <ScrollText className="w-4 h-4 text-primary" aria-hidden="true" />
                <span>Unbroken Artisanal Lineage</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-primary tracking-tight [text-wrap:balance]">
                The Intricate Alchemy of Wax, Fire &amp; Natural Water
              </h2>

              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Unlike machine-printed textiles, every square inch of Chamathkara Batik bears
                witness to an intensive multi-week ritual. The master artisan applies molten
                paraffin and beeswax freehand using copper spouts, reserving untouched threads
                before immersion into color vats.
              </p>

              {/* Step Progression Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-4 rounded-lg bg-surface-container border border-primary/20 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xl font-semibold text-primary tabular-nums">
                      01
                    </span>
                    <PenTool className="w-4 h-4 text-on-surface-variant" aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.08em] text-on-surface font-semibold">
                    Canting Freehand
                  </span>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Intricate lines sketched with boiling wax onto 100% natural fibers.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-surface-container border border-primary/20 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xl font-semibold text-primary tabular-nums">
                      02
                    </span>
                    <Palette className="w-4 h-4 text-on-surface-variant" aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.08em] text-on-surface font-semibold">
                    Multi-Bath Dyeing
                  </span>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Graduated cold immersion baths creating singular depth and tone.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-surface-container border border-primary/20 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xl font-semibold text-primary tabular-nums">
                      03
                    </span>
                    <Layers className="w-4 h-4 text-on-surface-variant" aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.08em] text-on-surface font-semibold">
                    Wax Fracturing
                  </span>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Intentional cracking under pressure yielding iconic batik crackle veining.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-surface-container border border-primary/20 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xl font-semibold text-primary tabular-nums">
                      04
                    </span>
                    <Droplets className="w-4 h-4 text-on-surface-variant" aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.08em] text-on-surface font-semibold">
                    Boiling &amp; Release
                  </span>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Dewaxed in fresh boiling water, unmasking clean silk beneath.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('heritage-and-craft')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary-fixed uppercase tracking-[0.1em] cursor-pointer"
                >
                  <span>Read The Full Heritage Monograph</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Visual Atelier Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <div className="rounded-xl overflow-hidden shadow-xl bg-surface-container aspect-[3/4] border border-primary/20">
                    <BatikImage
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiFAy8ypbxeHXGYcoGk9TvlkjvEFHxWiGA-HTHnKOnkP3y7JzawrCcDBlCa46kdKJB0ZvGdChM1ip0IHkLbbNAPDh-fHJLSMvcqyikCVgwpGY3OEU12FMlk0h-YMPwjF-Ot86pExDfiWeLcElBh1IGoMwTTDG6JFi-yspjpxBXw6N_y5sPgo59RT3anELzmDTyewcoMzlaoMotMpALbXus5ON4n3snSXiCH27XcmvWZAUfXoya-OYGAQ"
                      alt="Batik textile dyeing process and drape"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-xl bg-secondary-container p-5 flex flex-col justify-center border border-primary/25">
                    <span className="text-[10px] uppercase tracking-[0.12em] text-on-secondary-container font-bold">
                      Island Authenticity
                    </span>
                    <p className="font-serif text-lg font-semibold text-on-secondary mt-1">
                      100% Sri Lankan Artisans
                    </p>
                    <p className="text-xs text-on-secondary-container mt-1 leading-relaxed">
                      Preserving rural dye-house livelihoods in {BRAND.location}.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-6 sm:pt-8">
                  <div className="rounded-xl overflow-hidden shadow-xl bg-surface-container aspect-[3/4] border border-primary/20">
                    <BatikImage
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWZRHEPIYVDphXXQY3RTfhiTgkVHAS02DZGqQ0HmuHY7X98Ok4CUrU4nz8osNdODoljyHzc2uHbV4qofKLmgsVU5-Wd1KPIA1yBcPDzaYGufJGX7qCadrrWTsY5LgRj6v4cfIfJnG5ITKjOFCabk0A3j9qKLErDDoaayhPs4S7NQ9DAMlTSX7t89etqsM0XVp-mdU6SnR2IpYxGG7MBt9JektZkwwOwZ_mig6-UacT7iZAJ4FqOg3nsQ"
                      alt="Gajasinha lion emblem royal sarong"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-xl bg-surface-container-high aspect-square border border-primary/20">
                    <BatikImage
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy80j9dpT6qKb1REGSN04q32jbL2RPWFSO2Y_-1BcFh5nnWYeiqa8NyacAD-nDv3d7CM1Q0T42ryvRLPe5MqDnj5TiomTfQRYY3Mpz5-hHo_z5-cvX3a_obduuVdWFT4KHI68EznR4KLaveZ-y-LYsMS3oEtgXMe4iXbbnAfdYos6XjEiTuXwvoeHtoRLI3mRqwSl0AZK-3ide37OccjM1i55w4NhzuTZXJPiqAk-YYTJQ0ZK99Rad5g"
                      alt="Moss green modern frock with monochrome shawl"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ATELIER EDITORIAL LOOKBOOK ==================== */}
      <section className="w-full py-14 sm:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-[11px] uppercase tracking-[0.14em] text-secondary font-bold">
              Visual Anthology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-primary mt-1">
              Atelier Editorial Lookbook
            </h2>
            <div className="w-16 h-px bg-primary/35 my-3" />
            <p className="text-sm sm:text-base text-on-surface-variant max-w-xl">
              Captured on location across Sri Lanka&apos;s colonial manors, verandas, and ocean
              courtyards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Main Tall Feature */}
            <div className="md:col-span-5 rounded-xl overflow-hidden bg-surface-container border border-primary/20 shadow-xl relative aspect-[3/4] md:aspect-auto md:h-full">
              <BatikImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQtgZ_amDzGcEAqW6yYPiMJYebNCWvGvs6ap1rl2NANXdl54js6X3fL1qA8YLx8fryHXozIznLwshbuQwyfeTehlm4S84gHvkgRnvcXp60DKuho6vIhlZSmqgb1ZD7Ns-FeUkH6nIUySUBCFqK0340BhLju5YKvDBI8_ayU5JFw_bWRiuP-VwkFCtwgZU5afHf0iJCCTf2ee9Vh3MrpY29AvyWq4EURVkLafTaJnkHqoWACc8dcqV2mw"
                alt="Fuchsia pink floral drape batik osariya"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.14em] text-primary font-bold">
                  Lookbook 01
                </span>
                <h3 className="font-serif text-xl font-semibold text-on-surface mt-1">
                  The Southern Rose Kandyan
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                  Cerise and chalk-white flora draped over cascading ruffle sleeve silken choli.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col gap-5">
              {/* Wide Horizontal Editorial */}
              <div className="rounded-xl overflow-hidden bg-surface-container border border-primary/20 shadow-xl relative aspect-[16/9]">
                <BatikImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXBghnf2-1j4nyfJV7ciB6Cl07s3UPOVYi15yEajG225qYLd2fTzdQRqjrVKStBq_aJl_55Hy7jtzsVnvJeM4FZ185Wgt1ksgq0rxkP-BJD0W1TPyJXvFCpYkeBkA_xNyznfOSDpwXal6myjw-_aVgJqaq6Y3SqQ_8iuIzNBnNbsMgV6JhBQZGRTEHvNjHXjtL7kNwoUv3ZkAoydjXMmRZUzAcm4OOVzPD5btQWcV0t9eezAHmxvgBcw"
                  alt="Mint and emerald floral ensemble"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-primary font-bold">
                      Lookbook 02
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-on-surface">
                      Emerald Garden Reverie
                    </h3>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.1em] text-on-surface-variant font-semibold">
                    Resort Capsule
                  </span>
                </div>
              </div>

              {/* Bottom Split Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <button
                  type="button"
                  onClick={() => onNavigate('collections', 'frocks')}
                  className="rounded-xl overflow-hidden bg-surface-container border border-primary/20 shadow-xl relative aspect-[3/4] group text-left cursor-pointer"
                >
                  <BatikImage
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr7lorilrlSHVrQJ1yecrRnyKJZitlrKdxg0EBZKv0POMOP1898rWxVZk_hP-AIe14GQ7G2lKgvQmOPzAtxpAr7eCLAQ6PHmRBVWBHwrBG5IKJaX_pLx2EC3E8EXlmtktd6QIEV_ehiWNUYABERExZEsQg4xAjCw02CwRayLLxjqKNiQkUG9ZWCDS0m-RFZivr4Iv_JM8xRRLn-Q0vnCrTJhmWFKB6gOAem767NsbHrYeODQgcs6Su8g"
                    alt="Earthy peacock motif tea frock"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.14em] text-primary font-bold">
                        Lookbook 03
                      </span>
                      <p className="font-serif text-base font-semibold text-on-surface mt-0.5 group-hover:text-primary transition-colors">
                        Mayura Peacock Tea Frock
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  </div>
                </button>

                <div className="p-6 rounded-xl bg-surface-container-high border border-primary/20 shadow-xl flex flex-col justify-between">
                  <div>
                    <BookOpen className="w-7 h-7 text-primary" aria-hidden="true" />
                    <h3 className="font-serif text-xl font-semibold text-primary mt-3">
                      Private Showroom Appointments
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                      Experiencing Chamathkara Batik in person reveals the unmistakable texture of
                      pure hand-waxed silk. Schedule a bespoke draper consultation.
                    </p>
                  </div>
                  <a
                    href={buildWhatsAppUrl(
                      'Hello CHAMATHKARA Bathik, I would like to schedule a private atelier consultation.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-secondary hover:text-secondary-fixed transition-colors"
                  >
                    <span>Book Fitting via WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHATSAPP CONCIERGE VIP ORDERING BANNER ==================== */}
      <section className="w-full py-14 sm:py-16 bg-surface-container-low border-t border-outline-variant/25">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-2xl overflow-hidden bg-on-tertiary-fixed border border-primary/35 shadow-2xl p-6 sm:p-10">
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 opacity-15 mix-blend-screen pointer-events-none rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url('${BRAND.mandalaBackdropUrl}')` }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col gap-2 text-center md:text-left">
                <span className="text-[10px] uppercase tracking-[0.14em] text-primary font-bold">
                  White-Glove VIP Concierge
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-primary tracking-tight">
                  Custom Tailored to Your Measurements
                </h2>
                <p className="text-sm sm:text-base text-tertiary max-w-xl leading-relaxed">
                  Speak directly with our master drapers. Every piece is made individually with zero
                  mass production. We cater to bespoke color alterations, matching groom sarongs,
                  and bridesmaid ensembles.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-tertiary text-xs uppercase tracking-[0.08em]">
                  <span className="inline-flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span>Worldwide Insured Delivery</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Ruler className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span>Custom Blouse Stitching</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span>Authentic Certificate</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 shrink-0 w-full md:w-auto">
                <a
                  href={buildWhatsAppUrl(
                    'Hello CHAMATHKARA Bathik, I would like to place a bespoke order.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded bg-primary text-on-primary text-xs sm:text-sm font-bold uppercase tracking-[0.1em] hover:bg-primary-fixed transition-all shadow-[0_0_25px_rgba(237,191,115,0.35)] whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  <span>Consult via WhatsApp</span>
                </a>
                <span className="text-[10px] text-tertiary/85 uppercase tracking-[0.12em] text-center">
                  {BRAND.whatsappDisplay} · Active Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
