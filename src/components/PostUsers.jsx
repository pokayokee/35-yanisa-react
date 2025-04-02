import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PostUsers = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const createUser = async () => {
      if (!name || !lastname || !position || !submitted) return;

      setError("");
      setResponse(null);

      try {
        const res = await axios.post("https://jsd5-mock-backend.onrender.com/members", 
          {name, lastname, position}
        );
        setResponse(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed. Please try again later.");
      } finally {
        setSubmitted(false);
      }
    };

    createUser();
  }, [name, lastname, position, submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }


  return (
    <div className='w-6xl flex flex-col items-start px-10 py-6 mb-10 border rounded'>
      <h3 className='py-2 text-xl font-bold mb-2'>Create User Here</h3>
      <form onSubmit={handleSubmit} className="w-full flex justify-between">
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Name' className='bg-[#FAF9F6] w-[280px] p-2 border rounded'/>
        <input type="text" value={lastname} onChange={(e)=> setLastname(e.target.value)} placeholder='Last Name' className='bg-[#FAF9F6] w-[280px] mx-4 p-2 border rounded'/>
        <input type="text" value={position} onChange={(e)=> setPosition(e.target.value)} placeholder='Position' className='bg-[#FAF9F6] w-[280px] p-2 border rounded'/>
        <button type='submit' className='bg-[#5E5BFF] text-white w-fit p-3 rounded hover:cursor-pointer hover:bg-[#6563ac]'>Save</button>
      </form>

      {response && (
        <p className="mt-2 text-green-600">submitted</p>
      )}

      {error && (
        <div className="mt-2 text-red-600 bg-red-100 p-2 rounded">
          <p>
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}
    </div>
  )
}

export default PostUsers;