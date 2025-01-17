/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import SetColor from '@/app/components/products/SetColor';
import SetQuantity from '@/app/components/products/SetQuantity';
import ProductImage from '@/app/components/products/ProductImage';
import Button from '@/app/components/Button';
import { useCart } from '@/hooks/useCart';
import { MdCheckCircle } from 'react-icons/md';
import { useRouter } from 'next/navigation';
interface ProductDetailsProps{
    product:any
}
export type CartProductType = {
  id: string,
  name: string,
  discription: string,
  category: string,
  brand: string,
  selectedImg: SelectedImgType,
  quantity: number,
  price: number
}
export type SelectedImgType = {
  color:string, 
  colorCode: string,
  image: string
}

const BetweenLines = () => {
  return <hr className='w-[30%] my-2'/>
}

const ProductDetails:React.FC<ProductDetailsProps> = ({product}) => {
  const router = useRouter();
  const {handleAddProductToCart, cartTotalQty, cartProducts} = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [cartProduct, setCartProduct] = 
  useState<CartProductType>({
    id:product.id,
    name: product.name,
    discription: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: {...product.images[0]},
    quantity: 1,
    price:product.price
  });

  console.log(cartProducts)

  useEffect(() => {
    setIsProductInCart(false)
    if(cartProducts){
      const existingIndex =cartProducts.findIndex((item) =>
       item.id === product.id);
      if(existingIndex > -1){
        setIsProductInCart(true);
      }
    }
  },[cartProducts])
  const productRating=product.reviews.reduce
  ((acc:number, item:any)=>item.rating+acc, 0)/
  product.reviews.length;
  const handleColorSelect = useCallback((value:
    SelectedImgType) => {
      setCartProduct((prev) => {
        return {...prev, selectedImg:value}
      })
    }, [cartProduct.selectedImg])
    const handleQtyDecrease = useCallback(()=> {
      if(cartProduct.quantity <= 1) {
        return;
      }
      setCartProduct((prev) => {
        return {...prev, quantity: --prev.quantity}
      });
    },[cartProduct]);
    const handleQtyIncrease = useCallback(() => {
      if(cartProduct.quantity >= 99){
        return;
      }
      setCartProduct((prev)=> {
        return {...prev, quantity: ++prev.quantity}
      })
    }, [cartProduct])
  return (
    <div className='grid grid-cols-1
    md:grid-cols-2 gap-12'>
        <ProductImage 
            product={product}
            cartProduct={cartProduct}
            handleColorSelect={handleColorSelect}/>
        <div className='flex flex-col '>
          <h2 className='text-3xl font-medium
          text-slate-700'>{product.name}</h2>
          <div className='flex items-center gap-2'>
            <Rating value={productRating} readOnly/>
            <div>{product.reviews.length}reviews</div>
          </div>
          <BetweenLines/>
          <div className='text-justify'>{product.description}</div>
          <BetweenLines/>
          <div>
            <span className='font-semibold'>Category:
            </span>{product.category}
          </div>
          <div>
            <span className='font-semibold'>Brand:
            </span>{product.brand}
          </div>
          <div className={product.inStock ?
          "text-teal-400":"text-rose-400"}>
          {product.inStock ? "In Stock" : "Outof Stock"}
          </div>
          <BetweenLines/>
          {isProductInCart ? (
          <>
            <p className='mb-2 text-slate-500 flex items-center gap-1'>
              <MdCheckCircle className='text-teal-400' size={20}/>
              <span>Product added to cart</span>
            </p>
            <div className='max-w-[300px]'>
              <Button small outline label="View cart" 
              onClick={() => router.push('/cart')}/>
            </div>
          </>
          ) : (<>
              <SetColor 
              images={product.images} 
              cartProduct={cartProduct}
              handleColorSelect={handleColorSelect}/>
              <BetweenLines/>
              <SetQuantity 
              cartProduct={cartProduct}
              handleQtyIncrease={handleQtyIncrease}
              handleQtyDecrease={handleQtyDecrease}/>
              <BetweenLines/>
              <div className='max-w-[300px]'>
              <Button small label="Add To Cart" 
              onClick={() => handleAddProductToCart(cartProduct)}/>
              </div>
          </>)}
        </div>
    </div>
  )
}

export default ProductDetails