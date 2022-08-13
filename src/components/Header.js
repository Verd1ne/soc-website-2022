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
      <div className="flex-row my-auto text-white space-x-7 font-ProductSans text-2xl lg:p-4 py-3 px-0 block border-b-2 border-transparent font-bold">
        <Link className="hover:text-yellow-500" to="/">About</Link>
        <Link className="hover:text-yellow-500" to="/">Competition</Link>
        <Link className="hover:text-yellow-500" to="/">Store</Link>
        <Link className="hover:text-yellow-500" to="/">Soundscape</Link>
        <Link className="hover:text-yellow-500" to="/">Registration</Link>
      </div>
    </div>
  )
}
