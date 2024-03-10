
import { Button } from "@/components/ui/button"
import React from 'react'


import axios from 'axios'

async function getData(id: string) {
  const res = await axios.get(`${process.env.API_URL}/product/${id}`)
  return res.data
}
export default  async function SinglePageItem({
    params,
    searchParams,
  }: {
    params: { id: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
    const id = params.id
    const data = await getData(id)
    console.log(data)
  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto my-8 md:flex-row">
      <div className="flex-none w-1/2">
        <img
          alt=""
          className="object-cover rounded-lg w[600px] h-96 ml-10"
          height="500"
          src={data.data?.image}
          style={{
            aspectRatio: "500/500",
            objectFit: "cover",
          }}
          
        />
      </div>
      <div className="flex flex-col space-y-4 p-8">
        <h1 className="text-3xl font-bold">{data.data?.title}</h1>
        <p className="text-xl font-semibold">${data.data?.price}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Size:  {data?.data?.size.name}</span>
            
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Color: {data?.data?.color.name}</span>
            
          </div>
        </div>
        <Button className="flex items-center space-x-2 rounded-full bg-neutral-950">
          <span>Add to Cart</span>
          <ShoppingCartIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}