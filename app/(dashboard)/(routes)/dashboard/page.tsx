import { checkSubscription } from "@/lib/subscription";
import { checkStreak } from "@/lib/utils";
import { modules } from "@/constants";
import { ModuleCard } from "@/components/module-card";
import { CandlestickChart, Pencil, PiggyBank } from "lucide-react";
import StreakCard from "@/components/streak-card";


const DashboardPage = async () => {
  const isPro = await checkSubscription();
  const streak = await checkStreak();

  return ( 
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-company-green mt-8">
          Seu painel
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Comece a aprender sobre finanças agora de forma fácil e divertida.
        </p>
      </div>

      <div className="px-4 md:px-20 mb-8">
        <StreakCard streak={streak}/>
      </div>

      <div className="px-4 md:px-20 lg:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:px-32 space-y-4 lg:space-y-0 auto-rows-fr grid-flow-col">
        {modules.map((module) => (
          <ModuleCard key={module.href} active={isPro ? true : !module.premium} href={module.href} label={module.label} description={module.description}/>
        ))}
      </div>
    </div>
   );
}
 
export default DashboardPage;