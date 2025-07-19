import React, { useEffect, useState } from 'react';
import MemberCard from './components/MemberCard';
import MemberForm from './components/MemberForm';
import './App.css';

const App = () => {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch('/data/members.json')
        .then(res => {
          if (!res.ok) throw new Error('Failed to load members');
          return res.json();
        })
        .then(data => {
          setMembers(data);
          setFilteredMembers(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = members.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (showActiveOnly) {
      filtered = filtered.filter(member => member.status === 'Active');
    }
    setFilteredMembers(filtered);
  }, [searchTerm, showActiveOnly, members]);

  const handleAddMember = newMember => {
    const updated = [...members, newMember];
    setMembers(updated);
  };

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">⚠️ {error}</div>;

  return (
    <div className="app">
      <h1>Members Dashboard</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search members..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={showActiveOnly}
            onChange={() => setShowActiveOnly(!showActiveOnly)}
          />
          Show Active Only
        </label>
        <button onClick={() => setShowForm(true)}>+ Add Member</button>
      </div>
      <div className="members-list">
        {filteredMembers.map((member, idx) => (
          <MemberCard key={idx} member={member} />
        ))}
      </div>
      {showForm && (
        <MemberForm onClose={() => setShowForm(false)} onAdd={handleAddMember} />
      )}
    </div>
  );
};

export default App;
