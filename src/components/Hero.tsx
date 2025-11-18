export default function Hero() {
  return (
    <section id="accueil" className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform rotate-45 -top-20 -right-20 w-96 h-96 bg-white rounded-full"></div>
        <div className="absolute transform -rotate-45 -bottom-20 -left-20 w-96 h-96 bg-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Bienvenue chez <span className="text-white drop-shadow-2xl">OUMA SPORT</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
            Votre destination ultime pour tous vos équipements sportifs au Maroc
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#produits"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Découvrir nos produits
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition-all transform hover:scale-105"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
