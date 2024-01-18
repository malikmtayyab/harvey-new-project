/* eslint-disable */
import { IconBuildingCottage, IconStack } from '@tabler/icons-react';
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
    icon: <IconBuildingCottage size={'20'}/>,
    type:'accordian',
    dropdown:[
      {
      title:'All Farms',
      path:'/all-farms',
    },
    {
      title:'View Farms',
      path:'/view-farms',
    },

]
  },
  {
    title: 'Tanks',
    icon: <IconStack size={'20'}/>,
    type:'accordian',
    dropdown:[
      {
      title:'All Tanks',
      path:'/all-tanks',
    },
    {
      title:'View Tanks',
      path:'/',
    },
]
  },
  {
    // heading:'Settings',
    title: 'Sensors',
    icon: <IconBuildingCottage/>,
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
    icon: <IconBuildingCottage/>,
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
    icon: <IconBuildingCottage/>,
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
