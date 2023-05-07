'use client';

import TabContext from '@mui/lab/TabContext';
import { useState } from 'react';
import TabsMenu from './TabMenu';
import TabContent from './TabContent';

export default function Tab() {
  const [value, setValue] = useState('dashboard');

  const menuList = [
    {
      title: 'Dashboard',
      value: 'dashboard',
    },
    {
      title: 'Post',
      value: 'post',
    },
    {
      title: 'Agenda',
      value: 'agenda',
    },
    {
      title: 'E-learning',
      value: 'elearning',
    },
    {
      title: 'Karya',
      value: 'karya',
    },
    {
      title: 'Pengaturan',
      value: 'pengaturan',
    },
  ];
  return (
    <TabContext value={value}>
      <TabsMenu value={value} setValue={setValue} menuList={menuList} />
      <TabContent menuList={menuList} />
    </TabContext>
  );
}
