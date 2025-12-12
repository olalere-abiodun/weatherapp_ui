// import { useState } from 'react'
import Header from '../components/Header.jsx'
import '../App.css'

function Dashboard() {

 
  return (
    <>
      <Header />
      <div className='top'>
        <h1>How's the sky looking today?</h1>
      <div className='search-wrapper'>
        <div className='search-container'>
          <img src="/assets/images/icon-search.svg" alt="" className='search-icon'/>
          <input 
            type="text"
             placeholder="Search for a place..."
           />
        </div>
        <button className='search-button'>
          Search
        </button>
      </div>
      </div>
      <div>
        <div>
          {/* Weather details will go here */}
          <div style={{
    backgroundImage: "url('./assets/images/bg-today-large.svg')",
  }} className="today-weather-card">

    <p>Hello</p>

          </div>
        </div>
        <div>
          {/* Additional information will go here */}
        </div>
      </div>
      
    </>
  )
}

export default Dashboard
