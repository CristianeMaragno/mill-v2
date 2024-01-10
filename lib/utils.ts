import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { format, intervalToDuration } from "date-fns";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export const checkStreak = async () => {
  const { userId } = auth();

  if (!userId) {
    return 0;
  }

  const streak = await prismadb.streak.findFirst({
    where: {
      userId: userId,
    }
  });

  if(!streak){
    await prismadb.streak.create({
      data: {
        userId
      }
    });
    return 0;
  }else{
    if(streak.lastActivity){
      var endDate =  new Date();
      var result = intervalToDuration({start: streak.lastActivity, end: endDate});
      return result.days && result.days > 2 ? 0 : streak.counter;
    }
  }

  return 0;
}