import React from 'react'
import Button from '../components/Button';
import GetUsers from '../components/GetUsers';
import PostUsers from '../components/PostUsers';


const User = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='mt-6 text-5xl font-bold'>Generation Thailand</h2>
      <h2 className='mt-2  text-5xl font-bold'>Home - User Sector</h2>
      <div className='my-12'>
      <Button />
      </div>
      <PostUsers />
      <GetUsers />
    </div>
  )
}


export default User;