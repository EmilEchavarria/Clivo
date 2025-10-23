"use client";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Image from 'next/image';
import { ExternalLink, Construction, Rocket, Sparkles } from 'lucide-react';

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "AgroGestor",
      description: "Sistema completo de gestión agrícola que optimiza procesos y aumenta la productividad del campo",
      image: "/images/empresas/AgroGestor.jpg",
      link: "https://agrogestor.vercel.app",
      category: "Agricultura",
      results: "70% más eficiencia",
      isActive: true
    },
    {
      id: 2,
      title: "Próximamente",
      description: "Nuevos proyectos increíbles en desarrollo",
      icon: Rocket,
      category: "En desarrollo",
      isActive: false
    },
    {
      id: 3,
      title: "Próximamente",
      description: "Más proyectos sorprendentes por venir",
      icon: Sparkles,
      category: "Próximamente",
      isActive: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Component */}
      <Header />
      
      {/* Portfolio Content */}
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-6 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 mx-auto mb-6">
              <img
                src="/logo.png"
                alt="Clivo Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Nuestro Portafolio
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Proyectos que transforman ideas en experiencias digitales excepcionales
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id}>
                {project.isActive ? (
                  // Active Project Card
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20"
                  >
                    {/* Project Image */}
                    <div className="relative h-64 bg-gray-800 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                          <ExternalLink className="w-6 h-6 text-gray-900" />
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
                          {project.category}
                        </span>
                        {project.results && (
                          <span className="text-xs px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                            {project.results}
                          </span>
                        )}
                      </div>
                    </div>
                  </a>
                ) : (
                  // Coming Soon Card
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 flex flex-col items-center justify-center text-center min-h-[400px] hover:border-white/20 transition-all duration-300">
                    {project.icon && (
                      <project.icon className="w-16 h-16 text-gray-600 mb-4" strokeWidth={1.5} />
                    )}
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="text-xs px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full border border-gray-600">
                        {project.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-block bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-3">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-gray-400 mb-6">
                Trabajemos juntos para hacer realidad tu visión
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300"
              >
                Contactar ahora
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}