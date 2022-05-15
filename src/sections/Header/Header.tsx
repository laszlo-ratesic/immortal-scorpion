import { Dispatch } from 'react';
import 'react-awesome-button/dist/themes/theme-c137.css';
import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';
import { Link } from 'react-router-dom';

import GitHubIcon from '@mui/icons-material/GitHub';
import ThemeIcon from '@mui/icons-material/InvertColors';
import MenuIcon from '@mui/icons-material/Menu';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import { FlexBetween, FlexBox } from '@/components/styled';
import { repository, title } from '@/config';
import useOrientation from '@/hooks/useOrientation';
import useHotKeysDialog from '@/store/hotkeys';
import useNotifications from '@/store/notifications';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';

import './Header.css';
import { HotKeysButton } from './styled';
import { getRandomJoke } from './utils';

interface IProps {
  name: string;
  path: string;
  icon: JSX.Element;
}

function Header({
  sections = [],
  currentSection,
  setCurrentSection,
}: {
  sections: IProps[];
  currentSection: IProps;
  setCurrentSection: Dispatch<IProps>;
}) {
  const [, sidebarActions] = useSidebar();
  const [, themeActions] = useTheme();
  const [, notificationsActions] = useNotifications();
  const [, hotKeysDialogActions] = useHotKeysDialog();
  const [theme] = useTheme();
  const isPortrait = useOrientation();

  function showNotification() {
    notificationsActions.push({
      options: {
        // Show fully customized notification
        // Usually, to show a notification, you'll use something like this:
        // notificationsActions.push({ message: ... })
        // `message` accepts string as well as ReactNode
        // But you also can use:
        // notificationsActions.push({ options: { content: ... } })
        // to show fully customized notification
        content: (
          <Alert severity="info">
            <AlertTitle>Dad jokes for software nerds</AlertTitle>
            {getRandomJoke()}
          </Alert>
        ),
      },
    });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" elevation={1} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
            {isPortrait && (
              <IconButton
                onClick={sidebarActions.toggle}
                size="large"
                edge="start"
                color={theme === 'light' ? 'secondary' : 'warning'}
                aria-label="menu"
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <AwesomeButton
              className="dads-btn"
              onPress={showNotification}
              type={theme === 'light' ? 'primary' : 'secondary'}
            >
              {title}
            </AwesomeButton>
          </FlexBox>
          {!isPortrait && (
            <>
              {/* ==============PAGE NAVIGATION============ */}
              <FlexBetween>
                {sections.map((section) => (
                  <Tooltip
                    key={section.name}
                    title={section.name}
                    style={{ margin: '0 1rem' }}
                    arrow
                  >
                    <IconButton
                      onClick={() => setCurrentSection(section)}
                      component={Link}
                      to={section.path}
                    >
                      <AwesomeButton
                        className={`nav-btn ${
                          currentSection.name === section.name && 'nav-btn-active'
                        }`}
                        type={theme === 'light' ? 'primary' : 'secondary'}
                      >
                        {section.icon}
                      </AwesomeButton>
                    </IconButton>
                  </Tooltip>
                ))}
              </FlexBetween>

              <FlexBox>
                <Divider orientation="vertical" flexItem />
                <Tooltip title="Hot keys" arrow>
                  <HotKeysButton size="small" onClick={hotKeysDialogActions.open}>
                    <AwesomeButton type={theme === 'light' ? 'primary' : 'secondary'}>
                      alt+/
                    </AwesomeButton>
                  </HotKeysButton>
                </Tooltip>
                <Divider orientation="vertical" flexItem />
                <Tooltip title="Fork me on Github" arrow>
                  <IconButton
                    color="info"
                    size="large"
                    component="a"
                    href={repository}
                    target="_blank"
                  >
                    <AwesomeButton type={theme === 'light' ? 'primary' : 'secondary'}>
                      <GitHubIcon />
                    </AwesomeButton>
                  </IconButton>
                </Tooltip>
                <Divider orientation="vertical" flexItem />
                <Tooltip title="Switch theme" arrow>
                  <IconButton color="info" edge="end" size="large" onClick={themeActions.toggle}>
                    <AwesomeButton type={theme === 'light' ? 'primary' : 'secondary'}>
                      <ThemeIcon />
                    </AwesomeButton>
                  </IconButton>
                </Tooltip>
              </FlexBox>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
