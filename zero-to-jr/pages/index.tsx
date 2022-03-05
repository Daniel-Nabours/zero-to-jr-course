import type { NextPage, } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const Home: NextPage = () => {

  const router = useRouter()

  const handleNext = () => {
    router.push( '/intro/startingout/HowWebsitesWork' )
  }
  

  return (
    <div className='page-container'>
      <header>
        Introduction to Modern Web Development
      </header>

      <footer className='nav-button-container'>
        <div className='triangle-right' onClick={handleNext} />
      </footer>

    </div>
  )
}

export default Home
