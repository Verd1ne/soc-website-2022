import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Header() {
  return (
    <div className="z-[100] fixed bg-black flex justify-between px-8 sm:px-16 h-16 w-screen">
      <Link to="/">
        <StaticImage 
          src= "../../images/SmakonecupLogo.png"
          alt= "logo"
          placeholder="blurred"
          layout="fixed"
          height= {64}
        />
      </Link>
      <div className="flex-row my-auto text-white space-x-7 font-ProductSans text-2xl">
        <Link to="/" className="headerButton">About</Link>
        <Link to="/" className="headerButton">Store</Link>
        <Link to="/scoreboard" className="headerButton">Competition</Link>
        <Link to="/" className="headerButton">Registration</Link>
        <Link to="/" className="headerButton">Soundscape</Link>
      </div>
    </div>
  )
}
