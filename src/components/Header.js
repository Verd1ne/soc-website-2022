import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Header() {
  return (
    <div className="z-[100] fixed bg-black flex justify-between px-6 sm:px-8 h-16 w-screen">
      <StaticImage 
        src= "../images/SmakonecupLogo.png"
        alt= "logo"
        placeholder="blurred"
        layout="fixed"
        height= {64}
      />
      <div className="flex-row my-auto text-white space-x-7 font-ProductSans text-2xl">
        <Link to="/">About</Link>
        <Link to="/">Store</Link>
        <Link to="/">Competition</Link>
        <Link to="/">Registration</Link>
        <Link to="/">Soundscape</Link>
      </div>
    </div>
  )
}
