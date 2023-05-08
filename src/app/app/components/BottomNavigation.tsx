'use client';

import {
  ControlPointOutlined,
  DesktopWindowsOutlined,
  HomeOutlined,
  NotificationsNoneOutlined,
  SchoolOutlined,
  TravelExploreOutlined,
  SearchOutlined,
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
        icon={<HomeOutlined sx={{ fontSize: '28px' }} />}
      />
      <BottomNavigationAction
        onClick={() => router.push('/app/cari')}
        icon={<SearchOutlined sx={{ fontSize: '28px' }} />}
      />
      <BottomNavigationAction
        onClick={() => router.push('/app/elearning')}
        sx={{ whiteSpace: 'nowrap' }}
        icon={<SchoolOutlined sx={{ fontSize: '28px' }} />}
      />
      <BottomNavigationAction
        onClick={() => router.push('/app/pemberitahuan')}
        icon={<NotificationsNoneOutlined sx={{ fontSize: '28px' }} />}
      />
      <BottomNavigationAction
        onClick={() => router.push('/app/user')}
        icon={<Avatar sx={{ width: '28px', height: '28px' }}></Avatar>}
      />
    </BottomNavigation>
  );
};
export default BottomNavigationComp;
