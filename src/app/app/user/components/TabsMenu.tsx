'use client';

import { Paper, Tab, Tabs, useScrollTrigger } from '@mui/material';
import { useTheme } from '@emotion/react';
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

const TabsMenu = (props: Props) => {
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
        }}
        className="transition-opacity duration-300 delay-200"
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="kategory elearning"
      >
        <Tab className="" label="Dashboard" {...a11yProps(0)} />
        <Tab className="" label="Post" {...a11yProps(1)} />
        <Tab className="" label="Agenda" {...a11yProps(2)} />
        <Tab
          className="!whitespace-nowrap "
          label="E-learning"
          {...a11yProps(3)}
        />
        <Tab className="" label="Karya" {...a11yProps(4)} />
        <Tab className="" label="Pengaturan" {...a11yProps(5)} />
      </Tabs>
    </>
  );
};
export default TabsMenu;
