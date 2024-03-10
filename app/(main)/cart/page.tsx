"use client";

import React from 'react'
import { signIn, signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import CartPageItem  from '@/components/cartPageItem';
import { useCarteStore } from '@/lib/hooks/useCartStor';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ChevronDownIcon } from 'lucide-react';
export default function Component() {
    const { data: session } = useSession()
    const {total,cart}:any = useCarteStore((state)=>state)
    if (session) {
      return (
        <>
         {/* <h1 className='text-2xl font-bold p-4 mt-8'>shopping Cart</h1> */}
       <div className='flex flex-col md:flex-row items-center justify-center mb-24'>
      <div className='flex flex-col items-center justify-center p-4 gap-4'>
      {
            cart && cart.length > 0 ? cart.map((item:any) => (
              <>
      <div className='flex flex-col mr-96'>
              <CartPageItem key={item._id} item={item} />
              </div>
           
              </>
              
            )) : null
          }



      </div>
      {cart.length > 0 && (
        
        <div className="max-w-sm mx-auto fixed md:top-32 sm:bottom-0 sm:right-[50%]   md:right-0 w-78 p-6 bg-gray-100 rounded-md my-8   shadow-md">
        <h2 className="text-lg font-semibold">Summary</h2>
        <div className="mt-4">
          {/* <div className="flex justify-between">
            <span>As-tu un code promo ?</span>
            <ChevronDownIcon className="w-5 h-5" />
          </div> */}
          <div className="flex justify-between mt-4">
            <span>Subtotal</span>
            <span>{total} $</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Estimated pick-up and shipping costs</span>
            <span>Free</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">{total} $</span>
          </div>
        </div>
        <div className="mt-6">
          <Link href="https://buy.stripe.com/test_14k7uxdo4f1s1c4fYY">
          <Button className="w-full bg-black text-white py-3 rounded-full">Paiement</Button>
          </Link>
          
        </div>
        {/* <div className="mt-4 flex justify-center">
          <img
            alt="PayPal logo"
            className="h-5"
            height="20"
            src="/placeholder.svg"
            style={{
              aspectRatio: "60/20",
              objectFit: "cover",
            }}
            width="60"
          />
        </div> */}
      </div>
      
      )}
      
          {cart.length == 0 && (
            <>
            <div className='flex flex-col items-center justify-center mt-20'>
            <img width={300} height={300} className='flex flex-row items-center justify-center' src="https://m.media-amazon.com/images/G/08/cart/empty/kettle-desaturated._CB424694058_.svg" alt="" />
               <h1 className='text-xl p-4 font-semibold text-gray-500/70'>Can&apos;t find any items? Continue shopping to discover more</h1>
               {/* <Button size="lg" variant="destructive" className='w-64 rounded-full' onClick={() => signIn()}>Login</Button> */}
               <Link href="/">
               <Button size="lg" variant="outline" className='text-red-500 mt-6 mb-32'>Continue Shopping</Button>
               </Link>
            </div>
            </>
              
          )}
       
       </div>
        </>
      )
    }
    return (
      <>
      {/* <h1 className='text-2xl font-bold p-4 mt-8'>shopping Cart</h1> */}
       <div className='flex flex-col items-center justify-center'>
        <img width={300} height={300} className='flex flex-row items-center justify-center' src="https://m.media-amazon.com/images/G/08/cart/empty/kettle-desaturated._CB424694058_.svg" alt="" />
        <h1 className='text-xl p-4 font-semibold text-gray-500/70'>Can&apos;t find any items? Continue shopping to discover more</h1>
        <Button size="lg" variant="destructive" className='w-64 rounded-full' onClick={() => signIn()}>Login</Button>
        <Link href="/">
        <Button size="lg" variant="outline" className='text-red-500 mt-6 mb-16'>Continue Shopping</Button>
        </Link>
       </div>
      </>
    )
  }