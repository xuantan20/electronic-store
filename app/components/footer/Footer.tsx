import React from 'react'
import Container from '../Container'
import FooterList from './FooterList'
import Link from 'next/link'
import { MdFacebook } from 'react-icons/md'
import { AiFillAmazonSquare, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className='bg-slate-700
    text-slate-200 text-sm mt-80'>
        <Container>
            <div className='flex flex-col md:flex-row
            justify-between pt-16 pb-8'>
                <FooterList>
                    <h3 className='text-base font-bold
                    mb-2'>Shop Categories</h3>
                    <Link href='#'>Phones</Link>
                    <Link href='#'>Laptops</Link>
                    <Link href='#'>Destops</Link>
                    <Link href='#'>Watches</Link>
                    <Link href='#'>Accessocies</Link>
                </FooterList>
               <FooterList>
                    <h3 className='text-base font-bold
                    mb-2'>Customer Service</h3>
                    <Link href="#">Contact Us</Link>
                    <Link href="#">Shipping Policy</Link>
                    <Link href="#">Returns & Exchanges</Link>
               </FooterList>
                    <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                        <h3 className='text-base font-bold
                        mb-2'>About Us</h3>
                            <p className='mb-2'>
                                At our electronic store, we are dedicated
                                to providing the latest and greatest devices
                                and accessories to our customers with a wide
                                selection of phones, laptops, watches and
                                accessories.  
                            </p>
                            <p>{new Date().getFullYear()} XT-shop.
                            All right reserved </p>
                    </div>
                    <FooterList>
                        <h3 className='text-base font-bold
                        mb-2'>Follow Us</h3>
                        <div className='flex gap-2'>
                            <Link href="#">
                                <MdFacebook size={24}/>
                            </Link>
                            <Link href="#">
                                <AiFillAmazonSquare size={24}/>
                            </Link>
                            <Link href="#">
                                <AiFillInstagram size={24}/>
                            </Link>
                            <Link href="#">
                                <AiFillYoutube size={24}/>
                            </Link>
                        </div>
                    </FooterList>
            </div>
        </Container>
    </footer>
  )
}

export default Footer