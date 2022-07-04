import React from 'react'
import SalesFloorChange from './SalesFloorChange'

const SalesFloor = ({ data }) => {

// const test = SalesFloor.addEventListener(data, procent => {
//     data = procent.value
//   })

//   const saveToLocalStorage = () => {
//     localStorage.setItem('data', data);
//   }

//   console.log('savetolocal', saveToLocalStorage)


  // console.log('data for sales floor:', data)
  return (
    <div className='sales'>
      {data}
      <div className='salesChange'>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.6665 11.3333L11.3332 4.66663" stroke="#00A010" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4.6665 4.66663H11.3332V11.3333" stroke="#00A010" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        0.56%
      </div>
    </div>
  )
 
}



export default SalesFloor

//take a value from salesfloor
//store it into local storage
//watch this value
//when value changes -> make math
//