import React from 'react'
import Button from '../components/Button';
import GetUsers from '../components/GetUsers';


const Admin = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='mt-6 text-5xl font-bold'>Generation Thailand</h2>
      <h2 className='mt-2  text-5xl font-bold'>Home - Admin Sector</h2>
      <div className='my-10'>
      <Button />
      </div>
      <GetUsers />
    </div>
  )
}

export default Admin;