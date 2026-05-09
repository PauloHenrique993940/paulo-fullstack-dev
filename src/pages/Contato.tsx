import { useState } from "react";
import { SectionLabel } from "@/components/SectionLabel";

const contactLinks = [
    { label: "GitHub", href: "https://github.com/PauloHenrique993940" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/paulohenriquefranca/" },
    { label: "Portfólio publicado", href: "https://paulo-fullstack-dev.vercel.app/" },
];

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
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

export default function Contato() {
    const [sent, setSent] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert('Mensagem enviada! Respondo em breve.');
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        e.currentTarget.reset();
    }

    return (
        <>
            <section className="border-b-[3px] border-ink py-16 md:py-24">
                <div className="mx-auto max-w-[1400px] px-6 md:px-10">
                    <p className="font-mono text-xs uppercase">Capítulo 04 / Contato</p>
                    <h1 className="mt-3 font-display text-[14vw] leading-[0.85] md:text-[9rem]">
                        Vamos<span className="text-destructive">/</span>
                        <br />
                        <span className="bg-highlight px-3">conversar</span>.
                    </h1>
                    <p className="mt-6 max-w-xl text-xl">
                        Aberto a oportunidades como Desenvolvedor Full Stack Júnior, atuação em projetos front-end ou full stack e conversas sobre produtos web modernos.
                    </p>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:px-10 lg:grid-cols-12">
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
                                    placeholder="Conta a ideia."
                                />
                            </div>
                            <button
                                type="submit"
                                className="brutal-border brutal-shadow brutal-hover bg-ink px-6 py-4 font-mono text-sm uppercase text-paper"
                            >
                                {sent ? "Enviado ✓" : "Enviar →"}
                            </button>
                        </form>
                    </div>

                    <aside className="space-y-6 lg:col-span-5">
                        <SectionLabel index="02">Canais</SectionLabel>
                        <div className="brutal-border brutal-shadow bg-highlight p-6">
                            <p className="font-mono text-xs uppercase">Email</p>
                            <a
                                href="mailto:paulohenriqueferreirafranca2@gmail.com"
                                className="mt-1 block font-display text-3xl underline decoration-ink decoration-4 underline-offset-4"
                            >
                                paulohenriqueferreirafranca2@gmail.com
                            </a>
                        </div>
                        <div className="brutal-border bg-paper p-6">
                            <p className="font-mono text-xs uppercase opacity-60">Redes</p>
                            <ul className="mt-3 space-y-2 font-mono text-sm">
                                {contactLinks.map((link) => (
                                    <li key={link.label} className="flex items-center justify-between border-b border-ink/20 pb-2">
                                        <span className="uppercase">{link.label}</span>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:bg-ink hover:text-paper">
                                            ↗
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="brutal-border bg-ink p-6 text-paper">
                            <p className="font-mono text-xs uppercase opacity-60">Disponibilidade</p>
                            <p className="mt-1 font-display text-2xl">Remoto, híbrido ou presencial</p>
                            <p className="mt-2 font-mono text-xs opacity-70">Resposta em até 48h úteis para vagas, freelas e parcerias</p>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
}
