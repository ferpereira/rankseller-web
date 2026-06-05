import { MetricCard } from "../../components/dashboard/MetricCard";
import { mockProducts } from "../../data/mockProducts";
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
      <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-white shadow-sm">
        <div className="max-w-3xl">
          <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-950">
            Auditoria Orgânica
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight">
            Recupere margem otimizando seus anúncios antes de investir mais em Ads.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            O RankSeller identifica anúncios com baixo potencial orgânico,
            sugere melhorias com IA e mostra onde você pode melhorar ranking,
            conversão e lucro líquido.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Ver oportunidades
            </Link>

            <button className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Gerar análise com IA
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="Score orgânico médio"
          value={`${averageScore.toFixed(0)}/100`}
          description="Média geral dos anúncios analisados"
          icon="🎯"
          highlight
        />

        <MetricCard
          title="Anúncios críticos"
          value={String(criticalProducts)}
          description="Produtos com maior risco de baixa performance"
          icon="🚨"
        />

        <MetricCard
          title="Visitas analisadas"
          value={totalVisits.toLocaleString("pt-BR")}
          description="Volume total dos anúncios mockados"
          icon="👀"
        />

        <MetricCard
          title="Vendas analisadas"
          value={totalSales.toLocaleString("pt-BR")}
          description="Vendas simuladas no período"
          icon="🛒"
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Oportunidades orgânicas
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Produtos ordenados por maior necessidade de otimização.
              </p>
            </div>

            <Link
              href="/products"
              className="rounded-2xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Ver catálogo
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            {[...mockProducts]
              .sort((a, b) => a.organicScore - b.organicScore)
              .map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col justify-between gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-white hover:shadow-sm md:flex-row md:items-center"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900">
                        {product.title}
                      </h3>

                      <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
                        {product.category}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                      {product.mainProblem}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
                      {product.organicScore}/100
                    </span>

                    <Link
                      href={`/products/${product.id}`}
                      className="text-sm font-bold text-slate-900 underline underline-offset-4"
                    >
                      Analisar
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Potencial de margem
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Estimativa demonstrativa baseada em anúncios com baixa performance
            orgânica.
          </p>

          <div className="mt-6 rounded-3xl bg-green-50 p-5">
            <p className="text-sm font-medium text-green-700">
              Economia potencial em Ads
            </p>

            <strong className="mt-2 block text-4xl font-bold text-green-900">
              R$ 780
            </strong>

            <p className="mt-2 text-sm text-green-700">
              Simulação mensal para catálogo atual.
            </p>
          </div>

          <div className="mt-5 space-y-3">
            <div className="flex justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
              <span className="text-slate-500">Produtos críticos</span>
              <strong>{criticalProducts}</strong>
            </div>

            <div className="flex justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
              <span className="text-slate-500">Otimizações sugeridas</span>
              <strong>12</strong>
            </div>

            <div className="flex justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
              <span className="text-slate-500">Impacto estimado</span>
              <strong>Alto</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}