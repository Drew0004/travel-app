import React, {useContext} from 'react'


const Stop = ({singleStop}) => {
  console.log(singleStop)
  return (
    <div className='text-white'>
        Ciao sono la tappa: {singleStop.stopName}
    </div>
  )
}

export default Stop
