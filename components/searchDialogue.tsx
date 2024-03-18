"use client"
import React, { useState } from 'react'
import {SearchIcon} from "lucide-react"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useRouter } from 'next/navigation'
export default function SearchDialog() {
    const [searchText,setSearchText] = useState<String>("")
   const router= useRouter()
   const [open, setOpen] = useState(false);
    const handleClick=()=>{
    console.log(searchText)
    setOpen(false)
    window.location.href = `/?query=${searchText}`
   }
    return (
    <Dialog open={open} onOpenChange={setOpen} >
    <DialogTrigger>
        <SearchIcon size={20}/>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-2xl my-3'>You need something?</DialogTitle>
        <DialogDescription>
          <div className="flex gap-3">
          <Input 
          
          type="text"
           placeholder="product ..." 
           onChange={(e)=>setSearchText(e.target.value)}
           />
          <button
          onClick={handleClick}
          className="bg-[#d16002] hover:bg-opacity-70 text-white font-bold py-2 px-4 rounded">Search</button>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  
  )
}