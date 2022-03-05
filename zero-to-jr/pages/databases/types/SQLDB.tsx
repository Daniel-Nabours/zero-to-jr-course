import type { NextPage, } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const Home: NextPage = () => {

    const router = useRouter()

    const handleBack = () => {
        router.back()
    }

    const handleNext = () => {
        router.push('./KeyValueDB')
    }

    return (
        <div>
            <header>
                SQL Database
            </header>



            <footer className="nav-button-container">
                <div className='triangle-left' onClick={handleBack} />
                <div className='triangle-right' onClick={handleNext} />
            </footer>

        </div>
    )
}

export default Home
