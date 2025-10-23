"use client";
import React from 'react';
import Link from "next/link";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Image from "next/image";
import { 
  Rocket, 
  Smartphone, 
  Palette, 
  Cloud, 
  Bot, 
  Wrench, 
  Search, 
  PenTool, 
  Zap, 
  TrendingUp,
  CheckCircle,
  Target
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Component */}
      <Header />
      
      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/empresas/home/home.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Overlay más sutil para que se vea la imagen */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/40 to-black-50/70"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center text-center min-h-[80vh]">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-sm">
                <span className="text-white">Creamos productos digitales</span>{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  excepcionales
                </span>
              </h1>
              
              <p className="text-xl text-white mb-12 leading-relaxed drop-shadow-md max-w-3xl mx-auto">
                Somos tu socio tecnológico de confianza. Transformamos ideas en aplicaciones web y móviles que generan resultados reales para tu negocio.
              </p>

              <div className="flex flex-wrap gap-4 mb-16 justify-center">
                <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center gap-2">
                  Comenzar mi proyecto
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
                <button className="px-8 py-4 bg-white/80 backdrop-blur-md border-2 border-gray-300 text-gray-900 font-semibold rounded-xl hover:border-orange-500 hover:bg-white/90 transition-all duration-300 shadow-lg">
                  Ver nuestro trabajo
                </button>
              </div>

              {/* Trust Bar */}
              <div className="flex flex-wrap gap-8 items-center justify-center pt-8 border-t border-white/30 max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl font-bold text-white drop-shadow-md">500+</div>
                  <div className="text-sm text-white/90">Proyectos entregados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white drop-shadow-md">150+</div>
                  <div className="text-sm text-white/90">Clientes felices</div>
                </div>
                <div>
                  <div className="flex gap-1 mb-1 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-orange-500 text-lg drop-shadow-md">★</span>
                    ))}
                  </div>
                  <div className="text-sm text-white/90">5.0 en Google Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Logo Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 font-medium mb-8">Empresas que confían en nosotros</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {/* Logo AgroGestor */}
            <a 
              href="https://agrogestor.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-40 h-20 relative block hover:scale-110 transition-all duration-300 opacity-80 hover:opacity-100 cursor-pointer"
            >
              <Image
                src="/images/empresas/AgroGestor.jpg"
                alt="AgroGestor"
                fill
                className="object-contain"
              />
            </a>
            
            {/* Placeholders para más logos */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-40 h-20 bg-gray-300 rounded-lg opacity-40"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4 block">Lo que hacemos</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Servicios diseñados para tu{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">éxito</span>
            </h2>
            <p className="text-xl text-gray-600">
              Desde el concepto inicial hasta el lanzamiento y más allá, te acompañamos en cada paso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Desarrollo Web",
                description: "Aplicaciones web modernas, rápidas y escalables que impulsan tu negocio",
                features: ["React & Next.js", "E-commerce", "Dashboards"],
                color: "orange"
              },
              {
                icon: Smartphone,
                title: "Apps Móviles",
                description: "Experiencias móviles nativas que tus usuarios amarán en iOS y Android",
                features: ["Flutter", "React Native", "UI/UX Premium"],
                color: "orange"
              },
              {
                icon: Palette,
                title: "Diseño UX/UI",
                description: "Diseños hermosos y funcionales que convierten visitantes en clientes",
                features: ["Prototipos", "Design Systems", "Branding"],
                color: "gray"
              },
              {
                icon: Cloud,
                title: "Cloud & DevOps",
                description: "Infraestructura robusta y automatizada para máxima disponibilidad",
                features: ["AWS/Azure", "CI/CD", "Monitoreo"],
                color: "gray"
              },
              {
                icon: Bot,
                title: "IA & Automatización",
                description: "Integramos inteligencia artificial para optimizar tus procesos",
                features: ["ChatBots", "ML Models", "Automation"],
                color: "orange"
              },
              {
                icon: Wrench,
                title: "Mantenimiento",
                description: "Soporte continuo y actualizaciones para mantener tu app al día",
                features: ["24/7 Support", "Updates", "Optimization"],
                color: "gray"
              }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className={`group relative bg-white rounded-2xl p-8 border-2 ${
                    service.color === 'orange' ? 'border-orange-200 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10' : 'border-gray-200 hover:border-gray-400 hover:shadow-xl'
                  } transition-all duration-300 hover:-translate-y-2`}
                >
                  <div className={`mb-6 ${service.color === 'orange' ? 'text-orange-500' : 'text-gray-700'} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                          service.color === 'orange' 
                            ? 'bg-orange-50 text-orange-700 border border-orange-200' 
                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-orange-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4 block">Cómo trabajamos</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Un proceso probado para el éxito
            </h2>
            <p className="text-xl text-gray-600">
              Metodología ágil adaptada a tus necesidades, con entregas iterativas y comunicación constante
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                title: "Descubrimiento",
                desc: "Entendemos tu visión, objetivos y usuarios para crear la estrategia perfecta",
                icon: Search
              },
              {
                num: "02",
                title: "Diseño",
                desc: "Creamos prototipos interactivos y validamos cada decisión contigo",
                icon: PenTool
              },
              {
                num: "03",
                title: "Desarrollo",
                desc: "Construimos tu producto con código limpio y las mejores prácticas",
                icon: Zap
              },
              {
                num: "04",
                title: "Lanzamiento",
                desc: "Desplegamos con confianza y te acompañamos en el crecimiento",
                icon: TrendingUp
              }
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 h-full hover:shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <IconComponent className="text-orange-500" size={40} strokeWidth={1.5} />
                      <div className="text-5xl font-bold text-orange-500/20">{step.num}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-300"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4 block">Testimonios</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestros clientes hablan por nosotros
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                role: "CEO, TechStart",
                text: "Clivo transformó nuestra idea en una app increíble. El equipo es profesional, rápido y siempre disponible. ¡Altamente recomendados!",
                rating: 5
              },
              {
                name: "Carlos Rodríguez",
                role: "Founder, ShopOnline",
                text: "Trabajar con Clivo fue una experiencia excelente. Entregaron a tiempo, superaron expectativas y el soporte post-lanzamiento es excepcional.",
                rating: 5
              },
              {
                name: "Ana Martínez",
                role: "Director, FinanceApp",
                text: "La mejor decisión fue elegir a Clivo. Su expertise técnico y atención al detalle hicieron que nuestro proyecto fuera un éxito total.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-orange-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full"></div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCA0MmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMC0yMWMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY04Ni02IDYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0Y5NzMxNiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            ¿Listo para hacer realidad tu proyecto?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Agenda una consultoría gratuita de 30 minutos. Sin compromiso. Hablemos de tu idea y cómo podemos ayudarte.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="group px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 text-lg flex items-center gap-2"
            >
              Agendar llamada gratuita
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>

            <Link
              href="/portfolio"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 text-lg"
            >
              Ver nuestro portafolio
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <div className="text-2xl font-bold mb-2">Respuesta en 24h</div>
              <div className="text-gray-400">Te contactamos inmediatamente</div>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <div className="text-2xl font-bold mb-2">Sin compromiso</div>
              <div className="text-gray-400">Consultoría 100% gratuita</div>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <div className="text-2xl font-bold mb-2">Resultados garantizados</div>
              <div className="text-gray-400">O devolvemos tu inversión</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}