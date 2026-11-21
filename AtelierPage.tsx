import { useState, useEffect, useRef, FormEvent } from 'react';
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Bookmark,
  Camera,
  CheckCircle2,
  Clock,
  Droplets,
  Flame,
  FlaskConical,
  Flower2,
  Layers,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  PenTool,
  Plane,
  Ruler,
  Send,
  Share2,
  Shirt,
  Sparkles,
  Sun,
} from 'lucide-react';
import {
  BRAND,
  COUTURE_DIALOGUES,
  CRAFT_PILLARS,
  FAQS,
  PageRoute,
  buildWhatsAppUrl,
} from '../data/catalog';
import { BatikImage } from '../components/BatikImage';

interface AtelierPageProps {
  activeSection: Extract<PageRoute, 'about-us' | 'heritage-and-craft' | 'contact'>;
}

const GARMENT_CATEGORIES = [
  'Batik Saree (Osariya / Traditional)',
  'Batik Frock / Haute Dress',
  "Unisex / Men's Batik Sarong",
  'Handcrafted Silk Night Dress',
  'Bridal Custom Ensemble',
];

export function AtelierPage({ activeSection }: AtelierPageProps) {
  const heritageRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [garmentType, setGarmentType] = useState(GARMENT_CATEGORIES[0]);
  const [colorPalette, setColorPalette] = useState('');
  const [clientMessage, setClientMessage] = useState('');
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (activeSection === 'heritage-and-craft' && heritageRef.current) {
      heritageRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (activeSection === 'contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection]);

  const handleBespokeSubmit = (e: FormEvent) => {
    e.preventDefault();
    const palette = colorPalette.trim() || 'Traditional Heritage Palette';
    const notes = clientMessage.trim() || 'None specified';

    const message =
      `*New Atelier Inquiry - CHAMATHKARA Bathik*\n` +
      `• Name: ${clientName.trim()}\n` +
      `• Phone: ${clientPhone.trim()}\n` +
      `• Garment: ${garmentType}\n` +
      `• Palette: ${palette}\n` +
      `• Notes: ${notes}`;

    setPreparedUrl(buildWhatsAppUrl(message));
  };

  return (
    <div className="flex flex-col w-full">
      {/* ==================== TOP EDITORIAL HEADER & MANDALA EMBLEM ==================== */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-12 sm:py-16">
        <div
          className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Brand Legacy */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 self-start text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary">
                <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                <span>Atelier Archive &amp; Contact Concierge</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl font-medium text-primary tracking-tight [text-wrap:balance]">
                Our Heritage &amp; Craft
              </h1>

              <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
                Preserving the sacred art of Sri Lankan wax-resist batik across generations. Every
                motif carries centuries of island lore, drawn by hand and imbued with the quiet
                luxury of slow couture.
              </p>

              {/* Micro Metas */}
              <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
                <div className="p-3.5 bg-surface-container border border-primary/20 rounded-lg flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-semibold text-primary tabular-nums">
                    100%
                  </span>
                  <span className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-[0.1em] mt-0.5">
                    Hand Waxed
                  </span>
                </div>
                <div className="p-3.5 bg-surface-container border border-primary/20 rounded-lg flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-semibold text-secondary tabular-nums">
                    30+
                  </span>
                  <span className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-[0.1em] mt-0.5">
                    Artisan Guilds
                  </span>
                </div>
                <div className="p-3.5 bg-surface-container border border-primary/20 rounded-lg flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-semibold text-primary-fixed">
                    DHL
                  </span>
                  <span className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-[0.1em] mt-0.5">
                    Worldwide Insured
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Rotating Mandala SVG + Circular Emblem */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-full p-4 bg-gradient-to-tr from-surface-container-high via-surface-container to-surface-variant/40 flex items-center justify-center shadow-xl">
                <svg
                  className="absolute inset-0 w-full h-full text-primary/25 animate-mandala-slow"
                  fill="none"
                  viewBox="0 0 400 400"
                  aria-hidden="true"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="180"
                    stroke="currentColor"
                    strokeDasharray="6 6"
                    strokeWidth="1.5"
                  />
                  <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" />
                  <circle cx="200" cy="200" r="95" stroke="currentColor" strokeWidth="2" />
                  <g stroke="currentColor" strokeWidth="1.2">
                    <path d="M200 20 C215 90, 240 110, 200 150 C160 110, 185 90, 200 20 Z" />
                    <path d="M200 380 C215 310, 240 290, 200 250 C160 290, 185 310, 200 380 Z" />
                    <path d="M20 200 C90 215, 110 240, 150 200 C110 160, 90 185, 20 200 Z" />
                    <path d="M380 200 C310 215, 290 240, 250 200 C290 160, 310 185, 380 200 Z" />
                    <path d="M72 72 C135 110, 145 135, 165 165 C135 145, 110 135, 72 72 Z" />
                    <path d="M328 328 C265 290, 255 265, 235 235 C265 255, 290 265, 328 328 Z" />
                    <path d="M328 72 C290 135, 265 145, 235 165 C255 135, 265 110, 328 72 Z" />
                    <path d="M72 328 C110 265, 135 255, 165 235 C145 265, 135 290, 72 328 Z" />
                  </g>
                  <circle cx="200" cy="200" fill="currentColor" fillOpacity="0.08" r="50" />
                </svg>

                <div className="relative z-10 flex items-center justify-center w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-2 border-primary/35 hover:scale-105 transition-transform duration-500">
                  <BatikImage
                    src={BRAND.emblemUrl}
                    alt="CHAMATHKARA Batik Emblem"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LIVING PHILOSOPHY OF SRI LANKAN WAX-RESIST ==================== */}
      <section ref={heritageRef} id="heritage-section" className="w-full py-14 sm:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Editorial Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden bg-surface-container border border-primary/25 shadow-2xl">
                <BatikImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPgOEv-cAtMNbyIioBpRXxBOitofQ1hXLtArv7mpC8n-N4sSe1MfGQwUSKPBK2Z7gHFpWTf5aJj-0FKsOnqTxbnhVd_XOLJbS2bssUyB_f9bjoiT3sYyimlyQNZggx_0tpMziz88rlHgqkqcOarmJvFhWOsaik0V3M8oxWewm0k7ANEEOy_9WYMepy3sGF9Ds8WcXd87TpmHSGJlHcOuTDxiVc4sBd2hgMOz5XH_Zk"
                  alt="Master Sri Lankan batik artist hand-drawing royal botanical motifs with a brass canting tool"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-85 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-surface-container-high/92 backdrop-blur border border-primary/25">
                  <p className="text-[10px] font-semibold text-primary uppercase tracking-[0.12em]">
                    Master Craftsperson · Kandy Guild
                  </p>
                  <p className="text-xs sm:text-sm text-on-surface mt-1 leading-relaxed">
                    Drawing royal Hansa and sacred lotus motifs onto fine mull cotton with custom
                    beeswax balances.
                  </p>
                </div>
              </div>

              {/* Ornamental Floating Accent */}
              <div className="hidden md:flex flex-col items-center justify-center absolute -bottom-5 -right-5 bg-secondary-container border border-primary/35 text-on-secondary-container p-4 rounded-lg shadow-xl w-36 text-center">
                <BadgeCheck className="w-6 h-6 text-primary" aria-hidden="true" />
                <span className="text-[10px] uppercase font-bold tracking-[0.08em] mt-1.5 leading-snug">
                  100% Genuine Wax Crackle
                </span>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 flex flex-col gap-5 lg:pl-4">
              <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-[0.1em]">
                <Flower2 className="w-4 h-4" aria-hidden="true" />
                <span>The Sri Lankan Distinction</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-on-surface leading-tight [text-wrap:balance]">
                Not Printed. <span className="text-primary italic">Lovingly Born</span> of Fire,
                Wax &amp; Sun.
              </h2>

              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                In an era of fleeting fast fashion, CHAMATHKARA Bathik honors the ancient island
                ethos where a single saree or frock requires days of patient, meditative devotion.
                Unlike commercial screen prints that coat only the surface, our artisans hand-apply
                molten beeswax and pine resin using fine-tipped brass canting pens.
              </p>

              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                The cloth is repeatedly steeped in fiber-reactive dye vats, boiled in natural
                rainwater kettles to release the wax, and spread under the tropical sun to dry in
                the gentle coastal trade breezes. The exquisite fine fractures—known as batik
                veining or crackle—ensure that no two pieces can ever be identical. Each fold is a
                signature of island soul.
              </p>

              {/* Hallmark Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-lg bg-surface-container border border-primary/20 flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-on-surface block">
                      Immersion Saturation
                    </span>
                    <span className="text-xs text-on-surface-variant mt-0.5 block leading-relaxed">
                      Color strikes clean through to the reverse face of the textile.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-surface-container border border-primary/20 flex items-start gap-3">
                  <Sun className="w-5 h-5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-on-surface block">
                      Solar Setting
                    </span>
                    <span className="text-xs text-on-surface-variant mt-0.5 block leading-relaxed">
                      Natural tropical UV rays permanently bind pigments to natural fibers.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4 SACRED PILLARS OF CRAFT ==================== */}
      <section className="w-full py-14 sm:py-16 bg-surface-container-lowest border-y border-outline-variant/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-[0.12em] block mb-1">
                Craftsmanship Codex
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-on-surface">
                The 4 Sacred Pillars of Craft
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-md leading-relaxed">
              A timeless chronological alchemy unchanged for over three centuries in Southern and
              Central Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CRAFT_PILLARS.map((pillar) => {
              const Icon =
                pillar.step === '01'
                  ? PenTool
                  : pillar.step === '02'
                    ? FlaskConical
                    : pillar.step === '03'
                      ? Layers
                      : Flame;
              const accentText =
                pillar.accent === 'secondary'
                  ? 'text-secondary'
                  : pillar.accent === 'primary-fixed'
                    ? 'text-primary-fixed'
                    : 'text-primary';

              return (
                <div
                  key={pillar.step}
                  className="p-6 bg-surface-container border border-primary/20 rounded-xl flex flex-col justify-between shadow-md hover:bg-surface-container-high transition-colors group"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <span
                        className={`font-serif text-4xl font-medium opacity-35 group-hover:opacity-100 transition-opacity tabular-nums ${accentText}`}
                      >
                        {pillar.step}
                      </span>
                      <Icon className={`w-6 h-6 ${accentText}`} aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-on-surface">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-outline-variant/25">
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-[0.12em] block ${accentText}`}
                    >
                      {pillar.metaLabel}
                    </span>
                    <span className="text-xs text-on-surface-variant mt-0.5 block">
                      {pillar.metaValue}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== COUTURE DIALOGUES LOOKBOOK SHOWCASE ==================== */}
      <section className="w-full py-14 sm:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-10">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold text-secondary uppercase tracking-[0.12em] block mb-1">
                Couture Dialogues
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-on-surface">
                Modern Elegance Meets Island Heritage
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
                From ceremonial Osariya drapes worn at imperial Kandyan weddings to tailored unisex
                resort sarongs and modern evening frocks, batik transcends convention.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={buildWhatsAppUrl(
                  'Hello CHAMATHKARA Bathik, I would like to request the full couture lookbook portfolio.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary px-5 py-3 rounded text-xs font-semibold uppercase tracking-[0.1em] hover:bg-secondary hover:text-on-secondary-fixed transition-colors whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Request Full Lookbook</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COUTURE_DIALOGUES.map((piece) => (
              <div
                key={piece.id}
                className="flex flex-col bg-surface-container border border-primary/20 rounded-xl overflow-hidden group shadow-lg"
              >
                <div className="relative w-full h-96 overflow-hidden bg-surface-container-lowest">
                  <BatikImage
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/85 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                    {piece.badge}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-on-surface">
                      {piece.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                      {piece.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-2 border-t border-outline-variant/25 flex justify-between items-center text-primary text-[11px] font-semibold uppercase tracking-[0.1em]">
                    <span>{piece.meta}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ATELIER CONTACT & WHATSAPP CONCIERGE HUB ==================== */}
      <section
        ref={contactRef}
        id="contact-hub"
        className="w-full py-14 sm:py-16 bg-surface-container-lowest border-y border-outline-variant/25"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Concierge Highlight & Direct WhatsApp Card */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-[0.12em] block mb-1">
                  Direct Artisan Access
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-on-surface">
                  Order &amp; Connect Directly With Our Atelier
                </h2>
                <p className="text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
                  Every garment is made-to-order or selected from limited batch releases. We bypass
                  automated carts to offer you personal, one-on-one consultation with our lead
                  textile designers.
                </p>
              </div>

              {/* Direct WhatsApp Hotline Card */}
              <div className="p-6 rounded-xl bg-surface-container-high border border-primary/25 flex flex-col gap-4 shadow-xl relative overflow-hidden">
                <div
                  className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-primary/10 blur-xl pointer-events-none"
                  aria-hidden="true"
                />

                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-[0.12em] block">
                      Official WhatsApp Concierge
                    </span>
                    <span className="font-serif text-xl font-semibold text-primary tracking-wide">
                      {BRAND.whatsappDisplay}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Inquire about current fabric swatches, bespoke measurements, bridal party orders,
                  or islandwide/worldwide shipping updates.
                </p>

                <a
                  href={buildWhatsAppUrl(
                    'Hello CHAMATHKARA Bathik, I would like to inquire about your batik creations.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-primary text-on-primary text-xs uppercase tracking-[0.1em] rounded text-center font-bold hover:bg-primary-fixed transition-colors flex items-center justify-center gap-2 shadow-md whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Launch Instant WhatsApp Chat</span>
                </a>

                <div className="flex flex-col gap-2 pt-2 border-t border-outline-variant/25 text-xs text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                    <span>{BRAND.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                    <span>Workshop &amp; Atelier: {BRAND.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials Card */}
              <div className="p-4 rounded-xl bg-surface-container border border-primary/20 flex items-center justify-between">
                <span className="text-xs font-semibold text-on-surface uppercase tracking-[0.1em]">
                  Follow The Atelier
                </span>
                <div className="flex items-center gap-2 text-primary">
                  <a
                    href={buildWhatsAppUrl(
                      'Hello CHAMATHKARA Bathik, please share your Instagram & lookbook gallery links.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-2 rounded bg-surface hover:text-primary-fixed transition-colors"
                  >
                    <Camera className="w-4 h-4" />
                  </a>
                  <a
                    href={buildWhatsAppUrl(
                      'Hello CHAMATHKARA Bathik, please share your Facebook showcase.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share"
                    className="p-2 rounded bg-surface hover:text-primary-fixed transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </a>
                  <a
                    href={buildWhatsAppUrl(
                      'Hello CHAMATHKARA Bathik, please share your curated Pinterest boards.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Archive"
                    className="p-2 rounded bg-surface hover:text-primary-fixed transition-colors"
                  >
                    <Bookmark className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Interactive Bespoke Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-xl bg-surface-container border border-primary/25 flex flex-col gap-5 shadow-xl h-full justify-between">
                <div>
                  <span className="text-[10px] font-semibold text-secondary uppercase tracking-[0.12em] block mb-1">
                    Tailored Commission
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-on-surface">
                    Bespoke Inquiry Form
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                    Share your dream silhouette and color palette. Our textile master will respond
                    within 4 business hours via WhatsApp with tailored concepts.
                  </p>
                </div>

                <form onSubmit={handleBespokeSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="clientName"
                        className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-[0.1em]"
                      >
                        Your Full Name *
                      </label>
                      <input
                        id="clientName"
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Ananya Senanayake"
                        className="w-full px-3.5 py-2.5 bg-[#3B1018] border-b border-primary/40 rounded text-on-surface text-sm placeholder:text-on-surface-variant/45 focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="clientPhone"
                        className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-[0.1em]"
                      >
                        WhatsApp Number (Country Code) *
                      </label>
                      <input
                        id="clientPhone"
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="+94 7X XXX XXXX"
                        className="w-full px-3.5 py-2.5 bg-[#3B1018] border-b border-primary/40 rounded text-on-surface text-sm placeholder:text-on-surface-variant/45 focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="garmentType"
                        className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-[0.1em]"
                      >
                        Garment Category *
                      </label>
                      <select
                        id="garmentType"
                        value={garmentType}
                        onChange={(e) => setGarmentType(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#3B1018] border-b border-primary/40 rounded text-on-surface text-sm focus:outline-none focus:border-primary"
                      >
                        {GARMENT_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="colorPalette"
                        className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-[0.1em]"
                      >
                        Preferred Color Palette
                      </label>
                      <input
                        id="colorPalette"
                        type="text"
                        value={colorPalette}
                        onChange={(e) => setColorPalette(e.target.value)}
                        placeholder="e.g. Rich Maroon, Deep Indigo, Ochre"
                        className="w-full px-3.5 py-2.5 bg-[#3B1018] border-b border-primary/40 rounded text-on-surface text-sm placeholder:text-on-surface-variant/45 focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="clientMessage"
                      className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-[0.1em]"
                    >
                      Notes &amp; Custom Sizing Requirements
                    </label>
                    <textarea
                      id="clientMessage"
                      rows={3}
                      value={clientMessage}
                      onChange={(e) => setClientMessage(e.target.value)}
                      placeholder="Describe your desired event, sizing preference, or reference motif..."
                      className="w-full px-3.5 py-2.5 bg-[#3B1018] border-b border-primary/40 rounded text-on-surface text-sm placeholder:text-on-surface-variant/45 focus:outline-none focus:border-primary resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-1.5 text-on-surface-variant text-xs">
                      <Lock className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                      <span>Direct WhatsApp concierge transmission</span>
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 bg-primary text-on-primary text-xs uppercase tracking-[0.1em] rounded font-bold hover:bg-primary-fixed transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer whitespace-nowrap"
                    >
                      <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Transmit Inquiry</span>
                    </button>
                  </div>

                  {preparedUrl && (
                    <div className="p-4 rounded-lg bg-secondary-container border border-primary/35 text-on-secondary-container text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                        <span>
                          Inquiry prepared for <strong>{clientName}</strong>. Tap below to open
                          WhatsApp.
                        </span>
                      </div>
                      <a
                        href={preparedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded bg-primary text-on-primary text-xs font-bold uppercase tracking-[0.08em] hover:bg-primary-fixed transition-colors whitespace-nowrap shrink-0"
                      >
                        Open WhatsApp Now
                      </a>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CURATED FAQ SECTION ==================== */}
      <section className="w-full py-14 sm:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.12em] block mb-1">
              Frequently Inquired
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-on-surface">
              Boutique Care, Shipping &amp; Craft Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq) => {
              const Icon =
                faq.icon === 'flight'
                  ? Plane
                  : faq.icon === 'care'
                    ? Shirt
                    : faq.icon === 'sizing'
                      ? Ruler
                      : Clock;
              const iconColor =
                faq.icon === 'care'
                  ? 'text-secondary'
                  : faq.icon === 'sizing'
                    ? 'text-primary-fixed'
                    : 'text-primary';

              return (
                <div
                  key={faq.id}
                  className="p-5 rounded-xl bg-surface-container border border-primary/20 flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-5 h-5 shrink-0 ${iconColor}`} aria-hidden="true" />
                    <h3 className="font-serif text-xl font-semibold text-on-surface">
                      {faq.question}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
