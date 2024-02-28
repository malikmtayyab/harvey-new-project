import { useState } from 'react';
import PropTypes from 'prop-types';
/*eslint-disable*/

import Stack from '@mui/material/Stack';
// import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
// import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

// import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import ChartView from './ChartView';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

export default function UserTableRow({
  index,
  id,
  name,
  category,
  coneHeigth,
  forecastNextDay,
  forecastWeek,
  forecastMonth,
  forecastYear,
  temperatur,
  status,
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox"  sx={{
        background:index%2===1?'#f4f6f8':'white'
      }} >
        <TableCell
          sx={{
            paddingLeft: 5,
          }}
          component="th"
          scope="row"
          padding="none"
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            {/* <Avatar alt={name} src={avatarUrl} /> */}
            <Typography variant="subtitle2" noWrap>
              <ChartView name={name} id={id} />
            </Typography>
          </Stack>
        </TableCell>

        <TableCell
          sx={{
            paddingLeft: 5,
          }}
        >
          {category}
        </TableCell>
            <TableCell
              sx={{
                paddingLeft: 5,
              }}
            >
              <Button
                variant="outlined"
                color={status === 'NORMAL' ? 'success' : status === 'WARNING' ? 'warning' : 'error'}
              >
                {t(status)}
              </Button>
            </TableCell>
        <TableCell
          sx={{
            paddingLeft: 5,
          }}
        >
          {temperatur}
        </TableCell>
        <TableCell
          sx={{
            paddingLeft: 5,
          }}
        >
          {coneHeigth}
        </TableCell>
        
        <TableCell
          sx={{
            paddingLeft: 5,
          }}
        >
          {forecastNextDay}
        </TableCell>
        <TableCell
          sx={{
            paddingLeft: 5,
          }}
        >
          {forecastWeek}
        </TableCell>
        <TableCell
          sx={{
            paddingLeft: 5,
          }}
        >
          {forecastMonth}
        </TableCell>
        <TableCell
          sx={{
            paddingLeft: 5,
          }}
        >
          {forecastYear}
        </TableCell>
     

        {/* <TableCell>{role}</TableCell> */}

        {/* <TableCell align="center">{isVerified ? 'Yes' : 'No'}</TableCell> */}

        {/* <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell> */}
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>
      </Popover>
    </>
  );
}

UserTableRow.propTypes = {
  name: PropTypes.any,
  category: PropTypes.any,
  coneHeigth: PropTypes.any,
  forecastNextDay: PropTypes.any,
  forecastWeek: PropTypes.string,
  forecastMonth: PropTypes.any,
  forecastYear: PropTypes.any,
  temperatur: PropTypes.any,
  status: PropTypes.any,
};
