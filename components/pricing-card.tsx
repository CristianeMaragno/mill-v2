import Link from "next/link";
import { Button } from "./ui/button";
import { useAuth } from "@clerk/nextjs";

const PrincingCard = ({
  price = 0,
  name,
  description,
  children
}: {
  price: number,
  name: String,
  description: String,
  children: React.ReactNode
}) => {
  const { isSignedIn } = useAuth();
  return ( 
    <div className="flex flex-col p-6 max-w-lg w-full text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
      <h3 className="mb-4 text-2xl font-semibold">{name}</h3>
      <p className="font-light text-gray-500 sm:text-lg ">{description}</p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">R${price}</span>
        <span className="text-gray-500">/mês</span>
      </div>
      {children}
      <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
        <Button className="rounded-full">
          Comece a usar
        </Button>
      </Link>
    </div>
   );
}
 
export default PrincingCard;