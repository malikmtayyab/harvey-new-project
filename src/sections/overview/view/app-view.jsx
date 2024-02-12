
// import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import Iconify from 'src/components/iconify';

// import AppTasks from '../app-tasks';
// import AppNewsUpdate from '../app-news-update';
// import AppOrderTimeline from '../app-order-timeline';
// import AppCurrentVisits from '../app-current-visits';
/* eslint-disable */

import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import StatsTile from 'src/components/StatsTile';
import { GetRequest } from '../../../services/ApiService'
import UrlService from '../../../services/UrlService'
/* eslint-enable */
// import AppTrafficBySite from '../app-traffic-by-site';
// import AppCurrentSubject from '../app-current-subject';
// import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  const [dashboardData, setDashboardData] = useState()
  const [tankFarms, setTankFarms] = useState(null)
  const [tanks, setTanks] = useState([])
  const [tankFarmsStats, setTankFarmsStats] = useState(null)
  const [tankFarmsStatsLabels, setTankFarmsStatsLabels] = useState(null)


  function getStartEndDate(frequency) {
    const currentDate = new Date();
    let startDate = null;
    let endDate = null;

    if (frequency === 'daily') {
        startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);
        endDate = currentDate;
    } else if (frequency === 'weekly') {
        const dayOfWeek = currentDate.getDay();
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

  const getDashboardData = async () => {
    const farms = await GetRequest(UrlService.getAllFarms)

    const { startDate, endDate } = getStartEndDate('daily');
    const farmStats = await GetRequest(`${UrlService.getDataByTankFarm}/${farms.data[0].id}/daily?startDate=${startDate}&endDate=${endDate}`)
    const res = await GetRequest(UrlService.getDashboardData)
    await tankData(farms.data[0].id)
    setTankFarms(farms?.data)
    // setTankFarmsStats(farmStats)


    const dataArray = []
    const dataArray2 = []
    // Create an array to store total volumes
    farmStats.data.map(obj => dataArray.push(obj.totalVolume));
    farmStats.data.map(obj => dataArray2.push(obj.dayOfYear));
    //  farmStats.data.map(obj=>obj.)
    setTankFarmsStats(dataArray)
    setTankFarmsStatsLabels(dataArray2)
    console.log(dataArray);

    setDashboardData(res)
  }

  const tankData = async (id) => {
    const res = await GetRequest(`${UrlService.getTankFarmsTanks}/${id}`)
    setTanks(res?.data)
  }


  const getTankFormData = async (id, filter) => {
    const { startDate, endDate } = getStartEndDate(filter);
    const farmStats = await GetRequest(`${UrlService.getDataByTankFarm}/${id}/${filter}?startDate=${startDate}&endDate=${endDate}`)
    const dataArray = []
    const dataArray2 = []
    // Create an array to store total volumes
    farmStats.data.map(obj => dataArray.push(obj.totalVolume));
    farmStats.data.map(obj => dataArray2.push(obj.dayOfYear));
    //  farmStats.data.map(obj=>obj.)
    setTankFarmsStats(dataArray)
  }

  
  useEffect(() => {
    getDashboardData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>
      {dashboardData?.data &&
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Number of Tanks"
              total={dashboardData?.data?.totalTank}
              color="success"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            />
          </Grid>

          <Grid xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Farm Tank"
              total={dashboardData?.data?.totalTankFarm}
              color="info"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
            />
          </Grid>

          <Grid xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Total Capacity (Litres)"
              total={dashboardData?.data?.totalCapacity}
              color="warning"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
            />
          </Grid>

          <Grid xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Total Users"
              total={dashboardData?.data?.totalUser}
              color="error"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
            />
          </Grid>

          <Grid xs={12} md={12} lg={12}>
            <AppWebsiteVisits
              handleTankData={tankData}
              title="Capacity History"
              subheader=""
              tankFarms={tankFarms}
              getTankFormData={getTankFormData}
              chart={{
                labels: tankFarmsStatsLabels,
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
                    data: tankFarmsStats,
                  },
                  // {
                  //   name: 'Farm 2',
                  //   type: 'line',
                  //   fill: 'solid',
                  //   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                  // },
                ],
              }}
            />
          </Grid>
          <Grid container xs={12} color="white">
  {tanks?.map((tank) => (
    <Grid xs={12} sm={6} md={4}>
      <StatsTile
        tank={tank}
        title="Bug Reports"
        total={234}
        color="error"
        icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
        level={10}
      />
    </Grid>
  ))}
</Grid>


          {/* <Grid xs={12} md={6} lg={4}>
              <AppCurrentVisits
                title="Current Visits"
                chart={{
                  series: [
                    { label: 'America', value: 4344 },
                    { label: 'Asia', value: 5435 },
                    { label: 'Europe', value: 1443 },
                    { label: 'Africa', value: 4443 },
                  ],
                }}
              />
            </Grid> */}

          {/* <Grid xs={12} md={6} lg={8}>
              <AppConversionRates
                title="Conversion Rates"
                subheader="(+43%) than last year"
                chart={{
                  series: [
                    { label: 'Italy', value: 400 },
                    { label: 'Japan', value: 430 },
                    { label: 'China', value: 448 },
                    { label: 'Canada', value: 470 },
                    { label: 'France', value: 540 },
                    { label: 'Germany', value: 580 },
                    { label: 'South Korea', valuape: 690 },
                    { label: 'Netherlands', value: 1100 },
                    { label: 'United States', value: 1200 },
                    { label: 'United Kingdom', value: 1380 },
                  ],
                }}
              />
            </Grid> */}

          {/* <Grid xs={12} md={6} lg={4}>
              <AppCurrentSubject
                title="Current Subject"
                chart={{
                  categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
                  series: [
                    { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                    { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                    { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
                  ],
                }}
              />
            </Grid> */}

          {/* <Grid xs={12} md={6} lg={8}>
              <AppNewsUpdate
                title="News Update"
                list={[...Array(5)].map((_, index) => ({
                  id: faker.string.uuid(),
                  title: faker.person.jobTitle(),
                  description: faker.commerce.productDescription(),
                  image: /assets/images/covers/cover_${index + 1}.jpg,
                  postedAt: faker.date.recent(),
                }))}
              />
            </Grid>
    
            <Grid xs={12} md={6} lg={4}>
              <AppOrderTimeline
                title="Order Timeline"
                list={[...Array(5)].map((_, index) => ({
                  id: faker.string.uuid(),
                  title: [
                    '1983, orders, $4220',
                    '12 Invoices have been paid',
                    'Order #37745 from September',
                    'New order placed #XF-2356',
                    'New order placed #XF-2346',
                  ][index],
                  type: order${index + 1},
                  time: faker.date.past(),
                }))}
              />
            </Grid>
    
            <Grid xs={12} md={6} lg={4}>
              <AppTrafficBySite
                title="Traffic by Site"
                list={[
                  {
                    name: 'FaceBook',
                    value: 323234,
                    icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
                  },
                  {
                    name: 'Google',
                    value: 341212,
                    icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
                  },
                  {
                    name: 'Linkedin',
                    value: 411213,
                    icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
                  },
                  {
                    name: 'Twitter',
                    value: 443232,
                    icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
                  },
                ]}
              />
            </Grid>
    
            <Grid xs={12} md={6} lg={8}>
              <AppTasks
                title="Tasks"
                list={[
                  { id: '1', name: 'Create FireStone Logo' },
                  { id: '2', name: 'Add SCSS and JS files if required' },
                  { id: '3', name: 'Stakeholder Meeting' },
                  { id: '4', name: 'Scoping & Estimations' },
                  { id: '5', name: 'Sprint Showcase' },
                ]}
              />
            </Grid> */}
        </Grid>
      }

    </Container>
  );
}
