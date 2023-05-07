'use client';

import TabContext from '@mui/lab/TabContext';
import { useState } from 'react';
import TabsMenu from './TabMenu';

type Props = {
  children: React.ReactNode;
  menuList: any;
};

export default function Tab({ children, menuList }: Props) {
  const [value, setValue] = useState('dashboard');

  return (
    <TabContext value={value}>
      <TabsMenu value={value} setValue={setValue} menuList={menuList} />
      {children}
    </TabContext>
  );
}
