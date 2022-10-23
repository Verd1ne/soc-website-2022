import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Link } from "gatsby"
import Badminton from "../../images/PosterLomba/Badminton.webp";
import Band from "../../images/PosterLomba/Band.webp"
import Basket from "../../images/PosterLomba/Basket.webp"
import BusinessPlan from "../../images/PosterLomba/BusinessPlan.webp"
import Eds from "../../images/PosterLomba/Eds.webp"
import Futsal from "../../images/PosterLomba/Futsal.webp"
import Ipa from "../../images/PosterLomba/Ipa.webp"
import Ips from "../../images/PosterLomba/Ips.webp"
import Matematika from "../../images/PosterLomba/Matematika.webp"
import ModernDance from "../../images/PosterLomba/ModernDance.webp"
import Mun from "../../images/PosterLomba/Mun.webp"
import Mural from "../../images/PosterLomba/Mural.webp"
import Paskibra from "../../images/PosterLomba/Paskibra.webp"
import PencakSilat from "../../images/PosterLomba/PencakSilat.webp"
import Photography from "../../images/PosterLomba/Photography.webp"
import Podcast from "../../images/PosterLomba/Podcast.webp"
import Speech from "../../images/PosterLomba/Speech.webp"
import Vlog from "../../images/PosterLomba/Vlog.webp"
import Voli from "../../images/PosterLomba/Voli.webp"

import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default function Nowshowing() {
  return (
    <>
      <Splide
        options={{
          rewind: true,
          start: 9,
          lazyLoad:'nearby',
          type   : 'loop',
          perPage: 4,
          perMove: 4,
          gap: 20,
          padding: "3rem",
          drag: "free",
          pagination: false,
          breakpoints: {
            623: {
              perPage: 2,
              perMove: 2
            },
            935: {
              perPage: 3,
              perMove: 3
            },
            1247: {
              perPage: 4,
              perMove: 4
            }
          },
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          }
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <Link to="/competition/badminton">
            <img src={Badminton} alt="Badminton"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/band">
            <img src={Band} alt="Band"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/basketball">
            <img src={Basket} alt="Basket"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/businessPlan">
            <img src={BusinessPlan} alt="Business Plan"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/eds">
            <img src={Eds} alt="EDS"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/futsal">
            <img src={Futsal} alt="Futsal"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/jhsIpa">
            <img src={Ipa} alt="JHS IPA"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/jhsIps">
            <img src={Ips} alt="JHS IPS"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/jhsmat">
            <img src={Matematika} alt="JHS Matematika"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/modernDance">
            <img src={ModernDance} alt="Modern Dance"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/mun">
            <img src={Mun} alt="MUN"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/mural">
            <img src={Mural} alt="Mural"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/paskibra">
            <img src={Paskibra} alt="Paskibra"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/pencakSilat">
            <img src={PencakSilat} alt="PencakSilat"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/photography">
            <img src={Photography} alt="Photography"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/podcast">
            <img src={Podcast} alt="Podcast"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/speech">
            <img src={Speech} alt="Speech"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/vlog">
            <img src={Vlog} alt="Vlog"></img>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to="/competition/voli">
            <img src={Voli} alt="Voli"></img>
          </Link>
        </SplideSlide>
      </Splide>
    </>
  );
}
