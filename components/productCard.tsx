"use client";
import { CardContent, Card } from "@/components/ui/card"
import { Currency, Expand, FastForward, ShoppingCart } from "lucide-react"
import IconButton from "./icon-button"
import Link from "next/link"
import { useCarteStore } from "@/lib/hooks/useCartStor"
import toast from "react-hot-toast"
import ConditionalModalLoginCard from "./conditionalModalLoginCard";
import { useSession } from "next-auth/react";
import { AlertDialogLoginProductCard } from "./requiredLoginProductCarModal";

type Props = {
    products:{
        _id:string,
        title:string,
        price: number,
        image:string,
        category:{
            name:string
        },
        color:{
            name:string
        },
        size:{
            name:string
        }
    }
}
export default function ProductCard({products}:Props) {
  const {addProductToCart} = useCarteStore((state):any=>state)
  const {data: session} = useSession();
  
  return (
    
    <div  className="bg-white   group cursor-pointer rounded-xl border  p-3 space-y-4">
    {/* Image & actions */}
    
    <div className="aspect-square rounded-xl bg-gray-100 relative">
    <Link href={`/product/${products._id}`}>
      <img
        src={products.image} 
        alt="" 
        
        className="aspect-square object-cover rounded-md"
       />
    </Link>
    <div/>
    
      <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
        <div className="flex gap-x-6 justify-center">
          {/* <IconButton 
            
            icon={<Expand size={20} className="text-gray-600" />}
          /> */}
          {!session ? (
            <>
            <AlertDialogLoginProductCard />
            </>
         
          ): 
            <>
            <IconButton
             onClick={() => addProductToCart(products) || toast.success("Product added to cart")}
             icon={<ShoppingCart size={20} className="text-gray-600" />} 
           />
            </>
           
}
         

          {/* <ConditionalModalLoginCard data={products} />  */}
        </div>
      </div>
    </div>
    

   
   {/* Title & category */}
    <div>
      <p className="font-semibold text-lg">{products?.title}</p>
      <p className="text-sm text-gray-500">{products?.category?.name}</p>
    </div>
    {/* Price & Reiew */}
    <div className="flex items-center justify-between">
     <p>{products?.price}$</p>
    </div>
  </div>
  )
}

