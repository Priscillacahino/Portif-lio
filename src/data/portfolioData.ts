import { AcademicProject, ContactInfo } from '../types';

export const CONTACT_DATA: ContactInfo = {
  name: "Priscilla Cahino",
  tagline: "Customer Success (CS/CX) & Estudante de ADS | Transição para Tecnologia",
  phone: "+5583999553329",
  phoneFormatted: "(83) 99955-3329",
  email: "priscilla_cahino@hotmail.com",
  secondaryEmail: "priscillacahinoo@gmail.com",
  linkedin: "https://www.linkedin.com/in/priscilla-cahino/",
  github: "https://github.com/Priscillacahino",
  whatsappUrl: "https://wa.me/5583999553329?text=Ol%C3%A1%20Priscilla!%20Vi%20seu%20site%20e%20portf%C3%B3lio%20profissional.",
  location: "Paraíba, Brasil"
};

export const ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    id: "clinicacare",
    title: "ClínicaCare",
    subtitle: "Análise de Dados e Risco de Inadimplência",
    category: "data",
    categoryLabel: "Análise de Dados & BI",
    summary: "Modelagem de banco de dados, SQL, análise exploratória em Python com Machine Learning e criação de dashboard executivo no Power BI.",
    description: "Projeto desenvolvido como desafio final de workshop, simulando o cenário completo de uma clínica de saúde que precisa organizar, sanear e extrair inteligência dos seus dados operacionais e financeiros. Reuniu etapas completas: desde o modelo relacional em MySQL até algoritmos preditivos e dashboards para a gestão.",
    image: "/projects/clinicacare.png",
    technologies: ["SQL", "MySQL", "Python", "Pandas", "Machine Learning", "Power BI", "Modelagem Relacional"],
    highlights: [
      "Estruturação do modelo lógico e manipulação em banco MySQL",
      "Análise da taxa de comparecimento e cancelamentos em consultas",
      "Identificação de padrões de inadimplência e dias médios de atraso por tipo de plano",
      "Dashboard dinâmico no Power BI para tomada de decisão clínica e financeira"
    ],
    githubUrl: "https://github.com/Priscillacahino/Desafio_Final_WKS_26.2--Cl-nicaCare",
    featured: true
  },
  {
    id: "adm4all",
    title: "Adm4All — Administração para Todos",
    subtitle: "Plataforma de Capacitação & Interface UX/UI",
    category: "ux-ui",
    categoryLabel: "UX/UI Design & Produto",
    summary: "Prototipação de telas de alta fidelidade, arquitetura de fluxos de usuário e usabilidade no âmbito da Fábrica de Software acadêmica.",
    description: "Projeto desenvolvido com o propósito de oferecer uma plataforma intuitiva de apoio e capacitação na área administrativa. Atuação direta na prototipação das telas, estruturação dos fluxos cognitivos, organização visual e experiência de navegação, aplicando heurísticas consagradas de usabilidade.",
    image: "/projects/adm4all.png",
    technologies: ["UX/UI Design", "Figma", "Prototipação", "Design System", "Arquitetura de Informação", "Usabilidade"],
    highlights: [
      "Construção de fluxos completos de onboarding e aprendizado",
      "Prototipação interativa com foco em clareza, acessibilidade e agilidade",
      "Aplicação de princípios de Customer Experience (CX) à interface do usuário",
      "Plataforma disponibilizada e implementada em projeto de extensão"
    ],
    githubUrl: "https://github.com/Priscillacahino/Fabrica-de-Software---Adm4All",
    liveUrl: "https://adm4all.extensao-fs.com.br/",
    featured: true
  },
  {
    id: "petzone",
    title: "PetZone",
    subtitle: "Protótipo Mobile & Experiência de Serviços Pet",
    category: "ux-ui",
    categoryLabel: "UX/UI Design & Mobile",
    summary: "Protótipo interativo completo de aplicativo de serviços para pet shop desenvolvido durante workshop imersivo de UX/UI no Figma.",
    description: "Criação de ponta a ponta da interface e jornada do cliente para um aplicativo especializado no segmento pet. Englobou pesquisa de necessidades dos tutores, mapeamento de jornadas, design de telas de catálogo, carrinho e sistema de agendamento de cuidados e serviços veterinários.",
    image: "/projects/petzone.png",
    technologies: ["Figma", "UI Design", "UX Research", "Mobile First", "Wireframes", "Componentização"],
    highlights: [
      "Protótipo navegável interativo e responsivo montado no Figma",
      "Design de fluxo simplificado para agendamento de serviços em poucos cliques",
      "Identidade visual acolhedora com foco na experiência do usuário final",
      "Apresentação como desafio final de workshop de Design de Interface"
    ],
    githubUrl: "https://github.com/Priscillacahino/Workshop---Desafio-Final--PetZona",
    figmaUrl: "https://www.figma.com/proto/O5rsOpFFIhtEOQWkDdcwW7/Sem-t%C3%ADtulo?node-id=189-336&p=f&t=URlo6qFskuIv2UiX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    featured: true
  },
  {
    id: "fabrica-dados",
    title: "Workshop de Dados 2026.2",
    subtitle: "Processamento e Análise Exploratória (EDA)",
    category: "data",
    categoryLabel: "Análise de Dados & Python",
    summary: "Trabalhos práticos na Fábrica de Software focados em manipulação de dados, estatística descritiva e visualização com Python e Jupyter Notebook.",
    description: "Conjunto de desafios e notebooks de dados desenvolvidos para exploração, higienização e identificação de correlações estatísticas em datasets do mundo real, conectando dados analíticos à geração de insights práticos.",
    image: null,
    technologies: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "Estatística", "Visualização de Dados"],
    highlights: [
      "Pipelines de limpeza e tratamento de valores ausentes/inconsistentes",
      "Construção de gráficos para identificação de outliers e distribuições",
      "Aplicação de lógica analítica orientada a resolução de problemas de negócio"
    ],
    githubUrl: "https://github.com/Priscillacahino/Fabrica_de_Software_2026.2",
    featured: false
  }
];

export const SKILL_PILLARS = [
  {
    title: "Atendimento & CS/CX",
    period: "18+ anos de trajetória",
    description: "Sólida vivência nos setores bancário e imobiliário. Foco contínuo na jornada do cliente, relacionamento humanizado e resolução ágil de demandas operacionais e financeiras.",
    badge: "Visão de Negócio"
  },
  {
    title: "Análise de Dados & BI",
    period: "Formação em ADS & Workshops",
    description: "Consultas SQL em MySQL, tratamento e modelagem preditiva em Python (Pandas e Machine Learning) e dashboards estratégicos no Power BI.",
    badge: "Tomada de Decisão"
  },
  {
    title: "UX/UI Design & Interfaces",
    period: "Prototipação no Figma",
    description: "Criação de wireframes, fluxos de navegação intuitivos e protótipos de alta fidelidade que transformam regras complexas em interfaces simples e agradáveis.",
    badge: "Foco no Usuário"
  },
  {
    title: "Inteligência Artificial Aplicada",
    period: "Acelerador no dia a dia",
    description: "Uso estratégico de ferramentas de IA para estudos, organização de raciocínio, refinamento de textos, ideação e apoio na aceleração do código.",
    badge: "Inovação Prática"
  }
];
