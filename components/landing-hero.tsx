"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Patua_One } from 'next/font/google';

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
const font = Patua_One({weight: '400', subsets: ['latin'],});

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="bg-company-light-green font-bold py-16 space-y-5">
      <div className="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto md:ml-28 lg:col-span-7 flex flex-col justify-center">
          <h1  className={cn("text-company-green max-w-3xl mb-8 text-5xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-7xl", font.className)}>Aprenda a conquistar seus objetivos financeiros, o caminho para a prosperidade começa agora.</h1>
          <p className="max-w-2xl font-light mb-6 text-company-green lg:mb-8 md:text-lg lg:text-xl">Inicie sua jornada para a independência financeira com uma conta gratuita! Explore o mundo dos investimentos de maneira conveniente, seja de casa, do trabalho ou em movimento. </p>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
              <Play className="mr-2"/> Crie sua conta 
            </Button>
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/background.png" alt="mockup"/>
        </div>                
      </div>
    </div>
  );
};