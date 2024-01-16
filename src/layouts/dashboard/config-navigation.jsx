import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
    type:'single',
    
  },
  {
    // heading:'Tank Management',
    title: 'Tank Farm',
    icon: icon('ic_analytics'),
    type:'accordian',
    dropdown:[
      {
      title:'All Farms',
      path:'/all-farms',
    },
    {
      title:'View Farms',
      path:'/',
    },

]
  },
  {
    title: 'Tanks',
    icon: icon('ic_analytics'),
    type:'accordian',
    dropdown:[
      {
      title:'Tank Progressions',
      path:'/',
    },
    {
      title:'Tank Progressions',
      path:'/',
    },
]
  },
  {
    // heading:'Settings',
    title: 'Sensors',
    icon: icon('ic_analytics'),
    type:'accordian',
    dropdown:[
      {
      title:'Tank Progressions',
      path:'/',
    },
    {
      title:'Tank Progressions',
      path:'/',
    },
]
  },
  {
    title: 'Tank',
    icon: icon('ic_analytics'),
    type:'accordian',
    dropdown:[
      {
      title:'Tank Progressions',
      path:'/',
    },
    {
      title:'Tank Progressions',
      path:'/',
    },
]
  },
  {
    title: 'Tank Farm',
    icon: icon('ic_analytics'),
    type:'accordian',
    dropdown:[
      {
      title:'Tank Progressions',
      path:'/',
    },
    {
      title:'Tank Progressions',
      path:'/',
    },
]
  },
  // {
  //   title: 'product',
  //   path: '/products',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'blog',
  //   path: '/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
