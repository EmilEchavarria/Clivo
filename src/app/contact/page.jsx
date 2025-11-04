"use client";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Por favor completa todos los campos requeridos." });
      return;
    }

    // Simula envío del formulario
    setTimeout(() => {
      setStatus({ type: "success", message: "¡Mensaje enviado con éxito! Te contactaremos pronto." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
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
            ¿Tienes una idea o proyecto en mente? ¡Nos encantaría escucharte!
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl">
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
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 transition-all"
              />
            </div>

            {/* Correo */}
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
                placeholder="correo@ejemplo.com"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 transition-all"
              />
            </div>

            {/* Asunto */}
            <div>
              <label htmlFor="subject" className="block text-left text-gray-300 mb-2 font-semibold">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Motivo del mensaje"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 transition-all"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-left text-gray-300 mb-2 font-semibold">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje..."
                rows="5"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 transition-all resize-none"
              />
            </div>

            {/* Estado del envío */}
            {status.message && (
              <p
                className={`text-center font-medium ${
                  status.type === "success" ? "text-green-400" : "text-red-400"
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
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
