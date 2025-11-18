import { useState, useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import AuthModal from './components/AuthModal';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { supabase, Product, Review } from './lib/supabase';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  useEffect(() => {
    fetchProducts();
    fetchReviews();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'Tous') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  
  const handleSearchChange = (query: string) => {
    if (!query.trim()) {
      setFilteredProducts(
        selectedCategory === 'Tous'
          ? products
          : products.filter(p => p.category === selectedCategory)
      );
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  const getProductRating = (productId: string) => {
    const productReviews = reviews.filter(r => r.product_id === productId);
    if (productReviews.length === 0) return { average: 0, count: 0 };

    const average = productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length;
    return { average, count: productReviews.length };
  };

  const categories = ['Tous', ...Array.from(new Set(products.map(p => p.category)))];

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar onSearchChange={handleSearchChange} onAuthClick={() => setShowAuthModal(true)} />
        <Hero />

        <section id="produits" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Nos Produits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez notre large gamme d'équipements sportifs de qualité
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">Aucun produit trouvé</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => {
                  const { average, count } = getProductRating(product.id);
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      averageRating={average}
                      reviewCount={count}
                      onViewDetails={setSelectedProduct}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <Team />
        <Contact />
        <Footer />

        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}

        {showAuthModal && (
          <AuthModal onClose={() => setShowAuthModal(false)} />
        )}
      </div>
    </AuthProvider>
  );
}

export default App;
