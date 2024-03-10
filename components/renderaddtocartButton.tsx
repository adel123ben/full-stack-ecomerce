"use client";

import React from 'react'
import { useSession } from 'next-auth/react';
import Addtocartbutton from './add-tocart-button';
import { AlertDialogLogin } from './alerteLoginDialogue';


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
function RenderaddtocartButton({products}:Props) {
    const { data: session } = useSession();
    if(session){
        return (
            <>
            <Addtocartbutton products={products} />
            </>
        )
    }
  return (
   <>
  <AlertDialogLogin />
   </>
  )
}

export default RenderaddtocartButton
