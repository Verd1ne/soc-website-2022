import React, {useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Squash as Hamburger } from 'hamburger-react'

export default function Header() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={"fixed z-[100] w-full top-0 overflow-hidden"}>
      <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 bg-black flex justify-between w-screen h-14 md:h-20 pr-4 md:pr-8 lg:pr-12">
          <Link to="/" className="col-span-3 sm:col-span-2 lg:col-span-1 h-full ml-0 md:ml-4 lg:ml-8 xl:ml-12">
            <StaticImage 
              src= "../../images/SmakonecupLogo.webp"
              alt= "logo"
              placeholder=""
              layout="constrained"
              height= {64}
              className="-mt-1 md:mt-2"
            />
          </Link>
        <div className="col-start-4 sm:col-start-3 lg:col-span-3">
          {/* laptop */}
          <div className="hidden lg:flex text-white space-x-4 lg:space-x-7 font-ProductSans text-xl lg:text-2xl w-full justify-end my-auto h-full items-center inline">
            <Link to="/about" className="headerButton">About</Link>
            {/* <Link to="/" className="headerButton">Store</Link> */}
            <Link to="/competition" className="headerButton">Competition</Link>
            <Link to="/scoreboard" className="headerButton">Scoreboard</Link>
            <a href="https://socregis.smakone.org/" target="_blank" rel="noreferrer" className="headerButton">Registration</a>
            <a href="https://open.spotify.com/artist/6dBkUvQfVsXZiz9X9DDnTo?si=dI6zyRaSTkaLpFfu2Qt1-A" target="_blank" rel="noreferrer" className="headerButton">Soundscape</a>
          </div>
          {/* mobile */}
          <div className="flex lg:hidden justify-end items-center h-full mr-4">
            {/* <button onClick={() => setDropdown(prev => !prev)}> */}
              <Hamburger color="white" size={30} toggled={dropdown} toggle={setDropdown} duration={0.4} rounded/>
            {/* </button> */}
          </div>
        </div>
      </div>
      <div className={`${dropdown ? "" : "hidden"} lg:hidden w-fit fixed right-0 pl-[16px] sm:pl-[20px] md:pl-[24px] lg:pl-[28px] pr-[20px] lg:pr-[32px] py-1 -mt-2 rounded-bl-xl divide-y bg-black`}>
        <ul className="py-1 text-[20px] text-white text-right font-ProductSans">
          <li>
            <Link to="/about" className="headerButton headerButtonThin my-2">About</Link>
          </li>
          <li>
            {/* <Link to="/" className="headerButton headerButtonThin">Store</Link> */}
          </li>
          <li>
            <Link to="/scoreboard" className="headerButton">Scoreboard</Link>
          </li>
          <li>
            <Link to="/competition" className="headerButton headerButtonThin my-2">Competition</Link>
          </li>
          <li>
            <a href="https://socregis.smakone.org/" target="_blank" rel="noreferrer" className="headerButton headerButtonThin my-2">Registration</a>
          </li>
          <li>
            <a href="https://open.spotify.com/artist/6dBkUvQfVsXZiz9X9DDnTo?si=dI6zyRaSTkaLpFfu2Qt1-A" target="_blank" rel="noreferrer" className="headerButton headerButtonThin my-2">Soundscape</a>
          </li>
            {/* <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a> */}
        </ul>
      </div>
    </div>
  )
}
