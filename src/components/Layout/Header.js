import React, {useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu"

export default function Header() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="fixed z-[100] w-full">
      <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 bg-black flex justify-between w-screen h-16 pr-4 md:pr-8 lg:pr-12">
          <Link to="/" className="col-span-3 sm:col-span-2 lg:col-span-1">
            <StaticImage 
              src= "../../images/SmakonecupLogo.png"
              alt= "logo"
              placeholder="blurred"
              layout="fixed"
              height= {64}
              className=""
            />
          </Link>
        <div className="col-start-4 sm:col-start-3 lg:col-span-3">
          {/* laptop */}
          <div className="hidden lg:flex text-white space-x-4 lg:space-x-7 font-ProductSans text-xl lg:text-2xl w-full justify-end my-auto h-full items-center inline">
            <Link to="/" className="headerButton">About</Link>
            <Link to="/" className="headerButton">Store</Link>
            <Link to="/scoreboard" className="headerButton">Competition</Link>
            <Link to="/" className="headerButton">Registration</Link>
            <Link to="/" className="headerButton">Soundscape</Link>
          </div>
          {/* mobile */}
          <div className="flex lg:hidden justify-end items-center h-full">
            <button onClick={() => setDropdown(prev => !prev)}>
              <GiHamburgerMenu color="white" size={40} />
            </button>
          </div>
        </div>
      </div>
      <div className={`${dropdown ? "" : "hidden"} lg:hidden w-fit fixed right-0 px-3 pt-1 -mt-2 rounded divide-y bg-black`}>
        <ul className="py-1 text-[20px] text-gray-700 dark:text-gray-200 text-right">
          <li>
            <Link to="/" className="headerButton headerButtonThin">About</Link>
          </li>
          <li>
            <Link to="/" className="headerButton headerButtonThin">Store</Link>
          </li>
          <li>
            <Link to="/scoreboard" className="headerButton headerButtonThin">Competition</Link>
          </li>
          <li>
            <Link to="/" className="headerButton headerButtonThin">Registration</Link>
          </li>
          <li>
            <Link to="/" className="headerButton headerButtonThin">Soundscape</Link>
          </li>
            {/* <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a> */}
        </ul>
      </div>
    </div>
  )
}
