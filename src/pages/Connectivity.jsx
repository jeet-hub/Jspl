import React, { useState } from 'react';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaArrowCircleRight,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
} from 'react-icons/fa';
import { BsFillLightningChargeFill, BsPlugFill, BsFillBugFill,BsFillSquareFill, BsFillCpuFill, BsArrowRepeat,BsArrowLeftRight,BsInfoCircle} from "react-icons/bs";


const Connectivity = () => {

  const data = {
    name: "Connectivity",
    image: "./img/product.png",
  };

  return (
    <>
      <div className='all'>
        <div className='info pl-3 d-flex justify-content-between'>
          <h2>{data.name}</h2>

        </div>

        <div class="main_box row p-3">
          <div class=" col-sm-3">
            <div className='box-1 data_section'>
              <div className='box_1_data row'>
                <div className=' col'>
                  <div className=''>
                    <p>Central Server</p>
                    <p>Status</p>
                    <h3>Online</h3>
                  </div>
                </div>
                <div className='col'>
                  <div className='box_icon'>
                    <BsPlugFill />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class=" col-sm-3">
            <div className='box-2 data_section'>
              <div className='box_1_data row'>
                <div className=' col'>
                  <div className=''>
                    <p>Total Machine</p>
                    <p>9 out of 10</p>
                    <h3>Online</h3>
                  </div>
                </div>
                <div className='col'>
                  <div className='box_icon'>
                    <BsFillBugFill />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class=" col-sm-3">
            <div className='box-3 data_section'>
              <div className='box_1_data row'>
                <div className=' col'>
                  <div className=''>
                    <p>  Total PLC </p>
                    <p>19 out of 20</p>
                    <h3>Online</h3>
                  </div>
                </div>
                <div className='col'>
                  <div className='box_icon'>
                    <BsFillCpuFill />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="col-sm-3">
            <div className=''>
              <button type="button" class="button-data btn btn-success">
                <BsArrowRepeat className='data-update' />
                UPDATE DATA</button>
              <br /><br /><br />
              <p className=''>Last Update at 12:23 AM  10/08/2023  </p>

            </div>
          </div>


        </div>



        {/* 4th strt  */}

        <div className='data_section last-table'>
          <table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col"><BsInfoCircle/></th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">IP Address</th>
                <th scope="col">Uptime/last Online</th>
                <th scope="col">Machine Online</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><BsArrowLeftRight/></th>
                <td>NOF</td>
                <td>Online</td>
                <td>192.168.0.0.13</td>
                <td> <span style={{fontSize:12}}>online since</span> 50h 22m</td>
                <td>2/2</td>

              </tr>
              <tr>
                <th scope="row"><BsArrowLeftRight/></th>
                <td>NOF</td>
                <td>Online</td>
                <td>192.168.0.0.13</td>
                <td> <span style={{fontSize:12}}>online since</span> 50h 22m</td>
                <td>2/2</td>

              </tr>
              <tr>
                <th scope="row"><BsArrowLeftRight/></th>
                <td>NOF</td>
                <td>Online</td>
                <td>192.168.0.0.13</td>
                <td> <span style={{fontSize:12}}>online since</span> 50h 22m</td>
                <td>2/2</td>

              </tr>
              <tr>
                <th scope="row"><BsArrowLeftRight/></th>
                <td>NOF</td>
                <td>Online</td>
                <td>192.168.0.0.13</td>
                <td> <span style={{fontSize:12}}>online since</span> 50h 22m</td>
                <td>2/2</td>

              </tr>
              <tr>
                <th scope="row"><BsArrowLeftRight/></th>
                <td>NOF</td>
                <td>Online</td>
                <td>192.168.0.0.13</td>
                <td> <span style={{fontSize:12}}>online since</span> 50h 22m</td>
                <td>2/2</td>

              </tr>
              <tr>
                <th scope="row"><BsArrowLeftRight/></th>
                <td>NOF</td>
                <td>Online</td>
                <td>192.168.0.0.13</td>
                <td> <span style={{fontSize:12}}>online since</span> 50h 22m</td>
                <td>2/2</td>

              </tr>
              <tr>
                <th scope="row"><BsArrowLeftRight/></th>
                <td>NOF</td>
                <td>Online</td>
                <td>192.168.0.0.13</td>
                <td> <span style={{fontSize:12}}>online since</span> 50h 22m</td>
                <td>2/2</td>

              </tr>
            </tbody>
          </table>


        </div>
      </div>
    </>
  )
}

export default Connectivity
