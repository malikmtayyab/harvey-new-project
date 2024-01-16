/* eslint-disable */
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify/iconify';
import OutlinedInput from '@mui/material/OutlinedInput';
import LoadingButton from '@mui/lab/LoadingButton';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { PostRequest } from '../../services/ApiService';
import UrlService from 'src/services/UrlService';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 350,
  borderRadius: 1,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

export default function TankModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [tankName, setTankName] = React.useState('');

  const preparePayload = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
    const obj = {
      name: tankName,
      createTime: formattedDate,
      updateTime: formattedDate,
      totalFilled: 0,
      totalVolume: 0,
      forecastNextDay: 0,
      forecastWeek: 0,
      forecastMonth: 0,
      forecastYear: 0,
    };
    return obj;
  };
  const handleAddFarmClick = async () => {
    const data = preparePayload();
    const res = await PostRequest(UrlService.addTankFarms, data);
    console.log('res', res);
    toast.success('Tank Farm Added!');
    handleClose();
  };
  const handleEditFarmClick = async () => {
    const data = preparePayload();
    const res = await PostRequest(UrlService.addTankFarms, data);
    console.log('res', res);
    toast.success('Tank Farm Added!');
    handleClose();
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="inherit"
        startIcon={<Iconify icon="eva:plus-fill" />}
      >
        New Farm
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
            Add Farm
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Fill in the tank name and click on add button in order to add the tank.
          </Typography>

          <Typography
            sx={{
              textAlign: 'start',
              fontSize: '16px',
              fontWeight: 'bold',
              marginTop: 2,
            }}
          >
            Add Farm
          </Typography>
          <OutlinedInput
            value={tankName}
            onChange={(e) => setTankName(e.target.value)}
            placeholder="Tank Name"
            sx={{
              marginTop: 1,
              width: '100%',
            }}
          />
          <div
            style={{
              display: 'flex',
              marginTop: 20,
            }}
          >
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
              onClick={handleAddFarmClick}
            >
              Add Farm
            </LoadingButton>
          </div>
        </Box>
      </Modal>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
