# Paulo Henrique | Portfolio Full Stack

Portfolio pessoal de Paulo Henrique, desenvolvido para apresentar projetos, repertorio tecnico e forma de trabalho como desenvolvedor Full Stack com foco em Front-end, UX/UI e entrega de produtos web.

O portfolio foi construido para demonstrar na pratica os criterios de uma rotina moderna de Front-end:

- React e TypeScript no desenvolvimento da interface.
- Tailwind CSS para composicao visual.
- shadcn/ui e Radix UI para componentes acessiveis e composaveis.
- Tokens CSS para cores, tipografia, espacamento, raios, sombras e estados.
- Tema escuro baseado em tokens semanticos.
- Acessibilidade com contraste, foco visivel, teclado, semantica e movimento reduzido.
- Processo orientado a Design System, documentacao, PRs pequenos e verificacao automatica.

## Visao geral

A aplicacao e uma SPA construida com Vite e React. A Home concentra a narrativa profissional e as secoes de apresentacao:

1. Hero com posicionamento profissional e CTAs.
2. Principios de produto e UI, incluindo o fluxo "documento antes do pixel".
3. Sobre e experiencia.
4. Formacao continua.
5. Stack tecnica e Design System.
6. IA aplicada ao produto e ao fluxo de desenvolvimento.
7. Projetos com filtros acessiveis.
8. Como trabalho, do problema ao produto no ar.
9. CI/CD e DevOps.
10. GitHub e documentacao.
11. Formulario de contato.

## Stack

### Aplicacao

- React 19
- TypeScript 6
- Vite 8
- React Router 7
- Framer Motion 12

### Interface e Design System

- Tailwind CSS 4
- shadcn/ui com estilo `new-york`
- Radix UI
- Class Variance Authority
- Tailwind Merge
- Lucide React
- React Icons
- CSS Variables e tokens semanticos

### Dados, formularios e visualizacao

- React Hook Form
- Zod
- Recharts
- PostgreSQL, Prisma e Supabase representados no portfolio como parte do repertorio full stack

### Qualidade e entrega

- TypeScript check
- ESLint
- Prettier via plugin do ESLint
- Vite production build
- Git e GitHub
- Vercel e Netlify
- Estrutura preparada para CI/CD

## Requisitos da vaga aplicados

### React e TypeScript

A interface e composta por paginas e componentes React escritos em TypeScript. Os dados de projetos, categorias, stack, workflow e capacidades de IA sao mantidos em estruturas tipadas e renderizados por composicao.

Pontos de entrada:

- `src/main.tsx`: bootstrap do React e `BrowserRouter`.
- `src/App.tsx`: layout, rotas, transicao de paginas e skip link.
- `src/pages/Home.tsx`: narrativa principal, stack, principios, workflow e projetos.
- `src/pages/Projetos.tsx`: catalogo, filtros e cards de projetos.

### Tailwind CSS

O Tailwind CSS 4 e importado em `src/styles.css` e utilizado diretamente nas paginas e componentes. As utilities cuidam da composicao rapida, enquanto as classes CSS proprias controlam identidade visual, grids, responsividade e elementos do HUD.

### shadcn/ui e Radix UI

A configuracao fica em `components.json` e utiliza:

- estilo `new-york`;
- CSS variables;
- Lucide como biblioteca de icones;
- aliases `@/components`, `@/components/ui`, `@/lib` e `@/hooks`.

O componente `Button` de `src/components/ui/button.tsx` usa Radix Slot, Class Variance Authority e `cn`. Ele e consumido nos CTAs principais da Home com `asChild`, mantendo a composicao sem perder os estados de foco, hover e disabled.

O diretorio `src/components/ui` tambem contem componentes baseados em Radix para dialog, tabs, accordion, dropdown, form, tooltip, select, table, sidebar e outros padroes acessiveis.

### Tokens CSS e tema escuro

Os tokens principais estao em `src/styles.css` e sao expostos ao Tailwind por `@theme inline`.

Tokens de interface:

- `--background` e `--foreground`;
- `--card` e `--card-foreground`;
- `--primary` e `--primary-foreground`;
- `--secondary` e `--secondary-foreground`;
- `--muted` e `--muted-foreground`;
- `--accent` e `--accent-foreground`;
- `--border`, `--input` e `--ring`;
- `--paper`, `--ink`, `--highlight`, `--tech-cyan` e `--accent-red`.

O tema atual e dark-first: `:root` define a superficie escura, o conteudo claro e os acentos de produto. A variante `dark` do Tailwind esta configurada para componentes shadcn que dependem de classes `dark:*`.

### Acessibilidade na pratica

O portfolio implementa os seguintes pontos:

- Skip link "Pular para o conteudo principal".
- `main#conteudo-principal` como destino de navegacao assistiva.
- HTML semantico com `main`, `nav`, `section`, `article`, `ol` e `form`.
- Contraste planejado entre superficies, texto e acentos do tema escuro.
- Foco visivel global com `:focus-visible` e o token `--ring`.
- Navegacao de menu mobile com `aria-label` e `aria-expanded`.
- Filtros de projetos usando `tablist`, `tab`, `tabpanel`, `aria-selected` e `aria-controls`.
- Navegacao dos filtros por setas do teclado.
- `aria-live` para atualizacao da quantidade e da lista de projetos.
- Labels associados aos campos do formulario.
- `aria-invalid`, `aria-describedby` e `role="alert"` para erros de formulario.
- `alt` em imagens de projeto e `aria-hidden` em icones decorativos.
- `rel="noopener noreferrer"` em links externos.
- `MotionConfig reducedMotion="user"` para que as animacoes do Framer Motion respeitem a preferencia do usuario.
- Fallback CSS em `@media (prefers-reduced-motion: reduce)` para reduzir transicoes, animacoes e scroll suave.

## Fluxo de trabalho

O portfolio comunica e implementa um fluxo orientado a produto:

1. **Entendimento:** problema, publico e regras de negocio.
2. **Planejamento:** escopo, arquitetura e prioridades.
3. **Documento antes do pixel:** fluxos, estados e criterios de sucesso antes da tela.
4. **Design System:** tokens CSS, Tailwind e componentes shadcn/ui/Radix.
5. **Desenvolvimento:** React, TypeScript, componentizacao e tipagem.
6. **PR pequeno:** mudancas com escopo claro e revisao facilitada.
7. **Verificacao automatica:** lint, testes, build, contraste, teclado e foco.
8. **Deploy:** publicacao e configuracao de ambiente.
9. **Monitoramento:** observacao de logs e comportamento em producao.

Esse processo representa autonomia: a implementacao parte do problema e vai ate a interface final sem depender de um designer intermediario para transformar uma decisao em codigo.

## Estrutura do projeto

```text
src/
  App.tsx                    Layout, rotas e transicoes
  main.tsx                   Bootstrap do React
  styles.css                 Tokens, Tailwind e identidade visual
  assets/                    Imagens e midias dos projetos
  components/
    Footer.tsx               Rodape
    Nav.tsx                  Navegacao desktop e mobile
    SectionLabel.tsx         Rotulo de secoes
    ui/                      Componentes shadcn/ui e Radix
  hooks/
    use-mobile.tsx           Deteccao de viewport mobile
  lib/
    utils.ts                 Utilitario cn para classes
  pages/
    Home.tsx                 Pagina principal e secoes do portfolio
    Sobre.tsx                Historia e experiencia
    Projetos.tsx             Catalogo filtravel de projetos
    Contato.tsx              Formulario e canais de contato
```

## Como executar

### Pre-requisitos

- Node.js compativel com as dependencias instaladas.
- npm ou Bun.

### Instalacao com npm

```bash
npm install
npm run dev
```

### Instalacao com Bun

```bash
bun install
bun run dev
```

O servidor de desenvolvimento sera iniciado pelo Vite. Acesse o endereco exibido no terminal, normalmente:

```text
http://localhost:5173/
```

Para usar o host local explicitamente:

```bash
npm run dev -- --host 127.0.0.1
```

## Scripts

| Comando | Funcao |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento Vite |
| `npm run build` | Executa TypeScript e gera o build de producao |
| `npm run preview` | Serve o build de producao localmente |
| `npm run lint` | Executa ESLint com limite de warnings em zero |

## Validacao local

Antes de abrir um PR, execute:

```bash
npm run build
npm run lint
```

A validacao no navegador deve cobrir:

- Carregamento da Home sem erros de console.
- Navegacao pelo menu desktop e mobile.
- Skip link usando Tab.
- Foco visivel em links, botoes e filtros.
- Filtros de projetos com mouse e setas do teclado.
- Animacoes da secao Principios e respeito a `prefers-reduced-motion`.
- Layout em viewport desktop e mobile.
- Links de Demo, GitHub e contato.

Para testar movimento reduzido no navegador, ative a preferencia de acessibilidade do sistema ou emule `prefers-reduced-motion: reduce` nas DevTools.

## Rotas e ancoras

A aplicacao utiliza uma Home com secoes por hash:

- `/#principios`
- `/#sobre`
- `/#formacao`
- `/#stack`
- `/#ia`
- `/#projetos`
- `/#como-trabalho`
- `/#cicd`
- `/#github`
- `/#contato`

Tambem existem rotas de conveniencia que redirecionam para as secoes equivalentes:

- `/sobre`
- `/projetos`
- `/contato`

## Deploy

O arquivo `vercel.json` configura o fallback de qualquer rota para `index.html`, necessario para uma SPA com React Router quando uma rota e acessada diretamente.

Build de producao:

```bash
npm run build
npm run preview
```

O projeto pode ser publicado em Vercel, Netlify ou outro provedor que suporte uma aplicacao Vite estatico com rewrite para `index.html`.

## Projetos apresentados

A secao de projetos e alimentada pela constante `projects` em `src/pages/Projetos.tsx`. Cada case pode conter:

- titulo e resumo;
- problema;
- solucao;
- resultado;
- stack;
- ano;
- imagem;
- demo;
- repositorio GitHub;
- status de projeto em breve.

Os filtros atuais sao:

- Todos;
- Produtos digitais;
- Dashboards;
- Experiencias web;
- Estudos.

## Decisoes e limites atuais

- O tema e dark-first e atualmente fixo como identidade principal; a infraestrutura de tokens e a variante `dark` estao preparadas para uma futura alternancia claro/escuro.
- O formulario de contato apresenta feedback local; o envio real para um servico externo ainda precisa ser conectado.
- O lint pode apontar problemas de formatacao de fim de linha em arquivos antigos do repositorio quando o ambiente estiver configurado com uma convencao diferente de CRLF/LF.
- As imagens dos projetos sao assets locais e algumas ainda podem ser otimizadas ou convertidas para formatos mais leves.
- A lista de componentes shadcn/Radix e ampla, mas a Home consome diretamente apenas os componentes necessarios ao fluxo atual.

## Convencoes para contribuicao

1. Abra uma issue ou descreva o problema antes de iniciar uma mudanca relevante.
2. Registre a decisao de produto e os estados da interface antes do pixel.
3. Prefira tokens existentes a valores de cor ou espacamento isolados.
4. Use componentes shadcn/ui ou Radix quando o padrao ja existir no kit.
5. Mantenha cada PR pequeno, focado e facil de revisar.
6. Valide teclado, foco, contraste, movimento reduzido e responsividade.
7. Execute `npm run build` antes de solicitar revisao.
8. Atualize esta documentacao quando stack, fluxo ou comandos mudarem.

## Licenca e contato

Este repositorio representa o portfolio pessoal de Paulo Henrique. Para oportunidades profissionais ou colaboracoes, utilize a secao de contato da aplicacao ou os canais disponiveis no rodape.
