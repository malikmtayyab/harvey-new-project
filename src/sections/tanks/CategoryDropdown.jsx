import { useState } from 'react';

import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { listClasses } from '@mui/material/List';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'oliver', label: 'Oliver' },
  { value: 'van', label: 'Van' },
  { value: 'tucker', label: 'Tucker' },
  { value: 'ralph', label: 'Ralph' },
  { value: 'omar', label: 'Omar' },
  { value: 'abbot', label: 'Abbot' },
  { value: 'miriam', label: 'Miriam' },
  { value: 'olap', label: 'Olap' },
  { value: 'virginia', label: 'Virginia' },
  { value: 'kelly', label: 'Kelly' },
];

export default function CategoryDropdown() {
  const [open, setOpen] = useState(null);

  const [selected,setSelected]=useState(SORT_OPTIONS[0])
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = (option) => {
    
    
    setSelected(option)
    setOpen(null);
  };


  return (
    <div 
    style={{
      display:'flex',
      justifyContent:'end',
      marginTop:2
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
          justifyContent:'space-between'
          
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
  );
}
