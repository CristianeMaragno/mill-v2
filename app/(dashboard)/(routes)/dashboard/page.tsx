import { checkSubscription } from "@/lib/subscription";
import { modules } from "@/constants";
import { ModuleCard } from "@/components/module-card";


const DashboardPage = async () => {
  const isPro = await checkSubscription();

  return ( 
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Seu painel
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Comece a aprender sobre finanaças agora de forma fácil e divertida.
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 2xl:grid-cols-4 md:gap-4">
        {modules.map((module) => (
          <ModuleCard key={module.href} active={isPro ? true : !module.premium} href={module.href} label={module.label} description={module.description}/>
        ))}
      </div>
    </div>
   );
}
 
export default DashboardPage;