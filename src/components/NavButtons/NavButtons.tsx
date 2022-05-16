import React, { Dispatch, ReactElement } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { Link } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { FlexBetween } from '@/components/styled';
import useTheme from '@/store/theme';

import './NavButton.css';

interface IProps {
  name: string;
  path: string;
  icon: JSX.Element;
}

const NavButtons = ({
  sections = [],
  currentSection,
  setCurrentSection,
}: {
  sections: IProps[];
  currentSection: IProps;
  setCurrentSection: Dispatch<IProps>;
}): ReactElement<ReactElement> => {
  const [theme] = useTheme();

  <FlexBetween>
    {sections.map((section) => (
      <Tooltip key={section.name} title={section.name} style={{ margin: '0 1rem' }} arrow>
        <IconButton component={Link} to={section.path} onClick={() => setCurrentSection(section)}>
          <AwesomeButton
            className={`nav-btn ${currentSection.name === section.name && 'nav-btn-active'}`}
            type={theme === 'light' ? 'primary' : 'secondary'}
          >
            {section.icon}
          </AwesomeButton>
        </IconButton>
      </Tooltip>
    ))}
  </FlexBetween>;
};

export default NavButtons;
