"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white bg-sky-900 font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Leve suas finanças para o próximo nível</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-400">
          <TypewriterComponent
            options={{
              strings: [
                "Conhecimento.",
                "Diversão.",
                "Em qualquer lugar."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Aprenda sobre finanças de um jeito divertido e eficiente
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Comece a usar gratuitamente
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        Sem precisar de cartão de crédito.
      </div>
    </div>
  );
};