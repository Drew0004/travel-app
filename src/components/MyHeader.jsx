import { useState } from 'react'
import { Link } from 'react-router-dom'

const MyHeader = () => {
  return (
    <>
        <header className='my-glassmorph py-4 my-fixed'>
          <div className="container d-flex justify-content-between align-items-md-center">
                <Link className='text-decoration-none' to={'/'}><h2 className='text-center main-green fw-bold m-0'>Traveller</h2></Link>
                <Link className='text-decoration-none my-main-btn px-5 py-2' to={'/add-new-trip'}>
                        <span>Aggiungi viaggio +</span>
                </Link>
          </div>
        </header>
    </>
  )
}

export default MyHeader
