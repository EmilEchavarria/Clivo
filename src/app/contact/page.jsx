"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center px-4 py-16">
      
      {/* Logo animado arriba del formulario */}
      <div className="mb-6 animate-fade-slide">
        <img
          src="/logo.png"
          alt="Clivo Logo"
          className="w-28 h-28 md:w-32 md:h-32 object-contain"
        />
      </div>

      {/* Contenedor del formulario */}
      <div className="max-w-4xl w-full bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          Agenda tu asesoramiento
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Completa el formulario y nos pondremos en contacto contigo. 
          Es rápido, seguro y sin compromiso.
        </p>

        {submitted ? (
          <div className="text-center text-green-400 font-semibold text-xl">
            ¡Gracias! Tu solicitud ha sido enviada.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div className="relative">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="peer w-full rounded-xl bg-gray-800 text-white px-4 pt-5 pb-2 outline-none border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                placeholder=" "
              />
              <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
                Nombre
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full rounded-xl bg-gray-800 text-white px-4 pt-5 pb-2 outline-none border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                placeholder=" "
              />
              <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
                Email
              </label>
            </div>

            {/* Teléfono */}
            <div className="relative">
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="peer w-full rounded-xl bg-gray-800 text-white px-4 pt-5 pb-2 outline-none border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                placeholder=" "
              />
              <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
                Teléfono (opcional)
              </label>
            </div>

            {/* Servicio */}
            <div className="relative">
              <select
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                required
                className="peer w-full rounded-xl bg-gray-800 text-white px-4 pt-5 pb-2 outline-none border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all appearance-none"
              >
                <option value="" disabled hidden></option>
                <option value="asesoramiento">Asesoramiento</option>
                <option value="desarrollo_web">Desarrollo web</option>
                <option value="otro">Otro</option>
              </select>
              <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
                Tipo de servicio
              </label>
            </div>

            {/* Mensaje (full width) */}
            <div className="relative md:col-span-2">
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="4"
                required
                className="peer w-full rounded-xl bg-gray-800 text-white px-4 pt-5 pb-2 outline-none border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"
                placeholder=" "
              />
              <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
                Mensaje
              </label>
            </div>

            {/* Botón */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 text-lg flex items-center gap-2 justify-center mx-auto"
              >
                Enviar
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Animación con Tailwind CSS */}
      <style jsx>{`
        .animate-fade-slide {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeSlideIn 0.6s forwards;
        }
        @keyframes fadeSlideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
