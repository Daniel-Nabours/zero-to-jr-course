import type { NextPage, } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const Home: NextPage = () => {

    const router = useRouter()

    const handleBack = () => {
        router.back()
    } 

    return (
        <div>
            <header>
               Goodbye
            </header>



            <footer className="nav-button-container">
                <div className='triangle-left' onClick={handleBack} /> 
            </footer>

        </div>
    )
}

export default Home
