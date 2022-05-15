import React from 'react';

import { person } from '../../portfolio';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-tech">Tech Icons</div>
      <p className="footer-text">
        Made with <span role="img">❤️</span> by {person.full_name}
      </p>
      <div className="footer-social">Social Icons</div>
    </div>
  );
}
