import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="px-6 pb-28 pt-36 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-primary/10 bg-card/80 p-10 text-center shadow-[0_30px_120px_-60px_rgba(90,70,58,0.45)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-primary/50">
          404
        </p>
        <h1 className="mt-4 font-display text-6xl leading-none text-primary">
          Esta pagina nao foi encontrada.
        </h1>
        <p className="mt-5 text-base leading-8 text-primary/70">
          O endereco solicitado nao foi encontrado.
        </p>
        <Link to="/" className="premium-button mt-8 inline-flex">
          Voltar para o inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
