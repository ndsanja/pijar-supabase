'use client';

import {
  ControlPointOutlined,
  DesktopWindowsOutlined,
  HomeOutlined,
  NotificationsNoneOutlined,
  SchoolOutlined,
  TravelExploreOutlined,
} from '@mui/icons-material';
import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const BottomNavigationComp = () => {
  const [value, setValue] = useState(0);
  const router = useRouter();

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event: any, newValue: any) => {
        setValue(newValue);
      }}
      className="!fixed !bottom-0 !left-0 !right-0 md:!hidden"
    >
      <BottomNavigationAction
        onClick={() => router.push('/app')}
        label="Lobi"
        icon={<HomeOutlined />}
      />
      <BottomNavigationAction
        label="Explore"
        icon={<TravelExploreOutlined />}
      />
      <BottomNavigationAction
        onClick={() => router.push('/app/elearning')}
        sx={{ whiteSpace: 'nowrap' }}
        label="E-Learning"
        icon={<SchoolOutlined />}
      />
      <BottomNavigationAction
        label="Pemberitahuan"
        icon={<NotificationsNoneOutlined />}
      />
      <BottomNavigationAction
        onClick={() => router.push('/app/user')}
        label="Profil"
        icon={<Avatar sx={{ width: '24px', height: '24px' }}></Avatar>}
      />
    </BottomNavigation>
  );
};
export default BottomNavigationComp;
