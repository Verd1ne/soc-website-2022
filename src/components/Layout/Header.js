import React, {useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu"

export default function Header() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="fixed z-[100] w-full h-fit">
      <div className="grid grid-cols-3 md:grid-cols-4 bg-black flex justify-between pr-2 md:pr-5 lg:pr-10 pt-3 py-2 xl:pb-5 w-screen h-fit max-h-min">
        <div className="md:span-cols-1 w-fit h-fit">
          <Link to="/" className="">
            <StaticImage 
              src= "../../images/SmakonecupLogo.png"
              alt= "logo"
              placeholder="blurred"
              // layout="fixed"
              // height= {64}
              className="h-[20px] md:h-[40px] lg:h-[64px] md:w-5/6 lg:w-5/6 xl:w-5/6 xl:mt-2"
            />
          </Link>
        </div>
        <div className="col-start-3 md:col-start-2 md:col-span-3">
          {/* laptop */}
          <div className="hidden md:flex flex-row my-auto text-white md:space-x-4 lg:space-x-7 font-ProductSans md:text-lg lg:text-2xl xl:text-3xl w-full justify-end mt-1 lg:mt-4 xl:mt-6">
            <Link to="/" className="headerButton h-full">About</Link>
            <Link to="/" className="headerButton">Store</Link>
            <Link to="/scoreboard" className="headerButton">Competition</Link>
            <Link to="/" className="headerButton">Registration</Link>
            <Link to="/" className="headerButton">Soundscape</Link>
          </div>
          {/* mobile */}
          <div className="flex md:hidden justify-end align-center">
            <button onClick={() => setDropdown(prev => !prev)}>
              <GiHamburgerMenu color="white" size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className={`${dropdown ? "" : "hidden"} w-fit fixed right-0 px-2 pt-1 -mt-2 rounded divide-y bg-black`}>
        <ul className="py-1 text-[10px] text-gray-700 dark:text-gray-200 text-right">
          <li>
            <Link to="/" className="headerButton h-full">About</Link>
          </li>
          <li>
            <Link to="/" className="headerButton">Store</Link>
          </li>
          <li>
            <Link to="/scoreboard" className="headerButton">Competition</Link>
          </li>
          <li>
            <Link to="/" className="headerButton">Registration</Link>
          </li>
          <li>
            <Link to="/" className="headerButton">Soundscape</Link>
          </li>
            {/* <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a> */}
        </ul>
    </div>
  </div>
  )
}
