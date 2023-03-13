import React, { useState } from 'react'
import Link from 'next/link'
import Image from "next/image"
function ResponsiveNavbar() {
   const [open, setOpen] = useState(false)
   return (
      <div className="page-wrapper">
         <div className="nav-wrapper">
            <nav className="navbar">
               <img src="/images/logo/svg/logo-no-background.svg" alt="Company Logo" />

               <div className={`menu-toggle ${open ? "is-active" : ""}`} id="mobile-menu" onClick={() => setOpen(!open)}>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
               </div>

               <ul className={`nav no-search ${open ? "mobile-nav" : ""}`}>
                  <li className="nav-item"><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
                  <li className="nav-item"><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
                  <li className="nav-item"><Link href="/faqs" onClick={() => setOpen(false)}>FAQs</Link></li>
                  <li className="nav-item"><Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link></li>
               </ul >
            </nav >
         </div >


         <style jsx>{`
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Lato', 'Arial', sans-serif;
            }

            /* HEADINGS */

            h1, p {
            color: #fff;
            text-align: center;
            line-height: 1.4;
            }

            h1 {
            font-size: 2.2rem;
            }

            h2 {
            color: #000;
            font-size: 1.3rem;
            text-align: center;
            line-height: 1.4;
            margin-bottom: 10px;
            }

            /* BASIC SETUP */

            .page-wrapper {
           max-width:1200px;
            margin:auto;
            height: auto;
            }

            .nav-wrapper {
            width: 100%;
            position: -webkit-sticky; /* Safari */
            position: sticky;
            top: 0;
            background-color: #fff;
            }

            

            /* NAVIGATION */

            .navbar {
            display: grid;
            grid-template-columns: 1fr 3fr;
            align-items: center;
            height: 50px;
            overflow: hidden;
            margin:1em 0;
            position:relative;
      
            }

            .navbar img {
            height: 3.5em;
            aspect-ratio:2/1;
            justify-self: start;
            margin-left: 20px;
            }

            .navbar ul {
            list-style: none;
            display: grid;
            grid-template-columns: repeat(4,1fr);
            justify-self: end;
            position:relative;
            z-index:-1;
            }

            .nav-item a {
            color: #000;
            font-size: 0.9rem;
            font-weight: 400;
            text-decoration: none;
            transition: color 0.3s ease-out;
            font-weight:bold;
            }

            .nav-item a:hover {
            color: #3498db;
            }

            /* SEARCH FUNCTION */

            #search-icon {
            font-size: 0.9rem;
            margin-top: 3px;
            margin-left: 15px;
            transition: color 0.3s ease-out;
            }

            #search-icon:hover {
            color: #3498db;
            cursor: pointer;
            }

            .search {
            transform: translate(-35%);
            -webkit-transform: translate(-35%);
            transition: transform 0.7s ease-in-out;
            color: #3498db;
            }

            .no-search {
            transform: translate(0);
            transition: transform 0.7s ease-in-out;
            }

            .search-input {
            position: absolute;
            top: -4px;
            right: -125px;
            opacity: 0;
            z-index: -1;
            transition: opacity 0.6s ease;
            }

            .search-active {
            opacity: 1;
            z-index: 0;
            }

            input {
            border: 0;
            border-left: 1px solid #ccc;
            border-radius: 0; /* FOR SAFARI */
            outline: 0;
            padding: 5px;
            }

            /* MOBILE MENU & ANIMATION */

            .menu-toggle .bar{
               
            width: 25px;
            height: 3px;
            background-color: #3f3f3f;
            margin: 5px auto;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            }

            .menu-toggle {
            justify-self: end;
            margin-right: 25px;
            display: none;
            }

            .menu-toggle:hover{
            cursor: pointer;
            }

            #mobile-menu.is-active .bar:nth-child(2){
            opacity: 0;
            }

            #mobile-menu.is-active .bar:nth-child(1){
            -webkit-transform: translateY(8px) rotate(45deg);
            -ms-transform: translateY(8px) rotate(45deg);
            -o-transform: translateY(8px) rotate(45deg);
            transform: translateY(8px) rotate(45deg);
            }

            #mobile-menu.is-active .bar:nth-child(3){
            -webkit-transform: translateY(-8px) rotate(-45deg);
            -ms-transform: translateY(-8px) rotate(-45deg);
            -o-transform: translateY(-8px) rotate(-45deg);
            transform: translateY(-8px) rotate(-45deg);
            }

           

            /* Media Queries */

            /* Mobile Devices - Phones/Tablets */

            @media only screen and (max-width: 720px) { 
            .features {
               flex-direction: column;
               padding: 50px;
            }
            
            /* MOBILE HEADINGS */
            
            h1 {
               font-size: 1.9rem;
            }
            
            h2 {
               font-size: 1rem;
            }
            
            p {
               font-size: 0.8rem;
            }
            
            /* MOBILE NAVIGATION */
               
            .navbar ul {
               display: flex;
               flex-direction: column;
               position: fixed;
               justify-content: start;
               top: 55px;
               background-color: #fff;
               width: 100%;
               height: calc(100vh - 55px);
               transform: translate(-101%);
               text-align: center;
               overflow: hidden;
            }
            
            .navbar li {
               padding: 15px;
            }
            
            .navbar li:first-child {
               margin-top: 50px;
            }
            
            .navbar li a {
               font-size: 1rem;
            }
               
            .menu-toggle, .bar {
               display: block;
               cursor: pointer;
            }
            
            .mobile-nav {
            transform: translate(0%)!important;
            }
            
            
`}</style>
      </div >
   )
}

export default ResponsiveNavbar

// Copyright(c) 2023 by Kamyar Mivehchi(https://codepen.io/Kam-Mivehchi/pen/ZEMxEmp)
//    Fork of an original work Responsive Navbar Using CSS Grid / Flexbox(https://codepen.io/bowersrd/pen/dwXLba

//       Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and / or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

