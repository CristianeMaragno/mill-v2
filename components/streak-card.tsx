import { Flame } from "lucide-react";

const StreakCard = ({
  streak
}: {
  streak: number
}) => {
  return ( 
    <div className={`rounded p-4 flex text-company-green text-lg items-center
    ${streak > 0 ? "bg-green-300" : "bg-slate-300"}`}>
      <Flame className="w-8 h-8 mr-2"/> <span className="font-extrabold">{streak} Dias</span>
      <span className="ml-auto">{streak > 0 ? "Legal! Só com consistência você irá ter sucesso!" : "Assista vídeos para aumentar seu streak"}</span>
    </div>
  );
}
 
export default StreakCard;