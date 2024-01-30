/* eslint-disable */
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify/iconify';
import OutlinedInput from '@mui/material/OutlinedInput';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import PropTypes from 'prop-types';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import { listClasses } from '@mui/material/List';
import { PostRequest } from '../../services/ApiService';
import UrlService from 'src/services/UrlService';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
const SORT_OPTIONS = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'six_weeks', label: 'Six Weeks' },
  { value: 'annually', label: 'Annually' },
  { value: 'future_daily', label: 'Future Daily Consumption' },
  { value: 'future_annual', label: 'Future Annual Consumption' },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  // height:420,
  borderRadius: 1,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  overflow: 'scrol',
};

export default function TankModal({ refreshTableData }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setFormData({
      name: '',
      category: '',
      length: '',
      height: '',
      width: '',
      latitude: '',
      longitude: '',
      location: '',
      filledDepth: '',
      tank_farm: '', // Assuming it's a string for the dropdown value
    });
    setOpen(false);
  };

  const [formData, setFormData] = React.useState({
    name: '',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    phone_number1: '',
    phone_number2: '',
 
  });


  const formFields = [
    {
      name: 'First Name',
      id: 'first_name',
      placeholder: ' First Name',
      type: 'text',
      value: formData.first_name, // Assuming formData is your state object
    },
    {
      name: 'Last Name',
      id: 'last_name',
      placeholder: ' Last Name',
      type: 'text',
      value: formData.last_name, // Assuming formData is your state object
    },
    {
      name: 'Username',
      id: 'username',
      placeholder: 'Username',
      type: 'text',
      value: formData.username, // Assuming formData is your state object
    },
    {
      name: 'Email',
      id: 'email',
      placeholder: 'Enter Email',
      type: 'text',
      value: formData.email, // Assuming formData is your state object
    },
    {
      name: 'Password',
      id: 'password',
      placeholder: 'Enter Password',
      type: 'text',
      value: formData.password, // Assuming formData is your state object
    },
    {
      name: 'Phone Number 1',
      id: 'phone_number1',
      placeholder: 'Enter Phone Number',
      type: 'number',
      value: formData.phone_number1, // Assuming formData is your state object
    },
    {
      name: 'Phone Number 2',
      id: 'phone_number2',
      placeholder: 'Enter Phone Number',
      type: 'number',
      value: formData.phone_number2, // Assuming formData is your state object
    },
   
  ];




  const handleFormdata = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });

    // setOpen(null);
  };

  const handleAddTankClick = async () => {
    try {
      const res = await PostRequest(`${UrlService.addTank}/${formData.tank_farm}`, formData);
      if (res.status) {
        toast.success('Tank Added!');
        refreshTableData();
      }
    } catch (err) {
      toast.error('Error Adding Tank');
    }
    handleClose();
  };

  React.useEffect(() => { }, [formData.category]);
  const [tankName, setTankName] = React.useState('');

  

  const [openDropdown, setOpenDropdown] = useState(null);

  const [selected,setSelected]=useState(SORT_OPTIONS[0])
  const handleDropdownOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleDropdownClose = (option) => {
    
    if(option.label)
    {

      setSelected(option)

      
    }
    setOpen(null);
  };

  
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="inherit"
        startIcon={<Iconify icon="eva:plus-fill" />}
      >
        New User
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h4" component="h2">
            Add User
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Fill in the user information and click on add button in order to add the user.
          </Typography>
          <div
            style={{
              display: 'grid',
              gridTemplateRows: '100px 100px', // Two rows, each 100px tall
              gridTemplateColumns: 'auto auto', // Two columns with unspecified sizes
              alignItems: 'center',
              alignContent: 'center',
              gap: '10px',
            }}
          >
            {formFields.map((item, index) => {
              {
                return  (
                  <div>
                    <Typography
                      sx={{
                        textAlign: 'start',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        marginTop: 2,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <OutlinedInput
                      id={item.id}
                      value={item.value}
                      onChange={(event) => handleFormdata(event)}
                      placeholder={item.placeholder}
                      type={item.type}
                      sx={{
                        marginTop: 1,
                        width: '100%',
                        height: '42px',
                      }}
                    />
                  </div>
                ) 
              }
            })}


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
        onClick={handleDropdownOpen}
    
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
        open={!!openDropdown}
        anchorEl={openDropdown}
        onClose={handleDropdownClose}
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
          }} key={option.value}  onClick={()=>handleDropdownClose(option)}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>

    </div>

          </div>
          <div
            style={{
              display: 'grid',

              gridTemplateColumns: 'auto auto', // Two columns with unspecified sizes
              alignItems: 'center',
              alignContent: 'center',
              gap: '10px',
              marginTop: 20,
            }}
          >
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="outlined"
              color="inherit"
              onClick={handleClose}
            >
              Cancel
            </LoadingButton>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="inherit"
              onClick={handleAddTankClick}
            >
              Add User
            </LoadingButton>
          </div>
        </Box>
      </Modal>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
Modal.propTypes = {
  refreshTableData: PropTypes.func,
};
