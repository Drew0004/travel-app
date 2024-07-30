import React from 'react'

const Days = ({dayIndex, actualDay}) => {
  console.log(actualDay)
  return (
    <li className='text-white'>
      Day {dayIndex + 1}
      Data: {actualDay}
    </li>
  )
}

export default Days
