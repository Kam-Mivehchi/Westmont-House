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
      position:absolute;
      border-radius: inherit;
      height:50vh;
      z-index:10;



    }

    video{
      height:50vh;
      width:100%;
      object-fit:cover;
      border:.5em solid ${({ theme }) => theme.color.accent};
      border-left:0;
      border-right:0;
      border-bottom:0;
    }

    h1 {
      color:${({ theme }) => theme.color.fontLight};
      text-shadow:2px 2px .25em  ${({ theme }) => theme.color.accent2};
      font-weight:bold;
      font-size:min(5vw,2em);
      width:100%;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}){
      video{
        border:0;
        border-radius:${({ theme }) => theme.border.outer};
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
        <div>
          <h1>Premier Assisted Living in Northern Virginia</h1>

        </div>
        <video autoPlay loop muted >
          <source src={Hero} type="video/mp4" />
        </video>
      </HeroContainer>
      <HomeGrid />

    </>
  )
}
