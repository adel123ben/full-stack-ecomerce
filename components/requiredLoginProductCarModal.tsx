"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import { signIn } from "next-auth/react";
import IconButton from "./icon-button";
import { ShoppingCart } from "lucide-react";
  
  export function AlertDialogLoginProductCard() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
        <IconButton
             
              icon={<ShoppingCart size={20} className="text-gray-600" />} 
            />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Would you like to add this product to your cart?</AlertDialogTitle>
            <AlertDialogDescription>
            Log in to your Estore account to add products to your cart. Or continue shopping without identifying yourself.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => signIn()}>Log in</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  