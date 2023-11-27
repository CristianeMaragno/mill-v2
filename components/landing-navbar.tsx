"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";
import { Patua_One } from 'next/font/google';

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Patua_One({weight: '400', subsets: ['latin'],});

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 md:px-60 bg-company-light-green flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <h1 className={cn("text-5xl font-bold text-company-green/80", font.className)}>
          Mill
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button className="rounded-full" variant="outline">
            <span className="text-lg p-2">Comece a usar</span>
          </Button>
        </Link>
      </div>
    </nav>
  )
}