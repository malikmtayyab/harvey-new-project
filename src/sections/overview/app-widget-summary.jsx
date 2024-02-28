/* eslint-disable */
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Logo from 'src/components/logo';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';
import tankIcon from '../../assets/water-tank.png';
import farmTank from '../../assets/oil-tank.png';
import increase from '../../assets/charts.png';
import group from '../../assets/group.png';

import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {
  const { t } = useTranslation();

  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        gap: 8,
        backgroundColor:
          title === 'Number of Tanks'
            ? '#b39fd6'
            : title === 'Farm Tank'
            ? '#a49fd6'
            : title === 'Total Capacity (Litres)'
            ? '#d6d19f'
            : title === 'Total Users'
            ? '#d69f9f'
            : title === 'Normal'
            ? '#77c78d'
            : title === 'Critical'
            ? '#942626'
            : '#aba118',
        ...sx,
      }}
      {...other}
    >
      <img
        src={
          title === 'Number of Tanks'
            ? tankIcon
            : title === 'Farm Tank'
            ? farmTank
            : title === 'Total Capacity (Litres)'
            ? increase
            : group
        }
        alt=""
        style={{ width: '25px', height: '25px' }}
      />

      <Stack spacing={0.5}>
        <Typography variant="h4" sx={{ color: 'white' }}>
          {total > 1000 ? fShortenNumber(total) : total}
        </Typography>

        <Typography variant="subtitle2" sx={{ color: 'white' }}>
          {t(title)}
        </Typography>
      </Stack>
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
