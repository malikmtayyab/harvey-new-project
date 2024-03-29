/* eslint-disable */
import { useState } from 'react';

import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { listClasses } from '@mui/material/List';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: '1', label: 'Tank Farm 1' },
  { value: '2', label: 'Tank Farm 2' },
  // { value: 'tucker', label: 'Tucker' },
  // { value: 'ralph', label: 'Ralph' },
  // { value: 'omar', label: 'Omar' },
  // { value: 'abbot', label: 'Abbot' },
  // { value: 'miriam', label: 'Miriam' },
  // { value: 'olap', label: 'Olap' },
  // { value: 'virginia', label: 'Virginia' },
  // { value: 'kelly', label: 'Kelly' },
];

export default function CategoryDropdown({ categoryOptions, name, handleClose }) {
  const [open, setOpen] = useState(null);

  const [selected, setSelected] = useState('');
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const closeCall = (option) => {
    setSelected(option);
    setOpen(null);
    handleClose(option, name);
  };
  const { t } = useTranslation();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'end',
        marginTop: 2,
      }}
    >
      <Button
        disableRipple
        color="inherit"
        onClick={handleOpen}
        sx={{
          width: '100%',
          border: '1px solid black',
          padding: 1,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {name === 'user_id'
            ? selected.username
            : name === 'tank_farm'
            ? selected.name
            : t(selected.label)}
        </Typography>

        <Iconify icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} />
      </Button>
      <Menu
        open={!!open}
        anchorEl={open}
        onClose={closeCall}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: {
              [`& .${listClasses.root}`]: {
                p: 0,
              },
              width: '20vw',
            },
          },
        }}
      >
        {name === 'category' || name === 'user_id' || name === 'tank_farm'
          ? categoryOptions &&
            categoryOptions.map((option) => (
              <MenuItem
                sx={{
                  zIndex: '100',
                }}
                key={name === 'user_id' ? option.id : option.value}
                onClick={() => closeCall(option)}
              >
                {/* <Tooltip
                title={
                  <>
                    <img src="https://cdn1.byjus.com/wp-content/uploads/2022/10/Rectangle-1.png" />
                  </>
                }
                arrow
              > */}
                {name === 'user_id'
                  ? option.username
                  : name === 'tank_farm'
                  ? option.name
                  : t(option.label)}
                {/* </Tooltip> */}
              </MenuItem>
            ))
          : SORT_OPTIONS.map((option) => (
              <MenuItem
                sx={{
                  zIndex: '100',
                }}
                key={option.value}
                onClick={() => closeCall(option)}
              >
                {option.label}
              </MenuItem>
            ))}
      </Menu>
    </div>
  );
}
