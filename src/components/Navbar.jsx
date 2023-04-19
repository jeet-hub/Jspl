import React, { useEffect, useState } from 'react';
import './Navbar.css';


function Navbar() {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000)
  }, [])


  // const curDate = new Date().toLocaleDateString();
  // const curtime = new Date().toLocaleTimeString();


  return (
    <>

      <div className='nav d-flex align-items-center justify-content-between text align-center '>
        <div class="container-fluid">
          <div class="d2 row ">
            <div class="nav_box col-2 col-sm-1">
              <div className='logo'>
                <img src='./img/jindal.jpeg' alt='jindal_logo' className='logo' style={{ width: 100, height: 80 }} />
              </div>
            </div>
            <div class="nav_box col-6 col-sm-9">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>

                    <th scope="col">Furnace</th>
                    <th scope="col">Total Heat Number</th>
                    <th scope="col">Shift A</th>
                    <th scope="col">Shift B</th>
                    <th scope="col">Shift C</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>EAF</td>
                    <td>19</td>
                    <td>2</td>
                    <td>4</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>NOP</td>
                    <td>12</td>
                    <td>2</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div class="date_time col-2 col-sm-1">
              <div className='dt_content'>
                <p>Date/Time</p>
                <p>{time.toLocaleDateString()}</p>
                <p>{time.toLocaleTimeString()}</p>

              </div>
            </div>

            <div class="nav_box col-2 col-sm-1">
              <div className='logo'>
                <img src='./img/twynlogo.png' alt='jindal_logo' className='logo-2 logo' style={{ width: 100, height: 80 }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div> */}
      {/* </nav> */}
    </>
  )
}

export default Navbar
