import React, { useState } from 'react';
import { PageType } from '../types';
import { CONTACT_DATA, ACADEMIC_PROJECTS } from '../data/portfolioData';
import { 
  ArrowRight, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  Layers, 
  Database, 
  Compass, 
  Code2, 
  GraduationCap, 
  Quote, 
  Copy, 
  Check, 
  ExternalLink,
  Bot,
  Heart,
  Eye,
  Coffee
} from 'lucide-react';

interface AboutPageProps {
  onSelectPage: (page: PageType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onSelectPage }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyText = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const featuredProjects = ACADEMIC_PROJECTS.filter(p => p.featured);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section with Artistic Editorial Flair */}
      <section className="relative overflow-hidden pt-4 sm:pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Editorial Hero Card - Homogeneous & Balanced Layout */}
          <div className="border border-[#333] bg-[#181818] overflow-hidden shadow-2xl">
            
            {/* Top Bar with Badge */}
            <div className="bg-[#141414] border-b border-[#333] px-6 sm:px-10 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-[#FF6B35]"></span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-mono text-[#FF6B35] font-semibold">
                  Transição para Tecnologia • Customer Experience (CS/CX) & ADS
                </span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#666] hidden sm:block">
                João Pessoa - PB
              </span>
            </div>

            {/* Core Narrative Split: Identity/Actions (Left) & Value Proposition/Contact (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#333]">
              
              {/* Left Column: Identity, Credentials & Primary Action */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 bg-[#161616] flex flex-col justify-between space-y-8">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#888] block mb-3">
                    Perfil Profissional
                  </span>
                  <h1 className="text-5xl sm:text-6xl font-serif-artistic italic mb-1 leading-none text-[#f5f5f5]">
                    Priscilla
                  </h1>
                  <h1 className="text-5xl sm:text-6xl font-serif-artistic italic mb-6 leading-none text-[#f5f5f5]">
                    Cahino
                  </h1>
                  
                  {/* Hallmark Artistic Accent Divider */}
                  <div className="h-[2px] w-20 bg-[#FF6B35] mb-6"></div>
                  
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#eee] font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#FF6B35]"></span>
                      Customer Experience (CS/CX)
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#aaa]">
                      Data Analysis & SQL Specialist
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#888]">
                      UX/UI Designer & ADS Student
                    </p>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-6 border-t border-[#2a2a2a] space-y-3">
                  <button
                    id="btn-hero-projects"
                    onClick={() => onSelectPage('projects')}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF6B35] hover:bg-[#ff7f4d] text-[#121212] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                  >
                    <span>Ver Projetos Acadêmicos</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      id="btn-hero-whatsapp"
                      href={CONTACT_DATA.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-[#FF6B35]/40 text-[#FF6B35] bg-[#FF6B35]/10 hover:bg-[#FF6B35] hover:text-[#121212] font-semibold text-xs uppercase tracking-wider transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      id="btn-hero-linkedin"
                      href={CONTACT_DATA.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-[#333] hover:border-[#FF6B35] text-[#eee] hover:text-white bg-[#1f1f1f] font-semibold text-xs uppercase tracking-wider transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-[#0077B5]" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative Executive Summary & Direct Contact */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-[#181818] flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-[0.4em] text-[#FF6B35] font-bold">
                      Apresentação Profissional
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-artistic italic text-white leading-tight">
                    Conectando experiência, pessoas e tecnologia.
                  </h2>

                  <div className="space-y-4 text-[#bbb] text-base leading-relaxed font-light">
                    <p>
                      Minha atuação reúne relacionamento com clientes, visão de processos e resolução de problemas, agora ampliada por conhecimentos em Análise de Dados, UX/UI, desenvolvimento de sistemas e Inteligência Artificial.
                    </p>
                    <p>
                      Busco transformar essa combinação em soluções mais claras, funcionais e orientadas às necessidades de quem utiliza produtos e serviços.
                    </p>
                  </div>
                </div>

                {/* Direct Contact Bar */}
                <div className="p-4 border border-[#333] bg-[#141414] flex flex-wrap items-center justify-between gap-3 text-xs text-[#888]">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#FF6B35] shrink-0" />
                    <span className="font-mono text-[#ddd]">{CONTACT_DATA.email}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => copyText(CONTACT_DATA.email, 'email')}
                      className="text-[#aaa] hover:text-[#FF6B35] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      {copiedEmail ? (
                        <span className="text-[#FF6B35] flex items-center gap-1 font-semibold">
                          <Check className="w-3.5 h-3.5" /> Copiado!
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider">
                          <Copy className="w-3 h-3" /> Copiar E-mail
                        </span>
                      )}
                    </button>
                    <span className="text-[#444]">|</span>
                    <a
                      href={`tel:${CONTACT_DATA.phone}`}
                      className="text-[#aaa] hover:text-[#FF6B35] flex items-center gap-1 font-mono text-[11px]"
                    >
                      <Phone className="w-3 h-3 text-[#FF6B35]" />
                      <span>{CONTACT_DATA.phoneFormatted}</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Shelf: 4 Core Capabilities Distributed Evenly Across the Full Width */}
            <div className="border-t border-[#333] bg-[#141414] p-6 sm:p-8 lg:p-10">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#888]">
                  Pilares de Atuação & Competências
                </span>
                <span className="text-[10px] font-mono text-[#FF6B35]">
                  04 Áreas Estratégicas
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border border-[#2a2a2a] hover:border-[#FF6B35] bg-[#181818] transition-colors flex flex-col justify-between space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B35] shrink-0" />
                    <span>Customer Success & CX</span>
                  </div>
                  <p className="text-xs text-[#888] font-light leading-relaxed">
                    18+ anos de experiência em relacionamento com clientes, processos, atendimento e resolução de demandas.
                  </p>
                </div>

                <div className="p-4 border border-[#2a2a2a] hover:border-[#FF6B35] bg-[#181818] transition-colors flex flex-col justify-between space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Database className="w-4 h-4 text-[#FF6B35] shrink-0" />
                    <span>Análise de Dados & SQL</span>
                  </div>
                  <p className="text-xs text-[#888] font-light leading-relaxed">
                    Projetos acadêmicos utilizando SQL, MySQL, Python e Power BI.
                  </p>
                </div>

                <div className="p-4 border border-[#2a2a2a] hover:border-[#FF6B35] bg-[#181818] transition-colors flex flex-col justify-between space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Layers className="w-4 h-4 text-[#FF6B35] shrink-0" />
                    <span>UX/UI & Usabilidade</span>
                  </div>
                  <p className="text-xs text-[#888] font-light leading-relaxed">
                    Prototipação no Figma, fluxos de usuário, usabilidade e design de interfaces.
                  </p>
                </div>

                <div className="p-4 border border-[#2a2a2a] hover:border-[#FF6B35] bg-[#181818] transition-colors flex flex-col justify-between space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Bot className="w-4 h-4 text-[#FF6B35] shrink-0" />
                    <span>Inteligência Artificial</span>
                  </div>
                  <p className="text-xs text-[#888] font-light leading-relaxed">
                    Uso da IA como apoio aos estudos, ideação, desenvolvimento e produtividade.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Narrative Section: "Sobre mim" (Exact Prompt Text) */}
      <section id="sobre-mim" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#333] bg-[#181818] p-6 sm:p-12 lg:p-14 shadow-xl relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto border-b border-[#2e2e2e] pb-8 mb-10">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#FF6B35] mb-2 font-bold">
              Trajetória & Filosofia
            </h2>
            <h3 className="font-serif-artistic italic text-3xl sm:text-4xl text-white font-normal mb-3">
              Sobre mim
            </h3>
            <div className="inline-block h-[1px] w-16 bg-[#FF6B35] mb-3"></div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#888] font-mono">
                Priscilla Cahino • CS/CX & ADS
              </span>
            </div>
          </div>

          {/* Text Content centered on the page */}
          <div className="max-w-3xl mx-auto space-y-6 text-[#bbb] text-base sm:text-[17px] leading-relaxed font-light">
            
            <div className="p-6 border border-[#333] bg-[#141414] text-[#eee]">
              <p className="leading-relaxed italic font-serif-artistic text-lg text-center sm:text-left">
                Sou profissional com mais de dezoito anos de experiência nos segmentos bancário e imobiliário. Foi nesse ambiente que construí grande parte da minha trajetória profissional, adquirindo experiência com atendimento, relacionamento com clientes, processos financeiros e resolução de demandas.
              </p>
            </div>

            <p>
              Com o passar dos anos e acompanhando as transformações do mercado e os avanços tecnológicos, comecei a perceber que existiam possibilidades além desse segmento. Isso despertou em mim a vontade de aprender coisas novas, ampliar meus conhecimentos e construir um novo caminho profissional.
            </p>

            <p>
              Durante minha experiência, desenvolvi uma visão muito voltada para a jornada do cliente, organização de processos e resolução de problemas, buscando tornar o atendimento cada vez mais claro, ágil e eficiente.
            </p>

            <p>
              Atualmente, estou ampliando minha atuação para a área de tecnologia, conectando minha experiência em Customer Success e Customer Experience (CS/CX) aos conhecimentos que venho desenvolvendo em análise de dados, UX/UI, desenvolvimento de sistemas e Inteligência Artificial.
            </p>

            <div className="p-5 border border-[#333] hover:border-[#FF6B35] bg-[#141414] transition-colors">
              <p className="text-white font-normal">
                Tenho interesse especial em compreender como dados, tecnologia e experiência do usuário podem contribuir para melhorar processos, apoiar a tomada de decisão e transformar ideias em soluções mais simples, úteis e funcionais.
              </p>
            </div>

            {/* O lado pessoal / humano */}
            <div className="flex items-start gap-4 p-5 border border-[#333] bg-[#141414]">
              <div className="p-2.5 bg-[#222] text-[#FF6B35] shrink-0 border border-[#333]">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-serif-artistic italic text-white mb-1">
                  Além do trabalho e da tecnologia
                </h4>
                <p className="text-sm text-[#aaa] leading-relaxed font-light">
                  Mas nem tudo é trabalho e tecnologia. Nos momentos livres, gosto de aproveitar uma praia, assistir a um bom filme com pipoca e simplesmente observar o que acontece ao meu redor. Sou uma pessoa bastante observadora e acredito que observar também é uma forma de aprender: primeiro ouvir, depois entender e, só então, pensar no que podemos construir ou melhorar.
                </p>
              </div>
            </div>

            {/* A IA no dia a dia */}
            <div className="flex items-start gap-4 p-5 border border-[#333] bg-[#141414]">
              <div className="p-2.5 bg-[#222] text-[#FF6B35] shrink-0 border border-[#333]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-serif-artistic italic text-white mb-1">
                  Inteligência Artificial como apoio e aceleração
                </h4>
                <p className="text-sm text-[#aaa] leading-relaxed font-light">
                  E sim, utilizo bastante a Inteligência Artificial como apoio no meu dia a dia, seja nos estudos, na organização de ideias, na criação de textos ou no desenvolvimento dos meus projetos. Acredito que a IA veio para somar e que, quando combinada com conhecimento, curiosidade e dedicação, pode nos ajudar a criar muitas coisas interessantes.
                </p>
              </div>
            </div>

            <p className="text-[#888] font-light">
              Este espaço também é uma forma de compartilhar um pouco dessa nova etapa: quem sou, o que estou aprendendo e alguns dos projetos que venho desenvolvendo e publicando no GitHub.
            </p>

          </div>

        </div>
      </section>

      {/* Academic Projects Preview Section (Direct link to Page 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#2e2e2e]">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#FF6B35] mb-2 font-bold">
              Projetos Acadêmicos & Tech
            </h2>
            <h3 className="font-serif-artistic italic text-3xl sm:text-4xl text-white font-normal">
              Destaques Selecionados
            </h3>
            <p className="text-[#888] text-xs sm:text-sm mt-1 font-light">
              Projetos desenvolvidos durante minha formação e estudos em Análise e Desenvolvimento de Sistemas.
            </p>
          </div>

          <button
            id="btn-featured-view-all"
            onClick={() => onSelectPage('projects')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#FF6B35] hover:text-[#ff7f4d] transition-colors group cursor-pointer"
          >
            <span>Ver todos os projetos detalhados</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="border border-[#333] hover:border-[#FF6B35] bg-[#181818] overflow-hidden flex flex-col transition-all group"
            >
              {project.image && (
                <div className="aspect-[16/9] w-full overflow-hidden bg-[#141414] relative border-b border-[#2a2a2a]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top grayscale contrast-105 group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 bg-[#121212]/90 text-[10px] font-mono text-[#FF6B35] uppercase tracking-wider border border-[#333]">
                      {project.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute top-2.5 right-2.5">
                    <span className="text-[10px] font-mono text-[#888] bg-[#121212]/80 px-1.5 py-0.5">
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif-artistic italic text-xl text-white group-hover:text-[#FF6B35] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#777] font-semibold">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-[#aaa] font-light line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2a2a2a] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 bg-[#141414] border border-[#2a2a2a] text-[#888]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider font-semibold text-[#FF6B35] hover:text-white flex items-center gap-1 shrink-0"
                    title="Ver no GitHub"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 1. Filosofia & Propósito (Swapped to come before Contato & Conexão) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden border border-[#333] hover:border-[#FF6B35] bg-[#141414] p-8 sm:p-12 transition-colors">
          <div className="max-w-3xl">
            <div className="h-[2px] w-12 bg-[#FF6B35] mb-4"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#FF6B35] block mb-2">
              Filosofia & Propósito
            </span>
            <blockquote className="text-xl sm:text-2xl font-serif-artistic italic text-[#eee] font-normal leading-relaxed mb-3">
              “Oportunidades multiplicam-se à medida que são agarradas.”
            </blockquote>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF6B35]">
              Sun Tzu — <span className="text-[#aaa] font-light">A Arte da Guerra</span>
            </p>
            <p className="mt-2 text-xs text-[#666] italic font-light">
              Texto escrito por mim, com apoio da IA na revisão.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contato & Conexão (Positioned right after Filosofia) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#333] bg-[#161616] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#FF6B35]">
                Contato & Conexão
              </span>
              <h2 className="font-serif-artistic italic text-2xl sm:text-3xl text-white font-normal">
                Aberta a novas oportunidades, aprendizados e conexões profissionais
              </h2>
              <p className="text-[#aaa] text-sm leading-relaxed max-w-2xl font-light">
                Seja para posições em Customer Success/CX, oportunidades na área de Tecnologia e Análise de Dados ou projetos colaborativos, estou à disposição para conversar.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  id="btn-cta-whatsapp"
                  href={CONTACT_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#FF6B35] hover:bg-[#ff7f4d] text-[#121212] font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  id="btn-cta-linkedin"
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
                  id="btn-cta-github"
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

    </div>
  );
};
