/*eslint-disable*/
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AppWebsiteVisits from '../overview/app-website-visits';
import { GetRequest } from 'src/services/ApiService';
import UrlService from 'src/services/UrlService';
// import { Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ChartView({ name, id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () =>{ 
    setOpen(true)
    getTanksStats()
  };
  const handleClose = () => setOpen(false);

  const [tanksData,setTanksData]=React.useState()

  function getStartEndDate(frequency) {
    let currentDate = new Date();
    let startDate = null;
    let endDate = null;

    if (frequency === 'daily') {
        startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);
        endDate = currentDate;
    } else if (frequency === 'weekly') {
        let dayOfWeek = currentDate.getDay();
        startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - dayOfWeek, 0, 0, 0);
        endDate = currentDate;
    } else if (frequency === 'monthly') {
        startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 0, 0, 0);
        endDate = currentDate;
    }

    return {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
    };
}

  const getTanksStats=async(filter='daily')=>
  {
    let { startDate, endDate } = getStartEndDate(filter);

    const tanksStats=await GetRequest(`${UrlService.getTanksStats}/${id}/${filter}?startDate=${startDate}&endDate=${endDate}`)
    setTanksData(tanksStats.data)
  }



  return (
    <div>
      <Button onClick={handleOpen}>{name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Grid xs={12} md={12} lg={12}> */}
          <AppWebsiteVisits
            title="Capacity History"
            subheader=""
            getTanksData={getTanksStats}
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                // {
                //   name: 'Team A',
                //   type: 'column',
                //   fill: 'solid',
                //   data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                // },
                {
                  name: 'Farm 1',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Farm 2',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
          {/* </Grid> */}
        </Box>
      </Modal>
    </div>
  );
}