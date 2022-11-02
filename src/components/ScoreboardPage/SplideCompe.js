import React, {useEffect} from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import 'aos/dist/aos.css'; 
import Tag from './Tag';

export default function SplideCompe({selectedCompe, handleTag}) {
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
        <div>
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
                    <div className="text-3xl md:text-4xl lg:text-5xl">Basket</div>
                    <hr className='mt-1 mb-5'/>
                    <div className="grid grid-rows">
                        <div className="px-3 lg:px-10 xl:px-32">
                            <div className="text-lg md:text-xl xl:text-2xl">SMA</div>
                            <Tag selectedCompe={selectedCompe} handleTag={handleTag} gender={'Putra'} compe={"Basket"} level={"SMA"}/>
                            <Tag selectedCompe={selectedCompe} handleTag={handleTag} gender={'Putri'} compe={"Basket"} level={"SMA"}/>
                        </div>
                        <div className="my-5 px-3 lg:px-10 xl:px-32">
                            <div className="text-lg xl:text-2xl">SMP</div>
                            <Tag selectedCompe={selectedCompe} handleTag={handleTag} gender={"Putra"} compe={"Basket"} level={"SMP"}/>
                            <Tag selectedCompe={selectedCompe} handleTag={handleTag} gender={"Putri"} compe={"Basket"} level={"SMP"}/>
                            </div>
                    </div>
                </div> 
            </SplideSlide>
            <SplideSlide>
                <div className="bg-[#040030] rounded-3xl p-5 lg:p-7 2xl:p-10 h-96 w-full text-center text-white font-ProductSans">
                    <div className="text-3xl md:text-4xl lg:text-5xl">Futsal</div>
                    <hr className='mt-1 mb-5'/>
                    <div className="grid grid-rows">
                        <div className="px-3 lg:px-10 xl:px-32">
                            <div className="text-lg md:text-xl xl:text-2xl">SMA</div>
                            <Tag selectedCompe={selectedCompe} handleTag={handleTag} gender={"Putra"} compe={"Futsal"} level={"SMA"}/>
                            <Tag selectedCompe={selectedCompe} handleTag={handleTag} gender={"Putri"} compe={"Futsal"} level={"SMA"}/>
                        </div>
                        <div className="my-5 px-3 lg:px-10 xl:px-32">
                            <div className="text-lg md:text-xl xl:text-2xl">SMP</div>
                            <Tag selectedCompe={selectedCompe} handleTag={handleTag} gender={"Putra"} compe={"Futsal"} level={"SMP"}/>
                        </div>
                    </div>
                </div> 
            </SplideSlide>
            <SplideSlide>
                <div className="bg-[#040030] rounded-3xl p-5 lg:p-7 2xl:p-10 h-96 w-full text-center text-white font-ProductSans">
                    <div className="text-3xl md:text-4xl lg:text-5xl">Voli</div>
                    <hr className='mt-1 mb-5'/>
                    <div className="grid grid-rows">
                        <div className="my-5 px-3 lg:px-10 xl:px-32">
                            <div className="text-lg md:text-xl xl:text-2xl">SMA</div>
                            <Tag selectedCompe={selectedCompe} handleTag={handleTag} gender={"Putra"} compe={"Voli"} level={"SMA"}/>
                            <Tag selectedCompe={selectedCompe} handleTag={handleTag} gender={"Putri"} compe={"Voli"} level={"SMA"}/>
                        </div>
                    </div>
                </div> 
            </SplideSlide>
            <SplideSlide>
                <div className="bg-[#040030] rounded-3xl p-5 lg:p-7 2xl:p-10 h-96 md:h-96 w-full text-center text-white font-ProductSans">
                    <div className="text-3xl md:text-4xl lg:text-5xl">Badminton</div>
                    <hr className='mt-1 mb-5'/>
                    <div className="grid grid-rows">
                        <div className="px-3 lg:px-10 xl:px-48 2xl:px-64">
                            <div className="text-lg md:text-xl xl:text-2xl">SMA</div>
                            <div className='grid grid-cols-2'>
                                <button onClick={()=> handleTag("Badminton SMA Ganda Putra")} className={`text-sm md:text-lg xl:text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-3 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.1] duration-100 ${selectedCompe === "Badminton SMA Ganda Putra" ? `bg-[#040030] border-red-900 scale-[1.1]`: ``}`}>
                                    Ganda Putra</button>
                                <button onClick={()=> handleTag("Badminton SMA Ganda Putri")} className={`text-sm md:text-lg xl:text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-3 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.1] duration-100 ${selectedCompe === "Badminton SMA Ganda Putri" ? `bg-[#040030] border-red-900 scale-[1.1]`: ``}`}>
                                    Ganda Putri</button>
                                <button onClick={()=> handleTag("Badminton SMA Ganda Campuran")} className={`text-sm md:text-lg xl:text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-3 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.1] duration-100 ${selectedCompe === "Badminton SMA Ganda Campuran" ? `bg-[#040030] border-red-900 scale-[1.1]`: ``}`}>
                                    Ganda Campuran</button>
                                <button onClick={()=> handleTag("Badminton SMA Regu")} className={`text-sm md:text-lg xl:text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-3 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.1] duration-100 ${selectedCompe === "Badminton SMA Regu" ? `bg-[#040030] border-red-900 scale-[1.1]`: ``}`}>
                                    Regu</button>
                            </div>
                        </div>
                        <div className="my-5 px-3 lg:px-10 xl:px-48 2xl:px-64">
                            <div className="text-lg md:text-xl xl:text-2xl">SMP</div>
                            <div className='grid grid-cols-2 '>
                                <button onClick={()=> handleTag("Badminton SMP Ganda Putra")} className={`text-sm md:text-lg xl:text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-5 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.1] duration-100 ${selectedCompe === "Badminton SMP Ganda Putra" ? `bg-[#040030] border-red-900 scale-[1.1]`: ``}`}>Ganda Putra</button>
                                <button onClick={()=> handleTag("Badminton SMP Ganda Campuran")} className={`text-sm md:text-lg xl:text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-5 mx-3 bg-red-900 hover:bg-[#040030] hover:border-red-900 hover:text-white hover:scale-[1.1] duration-100 ${selectedCompe === "Badminton SMP Ganda Campuran" ? `bg-[#040030] border-red-900 scale-[1.1]`: ``}`}>Ganda Putri</button>
                            </div>
                        </div>
                    </div>
                </div> 
            </SplideSlide>
        </Splide>
        </div>
    )
}