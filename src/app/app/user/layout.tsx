import AppAppBar from '../components/AppAppBar';

type Props = {
  children: React.ReactNode;
};

export default function UserLayout({ children }: Props) {
  return (
    <>
      <AppAppBar />
      {children}
    </>
  );
}
