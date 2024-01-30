import PropTypes from 'prop-types';
/*eslint-disable*/

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Chart, { useChart } from 'src/components/chart';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify';
import { useState } from 'react';
import { listClasses } from '@mui/material/List';



// ----------------------------------------------------------------------
const SORT_OPTIONS = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'six_weeks', label: 'Six Weeks' },
  { value: 'annually', label: 'Annually' },
  { value: 'future_daily', label: 'Future Daily Consumption' },
  { value: 'future_annual', label: 'Future Annual Consumption' },
];
export default function AppWebsiteVisits({ title, subheader, chart, ...other }) {
  const { labels, colors, series, options } = chart;


  const [open, setOpen] = useState(null);

  const [selected,setSelected]=useState(SORT_OPTIONS[0])
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = (option) => {
    
    if(option.label)
    {

      setSelected(option)

      
    }
    setOpen(null);
  };

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    fill: {
      type: series.map((i) => i.fill),
    },
    labels,
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => {
          if (typeof value !== 'undefined') {
            return `${value.toFixed(0)} litres`;
          }
          return value;
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }}>

         <div 
    style={{
      display:'flex',
      width:'22%',
      marginLeft:'auto',
      marginBottom:'1%',
      justifyContent:'end',
      
    }}
    >
      <Button
        disableRipple
        color="inherit"
        onClick={handleOpen}
    
        sx={{
          width:'100%',
          border:'1px solid black',
          padding:1,
          display:'flex',
          justifyContent:'space-between',
          border:'1px solid #d4d6d5'
          
        }}
        >
      
        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {
            selected.label
          }
        </Typography>

            <Iconify icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} />
          </Button>
      <Menu
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: {
              
              [`& .${listClasses.root}`]: {
                p: 0,
              },
              width:'20vw',
         
              
            },
            
          },
        }}
        >
        {SORT_OPTIONS.map((option) => (
          <MenuItem sx={{
            zIndex:'100'
          }} key={option.value}  onClick={()=>handleClose(option)}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>

    </div>

        <Chart
          dir="ltr"
          type="line"
          series={series}
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
}

AppWebsiteVisits.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
