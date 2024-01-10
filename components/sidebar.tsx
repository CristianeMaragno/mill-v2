"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { LayoutDashboard, Settings, Wrench, Zap } from "lucide-react";
import { usePathname } from "next/navigation";
import { Patua_One } from 'next/font/google';

import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useProModal } from "@/hooks/use-pro-modal";

const poppins = Montserrat ({ weight: '600', subsets: ['latin'] });
const font = Patua_One({weight: '400', subsets: ['latin'],});

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard'
  },
  {
    label: 'Ferramentas',
    icon: Wrench,
    href: '/tools'
  },
  {
    label: 'Configurações',
    icon: Settings,
    href: '/settings'
  },
];

export const Sidebar = ({
  isPro = false
}: {
  isPro: boolean;
}) => {
  const pathname = usePathname();
  const proModal = useProModal();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-white text-white border-r-2 border-company-green/10">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className={cn("text-5xl font-bold text-company-green", font.className)}>
            Mill
          </h1>
        </Link>
        <div className="space-y-1">
          <p className="text-slate-400 mb-2">Menu</p>
          {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-company-green hover:bg-company-green/10 rounded-lg transition",
                pathname === route.href ? "text-company-green bg-company-green/40" : "text-zinc-600",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3 text-company-green")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Card className="bg-white/10 border-0 mx-4">
        <CardContent className="py-6">
          {!isPro ? <Button onClick={proModal.onOpen} variant="premium" className="w-full">
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button> : null}
        </CardContent>
      </Card>
    </div>
  );
};