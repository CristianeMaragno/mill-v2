import { checkSubscription } from "@/lib/subscription";
//import { modules } from "@/constants";
import { ModuleCard } from "@/components/module-card";
import { CandlestickChart, Pencil, PiggyBank } from "lucide-react";

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


const DashboardPage = async () => {
  const isPro = await checkSubscription();

  return ( 
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-company-green mt-8">
          Seu painel
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Comece a aprender sobre finanaças agora de forma fácil e divertida.
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 md:gap-4 items-stretch grid-flow-row auto-rows-max">
        {modules.map((module) => (
          <ModuleCard key={module.href} active={isPro ? true : !module.premium} href={module.href} label={module.label} description={module.description}/>
        ))}
      </div>
    </div>
   );
}
 
export default DashboardPage;