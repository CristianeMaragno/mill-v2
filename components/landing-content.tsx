"use client";

import { Button } from "./ui/button";
import PrincingCard from "./pricing-card";
import { Dumbbell, Gamepad2, Microscope } from "lucide-react";
import { cn } from "@/lib/utils";

export const LandingContent = () => {
  return (
    <div className="pb-20">
      <div id="section-about" className="my-8">
        <h2 className="text-sky-700 text-4xl font-semibold text-center">O que é a Mill?</h2>
        <p className="text-gray-400 py-8 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br/> 
        incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet.</p>
        <div className="space-y-8 lg:grid justify-items-center lg:grid-cols-3 sm:gap-6 xl:gap-6 lg:space-y-0 lg:mx-20">
          <div className="px-8 flex items-center flex-col">
            <Gamepad2 size={120} className="text-gray-500 text-center mb-4"/>
            <h3 className="text-gray-500 text-1xl font-semibold text-center mb-4">Gamificação</h3>
            <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>

          <div className="px-8 flex items-center flex-col">
            <Microscope size={120} className="text-gray-500 text-center mb-4"/>
            <h3 className="text-gray-500 text-1xl font-semibold text-center mb-4">Educação Financeira</h3>
            <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>

          <div className="px-8 flex items-center flex-col">
            <Dumbbell size={120} className="text-gray-500 text-center mb-4"/>
            <h3 className="text-gray-500 text-1xl font-semibold text-center mb-4">Prática</h3>
            <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>
        </div>
      </div>

      <div id="section-prices" className="bg-sky-700 bg-opacity-40 px-20 py-16">
        <h2 className="text-sky-700 text-4xl font-semibold text-center">Preços</h2>
        <p className="text-neutral-100 py-8 text-center">Selecione o plano que mais cobina com você</p>
        <div className="space-y-8 lg:grid justify-items-center lg:grid-cols-2 sm:gap-6 xl:gap-12 lg:space-y-0">
          <PrincingCard price={0} name="Gratuito" description="Melhor opção para iniciar">
            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">Lorem ipsum</li>
              <li className="flex items-center space-x-3">Lorem ipsum</li>
              <li className="flex items-center space-x-3">Lorem ipsum</li>
              <li className="flex items-center space-x-3">Lorem ipsum</li>
            </ul>
          </PrincingCard>
          <PrincingCard price={15.99} name="Premium" description="Para quem quer ir fundo">
            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">Lorem ipsum</li>
              <li className="flex items-center space-x-3">Lorem ipsum</li>
              <li className="flex items-center space-x-3">Lorem ipsum</li>
              <li className="flex items-center space-x-3">Lorem ipsum</li>
            </ul>
          </PrincingCard>
        </div>
      </div>

      <div id="section-learn" className="px-20 py-16 flex flex-col items-center">
        <h2 className="text-sky-700 text-4xl font-semibold text-center">Aprenda</h2>
        <p className="text-gray-400 py-8 text-center">Se inscreva a nossa newsletter receba informações relevantes sobre finanças</p>

        <input type="text" id="first_name" className="bg-gray-50 max-w-md mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-300 focus:border-sky-500 block w-full p-2.5" placeholder="Email"/>

        <Button className="rounded-full">
          Me cadastrar na newsletter
        </Button>
      </div>
    </div>
  )
}