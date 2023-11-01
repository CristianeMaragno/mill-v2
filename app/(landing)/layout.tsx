import { ChatBot } from "@/components/chatbot";

const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="h-full bg-neutral-50 overflow-auto">
      <div className="h-full w-full">
        {children}
      </div>
      <ChatBot/>
    </main>
   );
}
 
export default LandingLayout;