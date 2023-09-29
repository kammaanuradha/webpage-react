import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Header } from './components/Header';

const Dashboard = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    // Fetch profiles from your API
    axios
      .get('http://localhost:5000/api/v1/allprofiles', {
        headers: {
          'x-token': localStorage.getItem('token'),
        },
      })
      .then((res) => setProfiles(res.data.data))
      .catch((error) => {
        console.error('Error fetching profiles:', error);
        // Handle error, e.g., show an error message
      });
  }, []);

  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div>
      <Header />

      <section className="container">
        <h1 className="large text-primary">WEBPAGE</h1>
        <p className="lead">
          <i className="fab fa-connectwebpage"></i> Browse and connect with webpages
        </p>
        <div className="profiles">
          {profiles.map((profile) => (
            <div className="profile bg-light" key={profile._id}>
              <div>
                <h2>{profile.name}</h2>
                <p>Email: {profile.email}</p>
                <ul>
                  {profile.skills.map((skill, index) => (
                    <li className="text-primary" key={index}>
                      <i className="fas fa-check"></i> {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to={`/profile/${profile._id}`} className="btn btn-primary">
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
