import { useState } from 'react'
import Trips from './Trips'

function App() {
  return (
    <>
      <div className="container">
        <h2 className='text-center my-2  my-text-try text-white'>I tuoi viaggi:</h2>
        <Trips/>
      </div>
    </>
  )
}

export default App