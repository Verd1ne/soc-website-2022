import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout/Layout'
import { Link } from 'gatsby'

export default function Index() {
  const imageheight = 500
  let competition = ["Badminton", "Band", "Basket", "Business Plan", "English Debate Competition", "Fotografi", "Futsal", "JHS IPA", "JHS IPS", "JHS Matematika", "Modern Dance", "Modern United Nation", "Mural",
"Paskibra", "Pencak Silat", "Podcast", "Speech", "Vlog"];
  return (
    <Layout>
    <div className='font-Broadway text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white overflow-hidden mt-32 mb-10 text-center'>COMPETITIONS</div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 gap-y-12 md:gap-y-16 lg:gap-y-20 xl:gap-y-24 w-full container mx-auto mb-16 md:mb-20 lg:mb-24 p-12'>
         <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/'>
          <StaticImage 
            src= "../../images/PosterLomba/Badminton.webp"
            alt= "Badminton"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">Badminton</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/band'>
          <StaticImage 
            src= "../../images/PosterLomba/Band.webp"
            alt= "Band"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto" 
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">Band</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/basketball'>
          <StaticImage 
            src= "../../images/PosterLomba/Basket.webp"
            alt= "Basket"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">Basket</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/businessPlan'>
          <StaticImage 
            src= "../../images/PosterLomba/BusinessPlan.webp"
            alt= "BusinessPlan"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">Business Plan</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/eds'>
          <StaticImage 
            src= "../../images/PosterLomba/Eds.webp"
            alt= "Eds"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">English Debate Competition</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/fotografi'>
          <StaticImage 
            src= "../../images/PosterLomba/Fotografi.webp"
            alt= "Fotografi"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">Fotografi</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/futsal'>
          <StaticImage 
            src= "../../images/PosterLomba/Futsal.webp"
            alt= "Futsal"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">Futsal</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/jhsIpa'>
          <StaticImage 
            src= "../../images/PosterLomba/Ipa.webp"
            alt= "Ipa"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">JHS IPA</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/jhsIps'>
          <StaticImage 
            src= "../../images/PosterLomba/Ips.webp"
            alt= "Ips"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">JHS IPS</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/jhsMat'>
          <StaticImage 
            src= "../../images/PosterLomba/Matematika.webp"
            alt= "Matematika"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">JHS Matematika</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/modernDance'>
          <StaticImage 
            src= "../../images/PosterLomba/ModernDance.webp"
            alt= "ModernDance"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">Modern Dance</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/mun'>
          <StaticImage 
            src= "../../images/PosterLomba/Mun.webp"
            alt= "Mun"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">Modern United Nation</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/mural'>
          <StaticImage 
            src= "../../images/PosterLomba/Mural.webp"
            alt= "Mural"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">Mural</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/paskibra'>
          <StaticImage 
            src= "../../images/PosterLomba/Paskibra.webp"
            alt= "Paskibra"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">Paskriba</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/pencakSilat'>
          <StaticImage 
            src= "../../images/PosterLomba/PencakSilat.webp"
            alt= "PencakSilat"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">Pencak Silat</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/podcast'>
          <StaticImage 
            src= "../../images/PosterLomba/Podcast.webp"
            alt= "Podcast"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">Podcast Competition</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/speech'>
          <StaticImage 
            src= "../../images/PosterLomba/Speech.webp"
            alt= "Speech"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">Speech Competition</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/vlog'>
          <StaticImage 
            src= "../../images/PosterLomba/Vlog.webp"
            alt= "Vlog"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">Vlog Competition</p>
        </Link>
        <Link className="col-start-1 lg:col-span-2 xl:col-span-1 xl:col-start-2 hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/voli'>
          <StaticImage 
            src= "../../images/PosterLomba/Voli.webp"
            alt= "Voli"
            placeholder="blurred"
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 text-white text-3xl font-bold text-center overflow-hidden">Voli</p>
        </Link> 
      </div>
    </Layout>
  )
}
