/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { PageType, Language } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('about');
  const [currentLanguage, setCurrentLanguage] = useState<Language>('pt');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  // Parse URL hash to determine page and active project
  const handleHashChange = useCallback(() => {
    const hash = window.location.hash.toLowerCase();

    if (hash.startsWith('#/projetos')) {
      setCurrentPage('projects');
      const parts = hash.split('/');
      if (parts.length >= 3 && parts[2]) {
        setActiveProjectId(parts[2]);
      } else {
        setActiveProjectId(null);
      }
    } else if (hash === '#/curriculo' || hash === '#/cv') {
      setIsResumeOpen(true);
    } else {
      setCurrentPage('about');
      setActiveProjectId(null);
    }
  }, []);

  // Initialize and listen to hash change
  useEffect(() => {
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [handleHashChange]);

  const handleSelectPage = (page: PageType) => {
    setCurrentPage(page);
    setActiveProjectId(null);
    if (page === 'projects') {
      window.location.hash = '#/projetos';
    } else {
      window.location.hash = '#/';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (projectId: string | null) => {
    setActiveProjectId(projectId);
    if (projectId) {
      setCurrentPage('projects');
      window.location.hash = `#/projetos/${projectId}`;
    } else {
      window.location.hash = '#/projetos';
    }
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
    if (window.location.hash === '#/curriculo' || window.location.hash === '#/cv') {
      window.location.hash = currentPage === 'projects' ? '#/projetos' : '#/';
    }
  };

  useEffect(() => {
    const titles: Record<Language, { about: string; projects: string }> = {
      pt: {
        about: 'Priscilla Cahino | Customer Success & Operações em Tecnologia',
        projects: 'Priscilla Cahino | Projetos Acadêmicos & GitHub'
      },
      en: {
        about: 'Priscilla Cahino | Customer Success & Tech Operations',
        projects: 'Priscilla Cahino | Academic Projects & GitHub'
      },
      es: {
        about: 'Priscilla Cahino | Customer Success y Operaciones en Tecnología',
        projects: 'Priscilla Cahino | Proyectos Académicos & GitHub'
      }
    };

    document.title = titles[currentLanguage][currentPage];
  }, [currentPage, currentLanguage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-[#f5f5f5] selection:bg-[#FF6B35]/30 selection:text-[#FF6B35]">
      {/* Persistent Navigation Header with Language Switcher */}
      <Header 
        currentPage={currentPage} 
        onSelectPage={handleSelectPage}
        currentLanguage={currentLanguage}
        onSelectLanguage={setCurrentLanguage}
        onOpenResume={handleOpenResume}
      />

      {/* Main 2-Page Dynamic Content with Deep-Link Support */}
      <main className="flex-1">
        {currentPage === 'about' ? (
          <AboutPage 
            onSelectPage={handleSelectPage} 
            currentLanguage={currentLanguage}
            onOpenResume={handleOpenResume}
            onSelectProject={handleSelectProject}
          />
        ) : (
          <ProjectsPage 
            onSelectPage={handleSelectPage} 
            currentLanguage={currentLanguage} 
            onOpenResume={handleOpenResume}
            activeProjectId={activeProjectId}
            onSelectProject={handleSelectProject}
          />
        )}
      </main>

      {/* Shared Footer with Contact & Links */}
      <Footer 
        onSelectPage={handleSelectPage} 
        currentLanguage={currentLanguage} 
        onOpenResume={handleOpenResume}
      />

      {/* Accessible Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
        currentLanguage={currentLanguage}
      />
    </div>
  );
}
