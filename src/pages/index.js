import React, {useEffect} from "react";
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout"
import Preview from "../components/HomePage/Preview"
import Themesong from "../components/HomePage/Themesong"
import Sponsors from "../components/HomePage/Sponsors"
import Nowshowing from "../components/HomePage/Nowshowing";
import 'aos/dist/aos.css'; 

const IndexPage = () => {
  let AOS;

  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
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
    <Layout className="overflow-x-hidden">
      <div          
        data-aos="fade-in"
        data-aos-offset="0"
        data-aos-delay="0"
        data-aos-duration="3000"
        data-aos-anchor-placement="top-center"
        >
        <StaticImage 
          src= "../images/JudulAtraxia.webp"
          alt= "banner"
          placeholder=""
          className="mt-32 md:mt-36 lg:mt-40 xl:mt-44 mx-0 sm:mx-16 md:mx-24 lg:mx-28 xl:mx-32 mb-4 md:mb-8"
          width={3840}
        />
        <div className="text-[#f5f1be] font-ProductSans text-center text-md overflow-hidden md:text-xl lg:text-2xl xl:text-3xl mx-5 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 mb-28 md:mb-32 lg:mb-36 xl:mb-40 mt-4">
          SMAKONECUP 2022, ATRAXIA yang merupakan singkatan dari “Above The Rest; eXpress your Inner personA”. Tema tahun ini terinspirasi dari keinginan kami agar setiap individu memiliki kesempatan untuk mengekspresikan dan mengeksplor diri masing-masing sehingga bisa menghasilkan inovasi-inovasi baru tanpa memiliki rasa kekhawatiran akan kegagalan. <br/><br/>Hal ini bertujuan agar kita berani untuk menerobos rintangan dan menjadi berbeda dalam menunjukan warna kita yang sebenarnya dan agar kita bisa membawa perubahan positif ke depannya seiring dengan maraknya kemajuan teknologi dan banyaknya perubahan di era globalisasi ini dengan tetap memegang teguh prinsip-prinsip baik yang telah tertanam dan mempertahankan jati diri kita sebagai anak bangsa.
        </div>
      </div>
      <div
        data-aos="fade-in"
        data-aos-offset="100"
        data-aos-duration="3000">
        <StaticImage 
          src="../images/NowShowing.webp"
          alt="Now Showing"
          placeholder=""
          width={3840}
          className="mb-4 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20"
        />
      </div>
      
      <div 
        data-aos="fade-in"
        data-aos-offset="100"
        data-aos-duration="3000"
        className="relative mx-5 md:mx-10 lg:mx-20 lg:px-20">
        <Nowshowing/>
      </div>
      <Preview/>
      <Themesong/>
      <Sponsors/>
    </Layout>
  )
}

export default IndexPage
