"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
<nav
  className={`fixed w-full z-50 border-b border-gray-100 transition-all duration-500 ${
    scrolled ? "bg-white/80 backdrop-blur-xl" : "bg-transparent"
  } h-16`}
>
  <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
    <div className="flex items-center gap-3 h-full">
      <div className="relative h-full flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Clivo logo"
          className="h-25 w-auto object-contain scale-125 md:scale-150 transition-transform"
        />
      </div>
    </div>

          {/* Links */}
          <div className="hidden lg:flex gap-10 items-center">
            <a
              href="#inicio"
              className="text-gray-700 hover:text-orange-500 transition-all font-medium relative group"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#trabajos"
              className="text-gray-700 hover:text-orange-500 transition-all font-medium relative group"
            >
              Trabajos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#servicios"
              className="text-gray-700 hover:text-orange-500 transition-all font-medium relative group"
            >
              Servicios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#proceso"
              className="text-gray-700 hover:text-orange-500 transition-all font-medium relative group"
            >
              Proceso
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#testimonios"
              className="text-gray-700 hover:text-orange-500 transition-all font-medium relative group"
            >
              Testimonioss
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Button */}
          <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
            Hablemos
          </button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-6 bg-gradient-to-b from-orange-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-8 border border-orange-100">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-gray-700">Disponibles para nuevos proyectos</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Creamos productos digitales{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  excepcionales
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Somos tu socio tecnológico de confianza. Transformamos ideas en aplicaciones web y móviles que generan resultados reales para tu negocio.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center gap-2">
                  Comenzar mi proyecto
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
                <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all duration-300">
                  Ver nuestro trabajo
                </button>
              </div>

              {/* Trust Bar */}
              <div className="flex flex-wrap gap-8 items-center pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Proyectos entregados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-600">Clientes felices</div>
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-orange-500 text-lg">★</span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">5.0 en Google Reviews</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="relative z-10">
                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl"></div>
                    <div>
                      <div className="h-3 bg-gray-200 rounded w-24 mb-2"></div>
                      <div className="h-2 bg-gray-100 rounded w-16"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-orange-50 rounded-2xl p-6 border-2 border-orange-200">
                      <div className="text-3xl font-bold text-orange-600 mb-1">98%</div>
                      <div className="text-xs text-gray-600">Satisfacción</div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                      <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                      <div className="text-xs text-gray-600">Soporte</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 animate-bounce">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Proyecto completado</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 border-2 border-white"></div>
                    </div>
                    <span className="text-sm font-medium">+150 clientes</span>
                  </div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute top-1/4 -right-12 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 -left-12 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Logo Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 font-medium mb-8">Empresas que confían en nosotros</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-32 h-12 bg-gray-300 rounded-lg"></div>
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
                icon: "🚀",
                title: "Desarrollo Web",
                description: "Aplicaciones web modernas, rápidas y escalables que impulsan tu negocio",
                features: ["React & Next.js", "E-commerce", "Dashboards"],
                color: "orange"
              },
              {
                icon: "📱",
                title: "Apps Móviles",
                description: "Experiencias móviles nativas que tus usuarios amarán en iOS y Android",
                features: ["Flutter", "React Native", "UI/UX Premium"],
                color: "orange"
              },
              {
                icon: "🎨",
                title: "Diseño UX/UI",
                description: "Diseños hermosos y funcionales que convierten visitantes en clientes",
                features: ["Prototipos", "Design Systems", "Branding"],
                color: "gray"
              },
              {
                icon: "☁️",
                title: "Cloud & DevOps",
                description: "Infraestructura robusta y automatizada para máxima disponibilidad",
                features: ["AWS/Azure", "CI/CD", "Monitoreo"],
                color: "gray"
              },
              {
                icon: "🤖",
                title: "IA & Automatización",
                description: "Integramos inteligencia artificial para optimizar tus procesos",
                features: ["ChatBots", "ML Models", "Automation"],
                color: "orange"
              },
              {
                icon: "🔧",
                title: "Mantenimiento",
                description: "Soporte continuo y actualizaciones para mantener tu app al día",
                features: ["24/7 Support", "Updates", "Optimization"],
                color: "gray"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className={`group relative bg-white rounded-2xl p-8 border-2 ${
                  service.color === 'orange' ? 'border-orange-200 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10' : 'border-gray-200 hover:border-gray-400 hover:shadow-xl'
                } transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`text-5xl mb-6 ${service.color === 'orange' ? 'group-hover:scale-110' : 'group-hover:scale-110'} transition-transform duration-300`}>
                  {service.icon}
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
            ))}
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
                icon: "🔍"
              },
              {
                num: "02",
                title: "Diseño",
                desc: "Creamos prototipos interactivos y validamos cada decisión contigo",
                icon: "✏️"
              },
              {
                num: "03",
                title: "Desarrollo",
                desc: "Construimos tu producto con código limpio y las mejores prácticas",
                icon: "⚡"
              },
              {
                num: "04",
                title: "Lanzamiento",
                desc: "Desplegamos con confianza y te acompañamos en el crecimiento",
                icon: "🚀"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 h-full hover:shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{step.icon}</div>
                    <div className="text-5xl font-bold text-orange-500/20">{step.num}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-300"></div>
                )}
              </div>
            ))}
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCA0MmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMC0yMWMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0Y5NzMxNiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
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
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-2xl font-bold mb-2">Respuesta en 24h</div>
              <div className="text-gray-400">Te contactamos inmediatamente</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✅</div>
              <div className="text-2xl font-bold mb-2">Sin compromiso</div>
              <div className="text-gray-400">Consultoría 100% gratuita</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-2xl font-bold mb-2">Resultados garantizados</div>
              <div className="text-gray-400">O devolvemos tu inversión</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-10 h-10 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">{}</span>
                </div>
                <span className="text-2xl font-bold">Clivo</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Creando el futuro digital, un proyecto excepcional a la vez.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300">
                  <span className="text-xl">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300">
                  <span className="text-xl">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300">
                  <span className="text-xl">▶</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Servicios</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Desarrollo Web</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Apps Móviles</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Diseño UX/UI</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Consultoría Tech</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Compañía</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Nuestro Equipo</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Casos de Éxito</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Únete al equipo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">📧</span>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Email</div>
                    <a href="mailto:hola@clivo.com" className="text-white hover:text-orange-500 transition-colors">hola@clivo.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">📱</span>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Teléfono</div>
                    <span className="text-white">+1 (829) 627-2628</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">📍</span>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Ubicación</div>
                    <span className="text-white">Santo Domingo, RD</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Clivo. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Términos de Servicio</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}