/* eslint-disable */

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';
import CircleMotion from './CircleMotion';
import Grid from '@mui/material/Unstable_Grid2';

// ----------------------------------------------------------------------

export default function StatsTile({ title, total, icon, color = 'primary', sx, level, ...other }) {
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
        <CircleMotion innerCircleSize={level} />
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
                Tank Level
              </Typography>
            </p>
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                Update
              </Typography>
            </p>

            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                Change
              </Typography>
            </p>

            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                Since Last Reading
              </Typography>
            </p>

            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                Contents
              </Typography>
            </p>

            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                Tank Capacity
              </Typography>
            </p>
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                Tank Status
              </Typography>
            </p>

            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                Tank Temperature
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
                20 Ltrs
              </Typography>
            </p>
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                up
              </Typography>
            </p>
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                up
              </Typography>
            </p>
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                47.5%
              </Typography>
            </p>
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                up
              </Typography>
            </p>
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                10 Liters
              </Typography>
            </p>
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                Normal
              </Typography>
            </p>
            <p>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                Degree Celcius
              </Typography>
            </p>{' '}
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}

/* eslint-enable */
