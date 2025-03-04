import React, {useEffect} from "react";
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout/Layout'
import { Link } from 'gatsby'
import 'aos/dist/aos.css'; 

export default function Index() {
  let AOS;

  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <Layout>
    <div      
      data-aos="fade-in"
      data-aos-offset="0"
      data-aos-delay="0"
      data-aos-duration="3000"
      className="overflow-x-hidden">
    <div className='font-Broadway text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white overflow-hidden mt-24 2xl:mt-40 mb-[30px] md:mb-[50px] lg:mb-8 xl:mb-[40px] 2xl:mb-[100px] text-center'>COMPETITIONS</div>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 gap-y-12 md:gap-y-16 lg:gap-y-20 xl:gap-y-24 w-screen px-5 md:px-10 mb-16 md:mb-20 lg:mb-24 overflow-x-hidden pt-16'>
         <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/badminton'>
          <StaticImage 
            src= "../../images/PosterLomba/Badminton.webp"
            alt= "Badminton"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">Badminton</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/band'>
          <StaticImage 
            src= "../../images/PosterLomba/Band.webp"
            alt= "Band"
            placeholder=" "
            layout="constrained"
            className="mx-auto" 
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">Band</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/basketball'>
          <StaticImage 
            src= "../../images/PosterLomba/Basket.webp"
            alt= "Basket"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">Basket</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/businessPlan'>
          <StaticImage 
            src= "../../images/PosterLomba/BusinessPlan.webp"
            alt= "BusinessPlan"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">Business Plan</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/eds'>
          <StaticImage 
            src= "../../images/PosterLomba/Eds.webp"
            alt= "Eds"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">English Debate Competition</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/photography'>
          <StaticImage 
            src= "../../images/PosterLomba/Photography.webp"
            alt= "Photography"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">Photography</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/futsal'>
          <StaticImage 
            src= "../../images/PosterLomba/Futsal.webp"
            alt= "Futsal"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">Futsal</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/jhsIpa'>
          <StaticImage 
            src= "../../images/PosterLomba/Ipa.webp"
            alt= "Ipa"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">JHS IPA</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/jhsIps'>
          <StaticImage 
            src= "../../images/PosterLomba/Ips.webp"
            alt= "Ips"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">JHS IPS</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/jhsMat'>
          <StaticImage 
            src= "../../images/PosterLomba/Matematika.webp"
            alt= "Matematika"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">JHS Matematika</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/modernDance'>
          <StaticImage 
            src= "../../images/PosterLomba/ModernDance.webp"
            alt= "ModernDance"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">Modern Dance</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/mun'>
          <StaticImage 
            src= "../../images/PosterLomba/Mun.webp"
            alt= "Mun"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">Model United Nations</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/mural'>
          <StaticImage 
            src= "../../images/PosterLomba/Mural.webp"
            alt= "Mural"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">Mural</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/paskibra'>
          <StaticImage 
            src= "../../images/PosterLomba/Paskibra.webp"
            alt= "Paskibra"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">Paskibra</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/pencakSilat'>
          <StaticImage 
            src= "../../images/PosterLomba/PencakSilat.webp"
            alt= "PencakSilat"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">Pencak Silat</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/podcast'>
          <StaticImage 
            src= "../../images/PosterLomba/Podcast.webp"
            alt= "Podcast"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">Podcast Competition</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/speech'>
          <StaticImage 
            src= "../../images/PosterLomba/Speech.webp"
            alt= "Speech"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">Speech Competition</p>
        </Link>
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/vlog'>
          <StaticImage 
            src= "../../images/PosterLomba/Vlog.webp"
            alt= "Vlog"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">Vlog Competition</p>
        </Link>
        {/* <Link className="col-start-1 lg:col-span-1 xl:col-span-1 xl:col-start-2 hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/voli'> */}
        <Link className="hover:scale-105 md:hover:scale-110 duration-300 ease-in-out" to='/competition/voli'>
          <StaticImage 
            src= "../../images/PosterLomba/Voli.webp"
            alt= "Voli"
            placeholder=" "
            layout="constrained"
            className="mx-auto"
          />
          <p className="pt-5 pb-2 text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-ProductSans text-center overflow-hidden">Voli</p>
        </Link> 
      </div>
      </div>
    </Layout>
  )
}
