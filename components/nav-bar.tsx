"use client";
import React from 'react'
import { Button } from './ui/button'
import { Search, ShoppingBag } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import Link from 'next/link'
import { useCarteStore } from '@/lib/hooks/useCartStor'
import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Searchbar from './searchbar';
  

function Navbar() {
  const {cart} = useCarteStore((state:any)=>state);
  const { data: session } = useSession();
  return (
     
    <div className='flex flex-row items-center justify-between p-4 mt-2'>
     <div className='flex flex-row items-center space-x-4 gap-2'>
        <Link href='/'>
        <h1 className='text-xl font-bold cursor-pointer'>Estore</h1>
        </Link>
        <div className='flex flex-row items-center  space-x-4'>
            {/* <h1 className='text-sm text-gray-500 cursor-pointer'>Men</h1>
            <h1 className='text-sm text-gray-500 cursor-pointer'>Women</h1> */}
            <Searchbar />
        </div>
     </div>
     <div className='flex flex-row items-center'>
      {session ? (
        
         <TooltipProvider>
          
  <Tooltip delayDuration={0} >
    <TooltipTrigger  onClick={()=>signOut()} >
      {/* @ts-ignore */}
    <p  className='text-sm text-gray-500 cursor-pointer flex flex-row items-center mr-2'>Hey   {session.user?.data?.name} | </p>
    </TooltipTrigger>
    <TooltipContent onClick={()=>signOut()} className='bg-neutral-950 text-white'>
      <p>Log out</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
         
      ) : 
      <p onClick={()=>signIn()} className='text-sm text-gray-500 flex flex-row items-center cursor-pointer mr-2'>Log in | </p>
      }
      
       
     
      <Link href='/cart'>
      <TooltipProvider>
  <Tooltip delayDuration={0}>
    <TooltipTrigger className='flex mr-5 bg-neutral-950 flex-row items-center rounded-full h-8 w-16'>
    <ShoppingBag className='mr-1 ml-4  text-white' size={17} /> <span className='text-white'>
      {cart.length}
    </span>
    </TooltipTrigger>
    <TooltipContent className='bg-neutral-950 text-white'>
      <p>your cart</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
      </Link>
        </div>
    </div>
  )
}

export default Navbar
