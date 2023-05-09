import { Avatar, Badge, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const MateriCard = () => {
  const router = useRouter();
  return (
    <Box
      onClick={() => router.push('/app/elearning/materi')}
      className="flex items-center space-x-3"
      sx={{
        ml: 1,
        flexGrow: 1,
        position: 'relative',
      }}
    >
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <Avatar
            sx={{ width: '28px', height: '28px' }}
            src="data:image/png;base64,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"
          />
        }
      >
        <Avatar
          variant="square"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHqXBEwtyodHUPvwe_3Bz1v1qsc4PYXs7XTw&usqp=CAU"
        />
      </Badge>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            mb: 0,
            pb: 0,
            fontSize: '16px',
          }}
        >
          Bahasa Indonesia
        </Typography>
        <div className="flex items-center space-x-2 w-full">
          <Typography variant="body1" component="div" sx={{ fontSize: '10px' }}>
            XII - IPA 1
          </Typography>
          <div className="w-1 h-1 bg-black rounded-full" />
          <Typography variant="body1" component="div" sx={{ fontSize: '10px' }}>
            SMA Harapan Bangsa
          </Typography>
        </div>
      </Box>
    </Box>
  );
};
export default MateriCard;
