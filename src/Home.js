import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="flex items-center justify-center h-screen flex-col text-white">
            <Link to="/unique" className="mb-4 underline">UseId</Link>
            <Link to="/transition" className="mb-4 underline">useTransition</Link>
            <Link to="/deferredvalue" className="mb-4 underline">useDeferredValue</Link>
        </div>
    )
}

export default Home