'use client';

import TabPanel from '@mui/lab/TabPanel';
import { Typography } from '@mui/material';
import UserPageClient from '../UserPage';

type Props = {
  menuList: any;
};

export default function TabContent({ menuList }: Props) {
  return (
    <>
      {menuList.map((e: any) => (
        <TabPanel key={e.value} value={e.value}>
          {e.value === 'pengaturan' ? (
            <UserPageClient />
          ) : (
            <Typography>{e.title}</Typography>
          )}
        </TabPanel>
      ))}
    </>
  );
}
