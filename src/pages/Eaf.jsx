import React from 'react';

import Chart from 'react-apexcharts';



const Eaf = () => {

  return (
    <>

      <div className="main_box row p-3">
        <div class="col-sm-4">
          <div className='data_section'>
            <h4 className='data_header'>NOF-HEATNO : (0987656)</h4>
            <div className='heat_list row mb-3'>
              <div className='heat_img_main col-3 col-sm-3'>
                <img className='heat_img' src='../img/qw.jpg' alt='pouring-gold' style={{ width: 100, height: 160 }} />
              </div>
              <div className='data_name col-5 col-sm-5'>
                <p>Start Time</p>
                <p>Super sonic 02</p>
                <p>Total 02</p>
                <p>Running Time</p>
                <p>Temperature</p>
                <p>Gross Topping</p>
                <p>Weight</p>
              </div>
              <div className='col-4 col-sm-4'>
                <div className='live_data'>
                  <p>10</p>
                  <p>20.23</p>
                  <p>12</p>
                  <p>10</p>
                  <p>20.23</p>
                  <p>12</p>
                  <p>65</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div className='data_section'>
            <h4 className='data_header'>NOF-HEATNO:(2221066)</h4>
            <div className='heat_list row'>
              <div className='heat_img_main col-3 col-sm-3'>
                <img className='heat_img' src='../img/qw.jpg' alt='pouring-gold' style={{ width: 100, height: 160 }} />

              </div>
              <div className='data_name col-5 col-sm-5'>
                <p>Start Time</p>
                <p>Super sonic 02</p>
                <p>Total 02</p>
                <p>Running Time</p>
                <p>Temperature</p>
                <p>Gross Topping</p>
                <p>Weight</p>
              </div>
              <div className='col-4 col-sm-4'>
                <div className='live_data'>
                  <p>10.5 MW</p>
                  <p>0.9.55 min</p>
                  <p>1300 'C</p>
                  <p>14.42 Bar</p>
                  <p>8.04 m2/h</p>
                  <p>0 kWH</p>
                  <p>8o</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className='data_section'>
            <h4 className='data_header'>LRF-Power Chart</h4>
            <div className='heat_list row'>
              {/* <div className='heat_img_main col-4 col-sm-2'>
                <img className='heat_img' src='./img/heat-img.gif' alt='pouring-gold' style={{ width: 80, height: 120 }} />
              </div> */}

              <div className='col-4 col-sm-12 '>
                <Chart
                  type='bar'
                  height={265}

                  series={[
                    {
                      name: "a",
                      data: [34, 54, 45, 39, 90, 96, 23]
                    }
                  ]}

                  options={{

                  }}
                >

                </Chart>
              </div>

            </div>
          </div>
        </div>

      </div>
      {/* tabs  */}
      <div className='tabs pl-3 '>
        <ul className="tabas nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#home">Live</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#menu1">History</a>
          </li>
          <li className="">
            <a className="nav-link" data-toggle="tab" href="#menu2">Heat</a>
          </li>
        </ul>

        <div className="tab-content">
          <div id="home" className=" tab-pane active "><br />
            <h3>Live</h3>
            <form>
              <div className='row'>
                <div className='col-sm-4'>
                  <label>name:</label>
                  <input type="text" /> <br />
                  <label>name:</label>
                  <input type="text" /> <br />
                  <label>name:</label>
                  <input type="text" />
                </div>

                <div className='col-sm-4'>
                  <label>name:</label>
                  <input type="text" /> <br />
                  <label>name:</label>
                  <input type="text" /> <br />
                  <label>name:</label>
                  <input type="text" />
                </div>
                <div className='col-sm-4'>
                  <label>name:</label>
                  <input type="text" /> <br />
                  <label>name:</label>
                  <input type="text" /> <br />
                  <label>name:</label>
                  <input type="text" /> <br />
                  <input type="submit" />
                </div>
              </div>

            </form>
          </div>
          <div id="menu1" className=" tab-pane "><br />
            <h3>History</h3>
            <form>
              <div className='row'>
                <div className='col-sm-4'>
                  <label>name:</label>
                  <input type="text" /> <br />
                  <label>name:</label>
                  <input type="text" /> <br />
                  <label>name:</label>
                  <input type="text" />
                </div>

                <div className='col-sm-4'>
                  <label>name:</label>
                  <input type="text" /> <br />
                  <label>name:</label>
                  <input type="text" /> <br />
                  <label>name:</label>
                  <input type="text" />
                </div>
                <div className='col-sm-4'>
                  <label>name:</label>
                  <input type="text" /> <br />
                  <label>name:</label>
                  <input type="text" /> <br />
                  <label>name:</label>
                  <input type="text" /> <br />
                  <input type="submit" />
                </div>
              </div>

            </form>
          </div>
          <div id="menu2" className=" tab-pane "><br />
            <h3>Heat Data</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Eaf
