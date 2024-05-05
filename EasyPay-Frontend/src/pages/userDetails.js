import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UserDetails = () => {
  const [user, setUser] = useState(null);
 const  userId=localStorage.getItem('userId');
  
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8084/customer/${userId}`);
        console.log(response.data);
        setUser(response.data);
        
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Phone: {user.phone}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
      <p>Aadhar Number: {user.aadarNumber}</p>
    </div>
  );
};

export default UserDetails;
