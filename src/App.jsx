// import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Invalid from './pages/Invalid.jsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/invalid" element={<Invalid />} />
    </Routes>
    </BrowserRouter>
  )
  // return (
  //   <>
  //     {/* <Header />
  //     <h1 style={{ fontFamily: "BricolageGrotesque", color: "white", fontSize: "36px", textAlign: "center", marginBottom: "30px" }}>How's the sky looking today?</h1>
  //     <div className='search-wrapper'>
  //       <div className='search-container'>
  //         <img src="/assets/images/icon-search.svg" alt="" className='search-icon'/>
  //         <input 
  //           type="text"
  //            placeholder="Search for a place..."
  //          />
  //       </div>
  //       <button className='search-button'>
  //         Search
  //       </button>
  //     </div>
  //     <h3 style={{color: "white", textAlign:"center", marginTop:"20px"}}>No search results found!</h3> */}
  //    </>
  // )
}

export default App
