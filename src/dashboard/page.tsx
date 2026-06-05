import { MetricCard } from "../components/dashboard/MetricCard";
import { mockProducts } from "../data/mockProducts";
import Link from "next/link";

export default function DashboardPage() {
  const totalProducts = mockProducts.length;
  const criticalProducts = mockProducts.filter(
    (product) => product.status === "critical"
  ).length;

  const averageScore =
    mockProducts.reduce((total, product) => total + product.organicScore, 0) /
    totalProducts;

  const totalVisits = mockProducts.reduce(
    (total, product) => total + product.visits,
    0
  );

  const totalSales = mockProducts.reduce(
    (total, product) => total + product.sales,
    0
  );

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="mt-2 text-slate-500">
          Visão geral da saúde orgânica dos seus anúncios no Mercado Livre.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="Score orgânico médio"
          value={`${averageScore.toFixed(0)}/100`}
          description="Média geral dos anúncios analisados"
        />

        <MetricCard
          title="Anúncios críticos"
          value={String(criticalProducts)}
          description="Produtos com maior risco de baixa performance"
        />

        <MetricCard
          title="Visitas analisadas"
          value={totalVisits.toLocaleString("pt-BR")}
          description="Volume total dos anúncios mockados"
        />

        <MetricCard
          title="Vendas analisadas"
          value={totalSales.toLocaleString("pt-BR")}
          description="Vendas simuladas no período"
        />
      </section>

      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Oportunidades orgânicas
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Produtos com maior potencial de melhoria por SEO, descrição e ficha técnica.
            </p>
          </div>

          <Link
            href="/products"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Ver catálogo
          </Link>
        </div>

        <div className="mt-6 space-y-4">
          {mockProducts
            .sort((a, b) => a.organicScore - b.organicScore)
            .slice(0, 3)
            .map((product) => (
              <div
                key={product.id}
                className="flex flex-col justify-between gap-4 rounded-lg border p-4 md:flex-row md:items-center"
              >
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {product.mainProblem}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                    Score {product.organicScore}/100
                  </span>

                  <Link
                    href={`/products/${product.id}`}
                    className="text-sm font-medium text-slate-900 underline"
                  >
                    Analisar
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}