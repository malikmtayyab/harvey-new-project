/* eslint-disable */
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify/iconify';
import OutlinedInput from '@mui/material/OutlinedInput';

import LoadingButton from '@mui/lab/LoadingButton';
import CategoryDropdown from './CategoryDropdown';

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
  overflow: 'scrolk',
};

export default function TankModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formData = {
    name: '',
    category: '',
    length: 0,
    height: 0,
    width: 0,
    latitude: 0,
    longitude: 0,
    location: '',
    tank_farm: '', // Assuming it's a string for the dropdown value
  };

  const formFields = [
    {
      name: 'name',
      placeholder: 'Enter Name',
      type: 'text',
      value: formData.name, // Assuming formData is your state object
    },
    {
      name: 'category',
      placeholder: 'Enter Category',
      type: 'text',
      value: formData.category,
    },
    {
      name: 'length',
      placeholder: 'Enter Length',
      type: 'number',
      value: formData.length,
    },
    {
      name: 'height',
      placeholder: 'Enter Height',
      type: 'number',
      value: formData.height,
    },
    {
      name: 'width',
      placeholder: 'Enter Width',
      type: 'number',
      value: formData.width,
    },
    {
      name: 'latitude',
      placeholder: 'Enter Latitude',
      type: 'number',
      value: formData.latitude,
    },
    {
      name: 'longitude',
      placeholder: 'Enter Longitude',
      type: 'number',
      value: formData.longitude,
    },
    {
      name: 'location',
      placeholder: 'Enter Location',
      type: 'text',
      value: formData.location,
    },
    {
      name: 'Tank Farm',
      placeholder: 'Select Tank Farm',
      type: 'select', // Assuming tank_farm is a dropdown
      value: formData.tank_farm,
      options: ['Option 1', 'Option 2', 'Option 3'], // Add your dropdown options here
    },
  ];

  const [tankName, setTankName] = React.useState('');
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="inherit"
        startIcon={<Iconify icon="eva:plus-fill" />}
      >
        New Tank
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
            Add Tank
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Fill in the tank name and click on add button in order to add the tank.
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
                return item.type === 'select' ? (
                  <div>
                    <Typography
                      sx={{
                        textAlign: 'start',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        marginTop: 2,
                        marginBottom: 1,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <CategoryDropdown />
                    <div
                      style={{
                        display: 'flex',
                        // marginTop:20
                      }}
                    ></div>
                  </div>
                ) : (
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
                      value={item.value}
                      // onChange={(e) => setTankName(e.target.value)}
                      placeholder={item.placeholder}
                      type={item.type}
                      sx={{
                        marginTop: 1,
                        width: '100%',
                        height: '42px',
                      }}
                    />
                  </div>
                );
              }
            })}

            <div></div>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="outlined"
              color="inherit"
              sx={{
                margin: 1,
              }}
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
              sx={{
                margin: 1,
              }}
              // onClick={handleClick}
            >
              Add Tank
            </LoadingButton>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
