import PropTypes from 'prop-types';

// import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import Iconify from 'src/components/iconify';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

export default function UserTableToolbar({ filterName, onFilterName }) {
  const { t } = useTranslation();
  return (
    <Toolbar
      sx={{
        height: 96,
        display: 'flex',
        justifyContent: 'space-between',
        p: (theme) => theme.spacing(0, 1, 0, 3),
      }}
    >
      <OutlinedInput
        value={filterName}
        onChange={onFilterName}
        placeholder={t('Search Farm...')}
        startAdornment={
          <InputAdornment position="start">
            <Iconify
              icon="eva:search-fill"
              sx={{ color: 'text.disabled', width: 20, height: 20 }}
            />
          </InputAdornment>
        }
      />
    </Toolbar>
  );
}

UserTableToolbar.propTypes = {
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};
