import ProductsPageContainer from '@/components/productPageContainer'
import React from 'react'
import axios from 'axios'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import MainPageContainer from '@/components/mainPageContainer'

async function getData(query:string | string[] | undefined) {
  
  const res = await axios.get(`${process.env.API_URL}/product?query=${query ? query : ""}`)
  return res.data
 
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { query: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession(authOptions)
  console.log(session)
const query=searchParams?.query
console.log(query)
const data = await getData(query)

//   console.log(data)
return  <>
<>
<div className='max-w-screen-2xl mx-auto'>
<MainPageContainer />
<div className='-mt-10'>
  {/* {data.length > 0 ? <h1 className="text-2xl font-bold">Search Results</h1> : <h1 className="text-2xl font-bold">No Results</h1>} */}
<ProductsPageContainer data={data} />
</div>
</div>

</>
 
</>
}