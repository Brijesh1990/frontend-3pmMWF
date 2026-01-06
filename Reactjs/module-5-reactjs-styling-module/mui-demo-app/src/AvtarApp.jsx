import React from 'react'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import av1 from './assets/images/1.jpg'
import av2 from './assets/images/2.jpg'
import av3 from './assets/images/3.avif'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


// chart 

const data = [
  { label: 'Group A', value: 400, color: '#0088FE' },
  { label: 'Group B', value: 300, color: '#00C49F' },
  { label: 'Group C', value: 300, color: '#FFBB28' },
  { label: 'Group D', value: 200, color: '#FF8042' },
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};

const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};


export default function AvtarApp() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} minHeight={160}>
        <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
          <Avatar src={av1} />
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <Avatar src={av2} />
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
          <Avatar src={av2} />
        </Grid>
      </Grid>
    </Box>


    <Grid container spacing={2}>
  <Grid size={4}>
    <Stack spacing={2}>
      <Item>Column 1 - Row 1</Item>
      <Item>Column 1 - Row 2</Item>
      <Item>Column 1 - Row 3</Item>
    </Stack>
  </Grid>
  <Grid size={8}>
    <Item sx={{ height: '100%', boxSizing: 'border-box' }}>

 <PieChart
      series={[
        {
          outerRadius: 80,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 14,
        },
      }}
      {...sizing}
    />

    </Item>
  </Grid>
</Grid>


    </div>
  )
}
