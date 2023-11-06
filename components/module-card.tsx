"use client"

import { Lock, LucideIcon, PlayCircle } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useProModal } from "@/hooks/use-pro-modal";

interface ModuleCardProps {
  active: boolean,
  href: string,
  label: string,
  description: string
}

export const ModuleCard = ({
  active = false,
  href,
  label,
  description
}: ModuleCardProps) => {
  const router = useRouter();
  const proModal = useProModal();

  return (
    <div>
      {active && <Card onClick={() => router.push(href)} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
        <div className="flex items-center gap-x-4">
          <div className={cn("p-2 w-fit rounded-md bg-sky-500/10")}>
            <PlayCircle className="w-8 h-8 text-sky-500"/>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">{label}</span>
            <span className="text-sm text-slate-500">{description}</span>
          </div>
        </div>
        <ArrowRight className="w-5 h-5" />
      </Card>}

      {!active && <Card onClick={proModal.onOpen} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
        <div className="flex items-center gap-x-4">
          <div className={cn("p-2 w-fit rounded-md bg-slate-500/10")}>
            <Lock className="w-8 h-8 text-slate-500"/>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">{label}</span>
            <span className="text-sm text-slate-500">{description}</span>
          </div>
        </div>
      </Card>}
    </div>
  );
}