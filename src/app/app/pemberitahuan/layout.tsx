import AppAppBar from '../components/AppAppBar';

type Props = {
  children: React.ReactNode;
};

export default function PemberitahuanLayout({ children }: Props) {
  return (
    <>
      <AppAppBar />
      {children}
    </>
  );
}
