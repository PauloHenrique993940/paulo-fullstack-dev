import { useState } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { motion } from "framer-motion";

const contactLinks = [
    { label: "GitHub", href: "https://github.com/PauloHenrique993940" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/paulohenriquefranca/" },
    { label: "Portfólio publicado", href: "https://paulo-fullstack-dev.vercel.app/" },
];

type FormStatus = "idle" | "loading" | "success" | "error";
type FormErrors = Partial<Record<"nome" | "email" | "assunto" | "mensagem", string>>;

function Field({
    label,
    name,
    type = "text",
    error,
}: {
    label: string;
    name: string;
    type?: string;
    error?: string;
}) {
    return (
        <div>
            <label htmlFor={name} className="font-mono text-xs uppercase">{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${name}-error` : undefined}
                className={`brutal-border mt-2 block w-full bg-paper p-4 font-sans text-base focus:bg-highlight/30 focus:outline-none ${error ? "border-destructive" : ""}`}
            />
            {error && (
                <p id={`${name}-error`} role="alert" className="mt-1.5 text-xs font-semibold text-destructive">
                    {error}
                </p>
            )}
        </div>
    );
}

export default function Contato() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errors, setErrors] = useState<FormErrors>({});

    function validate(data: FormData): FormErrors {
        const nome = String(data.get("nome") || "").trim();
        const email = String(data.get("email") || "").trim();
        const assunto = String(data.get("assunto") || "").trim();
        const mensagem = String(data.get("mensagem") || "").trim();
        const nextErrors: FormErrors = {};

        if (!nome) nextErrors.nome = "Informe seu nome.";
        if (!email) nextErrors.email = "Informe um email.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Email inválido.";
        if (!assunto) nextErrors.assunto = "Informe o assunto.";
        if (!mensagem) nextErrors.mensagem = "Escreva uma mensagem.";
        else if (mensagem.length < 10) nextErrors.mensagem = "Conte um pouco mais (mínimo 10 caracteres).";

        return nextErrors;
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const nextErrors = validate(data);
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            setStatus("error");
            return;
        }

        setStatus("loading");
        try {
            // Simula o envio; substitua por uma chamada real de API quando disponível.
            await new Promise((resolve, reject) => setTimeout(() => (Math.random() > 0.05 ? resolve(null) : reject()), 900));
            setStatus("success");
            form.reset();
            setTimeout(() => setStatus("idle"), 5000);
        } catch {
            setStatus("error");
        }
    }

    return (
        <>
            <section className="page-intro border-b-[3px] border-ink py-16 md:py-24">
                <motion.div
                    className="mx-auto max-w-[1400px] px-6 md:px-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <p className="font-mono text-xs uppercase">03 — Contato</p>
                    <h1 className="mt-3 font-display text-[14vw] leading-[0.85] md:text-[9rem]">
                        Vamos<span className="text-destructive">/</span>
                        <br />
                        <span className="bg-highlight px-3">conversar</span>.
                    </h1>
                    <p className="mt-6 max-w-xl text-xl">
                        Aberto a oportunidades como Desenvolvedor Full Stack Júnior, atuação em projetos front-end ou full stack e conversas sobre produtos web modernos.
                    </p>
                </motion.div>
            </section>

            <section className="py-20 md:py-28">
                <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:px-10 lg:grid-cols-12">
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: -36, scale: 0.96, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.85 }}
                    >
                        <SectionLabel index="01">Formulário</SectionLabel>
                        <form onSubmit={handleSubmit} noValidate className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <Field label="Seu nome" name="nome" error={errors.nome} />
                                <Field label="Email" name="email" type="email" error={errors.email} />
                            </div>
                            <Field label="Assunto" name="assunto" error={errors.assunto} />
                            <div>
                                <label htmlFor="mensagem" className="font-mono text-xs uppercase">Mensagem</label>
                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    rows={6}
                                    aria-invalid={Boolean(errors.mensagem)}
                                    aria-describedby={errors.mensagem ? "mensagem-error" : undefined}
                                    className={`brutal-border mt-2 block w-full bg-paper p-4 font-sans text-base focus:bg-highlight/30 focus:outline-none ${errors.mensagem ? "border-destructive" : ""}`}
                                    placeholder="Conta a ideia."
                                />
                                {errors.mensagem && (
                                    <p id="mensagem-error" role="alert" className="mt-1.5 text-xs font-semibold text-destructive">
                                        {errors.mensagem}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="brutal-border brutal-shadow brutal-hover bg-ink px-6 py-4 font-mono text-sm uppercase text-paper disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {status === "loading" ? "Enviando…" : "Enviar →"}
                            </button>
                            <div aria-live="polite" className="min-h-[1.5rem]">
                                {status === "success" && (
                                    <p role="status" className="form-feedback form-feedback--success">Mensagem enviada com sucesso! Respondo em breve.</p>
                                )}
                                {status === "error" && Object.keys(errors).length === 0 && (
                                    <p role="alert" className="form-feedback form-feedback--error">Não foi possível enviar agora. Tente novamente ou use o email ao lado.</p>
                                )}
                                {status === "error" && Object.keys(errors).length > 0 && (
                                    <p role="alert" className="form-feedback form-feedback--error">Verifique os campos destacados acima.</p>
                                )}
                            </div>
                        </form>
                    </motion.div>

                    <motion.aside
                        className="space-y-6 lg:col-span-5"
                        initial={{ opacity: 0, x: 36, scale: 0.96, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.85, delay: 0.08 }}
                    >
                        <SectionLabel index="02">Canais</SectionLabel>
                        <div className="brutal-border brutal-shadow bg-highlight p-6">
                            <p className="font-mono text-xs uppercase">Email</p>
                            <a
                                href="mailto:paulohenriqueferreirafranca2@gmail.com"
                                className="mt-1 block font-display text-font  underline decoration-ink decoration-4 underline-offset-4"
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
                        </div>
                    </motion.aside>
                </div>
            </section>
        </>
    );
}
