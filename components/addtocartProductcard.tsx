import React from 'react'
import IconButton from './icon-button'
import { ShoppingCart } from 'lucide-react'
import toast from 'react-hot-toast'
import { useCarteStore } from '@/lib/hooks/useCartStor'
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
function AddtocartProductcard({products}:Props) {
    const {addProductToCart} = useCarteStore((state):any=>state)
  return (
    <div>
       <IconButton
              onClick={() => addProductToCart(products) || toast.success("Product added to cart")}
              icon={<ShoppingCart size={20} className="text-gray-600" />} 
            />
    </div>
  )
}

export default AddtocartProductcard
