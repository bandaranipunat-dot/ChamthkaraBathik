import { useState, useCallback } from 'react';
import { PageRoute, ProductCategory, ProductItem } from './data/catalog';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConciergeModal } from './components/ConciergeModal';
import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { AtelierPage } from './pages/AtelierPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [conciergeProduct, setConciergeProduct] = useState<ProductItem | null>(null);

  const handleNavigate = useCallback(
    (route: PageRoute, category?: ProductCategory) => {
      setCurrentRoute(route);
      if (category) {
        setActiveCategory(category);
      } else if (route === 'collections') {
        setActiveCategory('all');
      }
      if (route === 'home' || route === 'collections' || route === 'about-us') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    []
  );

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

      <main className="flex-1 w-full pt-[72px] sm:pt-[107px]">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConcierge={(product) => setConciergeProduct(product)}
          />
        )}

        {currentRoute === 'collections' && (
          <CollectionsPage
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            onNavigate={handleNavigate}
            onOpenConcierge={(product) => setConciergeProduct(product)}
          />
        )}

        {(currentRoute === 'about-us' ||
          currentRoute === 'heritage-and-craft' ||
          currentRoute === 'contact') && <AtelierPage activeSection={currentRoute} />}
      </main>

      <Footer onNavigate={handleNavigate} />

      <ConciergeModal
        product={conciergeProduct}
        onClose={() => setConciergeProduct(null)}
      />
    </div>
  );
}
