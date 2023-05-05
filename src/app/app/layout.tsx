type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <>
      <div>App Layout</div>
      {children}
    </>
  );
}
