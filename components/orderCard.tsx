"use client";
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
// import React, {  useEffect, useRef } from 'react';
// const SHAPES = ['square', 'triangle'];
// const COLOR_DIGIT = "ABCDEF1234567890";


function numberWithCommas(x:any) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

type Props = {
  product: {
    price: number;
  }
}
export default function OrderCard({product}: Props) {
//   const ConfettiButton = () => {
//     const [isConfettiActive, setConfettiActive] = useState(false);
//     const containerRef = useRef(null);
//     useEffect(() => {
//         if (isConfettiActive) {
//             generateConfetti();
//         }
//     }, [isConfettiActive]);
//     const generateRandomColor = () => {
//       let color = "#";
//       for (let i = 0; i < 6; i++) {
//           color += COLOR_DIGIT[Math.floor(Math.random() * COLOR_DIGIT.length)];
//       }
//       return color;
//   };
//   const generateConfetti = () => {
//     const container = containerRef.current;    
//     if (container) {
//         for (let i = 0; i < 50; i++) {
//             const confetti = document.createElement('div');
//             const positionX = Math.random() * window.innerWidth;
//             const positionY = Math.random() * window.innerHeight;
//             const rotation = Math.random() * 360;
//             const size = Math.floor(Math.random() * (20 - 5 + 1)) + 5;            // Set confetti styles
//             confetti.style.left = `${positionX}px`;
//             confetti.style.top = `${positionY}px`;
//             confetti.style.transform = `rotate(${rotation}deg)`;
//             confetti.className = 'confetti ' + SHAPES[Math.floor(Math.random() * 3)];
//             confetti.style.width = `${size}px`
//             confetti.style.height = `${size}px`
//             confetti.style.backgroundColor = generateRandomColor();            // Append confetti to the container
//             container.appendChild(confetti);            
//             // Remove confetti element after animation duration (4 seconds)
//             setTimeout(() => {
//                 container.removeChild(confetti);
//             }, 4000);
//         }
//     }
// };
// const handleClick = () => {
//   setConfettiActive(true);
//   // Reset the confetti after a short delay
//   setTimeout(() => {
//       setConfettiActive(false);
//   }, 4000);
// };
    const [quntity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [wilaya, setWilaya] = useState("");
    const [commune, setCommune] = useState("");
    console.log(wilaya);
    const handladdtocart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setQuantity(quntity + 1);
    }
    const handelDecreaseQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setQuantity(quntity - 1);
        if (quntity === 1) {
            setQuantity(1);
        }
    }

    const totalPrice = product.price * quntity;
    const formattedNumber = numberWithCommas(totalPrice);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/formulaire/createFormulaire`, {
          quntity,
          name,
          phone,
          wilaya,
          commune,
          product
        });
        console.log(response.data);
        setName('');
        setPhone('');
        setWilaya('');
        setCommune('');
        setQuantity(1);
        toast.success('Order Successful😍😍😍');
  
        // Cela pourrait être un message de succès ou les données de l'utilisateur nouvellement enregistré
      } catch (error) {
        toast.error('All fields are required');
        console.error('Erreur lors de l\'enregistrement :', error);
      }
    };
  return (
    <Card className="w-full md:w-[350px] border-[3px] border-stone-950 bg-white rounded-xl shadow-md overflow-hidden">
      <form onSubmit={handleSubmit}>
      <CardHeader className="bg-[#F9F9F9] p-4">
        <CardTitle className="text-lg font-semibold text-gray-900">إستمارة الطلب</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="flex flex-col space-y-1">
            <Label className="font-semibold text-gray-700" htmlFor="fullname">
            لإسم الشخصي *
            </Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} id="fullname" placeholder="لإسم الشخصي" />
          </div>
          <div className="flex flex-col space-y-1">
            <Label className="font-semibold text-gray-700" htmlFor="phone">
              الهاتف *
            </Label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" placeholder="الهاتف" />
          </div>
          <div className="flex flex-col space-y-1">
            <Label className="font-semibold text-gray-700" htmlFor="region">
            الولاية  *
            </Label>
            <Select onValueChange={(e) => setWilaya(e)} defaultValue={wilaya} >
              <SelectTrigger   id="wilaya">
                <SelectValue placeholder="الولاية " />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="الجزائر" >الجزائر</SelectItem>
                <SelectItem value="جيجل">جيجل</SelectItem>
                <SelectItem value="البليدة">البليدة</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1">
            <Label className="font-semibold text-gray-700" htmlFor="address">
            البلدية  *
            </Label>
            <Input value={commune} onChange={(e) => setCommune(e.target.value)} id="address" placeholder="البلدية " />
          </div>
          <div className="flex items-center justify-between border-t border-b py-2">
            <Button onClick={handelDecreaseQuantity} className="text-red-500 bg-neutral-900 ">-</Button>
            <span className="text-lg font-semibold">{quntity}</span>
            <Button onClick={handladdtocart} className=" text-green-500 bg-neutral-900 ">+</Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-[#F9F9F9] p-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div>
            <span className="font-semibold text-gray-700">سعر المنتوج</span>
            </div>
           <div>
           <span className="font-semibold text-gray-900">{product.price} DZD</span>
           </div>
          
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">سعر التوصيل</span>
            <span className="font-semibold text-gray-900">0 DZD</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xl font-bold text-gray-900">Total</span>
            <span className="text-xl font-bold text-gray-900 mb-6">{formattedNumber} DZD</span>
          </div>
          <Button type="submit"  className="sm:w-[300px] md:w-[310px] h-[40px] w-[200px] sm:h-[50px] font-medium text-sm  border-neutral-950 border-4  hover:bg-opacity-70 text-center bg-[#d16002]  text-white animate-bounce">إشتري الأن</Button>
        </div>
      </CardFooter>
      </form>
     








      {/* <button className='font-bold text-xl' onClick={handleClick}>Click for Confetti</button>
        <div className='fixed top-0 left-0 w-full h-full pointer-events-none' ref={containerRef} id="confetti-container"></div> */}
    </Card>
  )
}

