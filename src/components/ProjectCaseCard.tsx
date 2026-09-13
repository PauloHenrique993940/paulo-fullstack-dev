import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

export interface ProjectCase {
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  stack: readonly string[];
  demo?: string;
  github?: string;
}

interface ProjectCaseCardProps {
  project: ProjectCase;
  index: number;
}

export function ProjectCaseCard({ project, index }: ProjectCaseCardProps) {
  return (
    <motion.article
      className="project-case-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className="project-case-card__topline">
        <span>{project.eyebrow}</span>
        <span className="project-case-card__index">0{index + 1}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-case-card__summary">{project.summary}</p>

      <dl className="project-case-card__details">
        <div>
          <dt>Problema</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>Decisão</dt>
          <dd>{project.solution}</dd>
        </div>
        <div>
          <dt>Resultado</dt>
          <dd>{project.result}</dd>
        </div>
      </dl>

      <div className="project-case-card__footer">
        <div className="project-case-card__stack" aria-label={`Tecnologias usadas em ${project.title}`}>
          {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <div className="project-case-card__links">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Abrir demonstração de ${project.title}`}>
              Demo <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Abrir código de ${project.title} no GitHub`}>
              Código <SiGithub size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
