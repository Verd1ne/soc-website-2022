import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout/Layout'
import { Link } from 'gatsby'

export default function Index() {
  return (
    <Layout>
        <div className='font-Broadway text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white overflow-hidden mt-32 mb-[24px] lg:mb-8 xl:mb-[40px] text-center'>COMPETITIONS</div>
        <div className='font-Broadway text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white overflow-hidden mt-32 mb-[24px] lg:mb-8 xl:mb-[40px] text-center'>Apa itu SOC ?</div>
        <div>
            <div>SMAKONECUP 2022 merupakan salah satu acara terbesar dalam serangkaian program satu tahun kami. Acara ini merupakan event persahabatan antar sekolah yang memperlombakan 16 cabang lomba baik dalam bidang akademis maupun non akademis.</div>
	        <div>Dengan diadakannya SMAKONECUP 2022, diharapkan tujuan pengembangan potensi generasi muda secara menyeluruh dapat tercapai. Generasi muda dapat mengembangkan secara luas dan mendalam kemampuan dan potensi yang dimiliki dan mengekspresikannya melalui acara ini, terlepas dari kemampuan peserta didik dalam akademis namun juga menunjukan kemampuan peserta didik di berbagai bidang kreasi lainnya.</div>
        </div>
        <div className='font-Broadway text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white overflow-hidden mt-32 mb-[24px] lg:mb-8 xl:mb-[40px] text-center'>Tema SOC ?</div>
        <div>
            ATRAXIA yang merupakan singkatan dari “Above The Rest; eXpress your Inner personA”. Tema tahun ini terinspirasi dari keinginan kami agar setiap individu memiliki kesempatan untuk mengekspresikan dan mengeksplor diri masing-masing sehingga bisa menghasilkan inovasi-inovasi baru tanpa memiliki rasa kekhawatiran akan kegagalan. Hal ini bertujuan agar kita berani untuk menerobos rintangan dan menjadi berbeda dalam menunjukan warna kita yang sebenarnya dan agar kita bisa membawa perubahan positif ke depannya seiring dengan maraknya kemajuan teknologi dan banyaknya perubahan di era globalisasi ini dengan tetap memegang teguh prinsip-prinsip baik yang telah tertanam dan mempertahankan jati diri kita sebagai anak bangsa.
        </div>
        <div className='font-Broadway text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white overflow-hidden mt-32 mb-[24px] lg:mb-8 xl:mb-[40px] text-center'>SOC throughout the years</div>

    </Layout>
  )
}
