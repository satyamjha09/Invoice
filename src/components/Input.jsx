import React from 'react'
import './Input.css'

const Input = () => {
  return (
    <>
      <div className='text-container'>

        <div className="textcss">

          <input type="text" id='text' placeholder="Your Company Name" />
          <input type="text" id='text' className='comadd' placeholder="Company Address" />
          <input type="text" id='text' className='your' placeholder="Your Company  GSTIN " />

        </div>
       

      </div>
    </>
  )
}

export default Input