import { Fragment, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import SummarizeIcon from '@mui/icons-material/Summarize';
import TerminalIcon from '@mui/icons-material/Terminal';
import CssBaseline from '@mui/material/CssBaseline';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Header from '@/sections/Header';
import HotKeys from '@/sections/HotKeys';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';

function App() {
  const [sections] = useState([
    {
      name: 'About Me',
      path: '/',
      icon: <HomeIcon />,
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
      icon: <TerminalIcon />,
    },
    {
      name: 'Resume',
      path: '/resume',
      icon: <SummarizeIcon />,
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <ContactMailIcon />,
    },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <HotKeys />
      <SW />
      <BrowserRouter>
        <Header
          sections={sections}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <Sidebar />
        <Pages />
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
