"use client";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-6 py-16 flex flex-col items-center">
      {/* Logo Clivo */}
      <div className="w-32 h-32 mb-6">
        <img
          src="/logo.png"
          alt="Clivo Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Título */}
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
        Nuestro Portafolio
      </h1>
      <p className="text-gray-300 text-lg md:text-xl mb-12 text-center max-w-3xl">
        Aquí podrás ver algunos de nuestros proyectos. Actualmente estamos trabajando en mostrar todo nuestro trabajo, ¡pero ya puedes ver lo que se viene!
      </p>

      {/* Contenedor de proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Proyecto de ejemplo / Work in Progress */}
        <div className="bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 shadow-xl border border-gray-700">
          <div className="text-4xl font-bold text-orange-500 mb-4">🚧</div>
          <h2 className="text-2xl font-semibold text-white mb-2">Work in Progress</h2>
          <p className="text-gray-300">
            Próximamente agregaremos nuestros proyectos. ¡Mantente atento!
          </p>
        </div>

        <div className="bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 shadow-xl border border-gray-700">
          <div className="text-4xl font-bold text-orange-500 mb-4">🚧</div>
          <h2 className="text-2xl font-semibold text-white mb-2">Work in Progress</h2>
          <p className="text-gray-300">
            Próximamente agregaremos nuestros proyectos. ¡Mantente atento!
          </p>
        </div>

        <div className="bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 shadow-xl border border-gray-700">
          <div className="text-4xl font-bold text-orange-500 mb-4">🚧</div>
          <h2 className="text-2xl font-semibold text-white mb-2">Work in Progress</h2>
          <p className="text-gray-300">
            Próximamente agregaremos nuestros proyectos. ¡Mantente atento!
          </p>
        </div>
      </div>
    </div>
  );
}
