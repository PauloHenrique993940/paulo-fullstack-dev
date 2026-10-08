import { ArrowUp } from "lucide-react";
export function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <nav className="footer-social" aria-label="Redes sociais">
          <a
            href="https://www.linkedin.com/in/paulohenriquefranca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/PauloHenrique993940"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
        <p>© {new Date().getFullYear()} Paulo Henrique</p>
        <a href="/#inicio">
          Voltar ao topo <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
