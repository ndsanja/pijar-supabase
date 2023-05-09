'use client';

import { Avatar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const OrganisasiCard = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/app/elearning/organisasi')}
      className="aspect-square w-full flex flex-col items-center justify-center space-y-2"
    >
      <Avatar
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHqXBEwtyodHUPvwe_3Bz1v1qsc4PYXs7XTw&usqp=CAU"
        variant="square"
        sx={{ width: '58px', height: '58px' }}
      ></Avatar>
      <Typography className="text-center !font-semibold !text-[12px]">
        Universitas Gadjah Mada
      </Typography>
    </div>
  );
};
export default OrganisasiCard;
