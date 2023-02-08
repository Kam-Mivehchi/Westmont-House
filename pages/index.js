import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/assets/heroVideo.mp4'
import Link from 'next/link'

import { Inter } from '@next/font/google'

import styled from 'styled-components'
import { Grid, FeaturedCard, EnclosedCard, ThumbnailLink } from '../styles/Utilities.styles'

const inter = Inter({ subsets: ['latin'] })

const HeroContainer = styled.section`
position: relative;
text-align: center;
// padding:0 1em;
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

const content = {
  cards_feature: [
    {
      title: "Gallery",
      image: ['https://via.placeholder.com/200', "placeholder-alt"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id harum excepturi rerum perspiciatis sapiente enim, architecto ipsum molestiae tempore velit, suscipit impedit repellat nisi veritatis deserunt quibusdam sequi officiis.",
      link: ["Learn More", "/about"],
      order: 2
    },
    {
      title: "Floor Plan",
      image: ['https://via.placeholder.com/300', "placeholder-alt"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id harum excepturi rerum perspiciatis sapiente enim, architecto ipsum molestiae tempore velit, suscipit impedit repellat nisi veritatis deserunt quibusdam sequi officiis. ",
      link: ["Learn More", "/about"],
      order: 3
    },
  ],
  cards_enclosed: [
    {
      title: "Services",
      image: ['https://via.placeholder.com/300', "placeholder-alt"],
      bullets: [
        "On-Site staff",
        "Senior living accommodations, including furniture, if needed",
        "Most rooms have private baths",
        "Utilities, including air conditioning, basic cable and WiFi",
        'Assistance with activities of daily living',
        'Arrangements to meet incidental medical and dental needs',
        'Daily housekeeping and laundry services',
        'Assistance with transportation',
        'Assistance with medications',
        'Activity program',
        '3 nutritious meals per day, plus snacks',
        'On-going observation and assessments of residents’ conditions and needs',
        'Communication with family members of such conditions/needs'
      ],
      description: "sample text",
      link: ["Learn More", "/about"],
      order: 1
    },
    {
      title: "Amenities",
      image: ['https://via.placeholder.com/300', "placeholder-alt"],
      bullets: [

        "There are numerous common areas for the residents to enjoy company, family or personal solitude.",
        "Several outside areas are available as well to host your guests.",
        "Indoor and outdoor dining areas are available.",
        "A beautiful putting green for your entertainment.",
        "Separate activity room with big screen TV, games, music and library",
        "Convenient to village of Tysons', Disney Land, shopping and excellent medical facilities.",
        "On-Site staff",
        "Senior living accommodations, including furniture, if needed",
        "Most rooms have private baths",
        "Utilities, including air conditioning, basic cable and WiFi",
        'Assistance with activities of daily living',
      ],
      description: "sample text",
      link: ["Learn More", "/about"],
      order: 1
    },
    {
      title: "Contact",
      image: ['https://via.placeholder.com/200', "placeholder-alt"],

      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id harum excepturi rerum perspiciatis sapiente enim, architecto ipsum molestiae tempore velit, suscipit impedit repellat nisi veritatis deserunt quibusdam sequi officiis. ",
      link: ["Learn More", "/about"],
      order: 4
    },
  ],
  thumbnails: [
    {
      title: "About",
      image: ['https://via.placeholder.com/300', "placeholder-alt"],
      link: "/about"
    },
    {
      title: "FAQs",
      image: ['https://via.placeholder.com/300', "placeholder-alt"],
      link: "/faqs"
    },
    {
      title: "Floor Plans",
      image: ['https://via.placeholder.com/300', "placeholder-alt"],
      link: "/floorplans"
    }
  ]
}
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
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

      <Grid>
        {content.cards_enclosed.map((section, idx) => {
          return (
            <EnclosedCard key={idx} lg={section.title !== 'Contact' ? 6 : 12} order={(section.title == 'Contact') && '5'}>
              <div>
                <h2>{section.title}</h2>
                <img src={section.image[0]} alt={section.image[1]} />
              </div>
              <p>{section.description}</p>
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet, idx) => {
                    return <li key={idx}>{bullet}</li>
                  })}
                </ul>
              )}
              <Link href={section.link[1]}>

                <button>{section.link[0]}</button>
              </Link>
            </EnclosedCard>)
        })}
        {content.cards_feature.map((section, idx) => {
          return (
            <FeaturedCard key={idx}  >
              {/* the title and image order switch for the floor plan card */}
              < div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                <img src={section.image[0]} alt={section.image[1]} />
                <h2>{section.title}</h2>
              </div>
              <p>{section.description}</p>
              <Link href={section.link[1]}>

                <button>{section.link[0]}</button>
              </Link>
            </FeaturedCard>)
        })}

        {content.thumbnails.map((section, idx) => {
          return (

            <ThumbnailLink key={idx}>
              <Link href={section.link}>
                <img src={section.image[0]} alt={section.image[1]} />
                <h3>{section.title}</h3>
              </Link>
            </ThumbnailLink>
          )
        })}


      </Grid >
    </>
  )
}
