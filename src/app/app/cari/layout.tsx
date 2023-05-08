import AppAppBar from '../components/AppAppBar';

type Props = {
  children: React.ReactNode;
};

export default function CariLayout({ children }: Props) {
  return (
    <>
      <AppAppBar />
      {children}
    </>
  );
}
