// import { useState } from 'react'
import Header from '../components/Header.jsx'
import '../App.css'

function Dashboard() {

 
  return (
    <>
      <Header />
      <h1 style={{ fontFamily: "BricolageGrotesque", color: "white", fontSize: "36px", textAlign: "center", marginBottom: "30px" }}>How's the sky looking today?</h1>
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
      
    </>
  )
}

export default Dashboard
