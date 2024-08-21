import { useState } from 'react'
import { Link } from 'react-router-dom'

const MyHeader = () => {
  return (
    <>
        <header className='my-glassmorph py-4'>
          <div className="container d-flex justify-content-between align-items-md-center">
                <h2 className='text-center main-green fw-bold m-0'>Traveller</h2>
                <Link className='text-decoration-none' to={'/add-new-trip'}>
                    <div className="my-main-btn px-5 py-2">
                        <h6>Aggiungi viaggio +</h6>
                    </div>
                </Link>
          </div>
        </header>
    </>
  )
}

export default MyHeader
