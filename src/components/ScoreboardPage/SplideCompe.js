import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Link } from 'gatsby';
// import 'aos/dist/aos.css'; 

export default function SplideCompe() {
    return (
        <div>
            <Splide
                // data-aos="fade-in"
                // data-aos-offset="400"
                // data-aos-duration="1500"
                className="mb-20 sm:mb-24 md:mb-28 lg:mb-32 xl:mb-36 2xl:mb-40"
                options={{
                    rewind: true,
                    lazyLoad:'nearby',
                    perPage: 3,
                    perMove: 1,
                    gap: 20,
                    drag: "free",
                    type: "loop",
                    pagination: false,
                    breakpoints: {
                    623: {
                        padding: '10%',
                        perPage: 1,
                        perMove: 1,
                        gap : 20
                    },
                    2000: {
                        padding: '20%',
                        perPage: 1,
                        perMove: 1,
                        gap : 25
                    },
                    3000: {
                        padding: '30%',
                        perPage: 1,
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
            <div className="bg-[#040030] rounded-3xl p-5 lg:p-7 2xl:p-10 h-96 w-full text-center text-white font-ProductSans">
                    <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-9xl">Basket</div>
                    <hr className='mt-1 mb-5'/>
                    <div className="my-5">
                        <div className="text-lg md:text-xl xl:text-2xl">SMA</div>
                        <button className='text-base md:text-lg xl:text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-7 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.2] duration-100'>Putra</button>
                        <button className='text-base md:text-lg xl:text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-7 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.2] duration-100'>Putri</button>
                    </div>
                    <div className="my-5">
                        <div className="text-lg xl:text-2xl">SMP</div>
                        <button className='text-base md:text-lg xl:text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-7 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.2] duration-100'>Putra</button>
                        <button className='text-base md:text-lg xl:text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-7 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.2] duration-100'>Putri</button>
                    </div>
                </div> 
            </SplideSlide>
            <SplideSlide>
                <div className="bg-[#040030] rounded-3xl p-5 lg:p-7 2xl:p-10 2xl:h-96 w-full text-center text-white font-ProductSans">
                    <div className="text-5xl">Futsal</div>
                    <hr className='mt-1 mb-5'/>
                    <div className="my-5">
                        <div className="text-2xl">SMA</div>
                        <button className='text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-7 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.2] duration-100'>Putra</button>
                        <button className='text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-7 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.2] duration-100'>Putri</button>
                    </div>
                    <div className="my-5">
                        <div className="text-2xl">SMP</div>
                        <Link to=""><button className='text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-7 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.2] duration-100'>Putra</button></Link>
                    </div>
                </div> 
            </SplideSlide>
            <SplideSlide>
                <div className="bg-[#040030] rounded-3xl p-5 lg:p-7 2xl:p-10 2xl:h-96 w-full text-center text-white font-ProductSans">
                    <div className="text-5xl">Voli</div>
                    <hr className='mt-1 mb-5'/>
                    <div className="my-5">
                        <div className="text-2xl">SMA</div>
                        <button className='text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-7 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.2] duration-100'>Putra</button>
                        <button className='text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-7 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.2] duration-100'>Putri</button>
                    </div>
                </div> 
            </SplideSlide>
            <SplideSlide>
                <div className=" bg-[#040030] rounded-3xl p-5 lg:p-7 2xl:p-10 2xl:h-96 w-full text-center text-white font-ProductSans">
                    <div className="text-5xl">Badminton</div>
                    <hr className='mt-1 mb-5'/>
                    <div className="my-5">
                        <div className="text-2xl">SMA</div>
                        <button className='text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-7 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.2] duration-100'>Ganda Putra</button>
                        <button className='text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-7 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.2] duration-100'>Ganda Putri</button>
                        <button className='text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-7 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.2] duration-100'>Ganda Campuran</button>
                        <button className='text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-7 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.2] duration-100'>Regu</button>
                    </div>
                    <div className="my-5">
                        <div className="text-2xl">SMP</div>
                        <button className='text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-7 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.2] duration-100'>Ganda Putra</button>
                        <button className='text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-7 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.2] duration-100'>Ganda Putri</button>
                    </div>
                </div> 
            </SplideSlide>
        </Splide>
        </div>
    )
}