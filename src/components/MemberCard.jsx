import React from 'react';
import './MemberCard.css';

const MemberCard = ({ member }) => (
  <div className={`member-card ${member.status.toLowerCase()}`}>
    <h3>{member.name}</h3>
    <p>Email: {member.email}</p>
    <p>Phone: {member.phone}</p>
    <p>Start Date: {member.startDate}</p>
    <p>Status: {member.status}</p>
  </div>
);

export default MemberCard;