import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout"
import Nowshowingcard from "../components/HomePage/Nowshowingcard"
import Preview from "../components/HomePage/Preview"
import Themesong from "../components/HomePage/Themesong"
import Sponsors from "../components/HomePage/Sponsors"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
import { Link } from "gatsby"
import Badminton from "../images/PosterLomba/Badminton.webp"
import Band from "../images/PosterLomba/Band.webp"
import Basket from "../images/PosterLomba/Basket.webp"

const IndexPage = () => {
  return (
    <Layout>
      <StaticImage 
        src= "../images/JudulAtraxia.png"
        alt= "banner"
        placeholder="blurred"
        className="mt-32"
        width={3840}
      />
      <div className="text-[#f5f1be] font-Palatino text-center text-lg md:text-xl lg:text-2xl mx-5 md:mx-12 mb-20">
        SMAKONECUP 2022, ATRAXIA yang merupakan singkatan dari “Above The Rest; eXpress your Inner personA”. Tema tahun ini terinspirasi dari keinginan kami agar setiap individu memiliki kesempatan untuk mengekspresikan dan mengeksplor diri masing-masing sehingga bisa menghasilkan inovasi-inovasi baru tanpa memiliki rasa kekhawatiran akan kegagalan. Hal ini bertujuan agar kita berani untuk menerobos rintangan dan menjadi berbeda dalam menunjukan warna kita yang sebenarnya dan agar kita bisa membawa perubahan positif ke depannya seiring dengan maraknya kemajuan teknologi dan banyaknya perubahan di era globalisasi ini dengan tetap memegang teguh prinsip-prinsip baik yang telah tertanam dan mempertahankan jati diri kita sebagai anak bangsa.
      </div>
      <StaticImage 
        src="../images/NowShowing.png"
        alt="Now Showing"
        placeholder="blurred"
        width={3840}
      />
      <div className="relative grid grid-cols-3 mx-5 md:mx-10 lg:mx-20 lg:px-20 ">
        <Nowshowingcard image={`${Badminton}`}/>
        <Nowshowingcard image={`${Band}`}/>
        <Nowshowingcard image={`${Basket}`}/>
      </div>
      <Link to="/competition" className="text-[10px] md:text-2xl xl:text-3xl text-white text-center mt-2 md:mt-3 lg:mt-0 overflow-hidden block">
        View More
        <BsArrowRight className="inline" size={24}/>
      </Link>
      <Preview/>
      <Themesong/>
      {/* <Timeline/> */}
      <Sponsors/>
    </Layout>
  )
}

export default IndexPage
