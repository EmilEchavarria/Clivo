"use client";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      setStatus({ type: "error", message: "Por favor completa los campos requeridos." });
      return;
    }

    setStatus({ type: "loading", message: "Enviando solicitud..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          message: "¡Mensaje enviado con éxito! Te contactaremos pronto.",
        });
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: "Hubo un error al enviar el mensaje. Inténtalo de nuevo.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        type: "error",
        message: "Error en el servidor. Inténtalo más tarde.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-6 py-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contáctanos
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto o servicio que necesitas. En Clivo nos encargamos de hacer tu idea realidad.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-left text-gray-300 mb-2 font-semibold">
                Nombre completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 transition-all"
              />
            </div>

            {/* Empresa */}
            <div>
              <label htmlFor="company" className="block text-left text-gray-300 mb-2 font-semibold">
                Empresa / Negocio
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Ej: Clivo SRL"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 transition-all"
              />
            </div>

            {/* Correo y Teléfono */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-left text-gray-300 mb-2 font-semibold">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="correo@empresa.com"
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-left text-gray-300 mb-2 font-semibold">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (809) 000-0000"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 transition-all"
                />
              </div>
            </div>

            {/* Tipo de servicio */}
            <div>
              <label htmlFor="service" className="block text-left text-gray-300 mb-2 font-semibold">
                Servicio que te interesa *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 transition-all"
              >
                <option value="">Selecciona un servicio</option>
                <option value="desarrollo-web">Desarrollo Web</option>
                <option value="apps-moviles">Apps Móviles</option>
                <option value="diseno-ux-ui">Diseño UX/UI</option>
                <option value="cloud-devops">Cloud & DevOps</option>
                <option value="ia-automatizacion">IA & Automatización</option>
                <option value="mantenimiento">Mantenimiento</option>
              </select>
            </div>

            {/* Presupuesto */}
            <div>
              <label htmlFor="budget" className="block text-left text-gray-300 mb-2 font-semibold">
                Presupuesto estimado
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 transition-all"
              >
                <option value="">Selecciona un rango</option>
                <option value="100-500">US$100 - US$500</option>
                <option value="500-1000">US$500 - US$1,000</option>
                <option value="1000-3000">US$1,000 - US$3,000</option>
                <option value="3000+">Más de US$3,000</option>
              </select>
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-left text-gray-300 mb-2 font-semibold">
                Cuéntanos más sobre tu proyecto *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe brevemente lo que necesitas..."
                rows="5"
                required
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 transition-all resize-none"
              />
            </div>

            {/* Estado */}
            {status.message && (
              <p
                className={`text-center font-medium ${
                  status.type === "success"
                    ? "text-green-400"
                    : status.type === "loading"
                    ? "text-orange-400"
                    : "text-red-400"
                }`}
              >
                {status.message}
              </p>
            )}

            {/* Botón */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
