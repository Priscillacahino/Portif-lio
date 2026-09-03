/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PageType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('about');

  const handleSelectPage = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Keep document title synced with current section
    if (currentPage === 'about') {
      document.title = 'Priscilla Cahino | Sobre Mim & Perfil Profissional';
    } else {
      document.title = 'Priscilla Cahino | Projetos Acadêmicos & GitHub';
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-[#f5f5f5] selection:bg-[#FF6B35]/30 selection:text-[#FF6B35]">
      {/* Persistent Navigation Header */}
      <Header 
        currentPage={currentPage} 
        onSelectPage={handleSelectPage} 
      />

      {/* Main 2-Page Dynamic Content */}
      <main className="flex-1">
        {currentPage === 'about' ? (
          <AboutPage onSelectPage={handleSelectPage} />
        ) : (
          <ProjectsPage onSelectPage={handleSelectPage} />
        )}
      </main>

      {/* Shared Footer with Quote & Contact */}
      <Footer onSelectPage={handleSelectPage} />
    </div>
  );
}
