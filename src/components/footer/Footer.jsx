import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-10 h-10 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold"></span>
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
  );
}