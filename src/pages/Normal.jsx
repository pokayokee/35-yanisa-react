import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button';

const Normal = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='mt-6 text-5xl font-bold'>Generation Thailand</h2>
      <h2 className='mt-2  text-5xl font-bold'>React - Assessment</h2>
      <div className='my-10'>
        <Button />
      </div>
    </div>
  )
}


export default Normal