'use client';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  menuList: any;
};

export default function TabMenu({ value, setValue, menuList }: Props) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabList
      sx={{ backgroundColor: 'white' }}
      onChange={handleChange}
      aria-label="user menu"
      variant="scrollable"
    >
      {menuList.map((e: any) => (
        <Tab key={e.value} label={e.title} value={e.value} />
      ))}
    </TabList>
  );
}
