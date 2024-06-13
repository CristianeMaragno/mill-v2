"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface CourseQuestionProps {
  chapterId: string;
  courseId: string;
  title: string | null;
};

export const CourseQuestion = ({
  chapterId,
  courseId,
  title
}: CourseQuestionProps) => {
  const router = useRouter();

  const onClick = async () => {
    try {
      await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/progress`, {
        response: "teste"
      });
      toast.success("Resposta atualizado");
      router.refresh();
    } catch {
      toast.error("Algo deu errado");
    }
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>
      <Textarea placeholder="Resposta" />
      <Button>Salvar</Button>
    </div>
  )
}