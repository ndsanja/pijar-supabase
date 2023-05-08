import PemberitahuanAppBar from './components/PemberitahuanAppBar';

type Props = {
  children: React.ReactNode;
};

export default function PemberitahuanLayout({ children }: Props) {
  return (
    <>
      <PemberitahuanAppBar />
      {children}
    </>
  );
}
