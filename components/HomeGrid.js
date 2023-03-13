import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Grid, FeaturedCard, EnclosedCard, ThumbnailLink } from '../styles/Utilities.styles';
import placeholder from '../public/images/placeholder.jpg'
import amenities from '../public/images/amenities.jpg'
import services from '../public/images/services.jpg'
import floorplan from '../public/images/floorplans.jpg'
import contact from '../public/images/contact.jpg'
const content = {
   cards_feature: [
      {
         title: "Gallery",
         image: ["placeholder", "placeholder-alt"],
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id harum excepturi rerum perspiciatis sapiente enim, architecto ipsum molestiae tempore velit, suscipit impedit repellat nisi veritatis deserunt quibusdam sequi officiis.",
         link: ["Learn More", "/about"],
         order: 2
      },
      {
         title: "Floor Plans",
         image: ["floorplans", "placeholder-alt"],
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id harum excepturi rerum perspiciatis sapiente enim, architecto ipsum molestiae tempore velit, suscipit impedit repellat nisi veritatis deserunt quibusdam sequi officiis. ",
         link: ["Learn More", "/about"],
         order: 3
      },
   ],
   cards_enclosed: [
      {
         title: "Services",
         image: ["services", "placeholder-alt"],
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
         image: ["amenities", "placeholder-alt"],
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
         image: ["contact", "placeholder-alt"],

         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id harum excepturi rerum perspiciatis sapiente enim, architecto ipsum molestiae tempore velit, suscipit impedit repellat nisi veritatis deserunt quibusdam sequi officiis. ",
         link: ["Learn More", "/about"],
         order: 4
      },
   ],
   thumbnails: [
      {
         title: "About",
         image: ["about", "placeholder-alt"],
         link: "/about"
      },
      {
         title: "FAQs",
         image: ["faqs", "placeholder-alt"],
         link: "/faqs"
      },
      {
         title: "Floor Plans",
         image: ["floorplans", "placeholder-alt"],
         link: "/floorplans"
      }
   ]
}
const HomeGrid = () => {
   return (
      <Grid>
         {content.cards_enclosed.map((section, idx) => {
            return (
               <EnclosedCard key={idx} lg={section.title !== 'Contact' ? 6 : 12} order={(section.title == 'Contact') && '5'}>
                  <div>
                     <h2>{section.title}</h2>
                     <Image fill src={`/images/${section.image[0]}.jpg`} alt={section.image[1]} />
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
                  <h2>{section.title}</h2>
                  < div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                     <Image fill src={`/images/${section.image[0]}.jpg`} alt={section.image[1]} />
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
                     {section.title}
                  </Link>
                  <Image fill src={`/images/${section.image[0]}.jpg`} alt={section.image[1]} />

               </ThumbnailLink>
            )
         })}


      </Grid >
   )
}

export default HomeGrid