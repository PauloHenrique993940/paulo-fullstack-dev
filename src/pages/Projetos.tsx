import { useMemo, useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/hackerPentest.png";
import project5 from "@/assets/project-5.jpg";
import project9 from "@/assets/project-9.png";
import project10 from "@/assets/project-10.png";
import project11 from "@/assets/project-11.png";
import rastreio from "@/assets/rastreio.png";
import ativoControl from "@/assets/ativoControl.png";
import financeProImage from "@/assets/financePro.png";
import DimSushiImage from "@/assets/DimSushi.png";
import cafeAromaImage from "@/assets/cafeteriaSaborAroma.png";
import EssenciaGosto from "@/assets/essenciaGosto.png";
import kanbanImage from "@/assets/kanban.png";
import angularWeatherImage from "@/assets/angularWeather.svg";
import digitalLibraryImage from "@/assets/bibliotecaDigital.png";
import efoodImage from "@/assets/efood.png";
import sistemaInformacaoImage from "@/assets/sistemaInformacao.png";

const projects = [
  {
    n: "01",
    title: "Almoxarif",
    sub: "Plataforma full stack para gestão de almoxarifado",
    problem:
      "Centralizar estoque, inventário e rastreabilidade de materiais em um fluxo confiável para operação logística.",
    solution:
      "Desenvolvi uma aplicação com autenticação, painel administrativo, controle de itens e APIs RESTful integrando front-end, back-end e banco de dados.",
    result:
      "O projeto evidencia experiência prática com arquitetura full stack, modelagem relacional e contexto operacional real.",
    tags: ["React.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Supabase"],
    year: "2026",
    img: project1,
    deploy: "https://gestao-almoxarifado-frontend.vercel.app/login",
    github: "https://github.com/PauloHenrique993940/GestaoAlmoxarifadoFrontend.git",
  },
  {
    n: "02",
    title: "FinancePro",
    sub: "SaaS de controle financeiro para pequenos negócios",
    problem:
      "Pequenos negócios precisavam centralizar clientes, produtos, vendas, caixa e indicadores em uma única plataforma com controle por perfil.",
    solution:
      "Desenvolvi um sistema MVC em PHP com dashboard, CRUDs operacionais, API REST com JWT, autenticação por sessão e relatórios com exportação para PDF e Excel.",
    result:
      "O case demonstra domínio de arquitetura web completa, segurança em autenticação/autorização e foco em rotina real de gestão financeira.",
    tags: [
      "PHP 8+",
      "MVC",
      "PostgreSQL",
      "JWT",
      "Bootstrap 5",
      "Chart.js",
      "Dompdf",
      "PhpSpreadsheet",
    ],
    year: "2026",
    img: financeProImage,
    deploy: "#",
    github:
      "https://github.com/PauloHenrique993940/Sistema-Saas--de-Controle-Financeiro-para-Pequenos-Negocios.git",
  },
  {
    n: "03",
    title: "Ink Art Studio",
    sub: "Site institucional para estúdio de tatuagem",
    problem:
      "O negócio precisava apresentar portfólio, fortalecer marca e abrir espaço para conversão online.",
    solution:
      "Criei um site institucional com visual forte, navegação responsiva e organização clara para serviços e agendamento.",
    result:
      "O projeto mostra cuidado com branding, experiência do usuário e adaptação para diferentes telas.",
    tags: ["React", "TypeScript", "Tailwind", "UI Responsiva", "Deploy"],
    year: "2024",
    img: project3,
    deploy: "https://tattoo-tapestry-explore.lovable.app",
    github: "https://github.com/PauloHenrique993940/tattoo-tapestry-explore.git",
  },
  {
    n: "04",
    title: "Hacker Platform",
    sub: "Plataforma educacional com interface temática",
    problem:
      "Criar uma experiência de aprendizado mais envolvente do que uma página estática de conteúdo.",
    solution:
      "Estruturei uma plataforma com quizzes, desafios práticos e identidade visual consistente com o tema do produto.",
    result:
      "O case reforça minha capacidade de unir UX, narrativa visual e componentes reutilizáveis em uma aplicação moderna.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion", "UX/UI"],
    year: "2024",
    img: project4,
    deploy: "https://hacker-platform.vercel.app",
    github: "https://github.com/PauloHenrique993940/hacker-platform",
  },
  {
    n: "05",
    title: "Syntax Wear",
    sub: "E-commerce responsivo com foco em UX e navegação",
    problem:
      "Construir um fluxo de compra moderno com catálogo, roteamento consistente, formulários robustos e integração com APIs REST.",
    solution:
      "Estruturei o front-end com React.js, TypeScript, Tailwind CSS, TanStack Router, React Hook Form e Zod para garantir navegação e validação mais sólidas.",
    result:
      "O case reforça minha capacidade de desenvolver interfaces de produto com usabilidade, organização de código e experiência responsiva.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "TanStack Router", "React Hook Form", "Zod"],
    year: "2025",
    img: project5,
    deploy: "https://syntax-wear-app.vercel.app/",
    github: "https://github.com/PauloHenrique993940/syntax-wear-app.git",
  },
  {
    n: "06",
    title: "Barbearia Premium",
    sub: "Website institucional orientado à conversão",
    problem:
      "Dar presença digital mais forte a um negócio local e facilitar o caminho até o agendamento.",
    solution:
      "Projetei uma landing page com hero de alto contraste, seções de serviços e CTA direto para reserva.",
    result:
      "O resultado é um site mais convincente para captar clientes, com branding mais sólido e navegação objetiva.",
    tags: ["React", "TypeScript", "Tailwind", "UX/UI", "Deploy"],
    year: "2026",
    img: project10,
    deploy: "https://barbearia-premium-styles.netlify.app/",
    github: "https://github.com/PauloHenrique993940/restaurante-luxury.git",
  },
  {
    n: "07",
    title: "Canarinho Chronicles",
    sub: "Aplicação front-end orientada a conteúdo e performance",
    problem: "Organizar dados históricos densos de forma interessante e fácil de explorar.",
    solution:
      "Criei uma aplicação com rotas bem definidas, animações, estrutura visual consistente e atenção à divisão de build.",
    result:
      "O case destaca capacidade de transformar conteúdo em produto navegável, performático e visualmente memorável.",
    tags: ["React", "TypeScript", "TanStack Router", "Tailwind", "Framer Motion", "Zod"],
    year: "2026",
    img: project11,
    deploy: "https://canarinho-chronicles-selecao.netlify.app/",
    github: "https://github.com/PauloHenrique993940/canarinho-chronicles.git",
  },
  {
    n: "08",
    title: "Rastreio de Encomendas",
    sub: "Aplicação para rastreamento de pacotes em tempo real",
    problem: "Fornecer informações precisas e atualizadas sobre o status de entregas.",
    solution:
      "Desenvolvi uma interface intuitiva com integração a APIs de rastreamento e notificações em tempo real.",
    result:
      "O case demonstra habilidade em criar soluções práticas e eficientes para problemas do dia a dia.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "API Integration",
      "Real-time Updates",
      "Prisma ORM",
      "SUpabase",
    ],
    year: "2026",
    img: rastreio,
    deploy: "https://sistemarastreio-front.vercel.app/",
    github: "https://github.com/PauloHenrique993940/sistemaRastriobackend.git",
  },
  {
    n: "09",
    title: "Ativo Control",
    sub: "Plataforma em produção para controle de ativos",
    problem:
      "Centralizar a gestão de ativos em um fluxo único, com visibilidade operacional e acompanhamento mais confiável.",
    solution:
      "A estrutura do projeto está sendo produzida para reunir interface, regras de negócio e organização de dados em uma aplicação full stack.",
    result:
      "Este case será publicado em breve como parte do portfólio, assim que a primeira versão de produção estiver pronta para apresentação.",
    tags: ["React", "TypeScript", "Tailwind", "Em produção"],
    year: "2026",
    img: ativoControl,
    deploy: "#",
    github: "#",
    upcoming: true,
  },
  {
    n: "17",
    title: "Sistema de Informações APS/AFM",
    sub: "Dashboard operacional para acompanhamento de processos e materiais",
    problem:
      "Dar visibilidade ao andamento de processos, materiais recebidos, atrasos e próximos recebimentos em uma única visão operacional.",
    solution:
      "Estruturei um dashboard com navegação por módulos, indicadores de status e áreas de análise para apoiar o acompanhamento da operação.",
    result:
      "O projeto demonstra capacidade de transformar dados operacionais em uma interface clara para leitura rápida e tomada de decisão.",
    tags: ["React", "TypeScript", "Dashboard", "UX/UI", "Indicadores"],
    year: "2026",
    img: sistemaInformacaoImage,
    deploy: "https://sistema-informacao-nmp.vercel.app/",
    github: "",
  },
  {
    n: "10",
    title: "Rest Dim Sushi",
    sub: "Website institucional para restaurante com foco em experiência visual",
    problem:
      "Criar uma presença online que refletisse a identidade visual do restaurante e facilitasse a navegação para cardápio, reservas e contato.",
    solution:
      "Desenvolvi um website institucional com design responsivo, integração de reservas online e apresentação visual atraente do cardápio.",
    result:
      "O site proporciona uma experiência visual envolvente, facilitando a interação dos clientes e fortalecendo a presença online do restaurante.",
    tags: ["React", "TypeScript", "Tailwind", "UX/UI", "Deploy"],
    year: "2024",
    img: DimSushiImage,
    deploy: "https://restaurante-luxury.netlify.app/",
    github: "https://github.com/PauloHenrique993940/restaurante-luxury.git",
    upcoming: false,
  },
  {
    n: "11",
    title: "Sabor Aroma",
    sub: "Landing page para cafeteria com foco em experiência visual",
    problem:
      "Criar uma landing page para uma cafeteria local que transmitisse a atmosfera acolhedora do estabelecimento e facilitasse a navegação para cardápio, reservas e contato. Cardápio diversificado, ambiente aconchegante e atendimento personalizado eram os principais pontos a destacar para atrair clientes e fortalecer a presença online da cafeteria.",
    solution:
      "Desenvolvi uma landing page com design responsivo, integração de reservas online e apresentação visual atraente do cardápio, destacando os diferenciais da cafeteria e criando uma experiência envolvente para os visitantes.",
    result:
      "A Landing page proporciona uma experiência  agradável e descontraída, carregando a atmosfera acolhedora do estabelecimento",
    tags: ["React", "TypeScript", "Tailwind", "UX/UI", "CSS3", "Bootstrap"],
    year: "2024",
    img: cafeAromaImage,
    deploy: "https://cafe-aroma-preto.vercel.app/",
    github: "https://github.com/PauloHenrique993940/cafe-aroma.git",
    upcoming: false,
  },
  {
    n: "12",
    title: "Essência do Gosto",
    sub: "Site Intitucional para restaurante",
    problem:
      "Criar um site para um restaurante com  cardápio e seleção de pratos e formulário de contato. O site precisava transmitir a identidade do restaurante, destacar o cardápio e facilitar a navegação para reservas e contato.",
    solution:
      "Desenvolvi um site institucional com design responsivo, integração de reservas online e apresentação visual atraente do cardápio, destacando os diferenciais do restaurante e criando uma experiência envolvente para os visitantes.",
    result:
      "Site totalmente funcional e visualmente atraente, proporcionando uma experiência agradável para os usuários.",
    tags: ["HTML5", "CSS3", "JavaScript", "UX/UI", "Google Fonts | Booststrap Icons", "Bootstrap", "Acessibilidade"],
    year: "2024",
    img: EssenciaGosto,
    deploy: "https://restaurante-peach-alpha.vercel.app/",
    github: "https://github.com/PauloHenrique993940/Restaurante.git",
    upcoming: false,
  },
  {
    n: "13",
    title: "Gerenciador de Tarefas Kanban",
    sub: "Aplicação para organização visual de tarefas e fluxos de trabalho",
    problem:
      "Organizar tarefas em andamento, pendências e entregas concluídas de forma visual, simples e fácil de acompanhar.",
    solution:
      "Desenvolvi uma interface Kanban responsiva com colunas de status, cards de tarefas e uma experiência direta para acompanhar o progresso das atividades.",
    result:
      "O projeto reforça minha prática com organização de estado, componentes reutilizáveis e construção de interfaces produtivas para rotina de trabalho.",
    tags: ["React", "TypeScript", "Tailwind", "Kanban", "UX/UI"],
    year: "2025",
    img: kanbanImage,
    deploy: "https://app-gerenciador-kanban-bfs5.vercel.app/",
    github: "https://github.com/PauloHenrique993940/app-gerenciador-kanban.git",
    upcoming: false,
  },
  {
    n: "14",
    title: "Dashboard Climático Angular",
    sub: "Aplicação de clima criada durante meus estudos em Angular",
    problem:
      "Explorar Angular em um projeto prático, consumindo dados climáticos e organizando informações como temperatura, umidade, vento, visibilidade e sensação térmica em uma interface clara.",
    solution:
      "Construí um dashboard responsivo com busca por cidade, cards de indicadores meteorológicos, navegação lateral e visual dark inspirado em produtos SaaS, aplicando conceitos de componentes, estado e integração com API.",
    result:
      "O projeto marca minha evolução estudando Angular e reforça minha capacidade de aprender novos frameworks enquanto transformo dados externos em uma experiência visual útil e organizada.",
    tags: ["Angular", "TypeScript", "API de Clima", "Dashboard", "Estudando Angular"],
    year: "2026",
    img: angularWeatherImage,
    deploy: "https://weather-app-lyart-phi-61.vercel.app/weather",
    github: "https://github.com/PauloHenrique993940/weather-app.git",
    upcoming: false,
    ribbon: "Angular",
  },

  {
    n: "15",
    title: "Biblioteca Digital",
    sub: "Plataforma digital para descoberta, organização e acesso a conteúdos",
    problem:
      "Criar uma experiência moderna e intuitiva para facilitar a descoberta e organização de diferentes tipos de conteúdos digitais, reunindo livros, PDFs, vídeos, áudios, artigos, estudos bíblicos e devocionais em uma única plataforma.",
    solution:
      "Desenvolvi uma aplicação responsiva com busca de conteúdos, navegação por categorias, livros em destaque, páginas de detalhes, sistema de favoritos, biblioteca pessoal e opções de acesso e download. A aplicação utiliza componentes reutilizáveis, React Router para navegação, Context API para gerenciamento de estado compartilhado e Local Storage para persistência de favoritos e preferências do usuário.",
    result:
      "O projeto fortaleceu minha experiência com desenvolvimento Front-end moderno, componentização e gerenciamento de estado, além de proporcionar a construção de uma interface responsiva e organizada, focada na experiência do usuário e na facilidade de acesso ao conhecimento.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Context API",
      "Local Storage",
      "CSS",
      "Biblioteca Digital"
    ],
    year: "2026",
    img: digitalLibraryImage,
    deploy: "https://biblioteca-digital-opal.vercel.app/",
    github: "https://github.com/PauloHenrique993940/biblioteca-digital.git",
    upcoming: false,
    ribbon: "React",
  },
  {
    n: "16",
    title: "Efood",
    sub: "Experiência completa de compra para um marketplace de delivery",
    problem:
      "Criar uma experiência de delivery clara e fluida, permitindo explorar restaurantes e cardápios, organizar o carrinho e concluir pedidos com entrega e pagamento.",
    solution:
      "Desenvolvi uma aplicação em React com catálogo de restaurantes, detalhes de pratos em modal, carrinho global e checkout estruturado em etapas de entrega e pagamento.",
    result:
      "O case demonstra a construção de um fluxo completo de compra, com componentes reutilizáveis, estado global tipado e interface responsiva para um marketplace de restaurantes.",
    tags: ["React", "TypeScript", "Redux", "Styled Components", "Checkout", "UX/UI"],
    year: "2026",
    img: efoodImage,
    deploy: "https://efood-3xco7v3fr-paulohenrique537s-projects.vercel.app/",
    github: "https://github.com/PauloHenrique993940/efood.git",
    upcoming: false,
    ribbon: "React",
  },
];

const featuredProjectTitles = [
  "Almoxarif",
  "FinancePro",
  "Rastreio de Encomendas",
  "Sistema de Informações APS/AFM",
  "Biblioteca Digital",
  "Efood",
];

const featuredProjects = projects.filter((project) => featuredProjectTitles.includes(project.title));

const projectCategories = ["Todos", "Produtos digitais", "Dashboards", "Experiências web", "Estudos"] as const;
type ProjectCategory = (typeof projectCategories)[number];

const getProjectCategory = (project: (typeof projects)[number]): Exclude<ProjectCategory, "Todos"> => {
  if (project.title === "Ativo Control" || project.tags.some((tag) => tag.toLowerCase().includes("estudando"))) {
    return "Estudos";
  }

  if (["Almoxarif", "FinancePro", "Efood"].includes(project.title)) {
    return "Produtos digitais";
  }

  if (project.tags.some((tag) => tag.toLowerCase().includes("dashboard") || tag.toLowerCase().includes("indicadores"))) {
    return "Dashboards";
  }

  if (project.tags.some((tag) => tag.toLowerCase().includes("ux/ui") || tag.toLowerCase().includes("checkout") || tag.toLowerCase().includes("kanban"))) {
    return "Produtos digitais";
  }

  return "Experiências web";
};

const revealCard = {
  hidden: { opacity: 0, y: 64, scale: 0.94, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 115, damping: 18, mass: 0.9 },
  },
};

const getArchitectureSummary = (project: (typeof projects)[number]) => {
  const stack = project.tags.map((tag) => tag.toLowerCase());

  if (stack.some((tag) => tag.includes("node") || tag.includes("express") || tag.includes("php") || tag.includes("postgre"))) {
    return "Arquitetura pensada em camadas, com interface responsiva, APIs organizadas e persistência de dados voltada para manutenção e evolução.";
  }

  return "Arquitetura de interface modular, com componentes reutilizáveis, navegação clara e estrutura preparada para crescer com o produto.";
};

const landingPageTitles = [
  "Ink Art Studio",
  "Barbearia Premium",
  "Rest Dim Sushi",
  "Sabor Aroma",
  "Essência do Gosto",
];

const landingPages = projects.filter(
  (p) => landingPageTitles.includes(p.title) && !featuredProjectTitles.includes(p.title),
);

const getChallengeSummary = (project: (typeof projects)[number]) => {
  if (project.title === "Almoxarif") {
    return "Integrar fluxo operacional, controle de estoque e rastreabilidade em uma aplicação que fosse simples para o usuário e confiável para a operação.";
  }

  if (project.title === "FinancePro") {
    return "Conciliar segurança, autenticação, relatórios e rotina financeira em uma solução que suportasse uso real do negócio.";
  }

  if (project.title === "Rastreio de Encomendas") {
    return "Unir dados externos, interface intuitiva e atualização contínua de status para tornar a experiência útil no dia a dia.";
  }

  return "Balancear usabilidade, organização visual e boa estrutura técnica para entregar algo claro, útil e com valor percebido.";
};

export default function Projetos() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Todos");
  const [showAll, setShowAll] = useState(false);
  const baseList = showAll ? projects : featuredProjects;
  const visibleProjects = useMemo(
    () => activeCategory === "Todos" ? baseList : baseList.filter((project) => getProjectCategory(project) === activeCategory),
    [activeCategory, baseList],
  );

  return (
    <>
      <section className="projects-intro page-intro border-b border-ink/15">
        <div className="mx-auto max-w-350 px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow">01 — Portfólio</p>
          <div className="projects-intro__heading">
            <div>
              <h1 className="mt-5 max-w-4xl text-6xl md:text-9xl">Projetos que resolvem problemas.</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Uma seleção de aplicações web, dashboards e produtos digitais construídos com foco em clareza e resultado.</p>
            </div>
            <div className="projects-intro__profile" aria-label="Áreas de atuação">
              <span>Atuação</span>
              <strong>Full Stack</strong>
              <strong>UX e UI</strong>
              <small>Da descoberta à interface final.</small>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-index mx-auto max-w-350 px-6 py-16 md:px-10 md:py-24">
        <div className="projects-index__toolbar">
          <div>
            <p className="eyebrow">02 — {showAll ? "Todos os projetos" : "Melhores projetos"}</p>
            <p className="projects-index__count">{visibleProjects.length} {visibleProjects.length === 1 ? "projeto encontrado" : "projetos encontrados"}</p>
          </div>
          <div className="projects-index__filters" role="tablist" aria-label="Filtrar projetos por categoria">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={activeCategory === category ? "is-active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="projects-index__grid" aria-live="polite">
          {visibleProjects.map((project) => (
            <article key={project.n} className="projects-index__item">
              <a href={project.deploy && project.deploy !== "#" ? project.deploy : undefined} target={project.deploy && project.deploy !== "#" ? "_blank" : undefined} rel="noopener noreferrer" className="projects-index__image">
                <img src={project.img} alt={project.title} />
                {project.upcoming && <span className="projects-index__status">Em breve</span>}
              </a>
              <div className="projects-index__caption">
                <span className="projects-index__number">{project.n}</span>
                <div><div className="projects-index__meta"><span>{getProjectCategory(project)}</span><span>{project.year}</span></div><h2>{project.title}</h2><p>{project.sub}</p></div>
                <div className="projects-index__actions">
                  {project.deploy && project.deploy !== "#" && <a href={project.deploy} target="_blank" rel="noopener noreferrer" aria-label={`Abrir demonstração de ${project.title}`}>Demo ↗</a>}
                  {project.github && project.github !== "#" && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Abrir GitHub de ${project.title}`}>GitHub ↗</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
        {!showAll && (
          <div className="mt-12 flex justify-center">
            <button type="button" onClick={() => setShowAll(true)} className="hero-cta-outline">
              Ver todos os projetos ({projects.length}) <span>↗</span>
            </button>
          </div>
        )}
      </section>
    </>
  );
}
