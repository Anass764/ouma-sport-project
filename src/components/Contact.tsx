import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contactez-Nous</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6 animate-slideRight">
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Adresse</h3>
                  <p className="text-gray-600">ANFAPLACE MALL, Casablanca</p>
                  <a
                    href="https://www.google.com/maps/place/ANFAPLACE+MALL/data=!4m2!3m1!1s0x0:0xb91ed398330cf3cd?sa=X&ved=1t:2428&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 font-medium mt-2 inline-block"
                  >
                    Voir sur la carte →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                  <a
                    href="mailto:omasport@gmail.com"
                    className="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    omasport@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/212700879491"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    +212 700 879 491
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slideLeft">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8523456789!2d-7.631234!3d33.589123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb91ed398330cf3cd!2sANFAPLACE%20MALL!5e0!3m2!1sen!2sma!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ANFAPLACE MALL Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl animate-fadeIn">
          <h3 className="text-3xl font-bold mb-4">Horaires d'Ouverture</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur">
              <p className="font-semibold mb-2">Lundi - Samedi</p>
              <p className="text-lg">09:00 - 21:00</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur">
              <p className="font-semibold mb-2">Dimanche</p>
              <p className="text-lg">10:00 - 20:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
