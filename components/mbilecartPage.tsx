import { useCarteStore } from "@/lib/hooks/useCartStor";
import { Button } from "./ui/button";
import { Minus, Plus, Trash } from "lucide-react";

type Props = {
  item?: {
    _id: string,
    image: string,
    title: string,
    price: string,
    quantity: number
  },
  category?: {
    name: string
  },
  color?: {
    name: string
  },
  size?: {
    name: string
  }
}

export default function MobileCartPage({
    item,
  }: Props) {
    const { image, title, price, quantity }: any = item;
    const { removeProductFromCart, increaseQuantity, decreaseQuantity } = useCarteStore((state: any): any => state);
  
    return (
      <div className="bg-white rounded-lg shadow-md w-[400px] p-4 mb-4 md:mb-0 md:flex md:items-center ml-96">
        <img src={image} alt={title} className="w-24 h-24 rounded-md md:w-32 md:h-32 md:mr-4 mx-auto" />
        <div className="md:flex-1">
          <h4 className="text-lg font-semibold mb-2">{title}</h4>
          <p className="text-gray-500 mb-2">${price}</p>
          <div className="flex items-center space-x-2 mb-2 flex-row cursor-pointer">

          <Trash className="text-gray-500 hover:text-red-500 mb-2" onClick={() => removeProductFromCart(item)} /> <Plus className="text-gray-500 hover:text-green-500 mb-2" onClick={() => increaseQuantity(item)}  /> <Minus className="text-gray-500 hover:text-red-500 mb-2" onClick={() => decreaseQuantity(item)} /> 
          
          </div>
         {quantity}
          <div className="fixed bottom-0 left-0 w-full bg-gray-100 p-4 shadow-md md:relative md:bottom-auto md:left-auto md:w-64 md:bg-white md:shadow-none">
            
            {/* Contenu de la carte mobile ici */}
            <Button className="w-full bg-neutral-950 text-white rounded-full mt-4 md:hidden">Valider la commande</Button>
          </div>
        </div>
      </div>
    );
  };