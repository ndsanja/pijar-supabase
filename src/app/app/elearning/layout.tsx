'use client';

import { usePathname } from 'next/navigation';
import ElearningAppBar from './components/ElearningAppBar';

type Props = {
  children: React.ReactNode;
};

export default function ElearningLayout({ children }: Props) {
  const path = usePathname();
  return (
    <>
      {path === '/app/elearning' && <ElearningAppBar />}
      {children}
    </>
  );
}
