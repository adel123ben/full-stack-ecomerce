"use client"

import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url("		https://github.com/AntonioErdeljac/next13-ecommerce-store/blob/master/public/billboard-bg-2.png?raw=true")` }} className="rounded-xl   relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
          Introducing our latest collection!
          </div>
        </div>
      </div>
    </div>
  )
}
