import ElearningAppBar from './components/ElearningAppBar';

type Props = {
  children: React.ReactNode;
};

export default function ElearningLayout({ children }: Props) {
  return (
    <>
      <ElearningAppBar />
      {children}
    </>
  );
}
