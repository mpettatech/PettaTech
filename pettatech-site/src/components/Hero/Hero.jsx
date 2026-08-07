import fotoperfil from "../../assets/fotoperfil.jpeg";

export default function Hero() {
  const services = [
    "Google Empresas",
    "Consultoria em TI",
    "Desenvolvimento",
    "Sistemas empresariais",
  ];

  const highlights = [
    { title: "+10 anos", subtitle: "em TI" },
    { title: "SAP B1", subtitle: "Especialista" },
    { title: "Google Empresas", subtitle: "" },
    { title: "Automação", subtitle: "" },
  ];

  return (
    <section className="hero-shell relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="hero-reveal hero-delay-1 hero-badge mb-4 inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
              Petta Tech
            </p>

            <h1 className="hero-reveal hero-delay-2 max-w-xl text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
              Tecnologia e automações para empresas que querem crescer.
            </h1>

            <ul className="hero-reveal hero-delay-3 mt-7 space-y-3 text-lg text-slate-200">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <div className="hero-reveal hero-delay-4 mt-8 flex flex-wrap gap-4">
              <button className="hero-button-primary rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400">
                Diagnóstico Gratuito
              </button>
              <button className="hero-button-secondary rounded-full border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800">
                Conheça os Serviços
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="hero-reveal hero-delay-5 hero-photo overflow-hidden rounded-[22px] border border-slate-700 bg-slate-900">
              <img
                src={fotoperfil}
                alt="Foto profissional da Petta Tech"
                className="h-80 w-full object-cover"
              />
            </div>

            <div className="hero-reveal hero-delay-6 mt-6 grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title + index}
                  className="hero-card flex min-h-[104px] flex-col items-center justify-center rounded-2xl border border-slate-700 bg-slate-950/80 px-4 text-center text-slate-100 shadow-md shadow-slate-950/30"
                >
                  <span className="text-xl font-bold text-white">{item.title}</span>
                  {item.subtitle && (
                    <span className="mt-1 text-sm text-slate-300">{item.subtitle}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
      </div>
    </section>
  );
}