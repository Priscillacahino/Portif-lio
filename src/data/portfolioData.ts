import { AcademicProject, ContactInfo } from '../types';

export const CONTACT_DATA: ContactInfo = {
  name: "Priscilla Cahino",
  tagline: "Customer Success e Operações em Tecnologia | 18 anos em crédito, atendimento e melhoria de processos | Dados e UX aplicados à jornada do cliente",
  phone: "+5583999553329",
  phoneFormatted: "(83) 99955-3329",
  email: "priscilla_cahino@hotmail.com",
  secondaryEmail: "priscillacahinoo@gmail.com",
  linkedin: "https://www.linkedin.com/in/priscilla-cahino-04a718aa/",
  github: "https://github.com/Priscillacahino",
  whatsappUrl: "https://wa.me/5583999553329?text=Ol%C3%A1%20Priscilla!%20Vi%20seu%20portf%C3%B3lio%20profissional.",
  location: "João Pessoa - PB, Brasil",
  resumePdfUrl: "/Curriculo_Priscilla_Cahino.pdf"
};

export const ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    id: "clinicacare",
    title: "ClínicaCare",
    subtitle: "Análise de Dados, SQL, Python & Dashboard Power BI",
    category: "data",
    categoryLabel: "Análise de Dados & BI",
    summary: "Projeto desenvolvido como desafio de workshop simulando o cenário de uma clínica de saúde para análise de indicadores de consultas, pacientes e estudo exploratório sobre risco de inadimplência.",
    description: "Projeto acadêmico desenvolvido como desafio técnico final de workshop, simulando o cenário de uma clínica de saúde que precisa organizar e analisar seus dados operacionais. O trabalho reúne etapas de modelagem de banco de dados no MySQL, criação e manipulação com SQL, análise exploratória e introdução a Machine Learning em Python, e construção de dashboard de indicadores no Power BI.",
    image: "/projects/clinicacare.webp",
    technologies: ["SQL", "MySQL", "Python", "Pandas", "Machine Learning", "Power BI", "Modelagem de Banco de Dados"],
    highlights: [
      "Modelagem lógica e scripts estruturados de criação e manipulação em banco MySQL",
      "Análise de volume de consultas por especialidade, faltas e status de pagamento",
      "Análise exploratória em Python (Pandas) para identificação de padrões associados à inadimplência",
      "Dashboard executivo no Power BI para acompanhamento de métricas operacionais da clínica",
      "Base de dados desenvolvida para fins de estudo acadêmico e tomada de decisão"
    ],
    githubUrl: "https://github.com/Priscillacahino/Desafio_Final_Workshop_26.2_ClinicaCare",
    featured: true
  },
  {
    id: "adm4all",
    title: "Adm4All — Administração para Todos",
    subtitle: "Plataforma de Capacitação & Interface UX/UI (Fábrica de Software UNIPÊ)",
    category: "ux-ui",
    categoryLabel: "UX/UI Design & Produto",
    summary: "Plataforma desenvolvida na Fábrica de Software do UNIPÊ para o projeto de extensão comunitário, onde atuei na área de UX/UI prototipando telas, fluxos e interfaces no Figma.",
    description: "Desenvolvido na Fábrica de Software do UNIPÊ para apoiar o projeto de extensão Administração para Todos, que oferece cursos gratuitos de capacitação comunitária em gestão. Atuei na concepção de UX/UI, sendo responsável pela prototipação das telas, organização dos fluxos e arquitetura da informação para três perfis de usuários: Coordenação, Instrutores e Alunos.",
    image: "/projects/adm4all.webp",
    technologies: ["UX/UI Design", "Figma", "Prototipação", "Mapeamento de Fluxos", "Arquitetura de Informação", "Usabilidade"],
    highlights: [
      "Responsável pela concepção e prototipação completa das telas e interfaces no Figma",
      "Centralização de processos antes manuais: turmas, presença digital, notas e certificados",
      "Estruturação de fluxos para três perfis distintos: Coordenação, Instrutores e Alunos",
      "Foco em usabilidade, clareza e Customer Experience (CX)",
      "Projeto com plataforma web implementada e publicada para visualização"
    ],
    githubUrl: "https://github.com/Priscillacahino/Fabrica_de_Software_2026.1_Adm4All",
    liveUrl: "https://adm4all.extensao-fs.com.br/",
    figmaUrl: "https://www.figma.com/design/J4jTCbznAsTgAty3vPFsJ1/Adm4All?node-id=0-1&m=dev&t=P1kGYH9zdTgibscf-1",
    featured: true
  },
  {
    id: "petzone",
    title: "Petzona",
    subtitle: "Projeto Final de UX/UI & Mobile First (Fábrica de Software 2026.1)",
    category: "ux-ui",
    categoryLabel: "UX/UI Design & Mobile",
    summary: "Projeto final de UX/UI desenvolvido como critério de avaliação para ingresso na equipe de UX/UI do Adm4All na Fábrica de Software, englobando persona, jornada no Miro e protótipo interativo no Figma.",
    description: "Proposta de solução digital mobile para o segmento pet, criada como avaliação final do Workshop da Fábrica de Software 2026.1. O processo compreendeu a criação da persona 'Tamiris', mapeamento completo da jornada do cliente no Miro, esboços iniciais manuais, wireframes e protótipos de baixa e alta fidelidade navegáveis no Figma.",
    image: "/projects/petzone.webp",
    technologies: ["Persona", "Jornada do Cliente", "Miro", "Figma", "Wireframes", "Prototipação", "Mobile First"],
    highlights: [
      "Projeto avaliativo que viabilizou o ingresso na equipe de UX/UI da Fábrica de Software",
      "Construção da persona e Mapeamento da Jornada do Cliente no Miro",
      "Evolução visual desde esboços à mão até protótipos de baixa e alta fidelidade",
      "Protótipo navegável interativo no Figma com fluxos de agendamento de cuidados e serviços veterinários"
    ],
    githubUrl: "https://github.com/Priscillacahino/Workshop_Desafio-Final_PetZona",
    figmaUrl: "https://www.figma.com/proto/O5rsOpFFIhtEOQWkDdcwW7/Sem-t%C3%ADtulo?node-id=94-537&p=f&t=iJxgDcyvzsfzQQxZ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    featured: true
  }
];
