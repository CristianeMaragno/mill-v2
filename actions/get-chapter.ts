import prismadb from "@/lib/prismadb";
import { Attachment, Chapter } from "@prisma/client";

interface GetChapterProps {
  userId: string;
  courseId: string;
  chapterId: string;
};

export const getChapter = async ({
  userId,
  courseId,
  chapterId,
}: GetChapterProps) => {
  try {
    const course = await prismadb.course.findUnique({
      where: {
        id: courseId,
      }
    });

    const chapter = await prismadb.chapter.findUnique({
      where: {
        id: chapterId
      }
    });

    if (!chapter || !course) {
      throw new Error("Chapter or course not found");
    }

    let muxData = null;
    let attachments: Attachment[] = [];
    let nextChapter: Chapter | null = null;

    attachments = await prismadb.attachment.findMany({
      where: {
        courseId: courseId
      }
    });

    
    muxData = await prismadb.muxData.findUnique({
      where: {
        chapterId: chapterId,
      }
    });

    nextChapter = await prismadb.chapter.findFirst({
      where: {
        courseId: courseId,
        position: {
          gt: chapter?.position,
        }
      },
      orderBy: {
        position: "asc",
      }
    });

    const userProgress = await prismadb.userProgress.findUnique({
      where: {
        userId_chapterId: {
          userId,
          chapterId,
        }
      }
    });

    return {
      chapter,
      course,
      muxData,
      attachments,
      nextChapter,
      userProgress
    };
  } catch (error) {
    console.log("[GET_CHAPTER]", error);
    return {
      chapter: null,
      course: null,
      muxData: null,
      attachments: [],
      nextChapter: null,
      userProgress: null,
      purchase: null,
    }
  }
}