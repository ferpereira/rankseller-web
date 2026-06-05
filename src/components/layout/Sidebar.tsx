import Link from "next/link";

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: "📊",
  },
  {
    label: "Catálogo",
    href: "/products",
    icon: "📦",
  },
  {
    label: "IA de Otimização",
    href: "/dashboard",
    icon: "✨",
  },
  {
    label: "Relatórios",
    href: "/dashboard",
    icon: "📄",
  },
  {
    label: "Configurações",
    href: "/dashboard",
    icon: "⚙️",
  },
];

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 bg-slate-950 p-6 text-white md:block">
      <div className="mb-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-2xl">
          R
        </div>

        <h1 className="mt-4 text-2xl font-bold tracking-tight">
          RankSeller
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Crescimento orgânico para sellers de marketplace.
        </p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-10 rounded-3xl bg-white/10 p-5">
        <p className="text-sm font-semibold text-white">Plano atual</p>
        <p className="mt-1 text-sm text-slate-400">Demo Growth</p>

        <div className="mt-4 h-2 rounded-full bg-white/10">
          <div className="h-2 w-3/5 rounded-full bg-yellow-400" />
        </div>

        <p className="mt-3 text-xs text-slate-400">
          3 de 50 anúncios analisados
        </p>
      </div>
    </aside>
  );
}