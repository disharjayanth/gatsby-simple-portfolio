import React from 'react'
import Layout from '../components/layout'

export default function Contact() {
  return (
    <div>
      <Layout />
      <title>Contact</title>
      <div className="mx-1 md:mx-10 px-4 md:px-10">
        <h2 className="font-semibold text-5xl">Email:</h2>
        <p className="font-medium text-xl md:text-2xl pt-2 hover:text-blue-700">
          <a
            href="mailto:disharjayantha@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            disharjayantha@gmail.com
          </a>
        </p>
        <p className="font-medium text-xl md:text-2xl pt-2 hover:text-blue-700">
          <a
            href="mailto:disharjayantha@protonmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            disharjayantha@protonmail.com
          </a>
        </p>
        <p className="font-medium text-xl md:text-2xl pt-2 hover:text-blue-700">
          <a href="https://github.com/disharjayanth">
            https://github.com/disharjayanth
          </a>
        </p>
      </div>
    </div>
  )
}
