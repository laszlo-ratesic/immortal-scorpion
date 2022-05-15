import React, { useState } from 'react';
import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';

import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/md-dark-indigo/theme.css';

import useTheme from '@/store/theme';

const ContactForm = () => {
  const [value, setValue] = useState('');
  const [theme] = useTheme();

  return (
    <div
      className="card"
      style={{
        height: '25em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <span className="p-float-label">
        <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
        <label htmlFor="username">Your name</label>
      </span>
      <span className="p-float-label">
        <InputText id="email" value={value} onChange={(e) => setValue(e.target.value)} />
        <label htmlFor="email">Email</label>
      </span>
      <span className="p-float-label">
        <InputTextarea
          id="message"
          value={value}
          rows={5}
          cols={21}
          autoResize
          onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor="message">Message</label>
      </span>
      <AwesomeButton
        type={theme === 'light' ? 'secondary' : 'primary'}
        style={{ minWidth: '150px' }}
      >
        Submit
      </AwesomeButton>
    </div>
  );
};

export default ContactForm;
