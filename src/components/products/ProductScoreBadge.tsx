import { ProductStatus } from "../../types/product";

type ProductScoreBadgeProps = {
  status: ProductStatus;
  score: number;
};

const statusLabel: Record<ProductStatus, string> = {
  critical: "Crítico",
  weak: "Fraco",
  good: "Bom",
  optimized: "Otimizado",
};

const statusClass: Record<ProductStatus, string> = {
  critical: "bg-red-50 text-red-700 border-red-200",
  weak: "bg-orange-50 text-orange-700 border-orange-200",
  good: "bg-blue-50 text-blue-700 border-blue-200",
  optimized: "bg-green-50 text-green-700 border-green-200",
};

export function ProductScoreBadge({ status, score }: ProductScoreBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${statusClass[status]}`}
    >
      {statusLabel[status]} — {score}/100
    </span>
  );
}