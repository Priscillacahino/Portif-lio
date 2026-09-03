import React, { useState } from 'react';
import { PageType, ProjectCategory, AcademicProject } from '../types';
import { ACADEMIC_PROJECTS, CONTACT_DATA } from '../data/portfolioData';
import { 
  Github, 
  ExternalLink, 
  Maximize2, 
  X, 
  Layers, 
  Database, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowUpRight,
  Figma,
  Globe,
  Terminal,
  FileCode,
  Filter,
  MessageCircle,
  Linkedin,
  Mail,
  Phone
} from 'lucide-react';

interface ProjectsPageProps {
  onSelectPage: (page: PageType) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectPage }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<AcademicProject | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? ACADEMIC_PROJECTS
    : ACADEMIC_PROJECTS.filter(p => p.category === selectedCategory);

  const categoryCounts = {
    all: ACADEMIC_PROJECTS.length,
    data: ACADEMIC_PROJECTS.filter(p => p.category === 'data').length,
    'ux-ui': ACADEMIC_PROJECTS.filter(p => p.category === 'ux-ui').length,
    dev: ACADEMIC_PROJECTS.filter(p => p.category === 'dev').length
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 pt-4">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#2e2e2e]">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#FF6B35] mb-2 font-bold">
              Portfólio Técnico & Código
            </h2>
            <h1 className="font-serif-artistic italic text-4xl sm:text-5xl lg:text-6xl font-normal text-white">
              Projetos Acadêmicos & GitHub
            </h1>
            <p className="text-[#aaa] text-base sm:text-lg max-w-3xl mt-3 leading-relaxed font-light">
              Trabalhos práticos desenvolvidos durante meus estudos em Análise e Desenvolvimento de Sistemas (ADS), workshops imersivos e desafios reais na Fábrica de Software.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              id="btn-projects-github-profile"
              href={CONTACT_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#333] hover:border-[#FF6B35] bg-[#181818] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              <Github className="w-4 h-4 text-[#FF6B35]" />
              <span>github.com/Priscillacahino</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#777]" />
            </a>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-2 mr-2 text-[11px] uppercase tracking-wider font-mono text-[#888]">
            <Filter className="w-3.5 h-3.5 text-[#FF6B35]" />
            <span>Filtrar área:</span>
          </div>

          <button
            id="filter-all"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#FF6B35] text-[#121212]'
                : 'border border-[#333] hover:border-[#666] bg-[#181818] text-[#999]'
            }`}
          >
            Todos ({categoryCounts.all})
          </button>

          <button
            id="filter-data"
            onClick={() => setSelectedCategory('data')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              selectedCategory === 'data'
                ? 'bg-[#FF6B35] text-[#121212]'
                : 'border border-[#333] hover:border-[#666] bg-[#181818] text-[#999]'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Dados & BI ({categoryCounts.data})</span>
          </button>

          <button
            id="filter-ux"
            onClick={() => setSelectedCategory('ux-ui')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              selectedCategory === 'ux-ui'
                ? 'bg-[#FF6B35] text-[#121212]'
                : 'border border-[#333] hover:border-[#666] bg-[#181818] text-[#999]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>UX/UI Design ({categoryCounts['ux-ui']})</span>
          </button>

          {categoryCounts.dev > 0 && (
            <button
              id="filter-dev"
              onClick={() => setSelectedCategory('dev')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                selectedCategory === 'dev'
                  ? 'bg-[#FF6B35] text-[#121212]'
                  : 'border border-[#333] hover:border-[#666] bg-[#181818] text-[#999]'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Desenvolvimento & Sistemas ({categoryCounts.dev})</span>
            </button>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="border border-[#333] hover:border-[#FF6B35] bg-[#181818] overflow-hidden flex flex-col justify-between transition-all group"
            >
              <div>
                {/* Visual Header / Image */}
                {project.image ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#141414] border-b border-[#2e2e2e]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top grayscale contrast-105 group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30 pointer-events-none" />

                    {/* Category pill */}
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-[#121212]/90 text-[10px] font-mono text-[#FF6B35] uppercase tracking-wider border border-[#333]">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-mono text-[#888] bg-[#121212]/90 px-2 py-0.5 border border-[#333]">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Zoom button */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="absolute bottom-4 right-4 p-2 bg-[#121212]/90 text-[#bbb] hover:text-[#121212] hover:bg-[#FF6B35] transition-all border border-[#333] cursor-pointer"
                      title="Ampliar captura do projeto"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  /* Visual Banner for code-based project without screenshot */
                  <div className="p-6 bg-[#141414] border-b border-[#2e2e2e] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 border border-[#333] bg-[#222] flex items-center justify-center text-[#FF6B35]">
                        {project.category === 'data' ? (
                          <Database className="w-6 h-6" />
                        ) : (
                          <FileCode className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#FF6B35] uppercase tracking-wider">
                          {project.categoryLabel}
                        </span>
                        <h4 className="font-serif-artistic italic text-white text-lg mt-0.5">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#888]">
                      0{idx + 1}
                    </span>
                  </div>
                )}

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div className="space-y-1.5">
                    <h3 className="font-serif-artistic italic text-2xl sm:text-3xl text-white group-hover:text-[#FF6B35] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#FF6B35]">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[#aaa] leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#888]">
                      Destaques & Entregas:
                    </p>
                    <ul className="space-y-1.5">
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#bbb] font-light leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B35] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div className="pt-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#888] mb-2">
                      Tecnologias Utilizadas:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-[#141414] border border-[#2a2a2a] text-xs font-mono text-[#888]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 sm:px-8 sm:py-4 bg-[#141414] border-t border-[#2e2e2e] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FF6B35] hover:bg-[#ff7f4d] text-[#121212] text-xs uppercase tracking-wider font-bold transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Acessar Plataforma Web</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}

                  {project.figmaUrl && (
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#333] hover:border-[#FF6B35] bg-[#222] text-[#eee] text-xs uppercase tracking-wider font-semibold transition-colors"
                    >
                      <Figma className="w-3.5 h-3.5 text-[#FF6B35]" />
                      <span>Protótipo no Figma</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#333] hover:border-[#FF6B35] bg-[#1a1a1a] text-[#eee] text-xs uppercase tracking-wider font-semibold transition-colors ml-auto"
                >
                  <Github className="w-3.5 h-3.5 text-[#FF6B35]" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-[#777]" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GitHub Learning Note & Back to Profile Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#333] bg-[#141414] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif-artistic italic text-2xl text-white">
              Gostou dos projetos acadêmicos?
            </h3>
            <p className="text-xs sm:text-sm text-[#aaa] max-w-xl font-light">
              Você pode conferir a história completa de transição e os mais de 18 anos de trajetória profissional na primeira página.
            </p>
          </div>

          <button
            id="btn-return-about"
            onClick={() => onSelectPage('about')}
            className="flex items-center gap-2 px-6 py-3.5 bg-[#FF6B35] hover:bg-[#ff7f4d] text-[#121212] font-bold text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para Sobre Mim & Perfil</span>
          </button>
        </div>
      </section>

      {/* Contato & Conexão no final da segunda página */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#333] bg-[#161616] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#FF6B35]">
                Contato & Conexão
              </span>
              <h2 className="font-serif-artistic italic text-2xl sm:text-3xl text-white font-normal">
                Vamos conversar sobre oportunidades e novos projetos?
              </h2>
              <p className="text-[#aaa] text-sm leading-relaxed max-w-2xl font-light">
                Estou aberta a propostas para Customer Success, CX, análise de dados e desafios em tecnologia. Fique à vontade para entrar em contato pelos canais diretos abaixo.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  id="btn-projects-cta-whatsapp"
                  href={CONTACT_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#FF6B35] hover:bg-[#ff7f4d] text-[#121212] font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  id="btn-projects-cta-linkedin"
                  href={CONTACT_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 border border-[#333] hover:border-[#FF6B35] bg-[#1f1f1f] text-[#eee] font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#0077B5]" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  id="btn-projects-cta-github"
                  href={CONTACT_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 border border-[#333] hover:border-[#FF6B35] bg-[#1f1f1f] text-[#eee] font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                </a>

                <a
                  href={`mailto:${CONTACT_DATA.email}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 border border-[#333] hover:border-[#FF6B35] bg-[#1f1f1f] text-[#eee] font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FF6B35]" />
                  <span>E-mail</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Image Preview Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121212]/90 backdrop-blur-sm"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#181818] border border-[#444] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#141414] flex items-center justify-between border-b border-[#333]">
              <div>
                <h4 className="font-serif-artistic italic text-white text-lg">
                  {activeModalProject.title}
                </h4>
                <p className="text-xs uppercase tracking-wider text-[#FF6B35] font-semibold">
                  {activeModalProject.subtitle}
                </p>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 text-[#aaa] hover:text-white hover:bg-[#222] transition-colors cursor-pointer"
                title="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-auto p-4 bg-[#101010] flex items-center justify-center">
              {activeModalProject.image && (
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="max-w-full max-h-[70vh] object-contain border border-[#333]"
                />
              )}
            </div>

            <div className="p-4 bg-[#141414] border-t border-[#333] flex items-center justify-between flex-wrap gap-2 text-xs">
              <span className="text-[#888] font-mono text-[10px] uppercase">
                {activeModalProject.categoryLabel}
              </span>
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#FF6B35] hover:underline font-semibold uppercase tracking-wider text-xs"
              >
                <span>Abrir repositório no GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
