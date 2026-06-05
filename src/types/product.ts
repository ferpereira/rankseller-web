export type ProductStatus = "critical" | "weak" | "good" | "optimized";

export type Product = {
  id: string;
  title: string;
  marketplace: "Mercado Livre";
  category: string;
  price: number;
  visits: number;
  sales: number;
  conversionRate: number;
  organicScore: number;
  status: ProductStatus;
  mainProblem: string;
  imageUrl: string;
  currentTitle: string;
  suggestedTitle: string;
  currentDescription: string;
  suggestedDescription: string;
  problems: string[];
  missingAttributes: string[];
};