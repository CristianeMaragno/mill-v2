import prismadb from "@/lib/prismadb";
import { redirect } from "next/navigation";

const CourseIdPage = async ({
  params
}: {
  params: { courseId: string; }
}) => {
  const course = await prismadb.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        orderBy: {
          position: "asc"
        }
      }
    }
  });

  if (!course) {
    return redirect("/dashboard");
  }

  return redirect(`/courses/${course.id}/chapters/${course.chapters[0].id}`);
}
 
export default CourseIdPage;