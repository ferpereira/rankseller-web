import { ProductScoreBadge } from "../../../components/products/ProductScoreBadge";
import { mockProducts } from "../../../data/mockProducts";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProductDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;

  const product = mockProducts.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link href="/products" className="text-sm font-medium text-slate-600">
        ← Voltar para catálogo
      </Link>

      <section className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-72 w-full rounded-lg object-cover"
          />

          <div className="mt-5">
            <h1 className="text-2xl font-bold text-slate-900">
              {product.title}
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              {product.category} • {product.marketplace}
            </p>

            <div className="mt-4">
              <ProductScoreBadge
                status={product.status}
                score={product.organicScore}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Diagnóstico orgânico
            </h2>

            <p className="mt-2 text-slate-600">{product.mainProblem}</p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Visitas</p>
                <strong className="text-2xl text-slate-900">
                  {product.visits.toLocaleString("pt-BR")}
                </strong>
              </div>

              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Vendas</p>
                <strong className="text-2xl text-slate-900">
                  {product.sales}
                </strong>
              </div>

              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Conversão</p>
                <strong className="text-2xl text-slate-900">
                  {product.conversionRate}%
                </strong>
              </div>
            </div>
          </section>

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Problemas encontrados
            </h2>

            <ul className="mt-4 space-y-2">
              {product.problems.map((problem) => (
                <li
                  key={problem}
                  className="rounded-lg border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-800"
                >
                  {problem}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Sugestão de título com IA
            </h2>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <p className="text-sm font-medium text-slate-500">
                  Título atual
                </p>
                <p className="mt-2 text-slate-900">{product.currentTitle}</p>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                <p className="text-sm font-medium text-green-700">
                  Título sugerido
                </p>
                <p className="mt-2 font-medium text-green-900">
                  {product.suggestedTitle}
                </p>
              </div>
            </div>

            <button className="mt-5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
              Aplicar sugestão
            </button>
          </section>

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Sugestão de descrição com IA
            </h2>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <p className="text-sm font-medium text-slate-500">
                  Descrição atual
                </p>
                <p className="mt-2 text-slate-700">
                  {product.currentDescription}
                </p>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                <p className="text-sm font-medium text-green-700">
                  Descrição sugerida
                </p>
                <p className="mt-2 text-green-900">
                  {product.suggestedDescription}
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Atributos ausentes
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {product.missingAttributes.map((attribute) => (
                <span
                  key={attribute}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                >
                  {attribute}
                </span>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}