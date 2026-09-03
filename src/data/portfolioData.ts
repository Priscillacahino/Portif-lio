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
  whatsappUrl: "https://api.whatsapp.com/send?phone=558399553329&text=Ol%C3%A1%20Priscilla!%20Vi%20seu%20portf%C3%B3lio%20profissional.",
  location: "João Pessoa - PB, Brasil"
};

export const ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    id: "clinicacare",
    title: "ClínicaCare",
    subtitle: "Análise de Dados e Risco de Inadimplência",
    category: "data",
    categoryLabel: "Análise de Dados & BI",
    summary: "Modelagem de banco de dados, SQL, análise exploratória em Python, aplicação de conceitos de Machine Learning e criação de dashboard no Power BI.",
    description: "Projeto desenvolvido como desafio final de workshop, reunindo modelagem de banco de dados e SQL, análise exploratória em Python, aplicação de conceitos de Machine Learning e criação de dashboard no Power BI para tomada de decisão clínica e financeira.",
    image: "/projects/clinicacare.png",
    technologies: ["SQL", "MySQL", "Python", "Pandas", "Machine Learning", "Power BI", "Modelagem Relacional"],
    highlights: [
      "Estruturação do modelo lógico e manipulação em banco MySQL",
      "Análise exploratória em Python e estudo de taxas de cancelamento/comparecimento",
      "Aplicação de conceitos de Machine Learning para previsão de padrões e inadimplência",
      "Criação de dashboard executivo no Power BI para gestão e tomada de decisão"
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
    summary: "Projeto desenvolvido no contexto da Fábrica de Software da UNIPÊ, no qual fui responsável pela prototipação das telas e construção de fluxos e interfaces no Figma.",
    description: "Projeto desenvolvido no contexto da Fábrica de Software da UNIPÊ, no qual fui responsável pela prototipação das telas e construção de fluxos e interfaces no Figma.",
    image: "/projects/adm4all.png",
    technologies: ["UX/UI Design", "Figma", "Prototipação", "Design System", "Arquitetura de Informação", "Usabilidade"],
    highlights: [
      "Responsável pela prototipação completa das telas e interfaces no Figma",
      "Construção de fluxos de usuário intuitivos, claros e acessíveis",
      "Aplicação de princípios de Usabilidade e Customer Experience (CX)",
      "Projeto concebido e desenvolvido no ambiente da Fábrica de Software da UNIPÊ"
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
    title: "Customer Success & CX",
    period: "18+ anos de trajetória",
    description: "18+ anos de experiência em relacionamento com clientes, processos, atendimento e resolução de demandas.",
    badge: "Experiência Profissional"
  },
  {
    title: "Análise de Dados & SQL",
    period: "Formação em ADS & Prática",
    description: "Projetos acadêmicos utilizando SQL, MySQL, Python e Power BI.",
    badge: "Projetos Acadêmicos"
  },
  {
    title: "UX/UI & Usabilidade",
    period: "Prototipação no Figma",
    description: "Prototipação no Figma, fluxos de usuário, usabilidade e design de interfaces.",
    badge: "Design de Interface"
  },
  {
    title: "Inteligência Artificial",
    period: "Apoio e Produtividade",
    description: "Uso da IA como apoio aos estudos, ideação, desenvolvimento e produtividade.",
    badge: "Apoio & Inovação"
  }
];
