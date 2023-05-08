import CariAppBar from './components/CariAppBar';
import Category from './components/Category';

type Props = {
  children: React.ReactNode;
};

export default function CariLayout({ children }: Props) {
  const category = [
    'Semua',
    'Lembaga',
    'Modul',
    'Kelas',
    'Project',
    'Riset',
    'Post',
    'Artikel',
    'Berita',
    'Acara',
  ];
  return (
    <div>
      <CariAppBar />
      <div className="px-2 my-2 flex items-center justify-star space-x-2 overflow-x-auto max-w-[100vw]">
        {category.map((e) => (
          <Category key={e} label={e} />
        ))}
      </div>
      {children}
    </div>
  );
}
