import ProductsPageContainer from './productPageContainer'
import React from 'react'
import axios from 'axios'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'

async function getData(name:string | string[] | undefined) {
  
  const res = await axios.get(`${process.env.API_URL}/product?name=${name ? name : ""}`)
  return res.data
 
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession(authOptions)
  console.log(session)
const name=searchParams?.name
console.log(name)
const data = await getData(name)

//   console.log(data)
return  <>
 <ProductsPageContainer data={data} />
</>
}
