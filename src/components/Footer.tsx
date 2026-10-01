import { ArrowUp } from "lucide-react";
export function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <a className="brand" href="/#inicio" aria-label="Voltar ao início">
          ph<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} Paulo Henrique.
          <br />
          <span>Feito com dedicação, React e café.</span>
        </p>
        <a href="/#inicio">
          Voltar ao topo <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
