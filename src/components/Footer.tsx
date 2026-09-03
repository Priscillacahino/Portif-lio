import React from 'react';
import { CONTACT_DATA } from '../data/portfolioData';
import { PageType } from '../types';

interface FooterProps {
  onSelectPage: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectPage }) => {
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#101010] text-[#777] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <h4 className="font-serif-artistic italic text-lg text-white">
              {CONTACT_DATA.name}
            </h4>
            <p className="text-xs text-[#888] font-light">
              Customer Experience (CX/CS) & Análise e Desenvolvimento de Sistemas (ADS)
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs uppercase tracking-wider font-semibold font-mono">
            <button
              id="footer-nav-about"
              onClick={() => {
                onSelectPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#aaa] hover:text-[#FF6B35] transition-colors cursor-pointer"
            >
              01. Sobre Mim & Trajetória
            </button>
            <span className="text-[#333]">•</span>
            <button
              id="footer-nav-projects"
              onClick={() => {
                onSelectPage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#aaa] hover:text-[#FF6B35] transition-colors cursor-pointer"
            >
              02. Projetos Acadêmicos
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#222] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#555]">
          <p>© {new Date().getFullYear()} {CONTACT_DATA.name}. Todos os direitos reservados.</p>
          <p>
            Campina Grande - PB • Portfólio Profissional
          </p>
        </div>
      </div>
    </footer>
  );
};

