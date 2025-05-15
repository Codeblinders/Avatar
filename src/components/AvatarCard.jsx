import React from 'react';
import './AvatarCard.css';

const AvatarCard = ({ avatar, firstName, lastName }) => (
  <div className="avatar-card">
    <img src={avatar} alt={`${firstName} ${lastName}`} />
    <h3>
      {firstName}
      <br />
      {lastName}
    </h3>
    <button>Edit</button>
  </div>
);

export default AvatarCard;
