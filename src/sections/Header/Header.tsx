import 'react-awesome-button/dist/themes/theme-c137.css';
import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';
import { Link } from 'react-router-dom';

import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import ThemeIcon from '@mui/icons-material/InvertColors';
import MenuIcon from '@mui/icons-material/Menu';
import SummarizeIcon from '@mui/icons-material/Summarize';
import TerminalIcon from '@mui/icons-material/Terminal';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import { FlexBox } from '@/components/styled';
import { repository, title } from '@/config';
import useHotKeysDialog from '@/store/hotkeys';
import useNotifications from '@/store/notifications';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';

import './Header.css';
import { HotKeysButton } from './styled';
import { getRandomJoke } from './utils';

function Header() {
  const [, sidebarActions] = useSidebar();
  const [, themeActions] = useTheme();
  const [, notificationsActions] = useNotifications();
  const [, hotKeysDialogActions] = useHotKeysDialog();
  const [theme] = useTheme();

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
            <Button
              onClick={showNotification}
              style={{ fontFamily: '"Gilroy-Bold", "Open Sans", sans-serif' }}
              color={theme === 'light' ? 'secondary' : 'warning'}
            >
              {title}
            </Button>
          </FlexBox>
          <Tooltip title="About Me" arrow>
            <IconButton component={Link} to="/">
              <AwesomeButton className="nav-btn" type={theme === 'light' ? 'primary' : 'secondary'}>
                <HomeIcon />
              </AwesomeButton>
            </IconButton>
          </Tooltip>
          <Tooltip title="Portfolio" arrow>
            <IconButton component={Link} to="/portfolio">
              <AwesomeButton className="nav-btn" type={theme === 'light' ? 'primary' : 'secondary'}>
                <TerminalIcon />
              </AwesomeButton>
            </IconButton>
          </Tooltip>
          <Tooltip title="Resume" arrow>
            <IconButton component={Link} to="/resume">
              <AwesomeButton className="nav-btn" type={theme === 'light' ? 'primary' : 'secondary'}>
                <SummarizeIcon />
              </AwesomeButton>
            </IconButton>
          </Tooltip>
          <Tooltip title="Contact" arrow>
            <IconButton component={Link} to="/contact">
              <AwesomeButton className="nav-btn" type={theme === 'light' ? 'primary' : 'secondary'}>
                <ContactMailIcon />
              </AwesomeButton>
            </IconButton>
          </Tooltip>
          <FlexBox>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="Hot keys" arrow>
              <HotKeysButton size="small" onClick={hotKeysDialogActions.open}>
                <AwesomeButton type={theme === 'light' ? 'primary' : 'secondary'}>
                  alt + /
                </AwesomeButton>
              </HotKeysButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="Fork me on Github" arrow>
              <IconButton color="info" size="large" component="a" href={repository} target="_blank">
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
