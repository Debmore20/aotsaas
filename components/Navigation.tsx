"use client"

import Link from "next/link";
import './Navigation.modules.css'
import { useState, useEffect } from "react";
import {VT323,Lora,Rubik_Dirt} from 'next/font/google'

const lora = Lora(
    {
      weight:'700',
      variable:'--font-lora',
      subsets:["latin"],
      
    }
)

const rubik = Rubik_Dirt(
    {
      weight:"400",
      variable:'--font-vesper',
      subsets:["latin"],
      
    }
)
const vt323 = VT323(
    {
      weight:'400',
      variable:'--font-Lora',
      subsets:["latin"],
      
    }
)

export default function Navigation() {
    
    let navUl: HTMLElement | null = null
    useEffect(()=>{ navUl = document.getElementById('nav-ul')})

    const [menuToggle, setMenuToggle] = useState(0)

    const menuToggler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (!menuToggle) {
            navUl == null ? false : navUl.style.display = 'block'
            setMenuToggle(1)
            
        } else {
            navUl == null ? false : navUl.style.display = 'none'
            setMenuToggle(0)
            
        }
        
    }

    return (
        <>
            <nav className="mt-2 bg-slate-50 sticky top-0">
                <div className="px-6 py-8">

                    <button onClick={menuToggler} className="w w-5 h-5 bg-black float-left mt-[6.4px]">

                    </button>
                    <div className={`${rubik.className} font-[700] text-[24px] ml-8`}>
                        <span className="">Unx-Titan</span>
                    </div>
                    <div className="text-white text-[12px] absolute right-6 top-[40px]">
                        <Link href={'/'} className={`${vt323.className} px-3 py-2 rounded-sm bg-slate-900 `}>
                            Unleash Titan!
                        </Link>
                    </div>
                </div>

                <ul id='nav-ul' className="hidden float-none uppercase text-[18px] text-white text-opacity-90 bg-slate-900 space-y-6 text-center py-6 ">
                    <li>
                        <Link className={`${vt323.className} active `} href={'/'}>Home</Link>
                    </li>

                    <li>
                        <Link className={`${vt323.className} `} href={'/'}>Shop</Link>
                    </li>

                    <li>
                        <Link className={`${vt323.className} `} href={'/'}>Gallery</Link>
                    </li>

                    <li>
                        <Link className={`${vt323.className} `} href={'/'}>Blog</Link>
                    </li>

                </ul>

            </nav>
        </>
    )
}
