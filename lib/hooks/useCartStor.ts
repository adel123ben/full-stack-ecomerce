import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCarteStore = create(persist((set) => ({
    cart: [],
    total: 0,
    addProductToCart: (product:any) => set((state:any) => {
        const exist = state.cart.find((item:any) => item._id === product._id)
        if(exist){
            return {cart: [...state.cart]}
        }
         return  {
            cart: [...state.cart, {...product, quantity: 1},
            ],
            total: state.total + product.price
        }
    }),
    removeProductFromCart:(product:any)=>set((state:any)=>{
        return {cart: state.cart.filter((item:any)=>item._id !== product._id),
        total: state.total - product.price * product.quantity
        }
    }),
    increaseQuantity: (product:any) => set((state:any) => {
        return {cart: state.cart.map((item:any) => item._id === product._id ? {...item, quantity: item.quantity + 1} : item),
        total: state.total + product.price}
    }),
    decreaseQuantity: (product:any) => set((state:any) => {
        const itemToDecrease = state.cart.find((item:any)=>item._id ===product._id)
        if(itemToDecrease.quantity ===1){
            return {cart: state.cart.filter((item:any)=>item._id !== itemToDecrease._id),
                total: state.total - itemToDecrease.price * itemToDecrease.quantity
            }
        }
        
        return {cart: state.cart.map((item:any) => item._id === product._id ? {...item, quantity: item.quantity -1} : item),
        total: state.total - product.price}
    }),
}), {
    name: 'cart-store',
    storage: createJSONStorage(() => sessionStorage),
}))
