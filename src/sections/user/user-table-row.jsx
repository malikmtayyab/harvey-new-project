import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';
// import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
// import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function UserTableRow({
  id,
  name,
  creatTime,
  updateTime,
  filled,
  totalVolumn,
  nextDay,
  week,
  month,
  year,
}) {

  const formatDate=(dateTimeString)=>
  {
    if(!dateTimeString)
    {
      return '';
    }
    const dateObj = new Date(dateTimeString);

const options = {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZone: 'UTC'
};

const formattedDateTime = dateObj.toLocaleDateString('en-US', options);
return formattedDateTime
  }
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1}>
        <TableCell
          component="th"
          scope="row"
          padding="none"
          sx={{
            paddingLeft: 5,
          }}
        >
          <Link to={`/view-farms?id=${id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              {/* <Avatar alt={name} src={avatarUrl} /> */}
              <Typography variant="subtitle2" noWrap>
                {name}
              </Typography>
            </Stack>
          </Link>
        </TableCell>

        <TableCell
          sx={{
            paddingLeft: 5,
          }}
        >
          {formatDate(creatTime)}
        </TableCell>
        <TableCell
          sx={{
            paddingLeft: 5,
          }}
        >
          {formatDate(updateTime)}
        </TableCell>
        <TableCell
          sx={{
            paddingLeft: 5,
          }}
        >
          {(Number(filled)).toFixed(2)}
        </TableCell>
        <TableCell
          sx={{
            paddingLeft: 5,
          }}
        >
          {(Number(totalVolumn).toFixed(2))}
        </TableCell>
        <TableCell
          sx={{
            paddingLeft: 5,
          }}
        >
          {nextDay}
        </TableCell>
        <TableCell
          sx={{
            paddingLeft: 5,
          }}
        >
          {week}
        </TableCell>
        <TableCell
          sx={{
            paddingLeft: 5,
          }}
        >
          {month}
        </TableCell>
        <TableCell
          sx={{
            paddingLeft: 5,
          }}
        >
          {year}
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

        {/* <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem> */}
      </Popover>
    </>
  );
}

UserTableRow.propTypes = {
  id: PropTypes.any,
  name: PropTypes.any,
  creatTime: PropTypes.any,
  updateTime: PropTypes.any,
  filled: PropTypes.any,
  totalVolumn: PropTypes.any,
  nextDay: PropTypes.any,
  week: PropTypes.any,
  month: PropTypes.any,
  year: PropTypes.any,
};
