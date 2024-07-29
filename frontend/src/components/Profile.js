import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/Profile.css'; // Import the CSS file for styling

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="profile-container">
      <img src={user.picture} alt={user.name} className="profile-picture" />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-email">{user.email}</p>
      <div className="profile-info">
        <h3>Profile Information</h3>
        <table className="profile-table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Nickname</th>
              <td>{user.nickname}</td>
            </tr>
            <tr>
              <th>Updated At</th>
              <td>{new Date(user.updated_at).toLocaleDateString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
