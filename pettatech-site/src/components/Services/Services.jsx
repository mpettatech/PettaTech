import {
  Search,
  Bot,
  MonitorSmartphone,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Google Empresas",
    description:
      "Reposicione sua empresa nas pesquisas do Google e atraia muitos novos clientes.",
  },
  {
    icon: Bot,
    title: "Automação",
    description:
      "Automatize processos utilizando IA, Power Automate e integrações.",
  },
  {
    icon: MonitorSmartphone,
    title: "Criar um site",
    description:
      "Desenvolvimento de sites institucionais, landing pages e lojas virtuais para sua empresa.",
    href: "https://mpettatech.github.io/PettaTech/sites",
  },
  {
    icon: Database,
    title: "Sistemas Empresariais",
    description:
      "ERP, CRM, Banco de dados, desenvolvimento.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="text-center mb-14">

        <h2 className="text-4xl font-bold">
          Como posso ajudar sua empresa?
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Soluções em tecnologia voltadas para aumentar a produtividade,
          melhorar processos e gerar resultados.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {services.map((service) => {

          const Icon = service.icon;

          const cardContent = (
            <>
              <Icon
                size={40}
                className="text-blue-500 mb-6"
              />

              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-slate-400">
                {service.description}
              </p>
            </>
          );

          return service.href ? (
            <a
              key={service.title}
              href={service.href}
              className="block bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              {cardContent}
            </a>
          ) : (
            <div
              key={service.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              {cardContent}
            </div>
          );

        })}

      </div>

    </section>
  );
}