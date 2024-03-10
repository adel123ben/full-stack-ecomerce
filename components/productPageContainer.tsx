"use client";

import React,{useEffect, useState} from 'react'
import ProductCard from './productCard';
import axios from 'axios';


type  Props = {
    data: any
}
export default function ProductsPageContainer({data}: Props) {
    console.log('mydta',data)
    // const [data, setData] = useState<any>([]);
    // useEffect(() => {
    //     async function getData() {
    //       const res = await axios.get('http://localhost:5000/blog');
    //       console.log(res.data);
    //       setData(res.data);
         
    //     }
    //     getData();
    // }, []);
  return (
    <div className='container my-24'>

{data.length > 0 ? <h1 className="text-2xl font-medium">Featured Products</h1> : <h1 className="text-2xl font-bold mt-10">No Products </h1>}
<div className='flex flex-col items-center justify-center mt-16'>
  {data.length > 0 ? <h1 className="text-2xl font-bold"></h1> : <h1 className="text-2xl font-bold mt-10">Sorry no products found! <img className='h-48 flex flex-col ml-16 items-center justify-center object-contain' src="https://raw.githubusercontent.com/AntonioErdeljac/next14-miro-clone/3c00b853cfbdbc6c139a9533deeeb735b35aee93/public/empty-search.svg" alt="" /> </h1>}
</div>

         <div className="-mt-3 gap-2 space-x-4  md:space-x-7 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 lg:grid-cols-4">
         
      {Array.isArray(data) && data.map((product: any) => (
        <ProductCard  key={product._id} products={product} />
      ))}
    </div>
      </div>

    
  )
}