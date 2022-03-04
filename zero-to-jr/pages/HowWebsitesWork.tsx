import type { NextPage, } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
    
    return (
        <div>
            <header>
                How Websites Work
            </header>
            <button>
                <Link href="/pages/">&gt;</Link>
            </button>
            <button>
                <Link href="../">&lt;</Link>
            </button>
        </div>
    )
}

export default Home
