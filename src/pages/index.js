import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout"
import Nowshowingcard from "../components/HomePage/Nowshowingcard"
import Preview from "../components/HomePage/Preview"
import Themesong from "../components/HomePage/Themesong"
import Timeline from "../components/HomePage/Timeline"
import Sponsors from "../components/HomePage/Sponsors"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
import { FaLongArrowAltRight } from "@react-icons/all-files/fa/FaLongArrowAltRight";

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu nunc eget ex viverra condimentum. Integer suscipit enim nibh, sit amet ornare ligula tincidunt in. Mauris accumsan ex nec condimentum lacinia. Donec a feugiat metus, vel venenatis purus. Aenean elementum odio et lorem cursus consequat eu eget tortor. Etiam sit amet tempus neque. Aliquam in metus tellus. Aenean elementum ligula vitae facilisis venenatis. Nulla scelerisque scelerisque nisl nec mollis. Vestibulum ultrices id metus quis dapibus. Nulla facilisi. Fusce volutpat lectus et rutrum mollis. Quisque non suscipit augue. In est felis, convallis et sodales non, eleifend vel odio. In et aliquet.
      </div>
      <StaticImage 
        src="../images/NowShowing.png"
        alt="Now Showing"
        placeholder="blurred"
        width={3840}
      />
      <div className="relative grid grid-cols-3 mx-5 md:mx-10 lg:mx-20 lg:px-20 ">
        <Nowshowingcard/>
        <Nowshowingcard/>
        <Nowshowingcard/>
      </div>
      <div className="text-[10px] md:text-2xl xl:text-3xl text-white text-center mt-2 md:mt-3 lg:mt-0 overflow-hidden">
        View More
        <BsArrowRight className="inline" size={24}/>
      </div>
      <Preview/>
      <Themesong/>
      <Timeline/>
      <Sponsors/>
    </Layout>
  )
}

export default IndexPage
