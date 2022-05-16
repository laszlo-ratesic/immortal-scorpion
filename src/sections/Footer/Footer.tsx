import { AwesomeButtonSocial } from 'react-awesome-button';

import { person } from '../../portfolio';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-tech" style={{ visibility: 'hidden' }}>
        <AwesomeButtonSocial
          style={{ paddingRight: '1rem' }}
          onPress={(e: Event) => e.preventDefault()}
          type="github"
        >
          <a
            href="https://github.com/laszlo-ratesic"
            style={{ textDecoration: 'none', color: '#eeeeff' }}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </AwesomeButtonSocial>
        <AwesomeButtonSocial
          style={{ padding: '0 1rem' }}
          type="linkedin"
          url="https://linkedin.com/in/keenan-chiasson"
        >
          LinkedIn
        </AwesomeButtonSocial>
        <AwesomeButtonSocial style={{ paddingLeft: '1rem' }} type="mail" url="keenanrc@hotmail.com">
          Website
        </AwesomeButtonSocial>
      </div>
      <p className="footer-text">
        Made with <span role="img">❤️</span> by {person.full_name}
      </p>
      <div className="footer-social" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <a
          href="https://github.com/laszlo-ratesic"
          style={{ textDecoration: 'none', color: '#eeeeff' }}
          target="_blank"
          rel="noreferrer"
        >
          <AwesomeButtonSocial
            style={{ paddingRight: '.5rem' }}
            onPress={(e: Event) => e.preventDefault()}
            type="github"
          >
            Github
          </AwesomeButtonSocial>
        </a>
        <AwesomeButtonSocial
          style={{ padding: '0 .5rem' }}
          type="linkedin"
          url="https://linkedin.com/in/keenan-chiasson"
        >
          LinkedIn
        </AwesomeButtonSocial>
        <a
          style={{ textDecoration: 'none', color: '#eeeeff' }}
          href="https://www.youtube.com/channel/UCxkgaWEybc3b1ozKvpSgsMQ"
          target="_blank"
          rel="noreferrer"
        >
          <AwesomeButtonSocial
            style={{ paddingLeft: '.5rem' }}
            type="youtube"
            onPress={(e: Event) => e.preventDefault()}
          >
            YouTube
          </AwesomeButtonSocial>
        </a>
      </div>
    </div>
  );
}
