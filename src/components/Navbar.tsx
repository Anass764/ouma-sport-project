import { useState } from 'react';
import { ShoppingCart, Menu, X, Search, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

type NavbarProps = {
  onSearchChange: (query: string) => void;
  onAuthClick: () => void;
};

export default function Navbar({ onSearchChange, onAuthClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, signOut } = useAuth();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-8">
            <img
              src="/oma sport.png"
              alt="Ouma Sport"
              className="h-16 w-auto object-contain transition-transform hover:scale-105"
            />
            <div className="hidden md:flex space-x-6">
              <a href="#accueil" className="text-gray-800 hover:text-red-600 font-medium transition-colors">Accueil</a>
              <a href="#produits" className="text-gray-800 hover:text-red-600 font-medium transition-colors">Produits</a>
              <a href="#equipe" className="text-gray-800 hover:text-red-600 font-medium transition-colors">Équipe</a>
              <a href="#contact" className="text-gray-800 hover:text-red-600 font-medium transition-colors">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Rechercher des produits..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <button className="text-gray-800 hover:text-red-600 transition-colors flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span className="text-sm">Mon Compte</span>
                </button>
                <button
                  onClick={handleSignOut}
                  className="text-gray-800 hover:text-red-600 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            ) : (
              <button
                onClick={onAuthClick}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Connexion
              </button>
            )}
            <button className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-800 hover:text-red-600 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-4 animate-slideDown">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <a href="#accueil" className="block text-gray-800 hover:text-red-600 py-2">Accueil</a>
            <a href="#produits" className="block text-gray-800 hover:text-red-600 py-2">Produits</a>
            <a href="#equipe" className="block text-gray-800 hover:text-red-600 py-2">Équipe</a>
            <a href="#contact" className="block text-gray-800 hover:text-red-600 py-2">Contact</a>
            {user ? (
              <>
                <button className="block w-full text-left text-gray-800 hover:text-red-600 py-2">Mon Compte</button>
                <button onClick={handleSignOut} className="block w-full text-left text-gray-800 hover:text-red-600 py-2">Déconnexion</button>
              </>
            ) : (
              <button onClick={onAuthClick} className="block w-full text-left bg-red-600 text-white px-4 py-2 rounded-lg">Connexion</button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
