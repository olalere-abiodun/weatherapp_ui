import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false);
  const [units, setUnits] = useState({
    temperature: "c",
    wind: "kmh",
    precipitation: "mm",
  });
 
  return (
    
    <>
      <header>
        <img src="/assets/images/logo.svg" alt="Logo" />

         <div className="dropdown-container">
      <button
        className="dropdown-button"
        onClick={() => setOpen(!open)}
      >
        <img src="/assets/images/icon-units.svg" alt="" /> Units <img src="/assets/images/icon-dropdown.svg" alt="" />
      </button>

      {open && (
        <div className="dropdown-menu">
          <div className="dropdown-section">
            <div className="dropdown-header">Switch to Imperial</div>
            <div className="dropdown-label">Temperature</div>

            <div
              className={`dropdown-item ${
                units.temperature === "c" ? "active" : ""
              }`}
              onClick={() => setUnits({ ...units, temperature: "c" })}
            >
              Celsius (°C)
            </div>

            <div
              className={`dropdown-item ${
                units.temperature === "f" ? "active" : ""
              }`}
              onClick={() => setUnits({ ...units, temperature: "f" })}
            >
              Fahrenheit (°F)
            </div>
            <hr />
          </div>
          

          <div className="dropdown-section">
            <div className="dropdown-label">Wind Speed</div>

            <div
              className={`dropdown-item ${
                units.wind === "kmh" ? "active" : ""
              }`}
              onClick={() => setUnits({ ...units, wind: "kmh" })}
            >
              km/h
            </div>

            <div
              className={`dropdown-item ${
                units.wind === "mph" ? "active" : ""
              }`}
              onClick={() => setUnits({ ...units, wind: "mph" })}
            >
              mph
            </div>
            <hr />
          </div>

          <div className="dropdown-section">
            <div className="dropdown-label">Precipitation</div>

            <div
              className={`dropdown-item ${
                units.precipitation === "mm" ? "active" : ""
              }`}
              onClick={() =>
                setUnits({ ...units, precipitation: "mm" })
              }
            >
              Millimeters (mm)
            </div>

            <div
              className={`dropdown-item ${
                units.precipitation === "in" ? "active" : ""
              }`}
              onClick={() =>
                setUnits({ ...units, precipitation: "in" })
              }
            >
              Inches (in)
            </div>
          </div>
        </div>
      )}
    </div>
      </header>
    </>
  )
}

export default Header
