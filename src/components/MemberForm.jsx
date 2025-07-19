import React, { useState } from 'react';
import './MemberForm.css';

const MemberForm = ({ onClose, onAdd }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    status: 'Active',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(form);
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="member-form">
        <h2>Add New Member</h2>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="startDate" type="date" onChange={handleChange} required />
        <select name="status" onChange={handleChange} value={form.status}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <div className="form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default MemberForm;