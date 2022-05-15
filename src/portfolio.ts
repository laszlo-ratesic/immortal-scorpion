// Change this file to update portfolio

// Home Page
const person = {
  full_name: 'Keenan Chiasson',
  resume:
    'https://app.enhancv.com/share/1e1916d5/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic',
  image: './keenan-chiasson.svg',
};

const contactInfo = {
  email: 'keenanrc@hotmail.com',
  phone: '+1 (832) 449-0785',
  gmail: 'thechiassonator@gmail.com',
  github: 'https://github.com/laszlo-ratesic',
  linkedin: 'https://www.linkedin.com/in/keenan-chiasson',
  medium: 'https://medium.com/@keenanrc',
};

const skills = {
  data: [
    {
      title: 'Full Stack Development',
      skills: [
        '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications',
        '⚡ Building responsive website front end using ReactJS',
        '⚡ Developing mobile applications using Flutter and Android',
        '⚡ Creating application backend in Node, Express & Flask',
        '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean',
      ],
      technologies: [
        {
          name: 'HTML5',
          fontAwesomeClassname: 'simple-icons: html5',
          style: {
            color: '#e34f26',
          },
        },
        {
          name: 'CSS3',
          fontAwesomeClassname: 'fa-css3',
          style: {
            color: '#1572B6',
          },
        },
        {
          name: 'JavaScript',
          fontAwesomeClassname: 'simple-icons:javascript',
          style: {
            backgroundColor: '#FFFFFF',
            color: '#F7DF1E',
          },
        },
        {
          name: 'React',
          fontAwesomeClassname: 'simple-icons:react',
          style: {
            color: '#61DAFB',
          },
        },
        {
          name: 'NodeJS',
          fontAwesomeClassname: 'simple-icons:node-dot-js',
          style: {
            color: '#339933',
          },
        },
        {
          name: 'NPM',
          fontAwesomeClassname: 'simple-icons:npm',
          style: {
            color: '#CB3837',
          },
        },
        {
          name: 'MongoDB',
          fontAwesomeClassname: 'simple-icons:mongodb',
          style: {
            color: '#439743',
          },
        },
        {
          name: 'MySQL',
          fontAwesomeClassname: 'simple-icons:mysql',
          style: {
            color: '#4479A1',
          },
        },
        {
          name: 'jQuery',
          fontAwesomeClassname: 'simple-icons:jquery',
          style: {
            color: '#0865A6',
          },
        },
        {
          name: 'Git',
          fontAwesomeClassname: 'simple-icons:git',
          style: {
            color: '#E94E32',
          },
        },
        {
          name: 'C#',
          fontAwesomeClassname: 'simple-icons:csharp',
          style: {
            color: '#E94E32',
          },
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      skills: [
        '⚡ Experience working on multiple cloud platforms',
        '⚡ Experience hosting and managing websites',
        '⚡ Experience with Continuous Integration',
      ],
      technologies: [
        {
          name: 'AWS',
          fontAwesomeClassname: 'simple-icons:amazonaws',
          style: {
            color: '#FF9900',
          },
        },
        {
          name: 'Heroku',
          fontAwesomeClassname: 'simple-icons:heroku',
          style: {
            color: '#6863A6',
          },
        },
        {
          name: 'MongoDB',
          fontAwesomeClassname: 'simple-icons:mongodb',
          style: {
            color: '#47A248',
          },
        },
        {
          name: 'Docker',
          fontAwesomeClassname: 'simple-icons:docker',
          style: {
            color: '#1488C6',
          },
        },
        {
          name: 'GitHub Actions',
          fontAwesomeClassname: 'simple-icons:githubactions',
          style: {
            color: '#5b77ef',
          },
        },
      ],
    },
  ],
};

const projects = [
  {
    title: 'Schmoozer',
    description: '💬 Social network API for sharing thoughts with friends',
    app_url: 'https://drive.google.com/file/d/1EI0ptdC1_V5gZfFV9mlOIe78wfKOQ5c6/view',
    repo_link: 'https://github.com/laszlo-ratesic/schmoozer',
    img: '/schmoozer-logo.svg',
  },
  {
    title: 'Blockdust',
    description: '🧊 Tech blogging for crypto enthusiasts',
    app_url: 'https://blockdust.herokuapp.com/',
    repo_link: 'https://github.com/laszlo-ratesic/block-dust',
    img: '/blockdust-icon.png',
  },
  {
    title: 'Reaver CMS',
    description: '🏴‍☠️ MySQL database management CLI',
    app_url: 'https://www.youtube.com/watch?v=1OlIXnaXYYc',
    repo_link: 'https://github.com/laszlo-ratesic/not-yo-mommas-hacker-tracker',
    img: '/reaver-logo.svg',
  },
  {
    title: 'Bloodgate',
    description: '🗡️ Fantasy Trading Card Game written in vanilla JS',
    app_url: 'https://laszlo-ratesic.github.io/bloodgate/',
    repo_link: 'https://github.com/laszlo-ratesic/bloodgate',
    img: '/bloodgate-logo.svg',
  },
  {
    title: 'Backdraft',
    description: '🔥 Bootstrap team management generator written in Node',
    app_url: '',
    repo_link: 'https://github.com/laszlo-ratesic/backdraft',
    img: '/backdraft-logo.svg',
  },
  {
    title: '47th Street',
    description: '💎 E-Commerce backend API with swagger',
    app_url: '',
    repo_link: 'https://github.com/laszlo-ratesic/47th-street',
    img: '/47th-street-logo.png',
  },
];

export { person, contactInfo, skills, projects };
