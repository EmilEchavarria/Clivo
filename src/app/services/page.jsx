"use client";
import React from "react";
import Link from "next/link";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Image from "next/image";
import { Rocket, Smartphone, Palette, Cloud, Bot } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas, rápidas y escalables que impulsan tu negocio",
      icon: Rocket,
      href: "/services/desarrollo-web"
    },
    {
      title: "Apps Móviles",
      description: "Experiencias móviles nativas que tus usuarios amarán en iOS y Android",
      icon: Smartphone,
      href: "/services/apps-moviles"
    },
    {
      title: "Diseño UX/UI",
      description: "Diseños hermosos y funcionales que convierten visitantes en clientes",
      icon: Palette,
      href: "/services/diseno-ux-ui"
    },
    {
      title: "Cloud & DevOps",
      description: "Infraestructura robusta y automatizada para máxima disponibilidad",
      icon: Cloud,
      href: "/services/cloud-devops"
    },
    {
      title: "IA & Automatización",
      description: "Integramos inteligencia artificial para optimizar tus procesos",
      icon: Bot,
      href: "/services/ia-automatizacion"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-gray-50 to-orange-50/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-900">Nuestros</span>{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Servicios
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Desde el concepto inicial hasta el lanzamiento, ofrecemos soluciones digitales completas para tu negocio.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={idx}
                  href={service.href}
                  className="group relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
