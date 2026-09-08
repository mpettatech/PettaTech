import {
  ArrowRight,
  BriefcaseBusiness,
  CircleDollarSign,
  LayoutTemplate,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const siteOptions = [
  {
    icon: BriefcaseBusiness,
    title: "Site institucional",
    description: "Apresente sua empresa, seus serviços e seus diferenciais com credibilidade.",
    accent: "text-cyan-400",
  },
  {
    icon: LayoutTemplate,
    title: "Landing page",
    description: "Uma página focada em transformar visitantes em contatos e oportunidades.",
    accent: "text-blue-400",
  },
  {
    icon: ShoppingBag,
    title: "Loja virtual",
    description: "Venda seus produtos com uma experiência de compra simples e profissional.",
    accent: "text-emerald-400",
  },
  {
    icon: CircleDollarSign,
    title: "Venda de Serviços",
    description: "Clientes podem agendar serviços e solicitar orçamentos, exemplos: salão de beleza, encanador, eletricista, etc.",
    accent: "text-amber-400",
  },
];

export default function Sites() {
  return (
    <>
      <Navbar />

      <main className="relative isolate min-h-screen overflow-hidden px-6 pb-24 pt-36">
        <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <section className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
              Escolha seu próximo projeto
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Qual site sua empresa precisa hoje?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Selecione o formato que mais combina com seu objetivo. A PettaTech cuida do design, da tecnologia e da experiência para você.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {siteOptions.map((option) => {
              const Icon = option.icon;

              return (
                <article
                  key={option.title}
                  className="group flex min-h-72 flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900"
                >
                  <Icon size={36} className={`${option.accent} mb-8`} />
                  <h2 className="text-xl font-semibold text-white">{option.title}</h2>
                  <p className="mt-4 flex-1 leading-7 text-slate-400">{option.description}</p>
                  <a
                    href="https://wa.me/5511911543874"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 font-medium text-cyan-400 transition group-hover:gap-3"
                  >
                    Quero este formato <ArrowRight size={18} />
                  </a>
                </article>
              );
            })}
          </div>

          <Link to="/" className="mt-12 inline-block text-sm text-slate-400 transition hover:text-white">
            ← Voltar para o início
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}