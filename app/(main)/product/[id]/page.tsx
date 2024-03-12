import { Button } from "@/components/ui/button"
import React from 'react'


import axios from 'axios'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ChevronDownIcon } from 'lucide-react';
// import { useSession } from "next-auth/react"
import ProductsPageContainer from "@/components/productPageContainer"
import Addtocartbutton from "@/components/add-tocart-button"
import RenderaddtocartButton from "@/components/renderaddtocartButton"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import OrderCard from "@/components/orderCard";
// import { useCarteStore } from "@/lib/hooks/useCartStor"
async function getData(id: string) {
  const res = await axios.get(`${process.env.API_URL}/product/${id}`)
  return res.data
}
export default  async function page({
    params,
    searchParams,
  }: {
    params: { id: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
    const id = params.id
    const data = await getData(id)
    console.log(data)
    // add to carte
    // const {addProductToCart} = useCarteStore((state):any=>state)
   
  return (
    <div className="max-w-4xl mx-auto p-6 mt-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="mb-8 md:mb-0">
        <img
          alt="Montre Naviforce"
          className="w-full h-auto"
          height="500"
          src={data.data?.image}
          style={{
            aspectRatio: "500/500",
            objectFit: "cover",
          }}
          width="500"
        />
      </div>
      <div>
        <h1 className="text-3xl font-medium mb-4">{data.data?.title}</h1>
        <p className="text-xl font-mono mb-6 text-gray-700 divide-x">DA {data.data?.price} DZD</p>
        <div className="mb-8 text-gray-500">
          <h2 className="font-semibold mb-2">الميزات:</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>ساعة أصلية</li>
            <li>حزام سيليكون</li>
            <li>كل العقارب تعمل</li>
            <li>ماء</li>
            <li>مقاومة للماء 3 bars</li>
            <li>الساعة مع البطاقة الأصلية</li>
          </ul>
        </div>
        <div className="mb-8 text-gray-500">
          <h2 className="font-semibold mb-2">Caractéristiques:</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Montre originale</li>
            <li>Bracelet en silicone</li>
            <li>Toutes les danses fonctionnent</li>
            <li>Résistant à l&apos;eau 3 barres</li>
            <li>La montre est livrée avec la boîte d&apos;origine</li>
          </ul>
        </div>
        <OrderCard  product={data.data}/>
      </div>
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
