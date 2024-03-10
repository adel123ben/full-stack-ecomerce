"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify, LogOut, ShoppingCart } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";

export function MobilMenu() {
  const { data: session } = useSession()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
        <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
        
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div> */}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Link href="/cart">
            <Button size="lg" className="w-full" type="submit">My cart <ShoppingCart className="w-5 h-5 ml-2" /></Button>
            </Link>
           
          </SheetClose>
        </SheetFooter>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4 mt-[700px]">
          {session ? (
        
        
       <>
       <Button size="lg" onClick={()=>signOut()} className='bg-neutral-950 w-full'>Log out</Button>
       </>
         
 
    
     
     
        
     ) : 
    <Button onClick={()=>signIn()} >Sign in</Button>
     }
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
