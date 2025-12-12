// import { useState } from 'react'
import Header from '../components/Header.jsx'
import '../App.css'

function Invalid() {

 
  return (
    <>
      <Header />
      <div className='top'> 
        <img src="./assets/images/icon-error.svg" alt="error"/>
      <h1>Something went wrong</h1>
      <p >We couldn't connect to the server (API error). Please try again in a few moments</p>
      <button className='retry-button'>
        <img src="./assets/images/icon-retry.svg" alt="retry" />
        Retry
      </button>
      </div>
    </>
  )
}

export default Invalid
