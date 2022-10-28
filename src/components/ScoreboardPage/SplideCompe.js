import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
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
                <div className="border border-black border-2 bg-white rounded-3xl p-5 lg:p-7 2xl:p-10 text-center">
                    <p>Basket</p>
                    <hr/>
                    <ul>
                        <li>Basket SMA Putra</li>
                        <li>Basket SMA Putri</li>
                        <li>Basket SMP Putra</li>
                        <li>Basket SMP Putri</li>
                    </ul>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="border border-black border-2 bg-white rounded-3xl p-5 lg:p-7 2xl:p-10 text-center">
                    Futsal
                    <hr/>
                    <ul>
                        <li>Futsal SMA Putra</li>
                        <li>Futsal SMA Putri</li>
                        <li>Futsal SMP Putra</li>
                    </ul>
                </div> 
            </SplideSlide>
            <SplideSlide>
                <div className="border border-black border-2 bg-white rounded-3xl p-5 lg:p-7 2xl:p-10 text-center">
                    Voli
                    <hr/>
                    <ul>
                        <li>Voli SMA Putra</li>
                        <li>Voli SMA Putri</li>
                    </ul>
                </div> 
            </SplideSlide>
            <SplideSlide>
                <div className="border border-black border-2 bg-white rounded-3xl p-5 lg:p-7 2xl:p-10 text-center">
                    Badminton
                    <hr/>
                    <ul>
                        <li>Badminton SMA Ganda Putra</li>
                        <li>Badminton SMA Ganda Putri</li>
                        <li>Badminton SMA Ganda Campuran</li>
                        <li>Badminton SMA Regu</li>
                        <li>Badminton SMP Ganda Putra</li>
                        <li>Badminton SMP Ganda Putri</li>
                    </ul>
                </div> 
            </SplideSlide>
        </Splide>
        </div>
    )
}