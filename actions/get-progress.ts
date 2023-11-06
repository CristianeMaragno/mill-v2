import prismadb from "@/lib/prismadb";

export const getProgress = async (
  userId: string,
  courseId: string,
): Promise<number> => {
  try {
    const chapters = await prismadb.chapter.findMany({
      where: {
        courseId: courseId
      },
      select: {
        id: true,
      }
    });

    const chapterIds = chapters.map((chapter) => chapter.id);

    const validCompletedChapters = await prismadb.userProgress.count({
      where: {
        userId: userId,
        chapterId: {
          in: chapterIds,
        },
        isCompleted: true,
      }
    });

    const progressPercentage = (validCompletedChapters / chapterIds.length) * 100;

    return progressPercentage;
  } catch (error) {
    console.log("[GET_PROGRESS]", error);
    return 0;
  }
}