import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout/Layout'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default function Index() {
  return (
    <Layout>
      <div className="mx-[35px] md:mx-[80px] lg:mx-[125px] xl:mx-[300px] text-black font-Esteban">
        <div className='font-Broadway text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl overflow-hidden mt-32 mb-[50px] md:mb-[70px] lg:mb-[80px] xl:mb-[120px] text-center text-white'>About SOC</div>
        <div className="border border-black border-2 bg-white rounded-3xl px-5 md:px-10 lg:px-12 xl:px-15 py-5 md:py-7 lg:py-10 xl:py-12 mb-[50px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px]">
          <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-[15px] lg:mb-[30px] 2xl:mb-[40px] text-center overflow-hidden'>Apa itu SOC ?</div>
          <div className="text-justify text-sm md:text-base lg:text-lg xl:text-xl ">
              <div>SMAKONECUP 2022 merupakan salah satu acara terbesar dalam serangkaian program satu tahun kami. Acara ini merupakan event persahabatan antar sekolah yang memperlombakan 16 cabang lomba baik dalam bidang akademis maupun non akademis.</div>
              <br/>
              <div>Dengan diadakannya SMAKONECUP 2022, diharapkan tujuan pengembangan potensi generasi muda secara menyeluruh dapat tercapai. Generasi muda dapat mengembangkan secara luas dan mendalam kemampuan dan potensi yang dimiliki dan mengekspresikannya melalui acara ini, terlepas dari kemampuan peserta didik dalam akademis namun juga menunjukan kemampuan peserta didik di berbagai bidang kreasi lainnya.</div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:mx-[24px] 2xl:mx-[40px]">
          <div className="lg:col-span-2 mb-[50px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px]">
            <div className='border border-black border-2 bg-white rounded-3xl px-5 md:px-10 lg:px-12 xl:px-15 py-5 md:py-7 lg:py-10 xl:py-12 w-fit'>
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
        <div className='mb-[50px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px]'>
          <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-[15px] lg:mb-[30px] 2xl:mb-[40px] text-center md:h-12 lg:h-20'>SOC throughout the years</p>
          <Splide
            options={{
              rewind: true,
              start: 9,
              lazyLoad:'nearby',
              type   : 'loop',
              perPage: 2,
              perMove: 2,
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
                  perMove: 2
                },
                1247: {
                  perPage: 2,
                  perMove: 2
                }
              }
            }}
          >
            <SplideSlide>
              <div className="border border-black border-2 bg-white rounded-3xl px-5 md:px-10 lg:px-12 xl:px-15 py-5 md:py-7 lg:py-10 xl:py-12 text-center">
                <div className="h-40 ">2018</div>
                <StaticImage 
                  src= "../../images/Disc.webp"
                  alt= "logo"
                  placeholder=""
                  layout="constrained"
                  height= {100}
                  className="mb-10"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="border border-black border-2 bg-white rounded-3xl px-5 md:px-10 lg:px-12 xl:px-15 py-5 md:py-7 lg:py-10 xl:py-12 text-center">
                <div className="h-60">2019</div>
                <StaticImage 
                  src= "../../images/Disc.webp"
                  alt= "logo"
                  placeholder=""
                  layout="constrained"
                  height= {100}
                  className="mb-10"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="border border-black border-2 bg-white rounded-3xl px-5 md:px-10 lg:px-12 xl:px-15 py-5 md:py-7 lg:py-10 xl:py-12 text-center">
                <div className="h-60">2020</div>
                <StaticImage 
                  src= "../../images/Disc.webp"
                  alt= "logo"
                  placeholder=""
                  layout="constrained"
                  height= {100}
                  className="mb-10"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="border border-black border-2 bg-white rounded-3xl px-5 md:px-10 lg:px-12 xl:px-15 py-5 md:py-7 lg:py-10 xl:py-12 text-center">
                <div className="h-60">2021</div>
                <StaticImage 
                  src= "../../images/Disc.webp"
                  alt= "logo"
                  placeholder=""
                  layout="constrained"
                  height= {100}
                  className="mb-10"
                />
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </Layout>
  )
}
