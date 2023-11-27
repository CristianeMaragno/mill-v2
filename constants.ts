import { Calculator, CandlestickChart, Heart, MessageCircle, Pencil, PiggyBank, Video, Wrench } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const features = [
  {
    label: 'Vídeo aulas completas',
    icon: Video,
    href: '/dashboard'
  },
  {
    label: 'Ferramentas',
    icon: Wrench,
    href: '/tools'
  },
  {
    label: 'Suporte',
    icon: MessageCircle,
    href: '/dashbaord'
  }
];

export const tools = [
  {
    label: 'Calculadora de juros',
    icon: Calculator,
    href: '/tools/calculator',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  /*{
    label: 'Mapa de sonhos',
    icon: Heart,
    href: '/tools/dreams',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  }*/
];

export const modules = [
  {
    label: 'Corretoras de investimentos',
    icon: Pencil,
    href: '/courses/8929b096-3379-4d6e-a643-8dac5a22b779',
    description: "Corretoras de investimentos atuam como pontes estratégicas entre investidores e mercados, simplificando o acesso a oportunidades de investimento e proporcionando ferramentas essenciais para a construção de portfólios sólidos.",
    premium: false
  },
  {
    label: 'Tesouro direto I',
    icon: PiggyBank,
    href: '/courses/2177a7fc-14f4-4b4a-a69b-de1305386bd3',
    description: "O Tesouro Direto, como uma modalidade de investimento acessível e segura, oferece aos investidores a oportunidade de participar no financiamento da dívida pública, combinando praticidade e rendimentos atrativos.",
    premium: true
  },
  {
    label: 'Tesouro direto II',
    icon: CandlestickChart,
    href: '/courses/d30c13d6-875c-429d-a145-06fc40aaeafd',
    description: "Dominar o conhecimento avançado do Tesouro Direto envolve uma profunda compreensão dos diversos títulos disponíveis, estratégias avançadas de alocação de ativos e a capacidade de otimizar a gestão de risco.",
    premium: true
  }
];