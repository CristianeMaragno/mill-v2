"use client";

import { Button } from "./ui/button";
import PrincingCard from "./pricing-card";
import { Dumbbell, Equal, Gamepad2, Microscope, Plus, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Patua_One } from 'next/font/google';

const font = Patua_One({weight: '400', subsets: ['latin'],});

export const LandingContent = () => {
  return (
    <div className="pb-20">
      <div className="my-20 mx-4 text-center flex flex-col items-center">
        <h1 className={cn("text-company-green mb-8 text-2xl font-extrabold tracking-tight", font.className)}>Aprenda com facilidade, de qualquer lugar.</h1>
        <p className="max-w-4xl font-light mb-12 text-company-green lg:mb-8 md:text-lg lg:text-xl">Nossa plataforma completa é mais que um conjunto de aulas, é uma jornada personalizada para o sucesso. Com ferramentas poderosas, orientação especializada e recursos exclusivos, estamos aqui para ser o impulso que você precisa.</p>

        <div className="space-y-8 lg:grid justify-items-center lg:grid-cols-3 sm:gap-6 xl:gap-16 lg:space-y-0 lg:mx-20">
          <div className="px-8 flex items-center flex-col bg-company-green/5 p-16 rounded-lg">
            <h3 className="text-company-green text-6xl font-extrabold text-center mb-4">5min</h3>
            <p className="text-company-green uppercase font-extralight text-center">Transforme seu dia em minutos! Nossas aulas relâmpago, com duração de até 5 minutos, oferecem conhecimento financeiro direto ao ponto.</p>
          </div>

          <div className="px-8 flex items-center flex-col bg-company-green/5 p-16 rounded-lg">
            <h3 className="text-company-green text-6xl font-extrabold text-center mb-4">2-3x</h3>
            <p className="text-company-green uppercase font-extralight text-center">Nossa abordagem única torna o aprendizado mais significativo, permitindo que você aplique imediatamente o conhecimento adquirido.</p>
          </div>

          <div className="px-8 flex items-center flex-col bg-company-green/5 p-16 rounded-lg">
            <h3 className="text-company-green text-6xl font-extrabold text-center mb-4">20%</h3>
            <p className="text-company-green uppercase font-extralight text-center">Nossa plataforma completa oferece aulas envolventes e recursos poderosos por 20% menos do que o custo de um educador financeiro tradicional.</p>
          </div>
        </div>
      </div>

      <div className="text-center flex flex-col items-center">
        <h1  className={cn("text-company-green mb-12 text-6xl font-extrabold", font.className)}>Conteúdo fácil</h1>
        <div className="rounded-full p-4 bg-company-light-green mb-12">
          <Plus className="text-company-green"/>
        </div>
        <h1 className={cn("text-company-green mb-12 text-6xl font-extrabold", font.className)}>Prática</h1>
        <div className="rounded-full p-4 bg-company-light-green mb-12">
          <Equal className="text-company-green"/>
        </div>
        <h1 className={cn("text-company-green mb-12 text-6xl font-extrabold max-w-4xl", font.className)}>Resultados reais</h1>
      </div>
    </div>
  )
}