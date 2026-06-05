export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Conta conectada
          </p>

          <h2 className="mt-1 text-lg font-semibold text-slate-900">
            Mercado Livre — Loja Demonstração
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden rounded-2xl border bg-slate-50 px-4 py-2 text-sm text-slate-600 md:block">
            Última análise: hoje
          </div>

          <button className="rounded-2xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
            Conectar marketplace
          </button>
        </div>
      </div>
    </header>
  );
}