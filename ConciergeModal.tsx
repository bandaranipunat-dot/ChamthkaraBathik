import { useState, useEffect } from 'react';
import { X, MessageCircle, Ruler, Palette, Check, Copy } from 'lucide-react';
import { ProductItem, buildWhatsAppUrl } from '../data/catalog';
import { BatikImage } from './BatikImage';

interface ConciergeModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

const SIZE_OPTIONS = [
  'Bespoke Made-to-Measure',
  'Standard S',
  'Standard M',
  'Standard L',
  'Standard XL',
];

const PALETTE_OPTIONS = [
  'Original Archive Palette',
  'Royal Emerald & Saffron',
  'Deep Indigo & Ivory',
  'Rich Maroon & Antique Gold',
  'Custom Shade Request',
];

export function ConciergeModal({ product, onClose }: ConciergeModalProps) {
  const [selectedSize, setSelectedSize] = useState(SIZE_OPTIONS[0]);
  const [selectedPalette, setSelectedPalette] = useState(PALETTE_OPTIONS[0]);
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!product) return;
    setSelectedSize(SIZE_OPTIONS[0]);
    setSelectedPalette(PALETTE_OPTIONS[0]);
    setNotes('');
    setCopied(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const inquiryMessage =
    `Hello CHAMATHKARA Bathik! I would like to inquire about "${product.title}" (${product.lotCode}).\n` +
    `• Material: ${product.material}\n` +
    `• Sizing Preference: ${selectedSize}\n` +
    `• Dye Palette: ${selectedPalette}` +
    (notes.trim() ? `\n• Notes: ${notes.trim()}` : '');

  const whatsappHref = buildWhatsAppUrl(inquiryMessage);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inquiryMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="concierge-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#182A4A]/95 backdrop-blur-xl border border-primary/45 shadow-[0_0_40px_rgba(196,154,82,0.18)] text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left: Garment Visual */}
          <div className="md:col-span-5 relative bg-surface-container-lowest min-h-[260px] md:min-h-full">
            <BatikImage
              src={product.image}
              alt={product.title}
              filter={product.imageFilter}
              objectPosition={product.imagePosition}
              className="w-full h-full object-cover aspect-[3/4]"
              fallbackLabel={product.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] uppercase tracking-[0.12em] text-primary font-bold block">
                {product.lotCode} · {product.categoryLabel}
              </span>
              <span className="text-xs text-on-surface-variant block mt-0.5">
                {product.material} · {product.technique}
              </span>
            </div>
          </div>

          {/* Right: Bespoke Concierge Configurator */}
          <div className="md:col-span-7 p-6 flex flex-col justify-between gap-5">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary block">
                    Direct Order Concierge
                  </span>
                  <h2
                    id="concierge-modal-title"
                    className="font-serif text-2xl font-semibold text-on-surface mt-1"
                  >
                    {product.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close concierge modal"
                  className="p-2 rounded bg-surface-container/60 text-on-surface-variant hover:text-primary border border-primary/25 transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {product.subtitle && (
                <p className="text-xs font-medium text-primary mt-1">{product.subtitle}</p>
              )}

              <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Sizing Selector */}
              <div className="mt-5">
                <label className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary mb-2">
                  <Ruler className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Sizing &amp; Fit Preference</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {SIZE_OPTIONS.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                        selectedSize === size
                          ? 'bg-primary-container text-on-primary font-bold'
                          : 'bg-surface-container/70 text-on-surface-variant border border-primary/25 hover:border-primary/60'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Palette Selector */}
              <div className="mt-4">
                <label
                  htmlFor="concierge-palette"
                  className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary mb-2"
                >
                  <Palette className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Colorway &amp; Dye Vat</span>
                </label>
                <select
                  id="concierge-palette"
                  value={selectedPalette}
                  onChange={(e) => setSelectedPalette(e.target.value)}
                  className="w-full px-3 py-2.5 rounded bg-[#3B1018] border border-primary/40 text-on-surface text-sm focus:outline-none focus:border-primary"
                >
                  {PALETTE_OPTIONS.map((palette) => (
                    <option key={palette} value={palette}>
                      {palette}
                    </option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div className="mt-4">
                <label
                  htmlFor="concierge-notes"
                  className="text-[11px] font-semibold uppercase tracking-[0.1em] text-on-surface-variant block mb-1.5"
                >
                  Blouse / Drape Notes (Optional)
                </label>
                <textarea
                  id="concierge-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share sleeve preference, height, or occasion date..."
                  className="w-full px-3 py-2 rounded bg-[#3B1018] border border-primary/40 text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary resize-none"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 border-t border-primary/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-primary-container text-on-primary text-xs font-bold uppercase tracking-[0.1em] hover:bg-primary transition-all shadow-[0_0_20px_rgba(196,154,82,0.25)] whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Inquire via WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded border border-primary/50 text-on-surface hover:bg-primary/15 text-xs font-semibold uppercase tracking-[0.08em] transition-colors cursor-pointer whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" aria-hidden="true" />
                    <span>Copy Details</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
