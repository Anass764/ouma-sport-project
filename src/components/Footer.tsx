import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <img
              src="/oma sport.png"
              alt="Ouma Sport"
              className="h-16 w-auto object-contain"
            />
            <p className="text-gray-400">
              Votre destination ultime pour tous vos équipements sportifs au Maroc
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-gray-400 hover:text-red-500 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#produits" className="text-gray-400 hover:text-red-500 transition-colors">
                  Produits
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-gray-400 hover:text-red-500 transition-colors">
                  Notre Équipe
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#produits" className="text-gray-400 hover:text-red-500 transition-colors">
                  Vêtements
                </a>
              </li>
              <li>
                <a href="#produits" className="text-gray-400 hover:text-red-500 transition-colors">
                  Chaussures
                </a>
              </li>
              <li>
                <a href="#produits" className="text-gray-400 hover:text-red-500 transition-colors">
                  Équipement
                </a>
              </li>
              <li>
                <a href="#produits" className="text-gray-400 hover:text-red-500 transition-colors">
                  Accessoires
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5 text-red-500" />
                <a href="mailto:omasport@gmail.com" className="hover:text-red-500 transition-colors">
                  omasport@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5 text-red-500" />
                <a href="https://wa.me/212700879491" className="hover:text-red-500 transition-colors">
                  +212 700 879 491
                </a>
              </li>
            </ul>

            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ouma Sport. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
