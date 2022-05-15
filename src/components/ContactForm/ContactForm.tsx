import React, { useState } from 'react';

import { InputText } from 'primereact/inputtext';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/md-dark-indigo/theme.css';

const ContactForm = () => {
  const [value, setValue] = useState('');

  return (
    <div className="card">
      <span className="p-float-label">
        <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
        <label htmlFor="username">Your name</label>
      </span>
    </div>
  );
};

export default ContactForm;
