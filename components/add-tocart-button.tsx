"use client";
import React from 'react'
import { Button } from './ui/button'
import { useCarteStore } from '@/lib/hooks/useCartStor';
import { ShoppingCartIcon } from 'lucide-react';
import { toast } from 'react-hot-toast';
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
function Addtocartbutton({products}:Props) {
  const {addProductToCart} = useCarteStore((state):any=>state)

  return (
    <div>
      
      <Button size="lg" onClick={() => addProductToCart(products) || toast.success("Product added to cart")} className="flex items-center space-x-2 w-full bg-neutral-950">
         Add to cart
          {/* <ShoppingCartIcon className="w-5 h-5" /> */}
        </Button>
    </div>
  )
}

export default Addtocartbutton
