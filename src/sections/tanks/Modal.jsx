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
  width: 400,
  height:420,
  borderRadius:1,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign:'center',
  
};

export default function TankModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [tankName,setTankName]=React.useState('')
  return (
    <div>
      <Button  onClick={handleOpen} variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
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

          <Typography
          sx={{
            textAlign:'start',
            fontSize:'16px',
            fontWeight:'bold',
            marginTop:2
          }}
          >
            Add Tank
          </Typography>
          <OutlinedInput
          value={tankName}
          onChange={(e) => setTankName(e.target.value)}
          placeholder="Tank Name"
          sx={{
            marginTop:1,
            width:'100%'
          }}
         
        />
       <Typography
          sx={{
            textAlign:'start',
            fontSize:'16px',
            fontWeight:'bold',
            marginTop:2
          }}
          >
           Categories
          </Typography>
        <CategoryDropdown/>
        <div style={{
            display:'flex',
            marginTop:20
        }}>

<LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="outlined"
        color="inherit"
        sx={{
            margin:1
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
            margin:1
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