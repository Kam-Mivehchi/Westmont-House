import React from 'react'
import { StyledNav } from "../styles/Layout.styles"
import Link from 'next/link'
import Image from "next/image"
import { Twirl as Hamburger } from 'hamburger-react'
const Navbar = () => {
   return (
      <StyledNav>
         <img src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.svg" alt="Westmont House Logo" />


         <span>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/about">Gallery</Link>
            <Link href="/about">FAQs</Link>
            <Link href="/about">Contact</Link>
         </span>
         <Hamburger />

      </StyledNav>
   )
}

export default Navbar