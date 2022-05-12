import AddTaskIcon from '@mui/icons-material/AddTask';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.AboutMe]: {
    component: asyncComponentLoader(() => import('@/pages/AboutMe')),
    path: '/',
    title: 'About Me',
    icon: HomeIcon,
  },
  [Pages.Portfolio]: {
    component: asyncComponentLoader(() => import('@/pages/Portfolio')),
    path: '/portfolio',
    title: 'Portfolio',
    icon: GitHubIcon,
  },
  [Pages.Resume]: {
    component: asyncComponentLoader(() => import('@/pages/Resume')),
    path: '/resume',
    title: 'Resume',
    icon: AddTaskIcon,
  },
  [Pages.Contact]: {
    component: asyncComponentLoader(() => import('@/pages/Contact')),
    path: '/contact',
    title: 'Contact',
    icon: ConnectWithoutContactIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
