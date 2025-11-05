"use client";
import React from "react";
import Image from "next/image";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Lightbulb, HeartHandshake, ShieldCheck, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[80vh]">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/empresas/about/about-bg.jpg"
            alt="About background"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Sobre nosotros
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            En Clivo transformamos la tecnología en resultados reales.  
            Creamos soluciones digitales con propósito, eficiencia y pasión por la excelencia.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Los fundadores
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Las mentes detrás de Clivo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dos desarrolladores apasionados por crear software útil, funcional y con impacto real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Luis */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-500/50">
              <Image
                src="/founder1.png"
                alt="Luis Alburquerque"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Luis Alburquerque</h3>
            <p className="text-orange-600 font-semibold mb-4">Co-Fundador & Desarrollador</p>
            <p className="text-gray-600 leading-relaxed">
              Desarrollador enfocado en crear soluciones web modernas y escalables.  
              Apasionado por la tecnología, el diseño limpio y el desarrollo de productos que realmente funcionen.
            </p>
          </div>

          {/* Emil */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-500/50">
              <Image
                src="/founder2.jpeg"
                alt="Emil Echavarría"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Emil Echavarría</h3>
            <p className="text-orange-600 font-semibold mb-4">Co-Fundador & Desarrollador</p>
            <p className="text-gray-600 leading-relaxed">
              Full-stack developer con visión estratégica.  
              Combina creatividad y lógica para diseñar software que resuelva problemas reales con precisión y elegancia.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-orange-50/30">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nuestros valores
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lo que define a Clivo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No solo construimos software, construimos relaciones duraderas basadas en confianza, innovación y compromiso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Lightbulb,
              title: "Innovación",
              text: "Exploramos nuevas tecnologías y enfoques creativos para ofrecer soluciones únicas.",
            },
            {
              icon: HeartHandshake,
              title: "Compromiso",
              text: "Nos involucramos con cada cliente como si fuera nuestro propio proyecto.",
            },
            {
              icon: ShieldCheck,
              title: "Transparencia",
              text: "Comunicamos con claridad y trabajamos con integridad en cada paso del proceso.",
            },
            {
              icon: TrendingUp,
              title: "Crecimiento",
              text: "Buscamos mejorar constantemente, tanto en nuestras habilidades como en los resultados que entregamos.",
            },
          ].map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-orange-500 mb-4">
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
