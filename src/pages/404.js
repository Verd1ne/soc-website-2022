import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles} className="flex grid-cols-2 text-white justify-center text-center">
      <title>Not found</title>
      <div className="flex text-8xl font-bold justify-center items-center pr-5 outline-r">
        404
      </div>
      <div>
        <h1 /*style={headingStyles}*/ className="text-4xl font-bold mb-5">Page not found</h1>
        <p /*style={paragraphStyles}*/ className="text-2xl mb-3">
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">😔</span>{" "}
          we couldn’t find what you were looking for.
        </p>
        <Link to="/" className="justify-center text-xl text-white font-bold">Go Home</Link>
      </div>
    </main>
  )
}

export default NotFoundPage
