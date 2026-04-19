import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-4">
      <div className="max-w-xl text-center">
        <p className="font-mono text-sm uppercase">Erro / 404</p>
        <h1 className="mt-2 font-display text-[18vw] leading-none md:text-[10rem]">404</h1>
        <h2 className="mt-2 font-display text-2xl uppercase">Página não encontrada</h2>
        <p className="mt-3 font-mono text-sm text-muted-foreground">
          Esta rota não existe — talvez você tenha digitado errado, talvez eu não tenha construído ainda.
        </p>
        <Link
          to="/"
          className="brutal-border brutal-shadow brutal-hover mt-8 inline-block bg-highlight px-6 py-3 font-mono text-sm uppercase"
        >
          ← Voltar ao início
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Junior.dev — Portfólio Fullstack" },
      {
        name: "description",
        content:
          "Portfólio brutalist de um desenvolvedor fullstack júnior em transição. React, Node, TypeScript e código com obsessão pelo detalhe.",
      },
      { name: "author", content: "Junior.dev" },
      { property: "og:title", content: "Junior.dev — Portfólio Fullstack" },
      {
        property: "og:description",
        content: "Portfólio brutalist de um desenvolvedor fullstack júnior em transição.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
