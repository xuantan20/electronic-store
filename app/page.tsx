'use client'
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import { products } from "@/utils/products";
import ProductCard from "./components/products/ProductCard";
import { useState } from "react";
import { CartProductType } from "./product/[productId]/ProductDetails";
export default function Home() {
  const [productType,setProductType] = useState<CartProductType[] | null>(null);
  const filteredPhones = products.filter((item) => {
    return item.category === "Phone"
  }) 
  const filteredAccesories = products.filter((item) => {
    return item.category === "Accesories"
  }) 
  const filteredWatchs = products.filter((item) => {
    return item.category === "Watch"
  }) 
  const filteredLaptop = products.filter((item) => {
    return item.category === "Laptop"
  }) 
  
  return (
    <div className="p-8">
      <Container>
       {/* <div className="grid grid-cols-5 items-center">
      
          <span  onClick={() =>setProductType(products)}
          className="border-[1px] 
          border-slate-500
          hover:text-red-600 
          bg-slate-400
          rounded-md cursor-pointer 
          justify-self-center
          min-w-[52px] text-center">All</span>
      
          <span  onClick={() =>setProductType(filteredPhones)}
          className="border-[1px] 
          border-slate-500
          hover:text-red-600 
          bg-slate-400
          items-center 
          cursor-pointer
          rounded-md
          justify-self-center">Phone</span>

      
      <span  onClick={() =>setProductType(filteredLaptop)}
      className="border-[1px] 
      border-slate-500
      hover:text-red-600 
      bg-slate-400
      rounded-md cursor-pointer 
      justify-self-center
      min-w-[52px] text-center">Laptop</span>
      
          <span onClick={() => setProductType(filteredAccesories)}
          className="border-[1px]
          border-slate-500
          items-center
          bg-slate-400
          hover:text-red-600
          cursor-pointer
          rounded-md
          justify-self-center">Accesories</span>

       
          <span onClick={() => setProductType(filteredWatchs)} 
          className="cursor-pointer
          items-center
          border-[1px]
          border-slate-500
          bg-slate-500
          hover:text-red-700
          justify-self-center
          rounded-md
          ">Watch</span>
       </div> */}
        <div className="mt-5">
          <HomeBanner/>
        </div>
        <div className="grid grid-cols-2
        sm:grid-cols-3 lg:grid-cols-5
        xl:grid-cols-6 gap-8">
          {productType ? productType.map((product:any) => {
            return (<ProductCard key={product.id} data={product}/>)
          }):products.map((product:any) =>{
            return <ProductCard key={product.id} data={product}/>
          }) }
        </div>
      </Container>
    </div>
  );
}
