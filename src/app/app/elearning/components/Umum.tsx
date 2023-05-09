'use client';

import { Box, Typography } from '@mui/material';
import OrganisasiCard from './OrganisasiCard';
import MateriCard from './MateriCard';
import KelasCard from './KelasCard.';

export default function Umum() {
  return (
    <Box className="flex flex-col space-y-1 my-2">
      <Box sx={{ backgroundColor: 'white', px: 1, pb: 2, pt: 1 }}>
        <Typography variant="h6" sx={{ mb: '8px' }}>
          Lembaga
        </Typography>
        <Box className="grid grid-cols-3 gap-4">
          <OrganisasiCard />
          <OrganisasiCard />
          <OrganisasiCard />
          <OrganisasiCard />
          <OrganisasiCard />
          <OrganisasiCard />
        </Box>
      </Box>
      <Box sx={{ backgroundColor: 'white', px: 1, pb: 3, pt: 1 }}>
        <Typography variant="h6" sx={{ mb: '8px' }}>
          Kelas
        </Typography>
        <Box className="flex flex-col gap-5">
          <MateriCard />
          <MateriCard />
          <MateriCard />
          <MateriCard />
          <MateriCard />
          <MateriCard />
          <MateriCard />
          <MateriCard />
        </Box>
      </Box>

      <Box sx={{ backgroundColor: 'white', px: 1, pb: 3, pt: 1 }}>
        <Typography variant="h6" sx={{ mb: '8px' }}>
          Modul
        </Typography>
        <Box className="flex flex-col gap-5">
          <MateriCard />
          <MateriCard />
          <MateriCard />
          <MateriCard />
        </Box>
      </Box>

      <Box sx={{ backgroundColor: 'white', px: 1, pb: 2, pt: 1 }}>
        <Typography variant="h6" sx={{ mb: '8px' }}>
          Proyek
        </Typography>
        <Box className="grid grid-cols-4 gap-4">
          <KelasCard />
          <KelasCard />
        </Box>
      </Box>
    </Box>
  );
}
