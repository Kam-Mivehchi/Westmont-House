import { useState } from 'react'
import { StyledNav } from "../styles/Layout.styles"
import Link from 'next/link'
import Image from "next/image"
import { Twirl as Hamburger } from 'hamburger-react'
import useWindowSize from "@rooks/use-window-size"

const Navbar = () => {
   const { innerWidth } = useWindowSize();
   const [isOpen, setOpen] = useState(innerWidth > 768 ? true : false)
   return (
      <StyledNav>
         <img src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.svg" alt="Westmont House Logo" />



         {/* <span className="large-screen" >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/about">Gallery</Link>
            <Link href="/about">FAQs</Link>
            <Link href="/about">Contact</Link>
         </span> */}
         <span style={{ display: `${isOpen ? "flex" : "none"}` }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/about">Gallery</Link>
            <Link href="/about">FAQs</Link>
            <Link href="/about">Contact</Link>
         </span>
         <Hamburger toggled={isOpen} toggle={setOpen} />

      </StyledNav>
   )
}

export default Navbar