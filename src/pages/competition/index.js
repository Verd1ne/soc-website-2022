import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout/Layout'
import { Link } from 'gatsby'

export default function Index() {
  return (
    <Layout>
      <div className='font-Broadway text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white overflow-hidden mt-32 mb-20 text-center'>COMPETITIONS</div>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 gap-y-12 md:gap-y-16 lg:gap-y-20 xl:gap-y-24 w-full container mx-auto mb-16 md:mb-20 lg:mb-24 p-12'>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Badminton.png"
            alt= "Badminton"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Band.png"
            alt= "Band"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Basket.png"
            alt= "Basket"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/BusinessPlan.png"
            alt= "BusinessPlan"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Eds.png"
            alt= "Eds"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Fotografi.png"
            alt= "Fotografi"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Futsal.png"
            alt= "Futsal"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Ipa.png"
            alt= "Ipa"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Ips.png"
            alt= "Ips"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Matematika.png"
            alt= "Matematika"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/ModernDance.png"
            alt= "ModernDance"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Mun.png"
            alt= "Mun"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Mural.png"
            alt= "Mural"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Paskibra.png"
            alt= "Paskibra"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/PencakSilat.png"
            alt= "PencakSilat"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Podcast.png"
            alt= "Podcast"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Speech.png"
            alt= "Speech"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Vlog.png"
            alt= "Vlog"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
        <Link className="mx-auto col-start-1 lg:col-span-2 xl:col-span-1 xl:col-start-2 hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Voli.png"
            alt= "Voli"
            placeholder="blurred"
            layout="fixed"
            height= {500}
          />
        </Link>
      </div>
    </Layout>
  )
}
