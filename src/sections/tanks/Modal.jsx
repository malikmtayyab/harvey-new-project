/* eslint-disable */
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify/iconify';
import OutlinedInput from '@mui/material/OutlinedInput';

import PropTypes from 'prop-types';
import LoadingButton from '@mui/lab/LoadingButton';
import CategoryDropdown from './CategoryDropdown';
import Tooltip from '@mui/material/Tooltip';
import { GetRequest, PostRequest } from '../../services/ApiService';
import UrlService from 'src/services/UrlService';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
    category: '',
    volume: '',
    length: '',
    height: '',
    width: '',
    latitude: '',
    longitude: '',
    location: '',
    filledDepth: '',
    diameter: '',
    tank_farm: '', // Assuming it's a string for the dropdown value
    user_id: '',
  });

  const categoryOptions = [
    { value: 'rectangle', label: 'Rectangle', src: '/assets/tanks-img/rectangle.jpg' },
    {
      value: 'horizontal_cylinder',
      label: 'Horizontal Cylender',
      src: '/assets/tanks-img/horizontal_cylinder.jpg',
    },
    {
      value: 'no_dimensions',
      label: 'No Dimentions',
      src: '',
    },
  ];

  const [users, setUsers] = React.useState();
  const [tankFarms, setTankFarms] = React.useState();

  const formFields = [
    {
      name: 'Name',
      id: 'name',
      placeholder: 'Enter Name',
      type: 'text',
      value: formData.name, // Assuming formData is your state object
    },
    {
      name: 'Category',
      id: 'category',
      placeholder: 'Enter Category',
      type: 'select',
      options: categoryOptions,
      value: formData.category,
    },
    {
      name: 'Volume',
      id: 'volume',
      placeholder: 'Enter Volume',
      type: 'number',
      value: formData.volume,
      property: ['no_dimensions'],
    },

    {
      name: 'Length',
      id: 'length',
      placeholder: 'Enter Length',
      type: 'number',
      value: formData.length,
      property: ['rectangle', 'horizontal_cylinder'],
    },
    {
      name: 'picture',
      id: 'picture',
      value: formData.category,
    },
    {
      name: 'Height',
      id: 'height',
      placeholder: 'Enter Height',
      type: 'number',
      value: formData.height,
      property: ['rectangle'],
    },
    {
      name: 'Width',
      id: 'width',
      placeholder: 'Enter Width',
      type: 'number',
      value: formData.width,
      property: ['rectangle'],
    },
    {
      name: 'Diameter',
      id: 'diameter',
      placeholder: 'Enter diameter',
      type: 'number',
      value: formData.diameter,
      property: ['horizontal_cylinder'],
    },
    {
      name: 'Fill Depth',
      id: 'filledDepth',
      placeholder: 'Enter depth',
      type: 'number',
      value: formData.filledDepth,
      property: ['rectangle', 'horizontal_cylinder'],
    },
    {
      name: 'Latitude',
      id: 'latitude',
      placeholder: 'Enter Latitude',
      type: 'number',
      value: formData.latitude,
      property: [],
    },
    {
      name: 'Longitude',
      id: 'longitude',
      placeholder: 'Enter Longitude',
      type: 'number',
      value: formData.longitude,
      property: [],
    },
    {
      name: 'Location',
      id: 'location',
      placeholder: 'Enter Location',
      type: 'text',
      value: formData.location,
      property: [],
    },
    {
      name: 'Tank Farm',
      id: 'tank_farm',
      placeholder: 'Select Tank Farm',
      type: 'select', // Assuming tank_farm is a dropdown
      value: formData.tank_farm,
      options: tankFarms, // Add your dropdown options here
    },
    {
      name: 'Select user',
      id: 'user_id',
      placeholder: 'Select User',
      type: 'select',
      value: formData.user_id,
      options: users,
    },
  ];

  const handleCloseCategory = (option, name) => {
    setFormData({
      ...formData,
      [name]: name === 'user_id' || name === 'tank_farm' ? option.id : option.value,
    });

    // setOpen(null);
  };

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

  const getAllUsers = async () => {
    const userData = await GetRequest(UrlService.getAllUsers);
    setUsers(userData.data);
  };
  const getTankFarms = async () => {
    const farms = await GetRequest(UrlService.getAllFarms);
    setTankFarms(farms?.data);
  };
  React.useEffect(() => {
    getAllUsers();
    getTankFarms();
  }, []);
  React.useEffect(() => {}, [formData.category, users]);
  const [tankName, setTankName] = React.useState('');
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="inherit"
        startIcon={<Iconify icon="eva:plus-fill" />}
      >
        {t('New Tank')}
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
            {t('Add Tank')}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            {t('Add Tank Description')}
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
                      {t(item.name)}
                    </Typography>
                    <CategoryDropdown
                      categoryOptions={item.options}
                      name={item.id}
                      handleClose={handleCloseCategory}
                    />
                    <div
                      style={{
                        display: 'flex',
                        // marginTop:20
                      }}
                    ></div>
                  </div>
                ) : item.id === 'name' ? (
                  <div>
                    <Typography
                      sx={{
                        textAlign: 'start',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        marginTop: 2,
                      }}
                    >
                      {t(item.name)}
                    </Typography>
                    <OutlinedInput
                      id={item.id}
                      value={item.value}
                      onChange={(event) => handleFormdata(event)}
                      placeholder={t(item.placeholder)}
                      type={item.type}
                      sx={{
                        marginTop: 1,
                        width: '100%',
                        height: '42px',
                      }}
                    />
                  </div>
                ) : item.id === 'picture' &&
                  formData.category &&
                  formData.category !== 'no_dimensions' ? (
                  <div>
                    <img
                      src={
                        categoryOptions.find((option) => option.value === formData.category)?.src ||
                        '/assets/tanks-img/default.jpg'
                      }
                      alt="Tank"
                      height={120}
                    />
                  </div>
                ) : item.property?.includes(formData.category) ? (
                  <div>
                    <Typography
                      sx={{
                        textAlign: 'start',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        marginTop: 2,
                      }}
                    >
                      <Tooltip
                        title={
                          <>
                            <img src="https://cdn1.byjus.com/wp-content/uploads/2022/10/Rectangle-1.png" />
                          </>
                        }
                        arrow
                      >
                        {t(item.name)}
                      </Tooltip>
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
                ) : (
                  ''
                );
              }
            })}
          </div>
          <div
            style={{
              display: 'grid',

              gridTemplateColumns: 'auto auto', // Two columns with unspecified sizes
              alignItems: 'center',
              alignContent: 'center',
              gap: '10px',
              marginTop: 5,
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
              {t('Cancel')}
            </LoadingButton>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="inherit"
              onClick={handleAddTankClick}
            >
              {t('Add Tank')}
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
