'use client';

import { Avatar, Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box
      className="flex flex-col items-center justify-center space-y-4 py-8"
      sx={{ backgroundColor: 'white' }}
    >
      <Avatar></Avatar>
      <Box className="flex items-center justify-center space-x-2">
        <Typography>Poin 1</Typography>
        <Typography>Poin 2</Typography>
        <Typography>Poin 3</Typography>
      </Box>
    </Box>
  );
}
