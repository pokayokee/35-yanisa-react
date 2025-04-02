import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setError("");
      SetLoading(true);

      try {
        const response = await axios.get("https://jsd5-mock-backend.onrender.com/members");
        setUsers(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed. Please try again later.");
      } finally {
        SetLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}

      {error && (
        <div className="mt-2 text-red-600 bg-red-100 p-2 rounded">
        <p>
          <strong>Error:</strong> {error}
        </p>
      </div>
      )}

      {!loading && !error && (
        <table className='bg-[#FAF9F6] w-3xl border'>
        <thead className='bg-[#0074b9]'>
          <tr>
            <th className='px-6 py-2 border text-white'>Name</th>
            <th className='px-6 py-2 border text-white'>Last Name</th>
            <th className='px-6 py-2 border text-white'>Position</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) =>
            <tr key={user.id}>
              <td className='px-6 py-2 border-x'>{user.name}</td>
              <td className='px-6 py-2 border-x'>{user.lastname}</td>
              <td className='px-6 py-2 border-x'>{user.position}</td>
            </tr>
          )}
        </tbody>
      </table>
      )}
    </div>
  )
}

export default GetUsers;