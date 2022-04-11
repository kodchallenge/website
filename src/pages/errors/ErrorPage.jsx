import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = ({code, message, to="/", text="Anasayfaya Dön"}) => {
  return (
    <div className='fullpage'>
        <div className='text-center'>
            <h1 className='font-weight-bold display-1'>{code}</h1>
            <h4>{message}</h4>

            <div className='mt-5'>
                <Link to={to}>{text}</Link>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage