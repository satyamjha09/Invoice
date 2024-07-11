import React, { useState } from 'react'
import './Hero.css';

const Hero = () => {


  


  return (

    <div className='twodiv'>

        <div className='invoice'>

            <h1 className='frontheading'> INVOICE </h1>

            <div className="left_right">

                <div className='left'>
                    
                   <input 
                    type="text" 
                    id='text' 
                    placeholder='Your Company Name'


                    />

                   <input type="text" id='text' placeholder='Company Address' />
                   <input type="text" id='text' placeholder='Your Company GSTIN' />
                </div>
                
                 <div className='right'>
                   
                 </div>

            </div>

            <h3 className='bill'> Bill To  </h3>

            <div className='bill_input'>

                <div className='bill-left '>

                 <input type="text" id='text' placeholder='Your Company Name' />
                 <input type="text" id='text' placeholder='Company Address' />

                </div>
                <div className='bill-right'>
                  <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
                  <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />

                </div>
            </div>

            <button className='btn'> Sumbit </button>

            

        </div>

        

        <div className='colordiv'>

        </div>

    </div>
  )
}

export default Hero;