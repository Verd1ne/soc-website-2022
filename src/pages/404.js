import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main className="flex grid-cols-2 text-white justify-center text-center mt-16 overflow-hidden">
      <title>Not found</title>
      <div className="flex text-8xl font-bold justify-center items-center pr-5 outline-r overflow-hidden">
        404
      </div>
      <div className=" overflow-hidden">
        <h1 className="text-4xl font-bold mb-5 p-2">Page not found</h1>
        <p className="text-2xl mb-3">
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">😔</span>{" "}
          we couldn’t find what you were looking for.
        </p>
        <Link to="/" className="justify-center text-xl text-white font-bold pb-1">Go Home</Link>
      </div>
    </main>
  )
}

export default NotFoundPage
