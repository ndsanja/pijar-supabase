'use client';

import TabPanel from '@mui/lab/TabPanel';

type Props = {
  children: React.ReactNode;
  value: any;
};

export default function TabContent({ value, children }: Props) {
  return <TabPanel value={value}>{children}</TabPanel>;
}
