import { useRouter } from 'next/navigation';

const MateriCard = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/app/elearning/materi')}
      className="w-full h-[60px] bg-yellow-500 flex items-center justify-center"
    >
      <p>Materi</p>
    </div>
  );
};
export default MateriCard;
