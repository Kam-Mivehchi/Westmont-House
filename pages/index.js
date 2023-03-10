import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/assets/heroVideo.mp4'
import Link from 'next/link'

import { Inter } from '@next/font/google'

import styled from 'styled-components'
import HomeGrid from '../components/HomeGrid'

const inter = Inter({ subsets: ['latin'] })

const HeroContainer = styled.section`
position: relative;
text-align: center;
z-index:-1;
max-width:${({ theme }) => theme.breakpoints.xl};
margin:0 auto;
div{
  background-color:rgb(0,0,0,.3);
  width:100%;
height:min(50vh,20em);


 position:absolute;
 border-radius: inherit;
}
video{
height:min(50vh,20em);
width:100%;
object-fit:cover;
  border:.5em solid ${({ theme }) => theme.color.accent};
  border-left:0;
  border-right:0;
  
}

h1 {
  color:${({ theme }) => theme.color.fontLight};
  // filter: drop-shadow(0 0 em 3em rgb(0,0,0));
  filter: drop-shadow(2px 2px .25em  ${({ theme }) => theme.color.accent2});

  z-index:10;
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%, -50%);
  font-weight:bold;
  font-size:3em;
  width:100%;
  // opacity:1;

}
@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}){
video{

  border:.25em solid ${({ theme }) => theme.color.accent};;
  border-radius:${({ theme }) => theme.border.outer}
 

}
div{
  border-radius:${({ theme }) => theme.border.outer}
}
}
`


export default function Home() {
  return (
    <>
      <Head>
        <title>Westmont House - Northern Virginia Assited Living</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroContainer>
        <div></div>
        <video autoPlay loop muted >
          <source src={Hero} type="video/mp4" />
        </video>
        <h1>Premier Assisted Living in Northern Virginia</h1>
      </HeroContainer>
      <HomeGrid />

    </>
  )
}
