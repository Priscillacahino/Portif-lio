import React from 'react';
import { CONTACT_DATA } from '../data/portfolioData';
import { PageType, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  onSelectPage: (page: PageType) => void;
  currentLanguage: Language;
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectPage, currentLanguage, onOpenResume }) => {
  const t = TRANSLATIONS[currentLanguage].footer;

  return (
    <footer className="border-t border-[#2a2a2a] bg-[#101010] text-[#9ca3af] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <h4 className="font-serif-artistic italic text-lg text-white">
              {CONTACT_DATA.name}
            </h4>
            <p className="text-xs text-[#d1d5db] font-light">
              {t.roleLine}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs uppercase tracking-wider font-semibold font-mono">
            <button
              id="footer-nav-about"
              onClick={() => {
                onSelectPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#d1d5db] hover:text-[#FF6B35] transition-colors cursor-pointer"
            >
              {t.aboutLink}
            </button>
            <span className="text-[#444]">•</span>
            <button
              id="footer-nav-projects"
              onClick={() => {
                onSelectPage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#d1d5db] hover:text-[#FF6B35] transition-colors cursor-pointer"
            >
              {t.projectsLink}
            </button>
            {onOpenResume && (
              <>
                <span className="text-[#444]">•</span>
                <button
                  id="footer-nav-resume"
                  type="button"
                  onClick={onOpenResume}
                  className="text-[#FF6B35] hover:underline transition-colors cursor-pointer"
                >
                  {t.resumeLink}
                </button>
              </>
            )}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#222] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9ca3af]">
          <p>© {new Date().getFullYear()} {CONTACT_DATA.name}. {t.rights}</p>
          <p>
            João Pessoa - PB • {t.portfolioLabel}
          </p>
        </div>
      </div>
    </footer>
  );
};
