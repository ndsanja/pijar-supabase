'use client';

import { Paper, Tab, Tabs, useScrollTrigger } from '@mui/material';
import { useTheme } from '@emotion/react';
import ElearningPageClient from './ElearningPage';
import { useState } from 'react';

type Props = {
  children?: React.ReactNode;
  dir?: string;
  index?: number;
  value?: number;
};

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const ElearningLayoutClient = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  return (
    <>
      <Tabs
        sx={{
          backgroundColor: 'white',
          position: 'sticky',
          top: trigger ? '0px' : '50px',
          zIndex: 100,
        }}
        className="transition-opacity duration-300 delay-200"
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="kategory elearning"
      >
        <Tab label="Umum" {...a11yProps(0)} />
        <Tab label="Jadwal" {...a11yProps(1)} />
        <Tab label="Statistik" {...a11yProps(2)} />
      </Tabs>
      <ElearningPageClient value={value} />
    </>
  );
};
export default ElearningLayoutClient;
