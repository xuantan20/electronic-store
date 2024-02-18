'use client'
import React, { useCallback, useState } from 'react'
import UserAvatar from '../products/UserAvatar'
import { AiFillCaretDown } from 'react-icons/ai'
import Link from 'next/link'
import MenuItem from './MenuItem'
import BackDrop from './BackDrop'
const UserMenu = () => {
    const [isOpen, setIsOen] = useState(false);
    const [currentUser, setCurrentUser] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOen((prev) => !prev);
    },[]);
  return (
    <>
    <div className='relative z-30'>
        <div onClick={toggleOpen}
        className='p-2 border-[1px]
        border-slate-400 flex
        flex-row items-center gap-1
        rounded-full cursor-pointer
        hover:shadow-md transition
        text-slate-700 bg-white'>
            <UserAvatar/>
            <AiFillCaretDown/>
        </div>
        {isOpen && (
            <div className='absolute
            rounded-md shadow-md
            w-[170px] bg-white
            overflow-hidden right-0
            top-12 text-sm flex
            flex-col cursor-pointer'>
            {currentUser ?
            <div>
                <Link href= "/orders">
                    <MenuItem onClick={() => {toggleOpen}}>
                        Your Orders
                    </MenuItem>
                </Link>
                <Link href={"/admin"}>
                    <MenuItem onClick={() => {toggleOpen}}>
                        Admin Dashboard
                    </MenuItem>
                </Link>
                    <MenuItem onClick={() => {toggleOpen}}>
                        Logout
                    </MenuItem>
            </div>
        : <div>
            <Link href="/login">
            <MenuItem onClick={toggleOpen}>
                Login
            </MenuItem>
            </Link>
            <Link href="/register">
            <MenuItem onClick={toggleOpen}>
                Register
            </MenuItem>
            </Link>
        </div>
        }
        </div>
        )}       
    </div>  
        {isOpen ? <BackDrop onClick={toggleOpen}/> : null}
    </>
  )
}

export default UserMenu