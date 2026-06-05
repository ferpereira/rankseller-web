import { Product } from "../types/product";

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Tênis Masculino",
    marketplace: "Mercado Livre",
    category: "Calçados",
    price: 149.9,
    visits: 1280,
    sales: 32,
    conversionRate: 2.5,
    organicScore: 42,
    status: "weak",
    mainProblem: "Título genérico e ficha técnica incompleta",
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_889106-MLB77123783600_062024-F.webp",
    currentTitle: "Tênis Masculino",
    suggestedTitle:
      "Tênis Masculino Esportivo Leve Confortável Para Caminhada Academia",
    currentDescription: "Produto de qualidade. Envio rápido.",
    suggestedDescription:
      "Tênis masculino esportivo desenvolvido para oferecer conforto no dia a dia, caminhadas e academia. Possui design leve, acabamento resistente e ótimo ajuste aos pés.",
    problems: [
      "Título muito curto",
      "Não informa uso principal",
      "Descrição com poucos detalhes",
      "Ficha técnica incompleta",
    ],
    missingAttributes: ["Material", "Tipo de uso", "Gênero", "Marca"],
  },
  {
    id: "2",
    title: "Kit 3 Camisetas",
    marketplace: "Mercado Livre",
    category: "Moda Masculina",
    price: 89.9,
    visits: 2400,
    sales: 180,
    conversionRate: 7.5,
    organicScore: 81,
    status: "optimized",
    mainProblem: "Anúncio bem otimizado",
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_708174-MLB78823834473_092024-F.webp",
    currentTitle: "Kit 3 Camisetas Masculinas",
    suggestedTitle:
      "Kit 3 Camisetas Masculinas Básicas Algodão Confortável Lisa",
    currentDescription:
      "Kit com 3 camisetas masculinas básicas para uso diário.",
    suggestedDescription:
      "Kit com 3 camisetas masculinas básicas, ideais para uso diário, trabalho, lazer e combinações casuais. Produto confortável, versátil e com ótimo custo-benefício.",
    problems: ["Pode melhorar a descrição com mais benefícios"],
    missingAttributes: ["Composição"],
  },
  {
    id: "3",
    title: "Liquidificador",
    marketplace: "Mercado Livre",
    category: "Eletrodomésticos",
    price: 219.9,
    visits: 860,
    sales: 12,
    conversionRate: 1.4,
    organicScore: 35,
    status: "critical",
    mainProblem: "Título fraco, descrição pobre e poucos atributos",
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_875823-MLU77884128840_072024-F.webp",
    currentTitle: "Liquidificador",
    suggestedTitle:
      "Liquidificador 1200W Com Jarra Resistente 12 Velocidades Cozinha",
    currentDescription: "Liquidificador novo.",
    suggestedDescription:
      "Liquidificador potente de 1200W, ideal para preparar sucos, vitaminas, massas leves, molhos e receitas do dia a dia. Conta com jarra resistente, múltiplas velocidades e design prático para sua cozinha.",
    problems: [
      "Título sem potência",
      "Não informa capacidade",
      "Descrição muito curta",
      "Poucas informações técnicas",
    ],
    missingAttributes: ["Potência", "Capacidade", "Voltagem", "Material da jarra"],
  },
];