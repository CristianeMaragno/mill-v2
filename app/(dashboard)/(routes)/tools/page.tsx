"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useProModal } from "@/hooks/use-pro-modal";
import { tools } from "@/constants";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const ConversationPage = () => {
  const router = useRouter();
  const proModal = useProModal();

  const limitAction = async () => {
    try{
      const response = await axios.post('/api/conversation', { messages: "Hello" });
      console.log(response);
    }catch (error: any){
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    }finally {
      router.refresh(); // This makes the sidebar be updated
    }
  
  }

  return ( 
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Ferramentas
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Ferramentas úteis sempre a seu dispor.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}
 
export default ConversationPage;