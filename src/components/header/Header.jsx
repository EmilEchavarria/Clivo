import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500 blur-lg opacity-30 rounded-full"></div>
            <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl"></span>
            </div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Clivo</span>
        </div>
        <div className="hidden lg:flex gap-10 items-center">
          <a href="#inicio" className="text-gray-700 hover:text-orange-500 transition-all font-medium relative group">
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#servicios" className="text-gray-700 hover:text-orange-500 transition-all font-medium relative group">
            Servicios
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#proceso" className="text-gray-700 hover:text-orange-500 transition-all font-medium relative group">
            Proceso
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#testimonios" className="text-gray-700 hover:text-orange-500 transition-all font-medium relative group">
            Testimonios
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
          Hablemos
        </button>
      </div>
    </nav>
  );
}