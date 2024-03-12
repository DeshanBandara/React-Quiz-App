/* eslint-disable no-unused-vars */
import React from 'react'
import './quiz.css'

const quiz = () => {
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>Which device is required for the Internet Connection?</h2>
        <ul>
            <li>ABC</li>
            <li>LMN</li>
            <li>XYZ</li>
            <li>DRZ</li>
        </ul>
        <button>Next</button>
        <div className='index'>1 of 5 questions</div>
    </div>
  )
}

export default quiz