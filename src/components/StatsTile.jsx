/* eslint-disable */


import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import CircleMotion from './CircleMotion';
import Grid from '@mui/material/Unstable_Grid2';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

export default function StatsTile({ tank, title, total, icon, color = 'primary', sx, level, ...other }) {
  const { t } = useTranslation();
  return (
    <Card
      style={{
        padding: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 10,
        }}
      >
        <CircleMotion innerCircleSize={(tank?.filledDepth / tank?.heigth) * 100} />
      </div>
      <Grid container xs={12}>
        <Grid xs={6}>
          <div
            style={{
              marginLeft: 5,
            }}
          >
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                {t('Tank Level')}
              </Typography>
            </p>
            {/* <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                Update
              </Typography>
            </p> */}

            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                {t('Change')}
              </Typography>
            </p>

            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                {t('Since Last Reading')}
              </Typography>
            </p>

            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                {t('Contents')}
              </Typography>
            </p>

            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                {t('Tank Capacity')}
              </Typography>
            </p>
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                {t('Tank Status')}
              </Typography>
            </p>

            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                {t('Tank Temperature')}
              </Typography>
            </p>
          </div>
        </Grid>
        <Grid xs={6}>
          <div
            style={{
              textAlign: 'right',
              marginRight: 10,
            }}
          >
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                {tank?.volume?.toFixed(2)}
              </Typography>
            </p>
            {/* <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                up
              </Typography>
            </p> */}
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                {tank?.volumeFilled < tank.previousVolumeFilled ? 'DOWN' : 'UP'}
              </Typography>
            </p>
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                {(tank?.volumeFilled - tank?.previousVolumeFilled)?.toFixed(2)}
              </Typography>
            </p>
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                {tank?.content?.toUpperCase()}
              </Typography>
            </p>
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                {tank?.volume.toFixed(2)}
              </Typography>
            </p>
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                {tank?.status}
              </Typography>
            </p>
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                {tank?.temperatur ? tank?.temperatur : 0}
              </Typography>
            </p>{' '}
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}

/* eslint-enable */
