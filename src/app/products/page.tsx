import { mockProducts } from "../../data/mockProducts";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold text-slate-900">Catálogo</h1>
        <p className="mt-2 text-slate-500">
          Anúncios importados do Mercado Livre em modo demonstração.
        </p>
      </section>

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <table className="w-full border-collapse">
          <thead className="bg-slate-100 text-left">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold text-slate-700">
                Produto
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-700">
                Categoria
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-700">
                Preço
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-700">
                Conversão
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-700">
                Score
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-700">
                Ação
              </th>
            </tr>
          </thead>

          <tbody>
            {mockProducts.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="px-4 py-4">
                  <div>
                    <p className="font-medium text-slate-900">
                      {product.title}
                    </p>
                    <p className="text-sm text-slate-500">
                      {product.mainProblem}
                    </p>
                  </div>
                </td>

                <td className="px-4 py-4 text-sm text-slate-600">
                  {product.category}
                </td>

                <td className="px-4 py-4 text-sm text-slate-600">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>

                <td className="px-4 py-4 text-sm text-slate-600">
                  {product.conversionRate}%
                </td>

                <td className="px-4 py-4 text-sm font-semibold text-slate-900">
                  {product.organicScore}/100
                </td>

                <td className="px-4 py-4">
                  <Link
                    href={`/products/${product.id}`}
                    className="text-sm font-semibold text-slate-900 underline"
                  >
                    Ver análise
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}