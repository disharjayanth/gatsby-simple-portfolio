import { Link } from 'gatsby'
import React from 'react'

const ListLink = (props) => (
  <li className="ml-2 sm:ml-4">
    <Link to={props.to}>{props.linkName}</Link>
  </li>
)

export default function Layout() {
  return (
    <div>
      <div className="flex justify-between mx-5 md:mx-10 my-5 md:my-10">
        <div>
          <Link className="font-bold text-lg sm:text-xl uppercase" to="/">
            Dishar Jayantha
          </Link>
        </div>
        <div>
          <ul className="flex">
            <ListLink to="/" linkName="Home" />
            <ListLink to="/about" linkName="About" />
            <ListLink to="/contact" linkName="Contact" />
          </ul>
        </div>
      </div>
    </div>
  )
}
