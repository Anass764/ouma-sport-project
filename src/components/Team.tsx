import { Users } from 'lucide-react';

const teamMembers = [
  { name: 'AYMEN ER-RARHMI', role: 'Directeur Général', image: '/public/AYMEN ER-RARHMI.jpg' },
  { name: 'SAAD ATIF', role: 'Responsable Commercial', image: '/public/SAAD ATIF.jpg' },
  { name: 'OUSSAMA BOUKALKHA', role: 'Chef de Projet', image: '/public/OUSSAMA BOUKALKHA.jpg' },
  { name: 'REDA TALIBI', role: 'Responsable Logistique', image: 'reda.jpg' },
  { name: 'ADAM HERRAZ', role: 'Directeur Marketing', image: 'ADAM HERRAZ.jpg' },
];

export default function Team() {
  return (
    <section id="equipe" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-12 w-12 text-red-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Notre Équipe</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des professionnels passionnés dédiés à votre satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 transform-gpu perspective-1000">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                    <p className="text-sm font-medium opacity-90">En savoir plus</p>
                  </div>
                </div>

                <div className="p-6 text-center space-y-2 bg-white relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <h3 className="text-lg font-bold text-gray-800 transition-colors group-hover:text-red-600">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Rejoignez Notre Équipe</h3>
            <p className="text-gray-600 mb-6">
              Nous recherchons des talents passionnés pour rejoindre notre équipe dynamique
            </p>
            <a
              href="#contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-bold"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
