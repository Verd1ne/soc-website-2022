import React from 'react'

export default function Nowshowingcard(props) {
  return (
    <div className="m-4 lg:m-0">
      <img src={props.image} alt="Now Showing" className="lg:p-4 xl:p-8"/>
    </div>

  )
}
