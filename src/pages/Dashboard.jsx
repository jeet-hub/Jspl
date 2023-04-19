import React, { useState } from 'react';
import { FaTh,
  FaBars,
  FaUserAlt,
  FaArrowCircleRight,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList } from 'react-icons/fa';



const Dashboard = () => {
  
  const data = {
    name:"Dashboard",
    image: "./img/product.png",
  }; 

  return (
    <>
      
      <div className='info pl-3 '>
       <h2>{data.name}</h2> 
       
      </div>

      <div class="main_box row p-3">
        <div class="col-sm-6">
          <div className='data_section'>
            <h4 className='data_header'>NOF-HEATNO : (0987656)</h4>
            <div className='heat_list row mb-3'>
              <div className='data_name col-4 col-sm-5'>
                <p>Last Heat Top Time</p>
                <p>Start Time</p>
                <p>Total LPG</p>
                <p>Temperature</p>
                <p>Net Tapping Weight</p>
                <p>Total O2</p>
              </div>
              <div className='col-4 col-sm-4'>
                <div className='live_data'>
                  <p>10</p>
                  <p>20.23</p>
                  <p>12</p>
                  <p>10</p>
                  <p>20.23</p>
                  <p>12</p>
                  </div>
              </div>
              <div className='heat_img_main col-4 col-sm-3'>
                <img className='heat_img' src='./img/heat_meter.gif' alt='pouring-gold' style={{ width: 80, height: 120 }} />
              </div>
            </div>
          </div>
        </div>
         <div class="col-sm-6">
          <div className='data_section'>
            <h4 className='data_header'>LRFI-HEATNO:(2221066)</h4>
            <div className='heat_list row'>
              <div className='data_name col-4 col-sm-5'>
                <p>Acc Mw</p>
                <p>Arc Duration</p>
                <p>Temperature</p>
                <p>Argon pr.</p>
                <p>Argon Flow</p>
                <p>Power Consumption</p>
              </div>
              <div className='col-4 col-sm-4'>
                <div className='live_data'>
                  <p>10.5 MW</p>
                  <p>0.9.55 min</p>
                  <p>1300 'C</p>
                  <p>14.42 Bar</p>
                  <p>8.04 m2/h</p>
                  <p>0 kWH</p>
                  </div>
              </div>
              <div className='heat_img_main col-4 col-sm-3'>
                <img className='heat_img' src='./img/heat-img.gif' alt='pouring-gold' style={{ width: 80, height: 120 }} />
              </div>
            </div>
          </div>
        </div> 

      </div>

    {/* second row strt  */}

    <div class="main_box row p-3">
        <div class="col-sm-6">
          <div className='data_section'>
            <h4 className='data_header'>COMBI-HEATNO : (2221066)</h4>
            <div className='heat_list row mb-3'>
              <div className='data_name col-4 col-sm-5'>
                <p>Ladle Arrival At</p>
                <p>Loading Side</p>
                <p>Ladle Balance Time</p>
                <p>Ladle Open Time</p>
                <p>Ladle Sequence</p>
                <p>Steel Grade</p>
                <p>Tundish Balance Time</p>
                <p>Tundish Temperature</p>
              </div>
              <div className='col-4 col-sm-4'>
                <div className='live_data'>
                  <p>10:10 am</p>
                  <p>5 min</p>
                  <p>12:00 am</p>
                  <p>L+0</p>
                  <p>200RD</p>
                  <p>12</p>
                  <p>12</p>
                  <p>12</p>
                  
                  </div>
              </div>
              <div className='heat_img_main col-4 col-sm-3'>
                <img className='heat_img' src='./img/inner-machine.png' alt='pouring-gold' style={{ width: 120, height: 160 }} />
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div className='data_section'>
            <h4 className='data_header'>BILLET NO:(2221066)</h4>
            <div className='heat_list row'>
              <div className='data_name col-4 col-sm-5'>
              <p>Ladle Arrival Loading</p>
                <p>Loading Side</p>
                <p>Ladle Balance Time</p>
                <p>Ladle Open Time</p>
                <p>Ladle Sequence</p>
                <p>Steel Grade</p>
                <p>Tundish Blance Time</p>
                <p>Tundish Temperature</p>
              </div>
              <div className='col-4 col-sm-4'>
                <div className='live_data'>
                  <p>10.5 MW</p>
                  <p>0.9.55 min</p>
                  <p>1300 'C</p>
                  <p>14.42 Bar</p>
                  <p>8.04 m2/h</p>
                  <p>0 kWH</p>
                  <p>12</p>
                  <p>12</p>
                 
                 
                  </div>
              </div>
              <div className='heat_img_main col-4 col-sm-3'>
                <img className='heat_img' src='./img/machine2.png' alt='pouring-gold' style={{ width: 120, height: 160 }} />
              </div>
            </div>
          </div>
        </div>
{/* 
        <div class="col-sm-4">
          <div className='data_section'>
            <h4 className='data_header'>EAF-HEATNO : (2220185)</h4>
            <div className='heat_list row'>
              <div className=' data_name col-4 col-sm-4'>
              <p>last Top Heat Time</p>
                <p>Start Time</p>
                <p>Temperature</p>
                <p>Active Power</p>
                <p>Gross Topping Weight</p>
                <p>Net Topping Weight</p>
                <p>current Heat (kWH)</p>
                <p>Arcing Duration</p>
                <p>No. of Heats Today </p>
              </div>
              <div className='col-4 col-sm-4'>
                <div className='live_data'>
                  <p>03-05-23 (12:22:45 am)</p>
                  <p>03-05-23 (12:22:45 am)</p>
                  <p>97.09 mBar</p>
                  <p>03-05-23 (12:22:45 am)</p>
                  <p>03-05-23 (12:22:45 am)</p>
                  <p>97.09 mBar</p>
                  <p>03-05-23 (12:22:45 am)</p>
                  <p>03-05-23 (12:22:45 am)</p>
                  <p>97.09 mBar</p>
                 
                  </div>
              </div>
              <div className='heat_img_main col-4 col-sm-4'>
                <img className='heat_img' src='./img/heat-img.gif' alt='pouring-gold' style={{ width: 80, height: 120 }} />
              </div>
            </div>
          </div>
        </div> */}

      </div>


      {/* second row end  */}

       {/* 3rd strt  */}
      <div class="main_box row p-3">
        <div class="col-sm-6">
          <div className='data_section'>
            <h4 className='data_header'>NOF-HEATNO : (0987656)</h4>
            <div className='heat_list row mb-3'>
              <div className='data_name col-4 col-sm-5'>
                <p>Last Heat Top Time</p>
                <p>Start Time</p>
                <p>Total LPG</p>
                <p>Temperature</p>
                <p>Net Tapping Weight</p>
                <p>Total O2</p>
              </div>
              <div className='col-4 col-sm-4'>
                <div className='live_data'>
                  <p>10</p>
                  <p>20.23</p>
                  <p>12</p>
                  <p>10</p>
                  <p>20.23</p>
                  <p>12</p>
                  </div>
              </div>
              <div className='heat_img_main col-4 col-sm-3'>
                <img className='heat_img' src='./img/grf1.png' alt='pouring-gold' style={{ width: 120, height: 160 }}/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div className='data_section'>
            <h4 className='data_header'>LRFI-HEATNO:(2221066)</h4>
            <div className='heat_list row'>
              <div className='data_name col-4 col-sm-5'>
                <p>Acc Mw</p>
                <p>Arc Duration</p>
                <p>Temperature</p>
                <p>Argon pr.</p>
                <p>Argon Flow</p>
                <p>Power Consumption</p>
              </div>
              <div className='col-4 col-sm-4'>
                <div className='live_data'>
                  <p>10.5 MW</p>
                  <p>0.9.55 min</p>
                  <p>1300 'C</p>
                  <p>14.42 Bar</p>
                  <p>8.04 m2/h</p>
                  <p>0 kWH</p>
                  </div>
              </div>
              <div className='heat_img_main col-4 col-sm-3'>
                <img className='heat_img' src='./img/grff.png' alt='pouring-gold' style={{ width: 120, height: 160 }} />
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div className='data_section'>
            <h4 className='data_header'>RH-HEATNO: (2321066)</h4>
            <div className='heat_list row'>
              <div className=' data_name col-4 col-sm-5'>
                <p>Start Time</p>
                <p>Stop Time</p>
                <p>PIT(0-2000)</p>
              </div>
              <div className='col-4 col-sm-4'>
                <div className='live_data'>
                  <p>03-05-23 (12:22:45 am)</p>
                  <p>03-05-23 (12:22:45 am)</p>
                  <p>97.09 mBar</p>
                 
                  </div>
              </div>
              <div className='heat_img_main col-4 col-sm-3'>
                <img className='heat_img' src='./img/heat-img.gif' alt='pouring-gold' style={{ width: 80, height: 120 }} />
              </div>
            </div>
          </div>
        </div>

           <div class="col-sm-6">
          <div className='data_section'>
            <h4 className='data_header'>RH-HEATNO: (2321066)</h4>
            <div className='heat_list row'>
              <div className=' data_name col-4 col-sm-5'>
                <p>Start Time</p>
                <p>Stop Time</p>
                <p>PIT(0-2000)</p>
              </div>
              <div className='col-4 col-sm-4'>
                <div className='live_data'>
                  <p>03-05-23 (12:22:45 am)</p>
                  <p>03-05-23 (12:22:45 am)</p>
                  <p>97.09 mBar</p>
                 
                  </div>
              </div>
              <div className='heat_img_main col-4 col-sm-3'>
                <img className='heat_img' src='./img/heat-img.gif' alt='pouring-gold' style={{ width: 80, height: 120 }} />
              </div>
            </div>
          </div>
        </div> 

      </div>
     {/* 3rd end  */}

     {/* 4th strt  */}

     <div className='data_section last-table'>
     <table class="table table-hover " style={{padding:3}}>
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>John</td>
        <td>Doe</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>John</td>
        <td>Doe</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>John</td>
        <td>Doe</td>
      </tr>
    </tbody>
  </table>
     </div>
    </>
  )
}

export default Dashboard
