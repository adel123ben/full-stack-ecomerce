"use client";

import React, { useState } from 'react'
import { Input } from './ui/input'
import { X } from 'lucide-react';
import { Button } from './ui/button';



function Searchbar() {
    const [search, setQuery] = useState("");
   
    const handelKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handelKlick()
        }
    }
    const handelKlick = () => {
        window.location.href = `/?query=${search}`
    }
    const handelClennel = () => {
        setQuery("")
    }
    console.log(search)
  return (
    <div className='relative'>
      <Input onKeyDown={handelKeyPress} className='w-[200px]' value={search} onChange={(e) => setQuery(e.target.value)} placeholder='Search for products'   />
      {search.length > 0 && (
        <>
        {/* <Button className='absolute bg-neutral-950 text-white mr-7 right-4 top-1/2  -translate-y-1/2 cursor-pointer' >Search</Button> */}
        <X size={17} onClick={handelClennel} className='absolute right-4 top-1/2 text-gray-500 -translate-y-1/2 cursor-pointer' />
        </>
          
      )}
     
    </div>
  )
}

export default Searchbar
