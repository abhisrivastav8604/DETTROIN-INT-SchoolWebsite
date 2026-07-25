// Navigation links with sub-menus
export const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'Our Story', path: '/about#story' },
      { label: 'Vision & Philosophy', path: '/about#vision' },
      { label: 'Leadership', path: '/about#leadership' },
    ],
  },
  {
    label: 'Academics',
    path: '/academics',
    children: [
      { label: 'Curriculum', path: '/academics#curriculum' },
      { label: 'The Learning Experience', path: '/learning' },
    ],
  },
  {
    label: 'Campus',
    path: '/campus',
    children: [
      { label: 'Facilities', path: '/campus#facilities' },
      { label: 'Campus Life', path: '/campus#life' },
    ],
  },
  { label: 'Admissions', path: '/admissions' },
  { label: 'News & Events', path: '/news' },
  { label: 'Contact', path: '/contact' },
];
