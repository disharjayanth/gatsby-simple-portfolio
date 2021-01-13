import React, { useEffect, useRef, useState } from 'react'
import Layout from '../components/layout'

export default function Index() {
  let counter = useRef(0)
  const skills = [
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'FreeLancer',
  ]

  const [skill, setSkill] = useState('FreeLancer')

  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log('counter.current incremented', counter.current)
      counter.current++
      if (counter.current >= 5) {
        counter.current = 0
        // console.log('counter.current is 0')
      }
      setSkill(skills[counter.current])
      // console.log('skill is set')
    }, 1000)

    return () => {
      clearInterval(intervalId)
      // console.log('Interval id is cleared')
    }
  }, [counter, skills])

  return (
    <div>
      <Layout />
      <div className="flex items-center justify-center">
        <div className="my-60 h-auto w-3/4 text-center">
          <p className="font-bold text-5xl md:text-7xl">Dishar Jayantha</p>
          <div className="mr-1 mb-1 md:mr-2 md:mb-2 inline-block h-2 w-2 bg-black rounded "></div>
          <p className="inline font-bold text-2xl md:text-4xl">{skill}</p>
          <div className="ml-1 mb-1 md:ml-2 md:mb-2 inline-block h-2 w-2 bg-black rounded"></div>
        </div>
      </div>
    </div>
  )
}
