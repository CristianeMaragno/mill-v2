import { Calculator, CandlestickChart, Heart, Pencil, PiggyBank, Video, Wrench } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const features = [
  {
    label: 'Vídeo aulas completas',
    icon: Video,
    href: '/tools',
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
  },
  {
    label: 'Ferramentas',
    icon: Wrench,
    href: '/tools',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
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
  {
    label: 'Mapa de sonhos',
    icon: Heart,
    href: '/tools/dreams',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  }
];

export const modules = [
  {
    label: 'Finanças pessoais',
    icon: Pencil,
    href: '/courses/1',
    description: "Aprenda como controlar melhor suas finanças pessoais",
    premium: false
  },
  {
    label: 'Investimentos I',
    icon: PiggyBank,
    href: '/courses/2177a7fc-14f4-4b4a-a69b-de1305386bd3',
    description: "Aprenda como controlar melhor suas finanças pessoais",
    premium: false
  },
  {
    label: 'Investimentos II',
    icon: CandlestickChart,
    href: '/courses/3',
    description: "Aprenda como controlar melhor suas finanças pessoais",
    premium: true
  }
];