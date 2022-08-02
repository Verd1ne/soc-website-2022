import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Nowshowingcard from "../components/Nowshowingcard"
import Themesong from "../components/Themesong"
import Timeline from "../components/Timeline"
import Sponsors from "../components/Sponsors"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
import { FaLongArrowAltRight } from "@react-icons/all-files/fa/FaLongArrowAltRight";

const IndexPage = () => {
  return (
    <Layout>
      <StaticImage 
        src= "../images/JudulAtraxia.png"
        alt= "banner"
        placeholder="blurred"
        width={1920}
        className="mt-16"
      />
      <div className="text-[#f5f1be] font-Palatino text-center text-2xl mx-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu nunc eget ex viverra condimentum. Integer suscipit enim nibh, sit amet ornare ligula tincidunt in. Mauris accumsan ex nec condimentum lacinia. Donec a feugiat metus, vel venenatis purus. Aenean elementum odio et lorem cursus consequat eu eget tortor. Etiam sit amet tempus neque. Aliquam in metus tellus. Aenean elementum ligula vitae facilisis venenatis. Nulla scelerisque scelerisque nisl nec mollis. Vestibulum ultrices id metus quis dapibus. Nulla facilisi. Fusce volutpat lectus et rutrum mollis. Quisque non suscipit augue. In est felis, convallis et sodales non, eleifend vel odio. In et aliquet.
      </div>
      <StaticImage 
        src="../images/NowShowing.png"
        alt="Now Showing"
        placeholder="blurred"
        width={1920}
      />
      <div className="relative grid grid-cols-3 mx-12 px-20 mb-3">
        <Nowshowingcard/>
        <Nowshowingcard/>
        <Nowshowingcard/>
      </div>
      <div className="text-white text-center mt-2">
        View More
        <BsArrowRight className="inline" size={24}/>
      </div>
      <div className="text-center text-white font-Broadway text-8xl mt-12 overflow-hidden mb-6">PREVIEW</div>
      <div className="text-[#f5f1be] font-Palatino text-5xl text-center overflow-hidden mb-6">our opening video</div>
      <Themesong/>
      <Timeline/>
      <Sponsors/>
    </Layout>
  )
}

export default IndexPage
