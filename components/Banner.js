// import { Content } from '@next/font/google'
import React from 'react'
import { StyledBanner } from '../styles/Layout.styles'
import content from '../Utils/content.js'


const Banner = () => {
   return (
      <StyledBanner>
         Call us for pricing and availability: <a href={`tel:+1${content.contact.phone}`}>
            {content.contact.phone}
         </a>

      </StyledBanner>
   )
}

export default Banner