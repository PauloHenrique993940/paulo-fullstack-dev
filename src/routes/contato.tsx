import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Junior.dev" },
      {
        name: "description",
        content: "Vamos conversar. Email, redes sociais e formulário de contato.",
      },
      { property: "og:title", content: "Contato — Junior.dev" },
      {
        property: "og:description",
        content: "Vamos conversar. Email, redes sociais e formulário de contato.",
      },
    ],
  }),
  component: ContatoPage,
});

export default function ContatoPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    // Por enquanto frontend-only. Quando o backend estiver pronto, postar aqui.
    setTimeout(() => setSent(false), 4000);
    e.currentTarget.reset();
  }

  return (
    <>
      {/* Header */}
      <section className="border-b-[3px] border-ink py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="font-mono text-xs uppercase">Capítulo 04 / Contato</p>
          <h1 className="mt-3 font-display text-[14vw] leading-[0.85] md:text-[9rem]">
            Diga
            <br />
            <span className="bg-highlight px-3">olá</span>
            <span className="text-destructive">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl">
            Freela, projeto pessoal, oportunidade ou só café? Eu respondo todos os emails — de
            verdade.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:px-10 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <SectionLabel index="01">Formulário</SectionLabel>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Seu nome" name="nome" />
                <Field label="Email" name="email" type="email" />
              </div>
              <Field label="Assunto" name="assunto" />
              <div>
                <label className="font-mono text-xs uppercase">Mensagem</label>
                <textarea
                  required
                  name="mensagem"
                  rows={6}
                  className="brutal-border mt-2 block w-full bg-paper p-4 font-sans text-base focus:bg-highlight/30 focus:outline-none"
                  placeholder="Conta a ideia. Sem pressa."
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="brutal-border brutal-shadow brutal-hover bg-ink px-6 py-4 font-mono text-sm uppercase text-paper"
                >
                  {sent ? "Enviado ✓" : "Enviar mensagem →"}
                </button>
                {sent && (
                  <span className="font-mono text-xs uppercase text-destructive">
                    Recebido. Vou responder em breve.
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Info */}
          <aside className="space-y-6 lg:col-span-5">
            <SectionLabel index="02">Canais diretos</SectionLabel>

            <div className="brutal-border brutal-shadow bg-highlight p-6">
              <p className="font-mono text-xs uppercase">Email</p>
              <a
                href="mailto:ola@junior.dev"
                className="mt-1 block break-all font-display text-3xl underline decoration-ink decoration-4 underline-offset-4"
              >
                ola@junior.dev
              </a>
            </div>

            <div className="brutal-border bg-paper p-6">
              <p className="font-mono text-xs uppercase opacity-60">Redes</p>
              <ul className="mt-3 space-y-2 font-mono text-sm">
                {[
                  ["GitHub", "@junior"],
                  ["LinkedIn", "in/junior"],
                  ["Twitter / X", "@junior_dev"],
                  ["Read.cv", "junior"],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-center justify-between border-b border-ink/20 pb-2">
                    <span className="uppercase">{k}</span>
                    <a href="#" className="hover:bg-ink hover:text-paper">
                      {v} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="brutal-border bg-ink p-6 text-paper">
              <p className="font-mono text-xs uppercase opacity-60">Tempo de resposta</p>
              <p className="mt-1 font-display text-2xl">Em até 48h</p>
              <p className="mt-2 font-mono text-xs opacity-70">Dias úteis · UTC −03:00</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="font-mono text-xs uppercase">{label}</label>
      <input
        required
        name={name}
        type={type}
        className="brutal-border mt-2 block w-full bg-paper p-4 font-sans text-base focus:bg-highlight/30 focus:outline-none"
      />
    </div>
  );
}
