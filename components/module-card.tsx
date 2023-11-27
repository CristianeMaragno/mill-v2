"use client"

import { IconNode, Lock, LucideIcon, PlayCircle } from "lucide-react";
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
    <div className="col-span-1 flex flex-col">
      {active && <Card onClick={() => router.push(href)} className="p-8 border-company-green/5 bg-company-green/10 flex flex-col items-center justify-between hover:shadow-md transition cursor-pointer">
        <PlayCircle className="w-24 h-24 text-company-green mb-8"/>
        <div className="flex items-center gap-x-4 mb-8">
          <div className="flex flex-col">
            <span className="font-semibold text-lg text-company-green mb-4">{label}</span>
            <span className="text-sm text-slate-500">{description}</span>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <ArrowRight className="w-5 h-5 text-company-green" />
        </div>
      </Card>}

      {!active && <Card onClick={proModal.onOpen} className="p-8 border-black/5 flex flex-col items-center justify-between hover:shadow-md transition cursor-pointer">
        <Lock className="w-24 h-24 text-slate-500 mb-8"/>
        <div className="flex items-center gap-x-4">
          <div className="flex flex-col">
            <span className="font-semibold mb-4 text-lg">{label}</span>
            <span className="text-sm text-slate-500">{description}</span>
          </div>
        </div>
      </Card>}
    </div>
  );
}