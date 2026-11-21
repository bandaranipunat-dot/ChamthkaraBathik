export type PageRoute = 'home' | 'collections' | 'about-us' | 'heritage-and-craft' | 'contact';

export type ProductCategory = 'all' | 'sarees' | 'frocks' | 'sarongs' | 'nightwear';

export interface ProductItem {
  id: string;
  lotCode: string;
  category: Exclude<ProductCategory, 'all'>;
  categoryLabel: string;
  seriesLabel: string;
  title: string;
  subtitle?: string;
  material: string;
  technique: string;
  description: string;
  image: string;
  imageFilter?: string;
  imagePosition?: 'center' | 'top';
}

export interface CategorySummary {
  id: Exclude<ProductCategory, 'all'>;
  portfolioIndex: string;
  title: string;
  tag: string;
  homeTag: string;
  count: number;
  image: string;
  homeImage?: string;
  description: string;
  homeDescription: string;
}

export const BRAND = {
  name: 'Chamathkara Bathik',
  tagline: 'Traditional Art · Modern Elegance',
  location: 'Chilaw, Madampe, Sri Lanka',
  whatsappNumber: '94761551740',
  whatsappDisplay: '+94 76 155 1740',
  email: 'chamthkarabatik@gmail.com',
  hours: 'Mon – Sat: 9:00 AM – 7:00 PM IST (GMT+5:30)',
  logoUrl:
    'https://lh3.googleusercontent.com/aida/ALJJyrCbnV023sgEwNpUzDeeZhyYjNqmhzCF6OsrClO2cKpPejHaPsNjh7Ij6nzf64INk6msAcz8Wi6TLvEqCMXSPv49BSn_C1-rGq_JSScNEkhSK13dkOWJqFy8D-8Q2eecw5yOF9-kq-8u6o_97cS2eMLy16OzXGkdBDn2acQxV0icmIoa1YetqpxSWcf406bjvdi676gUz5rPQ9YlUuJdfdVUnRBV1DBCOWiFAKzYUttxyloQcSWut5PdZMQ',
  emblemUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCQxIeX2dW7GamP8vsmCEuXVR-Jq3qVS7NXGP2zbPHqO5a1KB_UFpxIalWCGDvTAeLFrrk7yIwgpvy_PDOLIoBbw3w5TbIT2w2vSyqThqmYqi5zKaLliQAvRhjYe4j0Kby4GO5m8jUDM3Zz6Kk2L3wuEdqkbkTTc2KPpCIYixz6NPBrKk_X53TbA_-moZC1quzPTJc-HalNiiR1x8GsfdeHprKkUNuYI-uGRtzS2hwR1YnfXtfnq6DvbA',
  mandalaBackdropUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB2MeezojuICQoLLtc8Ca26f9qvXK_dlE5X3STE9oQAJD9fNwbN6gu_nT_ZJJAsofOuMsSd68IiRoLXmP4boLqu99F_QvEpJrJEi6g8LxUwcDHqDHyeurlediB55IEdvJCN6w2oQI2Ne9cUasH3emd7fYxjAqtXxs9fgVb_WbQuRXekgj6-5F_YSFyvyol04OPxhvsAtLzWE_1qY2s0ZlMITOeqshUcVCkAMQBxmEQ8NRhPa61HyqYJcg',
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const CATEGORIES: CategorySummary[] = [
  {
    id: 'sarees',
    portfolioIndex: 'Portfolio 01',
    title: 'Batik Sarees',
    tag: 'Curated Archive',
    homeTag: 'Silk & Georgette',
    count: 8,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbf4VkJduxlQw2hLBZzfVWidQ_a2mLgnjZqQhD4RiwLk5E_10OPn6FCNh9ANRETe0RBGepYVwaHF7ZGIu_Y8cK6CVFQZUDBlKV3ET9NQIjHFg_icjHqrOVv77iArGEB3CZik234RUAY5bzYIbV4FEfwHTcEvTZThwAxhn8waHwuWmG1JwSsPcQG36ATsOKwyfxSpIuN4Xa-1W9Mx1DVA5LjVYLDgowFOEJxvKROsymToaL_8Ili3JesQ',
    description:
      'Traditional Kandyan Osariyas & modern drapes crafted with wax-resist storytelling on pure silk & voile.',
    homeDescription:
      'Kandyan Osariya and modern Indian drapes with cascading hand-waxed mandalas.',
  },
  {
    id: 'frocks',
    portfolioIndex: 'Portfolio 02',
    title: 'Batik Frocks',
    tag: 'Modern Silhouette',
    homeTag: 'Cocktail & Evening',
    count: 11,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ1x1ACdoJsChY_a26TNSaPPeLsgGBE_bP6l3LMSAUsK9xd_pey0C5cBSShZS5QpfCH6psBcRRLQths1rr4dn7c0Lb9iPJIKRKdPlNlE6PTGLIL_E-gYfH58fibc46diaBZOr-rwOXIk4-wqA0I__U7dmv_D86_06ch8bkYWk4XKrNLiqB0XE_-w6pqiyy0Ki9jJeQNxkTqDnaczdF9SbsidQGHorrUf_QiuJNqBIbepjL49TGrncGgQ',
    description:
      'Contemporary silhouettes, flared maxi dresses, and bespoke artisan frocks hand-dyed in Chilaw, Madampe, Sri Lanka.',
    homeDescription:
      'Contemporary resort silhouettes, evening tea frocks, and structured modern dresses.',
  },
  {
    id: 'sarongs',
    portfolioIndex: 'Portfolio 03',
    title: 'Batik Sarongs',
    tag: 'Heritage Menswear',
    homeTag: "Gentlemen's Royal",
    count: 7,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASQFbdUhjBLiW6VkSx4cbv2sm7O68UCB2e4gXzAbH7IOF9jUlCj4I7GZGTsuHKVdZMnq27hnNr_-DHmY-MeoXFL-1Um3XjroPb8HkUQdCe29cC_WOs6qafMinDwN2faB61JVleP8YbW8zOo_9OHl6Lu9nMtjqn3nOB19eZBk8pGCc25zoaeSH1UkCyo895l1mi5iUbkE-HW9vS45YsOBhueyT7K7Ug4Q3ppSt6oWTgPnLIrsDhRNkDzw',
    description:
      "Refined formal & casual men's and unisex sarongs featuring traditional heraldic emblems and lion crests.",
    homeDescription:
      'Prestige masculine wear adorned with ancestral sun rays, elephants, and Gajasinha emblems.',
  },
  {
    id: 'nightwear',
    portfolioIndex: 'Portfolio 04',
    title: 'Batik Night Dresses',
    tag: 'Lounge & Slumber',
    homeTag: 'Lounge & Resort',
    count: 3,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKOvVgq_EgQFDjnUZkvDECAUAyj4V8EO_ItXDteVcpFjJ93mToe4wRUvAQ934yPemPEX_KLJdnsxy-_MupZtsUhHdv1hzom6BPjyYD5ZeUs_7ZEuAqNMEswVQ_FRrVYETNoNPUovIizckuSrZc3qM18sPdPtIgtGmPelHGFzFFXm_HAIofpYtZnejmnpFwc-0HqT050YxNQfdXvMMyX3vkbpRFs6RqmhKWwLEOYuNUpJFCRyTl__BS9A',
    homeImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3-4KEsJ-F1xzrMY1J4tz6Jss5xjFnnryltXpzoA8-TZeblYjDF_oqV--ZP04x3SMZQ_46oEhirHpjZxKxT3XYAP4-GRYWnxSaOWKZkH5v9HW0zBHLegxxfXG4uCQw1ihxqzZRXt71z_xF_MpMxi5P0gUc8AjgIiANsi9l8zCfvPJ4jpcLdV4u2F5QMTBcZLivJ6dEqFfxWFxfMJIsbd8qkw1PDRgEzvKKuhhOLqCK74J2HfuChXDAWA',
    description:
      'Ultra-breathable organic cotton loungewear, tiered ruffle gowns, and relaxed evening resort sleepwear.',
    homeDescription:
      'Airy, featherlight pure cotton slips and lounging caftans with hand-dipped ombre botanicals.',
  },
];

export const SEASONAL_HIGHLIGHTS: ProductItem[] = [
  {
    id: 'highlight-cb-204',
    lotCode: 'Lot CB-204',
    category: 'sarees',
    categoryLabel: 'Saree',
    seriesLabel: 'Pure Mulberry Silk',
    title: 'Nil Sanda Sapphire Osariya',
    material: 'Pure Mulberry Silk',
    technique: 'Fine Canting Wax Tracing',
    description:
      'Deep sapphire blue ground accented with hand-drawn white lotuses and cracked wax fractures.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC0S-n9hDNkOmVyfvH83klOjUExwjVs90kXXlnHcppIaiF9LJ1mMLz76AztYlCwowtF_v3zklGCW5xXgnENGbPSVQNqLXu51FicuMR99ZlSmIqdYS2WF5otSNv4YRczWbN8iE-SYaVhfe69h-qoN1h4gb5hx8kX861rkk4mmV0OeQspMIxmB014vgB8DJQhDhSnSglmejwAxysIwD1D5y8l4eyy7joU-jk0Za1yX157SxvU-Dt0ys8h1w',
  },
  {
    id: 'highlight-cb-189',
    lotCode: 'Lot CB-189',
    category: 'sarees',
    categoryLabel: 'Saree',
    seriesLabel: 'Royal Raw Silk',
    title: 'Raja Tusker Mandala Saree',
    material: 'Royal Raw Silk',
    technique: 'Intricate Line Art Resist',
    description:
      'Golden mustard and cobalt immersion dyeing featuring regal Esala Perahera tuskers.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC4L9n0QWD4_V2u9acoc1u6tutDuz8HkCMYkTjxKuBOwLaoZtt6X81Ngacg4bfaf37i708yPlfzZ6fhaOCPoXqN25KEtd3Vv-VEwOBtemM-RNgrNaCaGygXMTN9Z4klu5SbLUERnqVIGsXxASSXt6VJ2YxDP0Logr5_XlLyN5USpkhABoPxUwVyfOqBooZq5gVynsth0-R_pU_7lPKd__wcQfZzwsxzzzb1ev9k3ttDi_ahl4eNdFyiZg',
  },
  {
    id: 'highlight-cb-312',
    lotCode: 'Lot CB-312',
    category: 'sarees',
    categoryLabel: 'Saree',
    seriesLabel: 'Chiffon & Habutai',
    title: 'Samankoka Terracotta Drape',
    material: 'Chiffon & Habutai',
    technique: 'Southern Temple Technique',
    description:
      'Warm terracotta with fluttered butterfly canting motifs crafted across five sequential wax applications.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdBmmqKpYXp3vrQJlZA_udU3k6eCNEK22CP5P-8ZxCSKMsDkP0LafsbFB66ZRIgaLfwh4tv2z4ZqtvP8Pd_GYtcTx-_pxF8R0twmTs2CVTfWPKG8n0lKn0ee7f0y3ejC18jUs7KAji5L8PkG6JwNHZs7peFrnnwsHKJcrJS2Wq8Ny0frvspvk37PleM77or8qu7LbeK3m14LDiSa7yCl5ysr-C0adc5vJ1-9Mgpq7HVMONceUBXONiLA',
  },
  {
    id: 'highlight-cb-401',
    lotCode: 'Lot CB-401',
    category: 'sarees',
    categoryLabel: 'Saree',
    seriesLabel: 'Crisp Organic Cotton',
    title: 'Vana Leaf Canopy Saree',
    material: 'Crisp Organic Cotton',
    technique: 'Dual-Stage Botanical Dye',
    description:
      'Lush deep tropical forest tones interwoven with stylized cinnamon flora and golden veins.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACslcGMEKSygHpF36CqaKH2qiRHLNsOUqdKhqXK4VsYiwqi57dEW53YGpjeM1BKmlH9tMHNOOU4aPw1NidV5DHr6fNDJIKGEGMH0l8YVC02r-qKYkU0z2Ws7b4apo3pGUvZ6FRLctc2JmSNagd4e_Apaht7WEEd2yJKVdWVjahu7VUcbQvhAAzTQi64JtUZV-B8VwKUvEg4mzewx7PEi-NNMcMMvKtrw8k7SglsAEx4bXemgL3czr13g',
  },
];

export const CATALOG_PRODUCTS: ProductItem[] = [
  // ==================== BATIK SAREES (8) ====================
  {
    id: 'saree-01',
    lotCode: 'CB-S01',
    category: 'sarees',
    categoryLabel: 'Saree',
    seriesLabel: 'Kandyan Osariya',
    title: 'Nilambari Cyan Butterfly Osariya',
    material: 'Pure Raw Silk',
    technique: 'Wax-Resist Hand Dyeing',
    description:
      'Hand-painted sapphire butterfly motifs framed by an intricate pleated raban border and wax-cracked floral falls.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbf4VkJduxlQw2hLBZzfVWidQ_a2mLgnjZqQhD4RiwLk5E_10OPn6FCNh9ANRETe0RBGepYVwaHF7ZGIu_Y8cK6CVFQZUDBlKV3ET9NQIjHFg_icjHqrOVv77iArGEB3CZik234RUAY5bzYIbV4FEfwHTcEvTZThwAxhn8waHwuWmG1JwSsPcQG36ATsOKwyfxSpIuN4Xa-1W9Mx1DVA5LjVYLDgowFOEJxvKROsymToaL_8Ili3JesQ',
  },
  {
    id: 'saree-02',
    lotCode: 'CB-S02',
    category: 'sarees',
    categoryLabel: 'Saree',
    seriesLabel: 'Geometric Floral',
    title: 'Nuwara Mandala Peach & Indigo Saree',
    material: 'Hand-Spun Voile',
    technique: 'Triple-Dip Dye Bath',
    description:
      'Radiating concentric circular mandala centerpieces on warm clay peach silk, completed with indigo trim accents.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbf4VkJduxlQw2hLBZzfVWidQ_a2mLgnjZqQhD4RiwLk5E_10OPn6FCNh9ANRETe0RBGepYVwaHF7ZGIu_Y8cK6CVFQZUDBlKV3ET9NQIjHFg_icjHqrOVv77iArGEB3CZik234RUAY5bzYIbV4FEfwHTcEvTZThwAxhn8waHwuWmG1JwSsPcQG36ATsOKwyfxSpIuN4Xa-1W9Mx1DVA5LjVYLDgowFOEJxvKROsymToaL_8Ili3JesQ',
    imageFilter: 'hue-rotate(45deg)',
  },
  {
    id: 'saree-03',
    lotCode: 'CB-S03',
    category: 'sarees',
    categoryLabel: 'Saree',
    seriesLabel: 'National Flower Series',
    title: 'Nil Manel Royal Sapphire Floral Osariya',
    material: '100% Sri Lankan Silk',
    technique: 'Fine Canting Wax Tracing',
    description:
      "Echoing Sri Lanka's blue water lily, delicately traced with copper canting wax needles and saturated cobalt pigments.",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC0S-n9hDNkOmVyfvH83klOjUExwjVs90kXXlnHcppIaiF9LJ1mMLz76AztYlCwowtF_v3zklGCW5xXgnENGbPSVQNqLXu51FicuMR99ZlSmIqdYS2WF5otSNv4YRczWbN8iE-SYaVhfe69h-qoN1h4gb5hx8kX861rkk4mmV0OeQspMIxmB014vgB8DJQhDhSnSglmejwAxysIwD1D5y8l4eyy7joU-jk0Za1yX157SxvU-Dt0ys8h1w',
  },
  {
    id: 'saree-04',
    lotCode: 'CB-S04',
    category: 'sarees',
    categoryLabel: 'Saree',
    seriesLabel: 'Sigiriya Fresco Aura',
    title: 'Sigiri Ivory & Crimson Court Osariya',
    material: 'Tussar Silk Crepe',
    technique: 'Single-Artisan Heritage Wax',
    description:
      'Royal ancient court motifs illustrated with deep ruby and vermilion natural pigments against rich ivory silk.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAwmoYeRLasdeT67lGEnsKdOGlrk0QFCS5r6E87MqBR9NzpNWwlGfZJphyJJPUiI-2g4vsrVZSKquIyoHFtqk4RYzDZRJP0Dq63JWWZBzOXd_AxiGHvelwZqicR-Ni81rvRY5aXU5oKh84h8RBufB3lgFKkhE4tPS8ZJHmXLJXdtuc6xzIjh_t-K6UN4oet3eAy-fHeZ83lSKZNgQm7mxGo_B5a6iwle-_LK9_f3IFtNSeCtRV9GRc9rg',
  },
  {
    id: 'saree-05',
    lotCode: 'CB-S05',
    category: 'sarees',
    categoryLabel: 'Saree',
    seriesLabel: 'Wedding Collection',
    title: 'Rathna Fuchsia Blossom Osariya',
    material: 'Mulberry Silk',
    technique: 'Dual Stage Color Immersion',
    description:
      'Vibrant fuchsia petaled garlands balanced by midnight indigo leaf tendrils along the sweeping tail and border.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIJUPocppEegKiUKFLwL_ihSM6s9mvY_byPuKtsuQiJrz562i3Yi2OC8J2QPwC_dmMqbUXy6VQN50PIUamTNJUSVcbc2E2mQvwLvdbm6PZloZkvOE7eIkpRjpj_MUvV9P5tVStTS9EPI59MAapCUaQHh4rbvowf3EZ2d-yYYHQm-TqEAsXHWZrutb3zqNTQwIPT6xKor9nLMg5R2_95Lb51WN4MK0KEU8k7kvDIyBTLtzhiWs-Z9AigQ',
  },
  {
    id: 'saree-06',
    lotCode: 'CB-S06',
    category: 'sarees',
    categoryLabel: 'Saree',
    seriesLabel: 'Hasthi Series',
    title: 'Hasthi Heritage Elephant & Mustard Drape',
    material: 'Silk Twill',
    technique: 'Intricate Line Art Resist',
    description:
      'Noble Esala Perahera tuskers carved in wax relief across golden mustard silk, honoring Sri Lankan majestic ritual traditions.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC0S-n9hDNkOmVyfvH83klOjUExwjVs90kXXlnHcppIaiF9LJ1mMLz76AztYlCwowtF_v3zklGCW5xXgnENGbPSVQNqLXu51FicuMR99ZlSmIqdYS2WF5otSNv4YRczWbN8iE-SYaVhfe69h-qoN1h4gb5hx8kX861rkk4mmV0OeQspMIxmB014vgB8DJQhDhSnSglmejwAxysIwD1D5y8l4eyy7joU-jk0Za1yX157SxvU-Dt0ys8h1w',
    imageFilter: 'sepia(0.6) saturate(1.8)',
  },
  {
    id: 'saree-07',
    lotCode: 'CB-S07',
    category: 'sarees',
    categoryLabel: 'Saree',
    seriesLabel: 'Botanical Creeper',
    title: 'Liyawela Mint & Forest Emerald Saree',
    material: 'Georgette Silk',
    technique: 'Wax Fracture Marbling',
    description:
      'Ancient continuous liyawela vine scrollwork hand-waxed across layered cool mint tones and deep rainforest green.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBXBghnf2-1j4nyfJV7ciB6Cl07s3UPOVYi15yEajG225qYLd2fTzdQRqjrVKStBq_aJl_55Hy7jtzsVnvJeM4FZ185Wgt1ksgq0rxkP-BJD0W1TPyJXvFCpYkeBkA_xNyznfOSDpwXal6myjw-_aVgJqaq6Y3SqQ_8iuIzNBnNbsMgV6JhBQZGRTEHvNjHXjtL7kNwoUv3ZkAoydjXMmRZUzAcm4OOVzPD5btQWcV0t9eezAHmxvgBcw',
  },
  {
    id: 'saree-08',
    lotCode: 'CB-S08',
    category: 'sarees',
    categoryLabel: 'Saree',
    seriesLabel: 'Solar Resonance',
    title: 'Suriya Rust Butterfly Temple Ensemble',
    material: 'Heavy Habotai',
    technique: 'Southern Temple Technique',
    description:
      'Earthy terracotta, warm burnt sienna, and dusk violet wax crackling inspired by southern temple wall murals.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdBmmqKpYXp3vrQJlZA_udU3k6eCNEK22CP5P-8ZxCSKMsDkP0LafsbFB66ZRIgaLfwh4tv2z4ZqtvP8Pd_GYtcTx-_pxF8R0twmTs2CVTfWPKG8n0lKn0ee7f0y3ejC18jUs7KAji5L8PkG6JwNHZs7peFrnnwsHKJcrJS2Wq8Ny0frvspvk37PleM77or8qu7LbeK3m14LDiSa7yCl5ysr-C0adc5vJ1-9Mgpq7HVMONceUBXONiLA',
  },

  // ==================== BATIK FROCKS (11) ====================
  {
    id: 'frock-01',
    lotCode: 'CB-F01',
    category: 'frocks',
    categoryLabel: 'Frock',
    seriesLabel: 'Handcrafted Silhouette',
    title: 'Frock Design 01',
    material: 'Artisan Batik Cotton-Silk',
    technique: 'Fine Canting Wax Resist',
    description:
      'Ornate peacock tail motif hand-drawn with wax resist techniques across an earthy indigo and golden ochre canvas.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBocO1Gl8F0J-YpOoUb4q_du9cMxtlDVyQvLdaSD79WSHWHvwFUZZzwcb7UTOz4lfFROh5-SPs3XOvWPJBxQ-zS1hM8ZzvEWSIVt46pBx-44ltejK5tbbbLIWGbqXj9KSYbxNN9egUFYVUo1rklZfnYyCa6qMtRLCV04Oc_X6Zk61wiwyiBVAPzQngj93AVqGzWc3zy3dG9XfTKvX-m3KzqyVPKC219_yAiiVCCtAUoCOXVvAXdesJbmw',
  },
  {
    id: 'frock-02',
    lotCode: 'CB-F02',
    category: 'frocks',
    categoryLabel: 'Frock',
    seriesLabel: 'Handcrafted Silhouette',
    title: 'Frock Design 02',
    material: 'Artisan Batik Linen',
    technique: 'Fine Canting Wax Resist',
    description:
      'Botanical earthen olive flare dress adorned with organic foliage motifs, asymmetric hemline, and geometric neck accents.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAjb3mkdFHxoM-r5UJ96Hb9SgBEOfJiKdQcor6ojsV9PES1aXI2YYJ-bFk5tEtrOSBxGHiXB9ya9B2z5M3WtVcHohIV3LIm9DKTht7pbchxub91BxT3mecLam3QLHb0Gfi187SPBg3fsohnZ1WC19StjI_-wJRXNktR6SwC_wCNlbjk60pksH9AvhgDVHyutDNM8RSCY28nrPOBzjys-3D65m0ARSXsWWH5SCW103JLhxoNEXFm6VwJbw',
  },
  {
    id: 'frock-03',
    lotCode: 'CB-F03',
    category: 'frocks',
    categoryLabel: 'Frock',
    seriesLabel: 'Handcrafted Silhouette',
    title: 'Frock Design 03',
    material: 'Artisan Batik Cotton',
    technique: 'Heritage Mask Resist',
    description:
      'Heritage demon mask and folklore emblem dress featuring warm terracotta tones, bell sleeves, and detailed border etchings.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBA9WjGpLMYq2_GdOByGJCqrOLo9UfcGtSMFDKPKHqK7qyb84wOxR7xnURdT_LAZCz28qHdjNpGFsssQ4LbgfOIn3Fy9ubEG3vmr74i4hy6LMK5q_Yye_rCGnUpqjngZMyv9Rgbow6Wt_GCim8Lc10HGZkoY4Zqe2PfSaYnwicr7R8ThoC5_QycPh6hYPlTcntiBiMLSriTUiVP2rkPumPpXb0mslvPwXzyhQtWlqzKKR9l83vFt4fsDg',
  },
  {
    id: 'frock-04',
    lotCode: 'CB-F04',
    category: 'frocks',
    categoryLabel: 'Frock',
    seriesLabel: 'Handcrafted Silhouette',
    title: 'Frock Design 04',
    material: 'Artisan Batik Silk Blend',
    technique: 'Diagonal Immersion Resist',
    description:
      'Sleeveless high-neck crimson silhouette highlighting striking diagonal striping, wax crackle textures, and blush contrast bands.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmO67Zq-6CqFXquY-1FZVdHD70N0isb3pM9z4-OpAZ3At_9j8SXrzBdgVzWjD_76z8QoY5XeW7on16yxDI2vtfr-6m5hjpFcJqd0fOvSDYPn7rsT66EJE1xzPwomFUTistAh9Kk-odkBTJuDiYgTRzJ8T_hMbzwnsPoWMKjjdoDVc4cJW9yCnMTDJqROLrKqo89uD57N26IAICETph4resDEMnPPDnqzu4rn9NVNzByr0EWoLJf-yoow',
  },
  {
    id: 'frock-05',
    lotCode: 'CB-F05',
    category: 'frocks',
    categoryLabel: 'Frock',
    seriesLabel: 'Handcrafted Silhouette',
    title: 'Frock Design 05',
    material: 'Artisan Batik Voile',
    technique: 'Rainbow Burst Dip Dye',
    description:
      'Ethereal white gown styled with shoulder bow detailing and vivid multi-chromatic burst dip-dye artistry across the lower sweep.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBN3oQHWh3JbGxFjGY8wI9SxOAhtlKGXyXr1vXNSNMM7-Es6a-64Qv77whlEZg97iEFBPUyo-PYAUIZITJ5jxKjKVH30T8-CpNhYeCsEfjuTZp0bL8oR7atwiWB3xQ14E7AxKYpCmLn0Gm8yfMekqM7bcSiD651Ya0pGYU1mn3zjh-8oG8VMXV8G1HDo0MufBftPjOzxQr0UrvNIGAimBwARj_f8HufSLxeUcpA-9FByMT1Yvu3CJjqoA',
  },
  {
    id: 'frock-06',
    lotCode: 'CB-F06',
    category: 'frocks',
    categoryLabel: 'Frock',
    seriesLabel: 'Handcrafted Silhouette',
    title: 'Frock Design 06',
    material: 'Artisan Batik Cotton',
    technique: 'Marigold Wax Fracture',
    description:
      'Bright marigold yellow gown designed with sweetheart neckline, delicate spider-web wax cracks, and bold stylized bottom graphics.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ8YI93qU3H9zl2d-W_Czukg3hukGRTQEFhFeFri48NCNR1TO0bQ629Mk3_gfuHXbJ5LcxpBtXfKzMbV-U3bQ-M0GHfmIuP4KcWjfOvtloKUZPxYG6zZZnGOTrUcv4WEwCXQwyXzqO4ECCW3rnMdhBzDUhEzoPAlBAmXc84ArSOnCJGIfzz9lwZ4MRoHYQBxhIQllVHZVju2ofM77K8x1wA3YjyOHKbsXP_sLhMB2ZhSWW0HbrqH4gZg',
  },
  {
    id: 'frock-07',
    lotCode: 'CB-F07',
    category: 'frocks',
    categoryLabel: 'Frock',
    seriesLabel: 'Handcrafted Silhouette',
    title: 'Frock Design 07',
    material: 'Artisan Batik Mull',
    technique: 'Botanical Canting Paint',
    description:
      'Puff-sleeve ivory maxi dress painted with expressive golden botanical blooms, green foliage, and fine sunburst wax fractures.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCrCLrgeB_oi02Um9cJivhV8xMGB888CdG0FjGU7obcNOVTgF4OsBu9Usv1SiIL4K_-mw5ja-3ii2xEXgfy9h5eKSaAsu1aB4hvEF6ktLjER3_WXyqNXOrqTWpLJ75I2hpQ03q5no7CWZzaxVpJ0zFd8Woawc4liY9F6VVhObl1jArVt8TcLNGCR7d9bNf7XHbQChGX9bi6C8uX1z6Yq8eRUxfdp0SfiewfYh3ClFTEHNbA6haASc6yog',
  },
  {
    id: 'frock-08',
    lotCode: 'CB-F08',
    category: 'frocks',
    categoryLabel: 'Frock',
    seriesLabel: 'Handcrafted Silhouette',
    title: 'Frock Design 08',
    material: 'Artisan Batik Cotton',
    technique: 'Block Stamped Resist',
    description:
      'Saturated ruby red dress embellished with artisanal wooden buttons and playful white floral motifs hand-stamped with wax resist.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAjvn2UGSbMkuGOAmh4dndmnP-021ObTYAZb3whjP-pnlu_kB-7cjcvfdsC6EqRYXBtvfqcwGh3sv2ccQ1zTSX9OdcsBc0sIkjKHmqb7n6f0f3sOqEMyt1mIZvjRagtzMJLl-VbbchkKbfHSr2bgTHaw0uklLxjO4mydEMSoid_rlM83Ts7WM3LnruNCLErLzJqYesYHBZatQJH8Hb_75542Ftk5Jl8I991ndag0TWEyto9S3b3QKjUeQ',
  },
  {
    id: 'frock-09',
    lotCode: 'CB-F09',
    category: 'frocks',
    categoryLabel: 'Frock',
    seriesLabel: 'Handcrafted Silhouette',
    title: 'Frock Design 09',
    material: 'Artisan Batik Silk',
    technique: 'Artisanal Splatter Dye',
    description:
      'Sleeveless mandarin split-neck black gown displaying an energetic cascading splash pattern in delicate pink and white splatter resists.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ3WosyTTA8JQinDmiLEuggd7LdeZIQkIn281ryb6egPqBMb-mcWrvTpaHyxpcJ4ccDy2kZbN4jyi5JGuKxccgsswuRnW6c227eVpvujOWmfOEY3jGqt7n5p_wn33yOfgpdk20ICKSW-FCFAQIbVyxhqNt5vvSvzqNOnLl4FEQ_RMnlb4YxDFxv9eUEKPfSYksE_9yH-D_n_zmiFbo_-D-iiZ2dQetu9SWeAngj6oX3ipTOSKoMd3_uA',
  },
  {
    id: 'frock-10',
    lotCode: 'CB-F10',
    category: 'frocks',
    categoryLabel: 'Frock',
    seriesLabel: 'Handcrafted Silhouette',
    title: 'Frock Design 10',
    material: 'Artisan Batik Linen',
    technique: 'Feather Leaf Canting',
    description:
      'Flared sleeve ice-blue linen silhouette showcasing intricate feather-leaf motifs in deep charcoal and soft rose wax detailing.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUZ7lCh3ZiyJV2HDjh9wfADJaBy4UQMVm1fr1rdNqZ7L8QxyJTwlEG2h6LgPyKP8zn-nGH8kMumZqNEVFnjw8TJRTnCa9IExPbGx4ceXh2QgJurS5eLmfuziq_EqUB8Oy_p3JjY9PmQuqunKUdlQjtn9lL97IRIjaUqvsFDr9UhRYfXo9aOLBPNfY7GNE0dc386uwLKMBhIE_W_5Eph7SHk67MLfXbZ1CgxGcDLfxsO8J2VwtBkOwQwA',
  },
  {
    id: 'frock-11',
    lotCode: 'CB-F11',
    category: 'frocks',
    categoryLabel: 'Frock',
    seriesLabel: 'Handcrafted Silhouette',
    title: 'Frock Design 11',
    material: 'Artisan Batik Poplin',
    technique: 'Dual Color Block Resist',
    description:
      'Dramatic split-tone dress with bold scarlet floral wax accents, crisp white cracked ground, and diagonal colour blocked hem.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuArMQSTIGSYK2FLgrFaWwMSwSVX1WSR3LE1ulOSk6T9NZUzHHWQpr3_xJPQSqxJ1fOhHPlQmToSxzU_mo9ojPe5RZBmtdlQ0H9ShuSNxdtcnuifPo5HXvCYbaUGd2IgxDM18kekHOrGvpWZs-e4g9-UxiCPR2aK2JSblbk4LffLsjBr1277lHJK-ltBelU9tfhXRTIZsfpvDhjziyUer2EOIu8QQbMnI5X3bCDX9QGpgNpog9W3W1Q09A',
  },

  // ==================== BATIK SARONGS (7) ====================
  {
    id: 'sarong-01',
    lotCode: 'CB-SR01',
    category: 'sarongs',
    categoryLabel: 'Sarong',
    seriesLabel: 'Heritage Menswear',
    title: 'Sarong Design 01',
    material: 'Handloom Cotton',
    technique: 'Wax-Resist Hand Dyeing',
    description:
      'Warm peach-terracotta handloom cotton sarong adorned with crimson wax-crackle textures and bold scroll border motifs.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkBr440HmbM-sbdRlHp0vLmRkQizfHxXzzrrDHozf9ZCwd744i9Fw6T7ch2TUxMdAjz24aLs8EBNVqe3NLKxxV6Hefp5cjuZuz9YOzbNiAOm4_bmssVhUBk9_tq3tvjxFAraBMhevhk8vcL6ShGfFgQfxZwEJEyLs0-blRP3a8MfnIkk0njvUXPkzjEK3O58lzbLcy5hM5ES9VWQIA6FxtHP6ksdMC1Fuce8l6ek0fNv8rgcl3NHqUzw',
    imagePosition: 'top',
  },
  {
    id: 'sarong-02',
    lotCode: 'CB-SR02',
    category: 'sarongs',
    categoryLabel: 'Sarong',
    seriesLabel: 'Heritage Menswear',
    title: 'Sarong Design 02',
    material: 'Fine Loomed Cotton',
    technique: 'Fine Canting Wax Resist',
    description:
      'Deep charcoal noir sarong featuring intricate ivory celestial zodiac and geometric wheel motifs hand-drawn along the lower hem.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnmA3auMuxBYr6Awtx1kqXgmDMwWGrbaVPtjHWTzm6i68YXYx-g4z6ACaoStYfWglVZIoS_ujw5y6ZNVSlh1-Hm8V5seNdDw4MyOuET9EDGEc2fjbjnN5SXZxJo1t-0xbbBMLWaFiSzv0DhNlAgkBSaphx5shO4x0Y1RPNMMPMbUIvOmyz0jIQPAB0bC28yP1bqX2qsuwQJxO-dj5PMwKTw-wUtJ6y5eeqyWcycZ6JyKXrcRf-7WQQ0w',
    imagePosition: 'top',
  },
  {
    id: 'sarong-03',
    lotCode: 'CB-SR03',
    category: 'sarongs',
    categoryLabel: 'Sarong',
    seriesLabel: 'Heritage Menswear',
    title: 'Sarong Design 03',
    material: 'Breathable Cotton',
    technique: 'Heritage Mask Resist',
    description:
      'Cobalt indigo and soft ice-grey batik sarong showcasing stylized Sri Lankan folk mask emblems and vertical border detailing.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDkmRu-2S3rlJK2GRdOX684S48JZM4I9IIHRBbk6LewPMnpE3z0OiROy_vyBan_QdbdG7nl-gomqGDfnl7UH5VYjOp7Og1UXNCspqfL7Bc3nsP9mZzPhlCz0Hg8bjyyiMhiq8pBTP_I5vawcRVrx_W9z4arZqwvoX7Vl3mIE7sTx5_uj1ENPget8n-G4Nqa5LyWY8j08O0xyy2XbU25OBjzuqJ_g6WBNdk6UiE9FjXn112hqISQGsiXBA',
    imagePosition: 'top',
  },
  {
    id: 'sarong-04',
    lotCode: 'CB-SR04',
    category: 'sarongs',
    categoryLabel: 'Sarong',
    seriesLabel: 'Heritage Menswear',
    title: 'Sarong Design 04',
    material: 'Handloom Cotton',
    technique: 'Wax Fracture Marbling',
    description:
      'Earthy burnt sienna and warm ochre sarong crafted with expressive folk mask motifs and organic wax-fracture marbling.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCuEyC7O2UgUiEocj39QB0DNBkl3hijBHodI46JHlr7ep_5dSGLfHFhmN5iJzd7FkaE0R8M-KzC3Nw8MXJXrU2zjDEZTjPlTBI2sz2CdfvB8_2QqkNZmv3-2m7uj5dVcm3VEveTMn1vLuhPHCeCAuY0bAdD3YAmmnNtyApMhYDEp9xggxAAzeu-MUoSyCxMTTSoUPwI5FEviRpJh1xMTGHf119Ubg9wR3U8atKlIt_6afBZGeMySopgkQ',
    imagePosition: 'top',
  },
  {
    id: 'sarong-05',
    lotCode: 'CB-SR05',
    category: 'sarongs',
    categoryLabel: 'Sarong',
    seriesLabel: 'Heritage Menswear',
    title: 'Sarong Design 05',
    material: 'Fine Loomed Cotton',
    technique: 'Multi-Stage Dip Dye',
    description:
      'Midnight navy, mustard gold, and rust sarong with abstract splatter-wax resists and a traditional liyawela scroll border.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyQhENYUGhP3QMz6dtcpzFUHuwhavyBL4199KB8HYp-HNEK5EYqOQynaP4yjiZFMVMujBGDl95iRapIcWfbufOaK9T1vwJhklnvR3RZb7YgCfa0OHxWFFvvTbjkPK8gAc6n7brtpnBh1O7ux8exVcJACnhSU6aCUoK_xiUs1inNEKkZdYk2_I8REyD93Yraf76I224W5S27oq8tQv0bxUZ_-6YzzlOFQL45C_1LxVO_nDo302CzUTgww',
    imagePosition: 'top',
  },
  {
    id: 'sarong-06',
    lotCode: 'CB-SR06',
    category: 'sarongs',
    categoryLabel: 'Sarong',
    seriesLabel: 'Heritage Menswear',
    title: 'Sarong Design 06',
    material: 'Loomed Cotton',
    technique: 'Single Dye Saturated Contrast',
    description:
      'Charcoal black and antique gold sarong highlighted by a radiant Suriya sun emblem and intricate geometric hem borders.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdguceBZ_4kVEK4kHC4VGorJg4D8z-sfJGFR70LJgPdsFBo66ye0MFACFxW5_seh5FUk4ZovWLsUE4UkFV0o-gmFBzHMsr5NRBQQgXCGZPqP8O0lgFVwmi7bd4P843dl6jJ_htaIyvHGa0HTxvIVj1moH38kD3l10xpGvCAg4SX5xaJEyXUvyLB3TyNOGnW00yHqU77ru3UaPV8bkcvQIKED6I5xnjTb5Dw1Jbp1KWWKVragFXigsVTA',
    imagePosition: 'top',
  },
  {
    id: 'sarong-07',
    lotCode: 'CB-SR07',
    category: 'sarongs',
    categoryLabel: 'Sarong',
    seriesLabel: 'Heritage Menswear',
    title: 'Sarong Design 07',
    material: 'Ceremonial Cotton',
    technique: 'Intricate Line Art Resist',
    description:
      'Deep maroon burgundy sarong featuring a regal Hasthi ceremonial elephant illustration in fine gold line-art wax resist.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCky2yfKvZh2lhpF-5k9JcZBhhI3Ubm02-RiTyipS2thpNwD7ZIucVh082bZwF2rOPTU1WJyc8aI-DAJmm-zgMkoFZT5A5FCLL7a5G5AHb-7jAoLxkZTtn5NY7XCuFD4X_iXSgOAyure7808eaWSSRV_kr7TZXTql7nbv8O9epl32B92jlKwsggU35PV_xPQQtv0vazcx8xTswtKhrb67Kk2iYQeemtrIJ-XnLR3DHRlziUU90134C-Dw',
    imagePosition: 'top',
  },

  // ==================== BATIK NIGHT DRESSES (3) ====================
  {
    id: 'nightwear-01',
    lotCode: 'CB-N01',
    category: 'nightwear',
    categoryLabel: 'Night Dress',
    seriesLabel: 'Atelier Loungewear',
    title: 'Night Dress Design 01',
    subtitle: 'Emerald & Golden Ochre Tiered Ruffle Cotton Night Dress',
    material: '100% Breathable Cotton',
    technique: 'Artisanal Wax Dip & Boil Wash',
    description:
      'Pure hand-waxed breathable loungewear with cute ruffle straps and breezy tiered hem.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkiVdR_0dzhrHJfiRE1xmwvQMPOJ7HBiEfNlRWqoF9HQq6SaZ0AxWazhdgTA1QgB3K49UDDfJbxmgepUvIt3Rzyu3bZZUHX23ClMAx5D8QClOAqc3hAOjkUlItZZUHxYcdVPi1lwPOXXb7cBCN3gersLe--37ntoJ-UoDHQ4tRpHVL77VVh8Zh1Yme2x8WdQJQurvQSenaHBU5gY8OBBSgLN53iVO8sTF1Lx3-qBSJo-e4az2TRpRYlQ',
    imagePosition: 'top',
  },
  {
    id: 'nightwear-02',
    lotCode: 'CB-N02',
    category: 'nightwear',
    categoryLabel: 'Night Dress',
    seriesLabel: 'Atelier Loungewear',
    title: 'Night Dress Design 02',
    subtitle: 'Sunrise Orange & Fuchsia Batik Two-Piece Night Set',
    material: '100% Breathable Cotton',
    technique: 'Dual Stage Saturated Dyeing',
    description:
      'Handcrafted smocked tie-strap camisole paired with relaxed palazzo sleep trousers.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKOvVgq_EgQFDjnUZkvDECAUAyj4V8EO_ItXDteVcpFjJ93mToe4wRUvAQ934yPemPEX_KLJdnsxy-_MupZtsUhHdv1hzom6BPjyYD5ZeUs_7ZEuAqNMEswVQ_FRrVYETNoNPUovIizckuSrZc3qM18sPdPtIgtGmPelHGFzFFXm_HAIofpYtZnejmnpFwc-0HqT050YxNQfdXvMMyX3vkbpRFs6RqmhKWwLEOYuNUpJFCRyTl__BS9A',
    imagePosition: 'top',
  },
  {
    id: 'nightwear-03',
    lotCode: 'CB-N03',
    category: 'nightwear',
    categoryLabel: 'Night Dress',
    seriesLabel: 'Atelier Loungewear',
    title: 'Night Dress Design 03',
    subtitle: 'Sunset Blossom & Honey Marigold Ruffle Sleepwear Set',
    material: '100% Breathable Cotton',
    technique: 'Artisanal Crackle Resist',
    description:
      'Ultra-soft breathable cotton featuring organic batik veining and signature ruffle accents.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsy6d3cDRDj8rUv70JzWVEcvcX22zPz6FkSk33lyWMxBtAsr8nRa-uNEbzLdyRdvdY5rdS-okxW5Dzp6dd5szgb-0_L90vYyPUDrpXCGsJi9ZnQo56_5pCufi-jBCvACyAX06qPbkV835abI51P_Zlu7gv5sCMBNeRly9lyRhALv9-7_i_gwFn8wFnWpkun1XblZHnm9SJzV47i92DddeR5R9_sZ4xF724dQlQHNlpso9TzFF4rBoP4g',
    imagePosition: 'top',
  },
];

export const COUTURE_DIALOGUES = [
  {
    id: 'dialogue-1',
    badge: 'Ceremonial Osariya',
    title: 'The Nivahana Silk Saree',
    description:
      'Pure georgette base with crimson botanical wax-resist motifs and hand-knotted fringe.',
    meta: 'Made to Measure',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9mF-A5e544uChYnNjpQ852V87COXQBPsQrYtr40bESAlVVuUj8QxoucjAyIzOAO2FiexnF84c5Rh4hxrKMbNoq0E31BASDpIuA8fNCc68WSg8-jDP9H-Ii-59V9DtxRB3ZuRKoQaZ7rh2uMkd82BQhGDxyu0E-htVJSmfMWPniW-QWlA1u3tMjFQRZn6bLUg2S5nR3p00my3ow-TPGjVZrsfR3ijRVvrjq8D4fvCt',
  },
  {
    id: 'dialogue-2',
    badge: 'Contemporary Resort',
    title: 'The Ceylon Royal Sarong',
    description:
      'Loomed fine cotton treated with wax crackle veining for effortless tropical evening wear.',
    meta: 'Unisex Silhouette',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDWZRHEPIYVDphXXQY3RTfhiTgkVHAS02DZGqQ0HmuHY7X98Ok4CUrU4nz8osNdODoljyHzc2uHbV4qofKLmgsVU5-Wd1KPIA1yBcPDzaYGufJGX7qCadrrWTsY5LgRj6v4cfIfJnG5ITKjOFCabk0A3j9qKLErDDoaayhPs4S7NQ9DAMlTSX7t89etqsM0XVp-mdU6SnR2IpYxGG7MBt9JektZkwwOwZ_mig6-UacT7iZAJ4FqOg3nsQ',
  },
  {
    id: 'dialogue-3',
    badge: 'Artisan Signature',
    title: 'The Ruhunu Floral Drape',
    description:
      'Handcrafted in our Southern workshop using dual-stage green and saffron vegetable dyes.',
    meta: 'Single-Edition Archive',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqPgLvVxuO_MZhL6vkVCJjC-gz2NdIg4QeO_xkg84jkDE3CCDLw80npHHafbT7VqnTLL_FBU2bXad66cX53WyKm54wM-DCWeRvRu3wEpiVGXgviVxFm-yl5zF_acc63egqXgQhzwDHaXHyQXCDrDBjJ7MuvnGMMgzjnMstR-mirCadLxFZtOaS2o4_U4X4bI9SOQPO5anlkvX7mUeU_Rsn8A3e_bHdL2wxNNOXNlEz',
  },
];

export const CRAFT_PILLARS = [
  {
    step: '01',
    title: 'Molten Wax Canting',
    description:
      'Liquid beeswax and damar resin are freehand poured across silk or mull cotton to seal sacred motifs from dye penetration.',
    metaLabel: 'Motifs Applied',
    metaValue: 'Mandala, Gajasinha & Lotus',
    accent: 'primary' as const,
  },
  {
    step: '02',
    title: 'Immersion Dyeing',
    description:
      'The cloth plunges into cool botanical or fiber-reactive pigment baths. Each hue requires its own dedicated submersion cycle.',
    metaLabel: 'Color Depth',
    metaValue: 'Deep Maroon, Indigo & Ochre',
    accent: 'secondary' as const,
  },
  {
    step: '03',
    title: 'Vein Crackling',
    description:
      'Artisans gently flex the chilled wax membrane, allowing fine dark dye capillary lines to seep into microscopic fissures.',
    metaLabel: 'Signature Hallmark',
    metaValue: 'Unrepeatable Organic Lines',
    accent: 'primary-fixed' as const,
  },
  {
    step: '04',
    title: 'Boil-Out & Setting',
    description:
      'Submerged in boiling rainwater, the melted wax floats away, unveiling radiant contrast before coastal sunlight locks the finish.',
    metaLabel: 'Final Touch',
    metaValue: 'Pure Rainwater Wash',
    accent: 'primary' as const,
  },
];

export const FAQS = [
  {
    id: 'faq-shipping',
    question: 'Do you ship internationally?',
    answer:
      'Yes. We partner with DHL Express Worldwide for fully insured global delivery. Shipments to the UK, USA, Australia, UAE, and Singapore typically arrive within 4 to 7 business days from Atelier dispatch.',
    icon: 'flight',
  },
  {
    id: 'faq-care',
    question: 'How do I care for 100% hand-waxed batik?',
    answer:
      'Dry cleaning is recommended for silk-base creations. For our pure cotton sarongs and frocks, gentle hand washing in cool water with mild silk-safe detergent preserves the natural vegetable and mineral dye intensity. Always dry in shade.',
    icon: 'care',
  },
  {
    id: 'faq-sizing',
    question: 'Can I customize my measurements & drape?',
    answer:
      'Absolutely. Every bespoke order includes an interactive measurement guide sent over WhatsApp. Our master cutter tailors the blouse, fall, and pleat structures specifically to your posture and height.',
    icon: 'sizing',
  },
  {
    id: 'faq-timeline',
    question: 'What is the bespoke creation timeline?',
    answer:
      'Because our motifs are drawn freehand with molten wax and sun-cured, a customized saree or couture dress requires 10 to 18 artisan crafting days. Ready-to-wear archive pieces ship within 48 hours.',
    icon: 'timeline',
  },
];
