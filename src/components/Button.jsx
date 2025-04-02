import React from 'react'
import { useNavigate } from 'react-router-dom';

const Button = () => {

  const navigate = useNavigate();

  const handleNavigateUser = () => {
    navigate("/user")
  }

  const handleNavigateAdmin = () => {
    navigate("/admin")
  }

  return (
    <div>
      <button onClick={handleNavigateUser} className='bg-[#0074b9] text-white p-3 mx-10 rounded text-base font-bold hover:cursor-pointer hover:bg-[#004770]'>User Home Sector</button>
      <button onClick={handleNavigateAdmin} className='bg-[#0074b9] text-white p-3 mx-10 rounded text-base font-bold hover:cursor-pointer hover:bg-[#004770]'>Admin Home Sector</button>
    </div>
  )
}

export default Button;