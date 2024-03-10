"use client";

import React from 'react'
import { useSession } from 'next-auth/react';
import AddtocartProductcard from './addtocartProductcard';
import { AlertDialogLoginProductCard } from './requiredLoginProductCarModal';


type Props = {
    data: any
}
function ConditionalModalLoginCard({data}:Props) {
    const { data: session } = useSession();
    if(session){
        <AddtocartProductcard products={data} />
    }
  return (
    <div>
      <AlertDialogLoginProductCard />
    </div>
  )
}

export default ConditionalModalLoginCard
