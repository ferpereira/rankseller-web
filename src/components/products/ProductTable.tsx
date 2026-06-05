import Link from "next/link";
import { Product } from "../../types/product";
import { ProductScoreBadge } from "./ProductScoreBadge";

type ProductTableProps = {
  products: Product[];
};

export function ProductTable({ products }: ProductTableProps) {
  return (
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
          {products.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="h-12 w-12 rounded-lg object-cover"
                  />

                  <div>
                    <p className="font-medium text-slate-900">
                      {product.title}
                    </p>
                    <p className="text-sm text-slate-500">
                      {product.mainProblem}
                    </p>
                  </div>
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

              <td className="px-4 py-4">
                <ProductScoreBadge
                  status={product.status}
                  score={product.organicScore}
                />
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
  );
}