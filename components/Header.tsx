'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e] border-b-4 border-[#ffd700] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#ffd700] pixel-text tracking-wider">
            MATHEUS A. GOMES
          </h1>
          
          <button
            className="md:hidden ff6-button px-4 py-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <nav className="hidden md:flex gap-6">
            {[{nome:'Sobre', id:'sobre'}, {nome:'Conhecimentos', id:'conhecimentos'}, {nome:'Projetos', id:'projetos'}, {nome:'Formação', id:'formacao'}, {nome:'Contato', id:'contato'} ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="ff6-button px-4 py-2 text-sm"
              >
                {item.nome}
              </button>
            ))}
          </nav>
        </div>

        {menuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-2">
            {['Sobre', 'Conhecimentos', 'Projetos', 'Formação', 'Contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="ff6-button px-4 py-2 text-sm w-full text-left"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
