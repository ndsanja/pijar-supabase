import AppAppBar from '../components/AppAppBar';
import Header from './components/Header';
import Tab from './components/Tab/Tab';

type Props = {
  children: React.ReactNode;
};

export default function UserLayout({ children }: Props) {
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
    <>
      <AppAppBar />
      <Header />
      <Tab menuList={menuList}>{children}</Tab>
    </>
  );
}
