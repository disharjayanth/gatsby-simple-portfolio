import React from 'react'
import Layout from '../components/layout'

export default function About() {
  return (
    <div>
      <Layout />
      <div className="mx-5 md:mx-10 px-4 md:px-10">
        <h2 className="font-semibold text-5xl">Web developer</h2>
        <h4 className="font-semibold text-2xl pt-2">Languages:</h4>
        <ul>
          <li className="font-light text-xl">JavaScript</li>
          <li className="font-light text-xl">TypeScript</li>
          <li className="font-light text-xl">Go</li>
        </ul>
        <h4 className="font-semibold text-2xl pt-2">Framework:</h4>
        <ul>
          <li className="font-light text-xl">Reactjs</li>
          <li className="font-light text-xl">Expressjs</li>
        </ul>
        <h4 className="font-semibold text-2xl pt-2">Database:</h4>
        <ul>
          <li className="font-light text-xl">MySQL</li>
          <li className="font-light text-xl">MongoDB</li>
        </ul>
      </div>
    </div>
  )
}
