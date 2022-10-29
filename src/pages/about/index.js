import React, {useEffect} from "react";
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout/Layout'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import 'aos/dist/aos.css'; 

export default function Index() {
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
    <Layout>
      <div className="text-white overflow-x-hidden mb-[50px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px] mx-[25px] md:mx-[80px] lg:mx-[125px] xl:mx-[150px] 2xl:mx-[275px]">
          <div         
          data-aos="fade-in"
          data-aos-offset="0"
          data-aos-duration="3000"
          className='font-Broadway text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl overflow-hidden mb-[50px] md:mb-[70px] lg:mb-[80px] xl:mb-[120px] text-center text-white mt-36'>About SOC</div>
          <div 
          data-aos="zoom-in-up"
          data-aos-offset="0"
          data-aos-duration="1500"
          className="border border-white border-2 rounded-3xl px-5 md:px-10 lg:px-12 xl:px-15 py-5 md:py-7 lg:py-10 xl:py-12 mb-[50px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px]">
            <p className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-[15px] lg:mb-[30px] 2xl:mb-[40px] text-center overflow-hidden font-ProductSans'>Apa itu SOC (SMAKONECUP)</p>
            <div className="text-justify text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-OpenSans">
                <div>SMAKONECUP 2022 merupakan salah satu acara terbesar dalam serangkaian program satu tahun kami. Acara ini merupakan event persahabatan antar sekolah yang memperlombakan 16 cabang lomba baik dalam bidang akademis maupun non akademis.</div>
                <br/>
                <div>Dengan diadakannya SMAKONECUP 2022, diharapkan tujuan pengembangan potensi generasi muda secara menyeluruh dapat tercapai. Generasi muda dapat mengembangkan secara luas dan mendalam kemampuan dan potensi yang dimiliki dan mengekspresikannya melalui acara ini, terlepas dari kemampuan peserta didik dalam akademis namun juga menunjukan kemampuan peserta didik di berbagai bidang kreasi lainnya.</div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:mx-[24px] 2xl:mx-[0px] mb-[50px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px] mt-36 md:mt-44 lg:mt-52 xl:mt-60">
            <div 
              data-aos="zoom-in-right"
              data-aos-offset="0"
              data-aos-duration="1500"
              data-aos-delay="500"
              className="lg:col-span-2 flex">
              <div className='border border-2 border-white rounded-3xl px-5 md:px-10 lg:px-12 xl:px-15 py-5 md:py-7 lg:py-10 xl:py-12 w-fit '>
                <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-[15px] lg:mb-[30px] 2xl:mb-[40px] text-center overflow-hidden font-ProductSans'>Tema SOC : ATRAXIA</p>
                <div className="text-justify text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-OpenSans">
                    ATRAXIA yang merupakan singkatan dari “Above The Rest; eXpress your Inner personA”. Tema tahun ini terinspirasi dari keinginan kami agar setiap individu memiliki kesempatan untuk mengekspresikan dan mengeksplor diri masing-masing sehingga bisa menghasilkan inovasi-inovasi baru tanpa memiliki rasa kekhawatiran akan kegagalan. Hal ini bertujuan agar kita berani untuk menerobos rintangan dan menjadi berbeda dalam menunjukan warna kita yang sebenarnya dan agar kita bisa membawa perubahan positif ke depannya seiring dengan maraknya kemajuan teknologi dan banyaknya perubahan di era globalisasi ini dengan tetap memegang teguh prinsip-prinsip baik yang telah tertanam dan mempertahankan jati diri kita sebagai anak bangsa.
                </div>
              </div>
            </div>
            <div 
            data-aos="zoom-in-left"
            data-aos-offset="0"
            data-aos-duration="1500"
            className="hidden lg:flex w-full">
              <StaticImage 
                  src= "../../images/banner_atraxia.webp"
                  alt= "logo"
                  placeholder=""
                  layout="fixed"
                  height={600}
                  className="mr-0 ml-auto my-auto"
                />
            </div>
          </div>
          <p 
          data-aos="fade-in"
          data-aos-offset="400"
          data-aos-duration="1500"
          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-[30px] lg:mb-[30px] 2xl:mb-[40px] text-center md:h-12 lg:h-20 font-ProductSans mt-36 md:mt-44 lg:mt-52 xl:mt-60'>SOC Throughout The Years</p>
        <Splide
          data-aos="fade-in"
          data-aos-offset="400"
          data-aos-duration="1500"
          className="mb-20 sm:mb-24 md:mb-28 lg:mb-32 xl:mb-36 2xl:mb-40"
          options={{
            rewind: true,
            lazyLoad:'nearby',
            perPage: 3,
            perMove: 1,
            gap: 20,
            padding: "3 rem",
            drag: "free",
            pagination: false,
            breakpoints: {
              623: {
                perPage: 1,
                perMove: 1,
                gap : 20
              },
              2000: {
                perPage: 2,
                perMove: 1,
                gap : 25
              },
              3000: {
                perPage: 3,
                perMove: 1,
                gap : 35
              } 
            },
            autoscroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: true,
              speed: 1,
            }
          }}
          extensions={{ AutoScroll }}
        >
          <SplideSlide>
            <div className="border border-black border-2 bg-[#071537] rounded-3xl p-5 lg:p-7 2xl:p-10 text-center">
              {/* <div className="font-extrabold text-[30px] lg:text-[35px] 2xl:text-[50px] mb-5 2xl:mb-10 text-white">2018</div> */}
              <div className="grid grid-row space-y-5 lg:space-y-7 xl:space-y-10 2xl:space-y-16">
                <StaticImage 
                  src= "../../images/socDulu/2018_1.webp"
                  alt= "logo"
                  placeholder=""
                  layout="constrained"
                  // height= {150}
                  className="h-38 md:h-40 lg:h-52 xl:h-64 2xl:h-72 rounded-3xl"
                />
                <StaticImage 
                  src= "../../images/socDulu/2018_2.webp"
                  alt= "logo"
                  placeholder=""
                  layout="constrained"
                  // height= {150}
                  className="h-38 md:h-40 lg:h-52 xl:h-64 2xl:h-72 rounded-3xl"
                />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="border border-black border-2 bg-[#071537] rounded-3xl p-5 lg:p-7 2xl:p-10 text-center">
              {/* <div className="font-extrabold text-[30px] lg:text-[35px] 2xl:text-[50px] mb-5 2xl:mb-10 text-white">2019</div> */}
              <div className="grid grid-row space-y-5 lg:space-y-7 xl:space-y-10 2xl:space-y-16">
                <StaticImage 
                  src= "../../images/socDulu/2018_3.webp"
                  alt= "logo"
                  placeholder=""
                  layout="constrained"
                  // height= {150}
                  className="h-38 md:h-40 lg:h-52 xl:h-64 2xl:h-72 rounded-3xl"
                />
                <StaticImage 
                  src= "../../images/socDulu/2018_4.webp"
                  alt= "logo"
                  placeholder=""
                  layout="constrained"
                  // height= {150}
                  className="h-38 md:h-40 lg:h-52 xl:h-64 2xl:h-72 rounded-3xl"
                />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="border border-black border-2 bg-[#071537] rounded-3xl p-5 lg:p-7 2xl:p-10 text-center">
              {/* <div className="font-extrabold text-[30px] lg:text-[35px] 2xl:text-[50px] mb-5 2xl:mb-10 text-white">2020</div> */}
              <div className="grid grid-row space-y-5 lg:space-y-7 xl:space-y-10 2xl:space-y-16">
                <StaticImage 
                  src= "../../images/socDulu/2018_5.webp"
                  alt= "logo"
                  placeholder=""
                  layout="constrained"
                  // height= {150}
                  className="h-38 md:h-40 lg:h-52 xl:h-64 2xl:h-72 rounded-3xl"
                />
                <StaticImage 
                  src= "../../images/socDulu/2018_6.webp"
                  alt= "logo"
                  placeholder=""
                  layout="constrained"
                  // height= {150}
                  className="h-38 md:h-40 lg:h-52 xl:h-64 2xl:h-72 rounded-3xl"
                />
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </Layout>
  )
}
