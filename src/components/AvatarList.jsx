import React from 'react';
import AvatarCard from './AvatarCard';
import './AvatarList.css';

const AvatarList = ({ avatars }) => (
  <div className="avatar-list">
    {avatars.map(user => (
      <AvatarCard
        key={user.id}
        avatar={user.avatar}
        firstName={user.first_name}
        lastName={user.last_name}
      />
    ))}
  </div>
);

export default AvatarList;
