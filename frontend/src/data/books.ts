import { descriptions } from './descriptions';

export interface Book {
  id: string;
  title: string;
  imageUrl: string;
  price: string;
  description: string;
  author: string;
  additionalInfo: Record<string, string>;
  category: string;
  relatedBooks: { title: string; imageUrl: string; price: string; category: string; id: string }[];
  stock: number;
}

const adylsonMachado = "Adylson Machado";
const selo = "Via Litterarum";
const idioma = "Português";

export const books: Book[] = [
  {
    id: "amendoeiras",
    title: "Amendoeiras de Outono",
    imageUrl: "/images/amendoeiras.webp",
    price: "R$60,00",
    description: descriptions.amendoeiras,
    author: adylsonMachado,
    additionalInfo: {
      Peso: "520 g",
      Dimensões: "22 × 15 × 2,5 cm",
      Selo: selo,
      ISBN: "978-85-8151-072-9",
      Edição: "2ª",
      "Ano de Publicação": "2013",
      "Nº de Páginas": "400",
      Idioma: idioma
    },
    category: "Romance",
    stock: 100,
    relatedBooks: [
      { id: "chamaoburro", title: "Amendoeiras de Outono", imageUrl: "/images/amendoeiras.webp", price: "R$60,00", category: "Crônica" },
      { id: "lambe", title: "Lambe-lambe e outros contos", imageUrl: "/images/lambe.webp", price: "R$25,00", category: "Contos" }
    ]
  },
  {
    id: "chamaoburro",
    title: "Chama o burro e outras crônicas de antanho",
    imageUrl: "/images/chamaoburro.webp",
    price: "R$30,00",
    description: descriptions.chamaoburro,
    author: adylsonMachado,
    additionalInfo: {
      Peso: "135 g",
      Dimensões: "21 × 14 × 0,7 cm",
      Selo: selo,
      ISBN: "978-85-8151-171-9",
      Edição: "1ª",
      "Ano de Publicação": "2018",
      "Nº de Páginas": "132",
      Idioma: idioma
    },
    category: "Crônica",
    stock: 100,
    relatedBooks: [
      { id: "chamaoburro", title: "Amendoeiras de Outono", imageUrl: "/images/amendoeiras.webp", price: "R$60,00", category: "Crônica" },
      { id: "ocinza", title: "O cinza e o silêncio", imageUrl: "/images/ocinzaeosilencio.webp", price: "R$25,00", category: "Crônica" }
    ]
  },
  {
    id: "entrenuvensdeambar",
    title: "Entre nuvens de âmbar: o sonho tirano insiste e persegue",
    imageUrl: "/images/entrenuvensdeambar.webp",
    price: "R$25,00",
    description: descriptions.entrenuvensdeambar,
    author: adylsonMachado,
    additionalInfo: {
      Peso: "156 g",
      Dimensões: "21 × 14 × 0,8 cm",
      Selo: selo,
      ISBN: "978-85-8151-172-6",
      Edição: "1ª",
      "Ano de Publicação": "2018",
      "Nº de Páginas": "96",
      Idioma: idioma
    },
    category: "Crônicas",
    stock: 100,
    relatedBooks: [
      { id: "lambe", title: "Lambe-lambe e outros contos", imageUrl: "/images/lambe.webp", price: "R$25,00", category: "Contos" },
      { id: "portal", title: "Portal da Piedade", imageUrl: "/images/portaldapiedade.webp", price: "R$30,00", category: "Crônica" }
    ]
  },
  {
    id: "portal",
    title: "Portal da Piedade",
    imageUrl: "/images/portaldapiedade.webp",
    price: "R$30,00",
    description: descriptions.portal,
    author: adylsonMachado,
    additionalInfo: {
      Peso: "200 g",
      Dimensões: "21 × 14 × 1 cm",
      Selo: selo,
      ISBN: "978-85-8151-175-7",
      Edição: "1ª",
      "Ano de Publicação": "2018",
      "Nº de Páginas": "128",
      Idioma: idioma
    },
    category: "Crônicas",
    stock: 100,
    relatedBooks: [
      { id: "lambe", title: "Lambe-lambe e outros contos", imageUrl: "/images/lambe.webp", price: "R$25,00", category: "Contos" },
      { id: "abc", title: "O abc do Cabôco", imageUrl: "/images/oabcdocaboco.webp", price: "R$25,00", category: "Crônica" }
    ],
  },
  {
    id: "ocinza",
    title: "O cinza e o silêncio",
    imageUrl: "/images/ocinzaeosilencio.webp",
    price: "R$25,00",
    description: descriptions.ocinza,
    author: adylsonMachado,
    additionalInfo: {
      Peso: "135 g",
      Dimensões: "21 × 14 × 0,7 cm",
      Selo: selo,
      ISBN: "978-85-8151-174-0",
      Edição: "1ª",
      "Ano de Publicação": "2018",
      "Nº de Páginas": "80",
      Idioma: idioma
    },
    category: "Crônica",
    stock: 100,
    relatedBooks: [
      { id: "portal", title: "Portal da Piedade", imageUrl: "/images/portaldapiedade.webp", price: "R$30,00", category: "Crônica" },
      { id: "entrenuvensdeambar", title: "Entre nuvens de âmbar: o sonho tirano insiste e persegue", imageUrl: "/images/entrenuvensdeambar.webp", price: "R$25,00", category: "Crônica" }
    ],
  },
  {
    id: "lambe",
    title: "Lambe-lambe e outros contos",
    imageUrl: "/images/lambe.webp",
    price: "R$25,00",
    description: descriptions.lambe,
    author: adylsonMachado,
    additionalInfo: {
      Peso: "125 g",
      Dimensões: "21 × 14 × 0,8 cm",
      Selo: selo,
      ISBN: "978-85-8151-173-3",
      Edição: "1ª",
      "Ano de Publicação": "2018",
      "Nº de Páginas": "72",
      Idioma: idioma
    },
    category: "Contos",
    stock: 100,
    relatedBooks: [
      { id: "chamaoburro", title: "Chama o burro e outras crônicas de antanho", imageUrl: "/images/chamaoburro.webp", price: "R$30,00", category: "Crônica" },
      { id: "ocinza", title: "O cinza e o silêncio", imageUrl: "/images/ocinzaeosilencio.webp", price: "R$25,00", category: "Crônica" }
    ],
  },
  {
    id: "abc",
    title: "O abc do Cabôco",
    imageUrl: "/images/oabcdocaboco.webp",
    price: "R$25,00",
    description: descriptions.abc,
    author: adylsonMachado,
    additionalInfo: {
      Peso: "135 g",
      Dimensões: "10 × 19 × 1 cm",
      Selo: selo,
      ISBN: "978-85-94893-42-8",
      Edição: "1ª",
      "Ano de Publicação": "2008",
      "Nº de Páginas": "116",
      Idioma: idioma
    },
    category: "Crônica",
    stock: 100,
    relatedBooks: [
      { id: "lambe", title: "Lambe-lambe e outros contos", imageUrl: "/images/lambe.webp", price: "R$25,00", category: "Contos" },
      { id: "portal", title: "Portal da Piedade", imageUrl: "/images/portaldapiedade.webp", price: "R$30,00", category: "Crônica" }
    ],
  }
];
