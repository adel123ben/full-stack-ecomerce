import React from 'react'

import ProductsPageContainer from '@/components/productPageContainer'
import axios from 'axios'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

  
  interface Props {
    children: React.ReactNode
  }
  async function getData() {
  
    const res = await axios.get(`${process.env.API_URL}/product`)
    return res.data
   
  }
  export default async function layout({
   
    children,
    
  }: {
    children: React.ReactNode
  }) {
    const session = await getServerSession(authOptions)
    console.log(session)
  const data = await getData()
  return (
    <div>
      {children}
      <ProductsPageContainer data={data} />
    </div>
  )
}


