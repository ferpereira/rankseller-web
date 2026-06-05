import { mockProducts } from "../data/mockProducts";
import Link from "next/link";

const statusLabel = {
  critical: "Crítico",
  weak: "Fraco",
  good: "Bom",
  optimized: "Otimizado",
};

const statusClass = {
  critical: "bg-red-50 text-red-700 border-red-200",
  weak: "bg-orange-50 text-orange-700 border-orange-200",
  good: "bg-blue-50 text-blue-700 border-blue-200",
  optimized: "bg-green-50 text-green-700 border-green-200",
};

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <section className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            Catálogo
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
            Anúncios analisados
          </h1>

          <p className="mt-2 text-slate-500">
            Produtos importados do Mercado Livre em modo demonstração.
          </p>
        </div>

        <button className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
          Nova auditoria
        </button>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-3xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total de anúncios</p>
          <strong className="mt-2 block text-3xl">{mockProducts.length}</strong>
        </div>

        <div className="rounded-3xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Críticos</p>
          <strong className="mt-2 block text-3xl text-red-600">
            {mockProducts.filter((p) => p.status === "critical").length}
          </strong>
        </div>

        <div className="rounded-3xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Fracos</p>
          <strong className="mt-2 block text-3xl text-orange-600">
            {mockProducts.filter((p) => p.status === "weak").length}
          </strong>
        </div>

        <div className="rounded-3xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Otimizados</p>
          <strong className="mt-2 block text-3xl text-green-600">
            {mockProducts.filter((p) => p.status === "optimized").length}
          </strong>
        </div>
      </section>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b bg-white px-6 py-5">
          <h2 className="text-lg font-bold text-slate-900">
            Lista de produtos
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Clique em analisar para ver o diagnóstico detalhado.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse">
            <thead className="bg-slate-50 text-left">
              <tr>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Produto
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Categoria
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Preço
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Conversão
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Score
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Ação
                </th>
              </tr>
            </thead>

            <tbody>
              {mockProducts.map((product) => (
                <tr key={product.id} className="border-t hover:bg-slate-50">
                  <td className="px-6 py-5">
                    <div>
                      <p className="font-semibold text-slate-900">
                        {product.title}
                      </p>
                      <p className="mt-1 max-w-md text-sm text-slate-500">
                        {product.mainProblem}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-600">
                    {product.category}
                  </td>

                  <td className="px-6 py-5 text-sm font-medium text-slate-700">
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-600">
                    {product.conversionRate}%
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-bold ${
                        statusClass[product.status]
                      }`}
                    >
                      {statusLabel[product.status]}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 rounded-full bg-slate-100">
                        <div
                          className="h-2 rounded-full bg-slate-950"
                          style={{ width: `${product.organicScore}%` }}
                        />
                      </div>

                      <span className="text-sm font-bold text-slate-900">
                        {product.organicScore}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <Link
                      href={`/products/${product.id}`}
                      className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Analisar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}