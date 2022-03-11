import type { NextPage, } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const Home: NextPage = () => {

    return (
        <div>
            <header>
                Packages
            </header>
            <p>A package is simply a collection of all of the bits of other people’s code that you use inside your program.</p>

            <p>Instead of always programming everything from scratch, a package manager allows you to reuse other people’s code in a clear, safe manner.</p>

            <p>Reusing other people’s code sounds a bit crazy, but it’s a common practice in web development and you’re probably already doing this when you use libraries like React and jQuery. Other people have authored that code, and you’re using it. A package manager system manages the dependencies, or other code that you require.</p>

            <p>There are many package managers, like Yarn and NPM, which are specifically for code written in JavaScript to be used in the Node.js environment. NPM is also a vibrant online community and catalog for tons of different modules for public and private use.</p>

        </div>
    )
}

export default Home
