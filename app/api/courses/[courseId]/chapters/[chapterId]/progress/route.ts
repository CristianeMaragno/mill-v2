import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { intervalToDuration } from "date-fns";

export async function PUT(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const { userId } = auth();
    const { isCompleted } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    } 

    const userProgress = await prismadb.userProgress.upsert({
      where: {
        userId_chapterId: {
          userId,
          chapterId: params.chapterId,
        }
      },
      update: {
        isCompleted
      },
      create: {
        userId,
        chapterId: params.chapterId,
        isCompleted,
      }
    })

    const streak = await prismadb.streak.findFirst({
      where: {
        userId: userId,
      }
    });

    var counter = 0;
    if(streak){
      if(streak.lastActivity){
        var currentDate =  new Date();
        if(streak.lastActivity.getDay() == currentDate.getDay() && streak.lastActivity.getMonth() == currentDate.getMonth() && streak.lastActivity.getFullYear() == currentDate.getFullYear()){
          counter = streak.counter;
        }else{
          var result = intervalToDuration({start: streak.lastActivity, end: currentDate});
          if(result.days && result.days > 2){
            counter = 1;
          }else{
            counter = streak.counter + 1;
          }
        }
      }else{
        counter = 1;
      }

    }

    const updateStreak = await prismadb.streak.update({
      where: {
        id: streak?.id,
        userId: userId,
      },
      data: {
        counter: counter,
        lastActivity: new Date()
      },
    })

    return NextResponse.json(userProgress);
  } catch (error) {
    console.log("[CHAPTER_ID_PROGRESS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}