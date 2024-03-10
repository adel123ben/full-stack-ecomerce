"use client";
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { useCarteStore } from "@/lib/hooks/useCartStor";
import { Badge } from "./ui/badge";
import { TrashIcon } from "lucide-react";

type Props = {
    item?:{
        _id:string,
        image:string,
        title:string,
        price:string,
        quantity:number
    },
    category?:{
        name:string
    },
    color?:{
        name:string
    },
    size?:{
        name:string
    }
}
export default function CartPageItem({
  item,
}: Props) {
    const {image,title,price,quantity}:any=item 
    const {category,color,size}:any=item
    const {removeProductFromCart,increaseQuantity,decreaseQuantity} = useCarteStore((state:any):any=>state)
  return (
    <div className="max-w-3xl sm:w-[1000px] md:w-[1200px] mx-auto my-8 p-4 bg-white shadow-md">
      {/* <h2 className="text-xl font-semibold mb-4">Panier ({quantity})</h2> */}
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <img
            alt="RAYLAN Grille Pain 800W Rouge"
            className="w-24 h-24 bg-gray-200 rounded"
            height="100"
            src={image}
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <div className="flex-1">
            <h3 className="text-lg font-medium truncate w-64">{title}</h3>
            <p className="text-sm text-gray-600">Vendeur: estore</p>
            <p className="text-sm text-gray-600">Catégorie: {category?.name}</p>
            <div className="flex items-center space-x-2 mt-2">
              <Badge variant="secondary">ESTORE EXPRESS</Badge>
              {/* <Button className="text-xs" variant="ghost">
                
              </Button> */}
              <TrashIcon onClick={() => removeProductFromCart(item)} className="w-4 h-4 hover:text-red-500 cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-lg font-semibold">{price}$</span>
            {/* <span className="text-sm line-through text-gray-500">5,000 $</span> */}
            <span className="text-xs font-semibold text-red-500">-10%</span>
            <div className="flex items-center mt-2">
              <Button onClick={() => decreaseQuantity(item)} className="px-2" variant="outline">
                -
              </Button>
              <span className="px-4">{quantity}</span>
              <Button onClick={() => increaseQuantity(item)} className="px-2" variant="outline">
                +
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="border-t border-gray-200" />
        {/* <div className="flex items-start space-x-4">
          <img
            alt="Smart Watch + Ecouteurs Sans fil"
            className="w-24 h-24 bg-gray-200 rounded"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <div className="flex-1">
            <h3 className="text-lg font-medium">Smart Watch + Ecouteurs Sans fil - W26 PRO MAX -Noir</h3>
            <p className="text-sm text-gray-600">Vendeur: Boulanger - AC</p>
            <p className="text-sm text-gray-600">Quelques articles restants</p>
            <div className="flex items-center space-x-2 mt-2">
              <Badge variant="secondary">JUMIA EXPRESS</Badge>
              <Button className="text-xs" variant="ghost">
                SUPPRIMER
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-lg font-semibold">1,800 DA</span>
            <span className="text-sm line-through text-gray-500">2,900 DA</span>
            <span className="text-xs font-semibold text-red-500">-38%</span>
            <div className="flex items-center mt-2">
              <Button className="px-2" variant="outline">
                -
              </Button>
              <span className="px-4">1</span>
              <Button className="px-2" variant="outline">
                +
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

