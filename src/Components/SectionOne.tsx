import React from 'react'
import {Link} from 'react-router-dom'

const SectionOne = () => {

  return (
    <div className='card-one'>
        <div className='card-one-container'>
            <p>So far</p>
            <p className='price'>&46.99</p>
            <p className='card-one-text'>you will have to pay</p>
            <p className='date'>on March 1, 2022</p>
        </div>
        <div className='card-one-container'>
            <p>So far</p>
            <p className='price'>&46.99</p>
            <p className='card-one-text'>you will have to pay</p>
            <p className='date'>on March 1, 2022</p>
        </div>
        <div className='card-one-container'>
            <p className='text'>Card details</p>
            <p className='card-one-text'>**** **** **** 1234</p>
            <p className='card-one-text'>**/** ***</p>
        <Link to='/cardInput'>
          <button>Change card</button>
        </Link>
       
        </div>
        <div className='card-one-container'>
            <p className='text'>Pricing Calculator</p>
            <p className='card-one-text'>Want to have more pods or change the pod type?</p>
            <p className='price'>Calculate it</p>
        </div>
    </div>
  )
}

export default SectionOne