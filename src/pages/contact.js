import React from 'react'
import Layout from '../components/layout'

export default function Contact() {
  return (
    <div>
      <Layout />
      <div className="mx-1 md:mx-10 px-4 md:px-10">
        <h2 className="font-semibold text-5xl">Email:</h2>
        <p className="font-medium text-xl md:text-2xl pt-2">
          disharjayantha@gmail.com
        </p>
        <p className="font-medium text-xl md:text-2xl pt-2">
          disharjayantha@protonmain.com
        </p>
        <p className="font-medium text-xl md:text-2xl pt-2">
          https://github.com/disharjayanth
        </p>
      </div>
    </div>
  )
}
