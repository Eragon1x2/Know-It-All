import React from 'react'
import { Link } from 'react-router-dom'
function MainPage() {
    return (
        <>
         <h1>Choose quiz</h1>
        <div className='main-page'>
        <Link to='quizs/0'>React basic</Link>
        <Link to='quizs/1'>React Hooks</Link>
        <Link to='quizs/2'>TypeScript</Link>
        </div>
        </>
    )
}

export default MainPage
