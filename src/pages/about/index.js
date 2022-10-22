import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout/Layout'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default function Index() {
  return (
    <Layout>
      <div className="text-white overflow-x-hidden">
        <div className="mx-[35px] md:mx-[80px] lg:mx-[125px] xl:mx-[300px]">
          <div className='font-Broadway text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl overflow-hidden mt-32 mb-[50px] md:mb-[70px] lg:mb-[80px] xl:mb-[120px] text-center text-white'>About SOC</div>
          <div className="border border-white border-2 rounded-3xl px-5 md:px-10 lg:px-12 xl:px-15 py-5 md:py-7 lg:py-10 xl:py-12 mb-[50px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px]">
            <div className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-[15px] lg:mb-[30px] 2xl:mb-[40px] text-center overflow-hidden'>Apa itu SOC ?</div>
            <div className="text-justify text-sm md:text-base lg:text-lg xl:text-xl ">
                <div>SMAKONECUP 2022 merupakan salah satu acara terbesar dalam serangkaian program satu tahun kami. Acara ini merupakan event persahabatan antar sekolah yang memperlombakan 16 cabang lomba baik dalam bidang akademis maupun non akademis.</div>
                <br/>
                <div>Dengan diadakannya SMAKONECUP 2022, diharapkan tujuan pengembangan potensi generasi muda secara menyeluruh dapat tercapai. Generasi muda dapat mengembangkan secara luas dan mendalam kemampuan dan potensi yang dimiliki dan mengekspresikannya melalui acara ini, terlepas dari kemampuan peserta didik dalam akademis namun juga menunjukan kemampuan peserta didik di berbagai bidang kreasi lainnya.</div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:mx-[24px] 2xl:mx-[40px]">
            <div className="lg:col-span-2 mb-[50px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px]">
              <div className='border border-2 border-white  rounded-3xl px-5 md:px-10 lg:px-12 xl:px-15 py-5 md:py-7 lg:py-10 xl:py-12 w-fit'>
                <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-[15px] lg:mb-[30px] 2xl:mb-[40px] text-center overflow-hidden'>Tema SOC</div>
                <div className="text-justify text-sm md:text-base lg:text-lg xl:text-xl">
                    ATRAXIA yang merupakan singkatan dari “Above The Rest; eXpress your Inner personA”. Tema tahun ini terinspirasi dari keinginan kami agar setiap individu memiliki kesempatan untuk mengekspresikan dan mengeksplor diri masing-masing sehingga bisa menghasilkan inovasi-inovasi baru tanpa memiliki rasa kekhawatiran akan kegagalan. Hal ini bertujuan agar kita berani untuk menerobos rintangan dan menjadi berbeda dalam menunjukan warna kita yang sebenarnya dan agar kita bisa membawa perubahan positif ke depannya seiring dengan maraknya kemajuan teknologi dan banyaknya perubahan di era globalisasi ini dengan tetap memegang teguh prinsip-prinsip baik yang telah tertanam dan mempertahankan jati diri kita sebagai anak bangsa.
                </div>
              </div>
            </div>
            <div className="hidden lg:flex">
              <StaticImage 
                  src= "../../images/banner_atraxia.webp"
                  alt= "logo"
                  placeholder=""
                  layout="constrained"
                  // height={500}
                  className="lg:h-[610px] xl:h-[690px] 2xl:h-[720px]"
                />
            </div>
          </div>
        </div>
        <div className='mb-[50px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px] mx-[10px] md:mx-[50px] lg:mx-[70px]'>
          <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-[30px] lg:mb-[30px] 2xl:mb-[40px] text-center md:h-12 lg:h-20'>SOC Throughout The Years</p>
          <Splide
            options={{
              rewind: true,
              start: 9,
              lazyLoad:'nearby',
              type   : 'loop',
              perPage: 3,
              perMove: 1,
              gap: 20,
              padding: "3rem",
              // pagination: false,
              breakpoints: {
                623: {
                  perPage: 1,
                  perMove: 1
                },
                935: {
                  perPage: 2,
                  perMove: 1
                },
                1247: {
                  perPage: 2,
                  perMove: 2
                }
              }
            }}
          >
            <SplideSlide>
              <div className="border border-black border-2 bg-[#071537] rounded-3xl px-5 lg:px-7 2xl:px-14 py-5 xl:py-7 2xl:pb-10 text-center">
                <div className="font-extrabold text-[30px] lg:text-[35px] 2xl:text-[50px] mb-5 2xl:mb-10 text-white">2018</div>
                <div className="grid grid-row space-y-5 flex">
                  <StaticImage 
                    src= "../../images/2018_1.webp"
                    alt= "logo"
                    placeholder=""
                    layout="constrained"
                    // height= {150}
                    className="h-36 md:h-40 lg:h-52 xl:h-64 2xl:h-72 rounded-3xl"
                  />
                  <StaticImage 
                    src= "../../images/2018_2.webp"
                    alt= "logo"
                    placeholder=""
                    layout="constrained"
                    // height= {150}
                    className="h-36 md:h-40 lg:h-52 xl:h-64 2xl:h-72 rounded-3xl"
                  />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="border border-black border-2 bg-[#071537] rounded-3xl px-5 lg:px-7 2xl:px-14 py-5 xl:py-7 2xl:pb-10 text-center">
                <div className="font-extrabold text-[30px] lg:text-[35px] 2xl:text-[50px] mb-5 2xl:mb-10 text-white">2019</div>
                <div className="grid grid-row space-y-5 flex">
                  <StaticImage 
                    src= "../../images/2018_1.webp"
                    alt= "logo"
                    placeholder=""
                    layout="constrained"
                    // height= {150}
                    className="h-36 md:h-40 lg:h-52 xl:h-64 2xl:h-72 rounded-3xl"
                  />
                  <StaticImage 
                    src= "../../images/2018_2.webp"
                    alt= "logo"
                    placeholder=""
                    layout="constrained"
                    // height= {150}
                    className="h-36 md:h-40 lg:h-52 xl:h-64 2xl:h-72 rounded-3xl"
                  />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="border border-black border-2 bg-[#071537] rounded-3xl px-5 lg:px-7 2xl:px-14 py-5 xl:py-7 2xl:pb-10 text-center">
                <div className="font-extrabold text-[30px] lg:text-[35px] 2xl:text-[50px] mb-5 2xl:mb-10 text-white">2020</div>
                <div className="grid grid-row space-y-5 flex">
                  <StaticImage 
                    src= "../../images/2018_1.webp"
                    alt= "logo"
                    placeholder=""
                    layout="constrained"
                    // height= {150}
                    className="h-36 md:h-40 lg:h-52 xl:h-64 2xl:h-72 rounded-3xl"
                  />
                  <StaticImage 
                    src= "../../images/2018_2.webp"
                    alt= "logo"
                    placeholder=""
                    layout="constrained"
                    // height= {150}
                    className="h-36 md:h-40 lg:h-52 xl:h-64 2xl:h-72 rounded-3xl"
                  />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="border border-black border-2 bg-[#071537] rounded-3xl px-5 lg:px-7 2xl:px-14 py-5 xl:py-7 2xl:pb-10 text-center">
                <div className="font-extrabold text-[30px] lg:text-[35px] 2xl:text-[50px] mb-5 2xl:mb-10 text-white">2021</div>
                <div className="grid grid-row space-y-5 flex">
                  <StaticImage 
                    src= "../../images/2018_1.webp"
                    alt= "logo"
                    placeholder=""
                    layout="constrained"
                    // height= {150}
                    className="h-36 md:h-40 lg:h-52 xl:h-64 2xl:h-72 rounded-3xl"
                  />
                  <StaticImage 
                    src= "../../images/2018_2.webp"
                    alt= "logo"
                    placeholder=""
                    layout="constrained"
                    // height= {150}
                    className="h-36 md:h-40 lg:h-52 xl:h-64 2xl:h-72 rounded-3xl"
                  />
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </Layout>
  )
}
