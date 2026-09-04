import React from 'react';
import { PageType, Language } from '../types';
import { CONTACT_DATA } from '../data/portfolioData';
import { TRANSLATIONS } from '../data/translations';
import { User, FolderGit2, FileText, Download } from 'lucide-react';

interface HeaderProps {
  currentPage: PageType;
  onSelectPage: (page: PageType) => void;
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
  onOpenResume?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  onSelectPage,
  currentLanguage,
  onSelectLanguage,
  onOpenResume
}) => {
  const t = TRANSLATIONS[currentLanguage].header;
  const projectCount = TRANSLATIONS[currentLanguage].projectsData.length;
  const formattedCount = String(projectCount).padStart(2, '0');

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#2a2a2a] bg-[#121212]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Brand & Name */}
          <div 
            onClick={() => onSelectPage('about')}
            className="flex items-center gap-2 cursor-pointer group text-left min-w-0"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onSelectPage('about')}
            aria-label="Ir para página Sobre Mim"
          >
            <div className="truncate">
              <div className="flex items-center gap-2">
                <span className="font-serif-artistic italic text-lg sm:text-xl text-white tracking-wide group-hover:text-[#FF6B35] transition-colors truncate">
                  {CONTACT_DATA.name}
                </span>
                <span className="hidden md:inline-flex items-center text-xs uppercase tracking-wider font-mono font-semibold px-2 py-0.5 bg-[#1e1e1e] text-[#FF6B35] border border-[#333]">
                  CS & Tech Ops
                </span>
              </div>
              <p className="text-xs tracking-wider text-[#9ca3af] font-medium hidden sm:block truncate">
                {t.subtitle}
              </p>
            </div>
          </div>

          {/* Controls: Flags Switcher + Navigation + CV */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            
            {/* Language Switcher Buttons with ONLY Flags */}
            <div 
              className="flex items-center bg-[#1a1a1a] border border-[#333] p-0.5 sm:p-1 gap-0.5 sm:gap-1"
              role="group"
              aria-label="Seleção de idioma"
            >
              {/* Brasil 🇧🇷 */}
              <button
                id="lang-pt"
                onClick={() => onSelectLanguage('pt')}
                title="Português"
                aria-label="Selecionar idioma Português"
                className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 text-base transition-all cursor-pointer ${
                  currentLanguage === 'pt'
                    ? 'bg-[#FF6B35] shadow-sm scale-105'
                    : 'hover:bg-[#252525] opacity-70 hover:opacity-100'
                }`}
              >
                <span className="leading-none select-none text-base sm:text-lg" role="img" aria-hidden="true">🇧🇷</span>
              </button>

              {/* España 🇪🇸 */}
              <button
                id="lang-es"
                onClick={() => onSelectLanguage('es')}
                title="Español"
                aria-label="Seleccionar idioma Español"
                className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 text-base transition-all cursor-pointer ${
                  currentLanguage === 'es'
                    ? 'bg-[#FF6B35] shadow-sm scale-105'
                    : 'hover:bg-[#252525] opacity-70 hover:opacity-100'
                }`}
              >
                <span className="leading-none select-none text-base sm:text-lg" role="img" aria-hidden="true">🇪🇸</span>
              </button>
            </div>

            {/* Primary Navigation */}
            <nav className="flex items-center bg-[#1a1a1a] border border-[#333] p-0.5 sm:p-1 gap-0.5 sm:gap-1">
              <button
                id="nav-tab-about"
                onClick={() => onSelectPage('about')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  currentPage === 'about'
                    ? 'bg-[#FF6B35] text-[#121212]'
                    : 'text-[#d1d5db] hover:text-white hover:bg-[#242424]'
                }`}
              >
                <User className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="hidden xs:inline sm:inline">{t.aboutNav}</span>
              </button>

              <button
                id="nav-tab-projects"
                onClick={() => onSelectPage('projects')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  currentPage === 'projects'
                    ? 'bg-[#FF6B35] text-[#121212]'
                    : 'text-[#d1d5db] hover:text-white hover:bg-[#242424]'
                }`}
              >
                <FolderGit2 className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="hidden xs:inline sm:inline">{t.projectsNav}</span>
                <span className={`text-xs font-mono px-1 py-0.2 ${
                  currentPage === 'projects'
                    ? 'bg-[#121212] text-[#FF6B35]'
                    : 'bg-[#282828] text-[#9ca3af]'
                }`}>
                  {formattedCount}
                </span>
              </button>
            </nav>

            {/* CV / Currículo Modal Button */}
            {onOpenResume && (
              <button
                id="nav-btn-resume"
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:py-2 border border-[#FF6B35] bg-[#1e1e1e] hover:bg-[#FF6B35] text-white hover:text-[#121212] text-xs uppercase tracking-wider font-semibold font-mono transition-colors cursor-pointer"
                title={t.btnResume}
                aria-label={t.btnResume}
              >
                <FileText className="w-3.5 h-3.5 text-[#FF6B35] group-hover:text-[#121212]" />
                <span>{t.btnResume}</span>
              </button>
            )}

          </div>
        </div>
      </div>
    </header>
  );
};
