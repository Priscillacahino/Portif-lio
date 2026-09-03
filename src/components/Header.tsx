import React from 'react';
import { PageType } from '../types';
import { CONTACT_DATA } from '../data/portfolioData';
import { User, FolderGit2, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPage: PageType;
  onSelectPage: (page: PageType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onSelectPage }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#2a2a2a] bg-[#121212]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand & Name */}
          <div 
            onClick={() => onSelectPage('about')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-artistic italic text-xl text-white tracking-wide group-hover:text-[#FF6B35] transition-colors">
                  {CONTACT_DATA.name}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] font-semibold px-2 py-0.5 bg-[#1e1e1e] text-[#FF6B35] border border-[#333]">
                  <Sparkles className="w-3 h-3" /> Tech & CS/CX
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#777] font-medium mt-0.5">
                Estudante de ADS • Análise de Dados • UX/UI
              </p>
            </div>
          </div>

          {/* 2-Page Primary Navigation */}
          <nav className="flex items-center gap-1 p-1 bg-[#1a1a1a] border border-[#333]">
            <button
              id="nav-tab-about"
              onClick={() => onSelectPage('about')}
              className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all ${
                currentPage === 'about'
                  ? 'bg-[#FF6B35] text-[#121212]'
                  : 'text-[#999] hover:text-white hover:bg-[#222]'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Sobre Mim</span>
            </button>

            <button
              id="nav-tab-projects"
              onClick={() => onSelectPage('projects')}
              className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all ${
                currentPage === 'projects'
                  ? 'bg-[#FF6B35] text-[#121212]'
                  : 'text-[#999] hover:text-white hover:bg-[#222]'
              }`}
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Projetos</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 ${
                currentPage === 'projects'
                  ? 'bg-[#121212] text-[#FF6B35]'
                  : 'bg-[#252525] text-[#777]'
              }`}>
                05
              </span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
