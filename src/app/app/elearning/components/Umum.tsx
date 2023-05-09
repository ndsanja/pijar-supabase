'use client';

import { Box, Typography } from '@mui/material';
import OrganisasiCard from './OrganisasiCard';
import MateriCard from './MateriCard';
import KelasCard from './KelasCard.';

export default function Umum() {
  return (
    <Box className="flex flex-col space-y-1 my-2">
      <Box sx={{ backgroundColor: 'white', px: 1, pb: 1 }}>
        <Typography variant="h6" sx={{ mb: '4px' }}>
          Lembaga
        </Typography>
        <Box className="grid grid-cols-4 gap-2">
          <OrganisasiCard />
          <OrganisasiCard />
          <OrganisasiCard />
          <OrganisasiCard />
          <OrganisasiCard />
          <OrganisasiCard />
          <OrganisasiCard />
        </Box>
      </Box>
      <Box sx={{ backgroundColor: 'white', px: 1, pb: 1 }}>
        <Typography variant="h6" sx={{ mb: '4px' }}>
          Kelas
        </Typography>
        <Box className="flex flex-col gap-2">
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

      <Box sx={{ backgroundColor: 'white', px: 1, pb: 1 }}>
        <Typography variant="h6" sx={{ mb: '4px' }}>
          Modul
        </Typography>
        <Box className="flex flex-col gap-2">
          <MateriCard />
          <MateriCard />
          <MateriCard />
          <MateriCard />
        </Box>
      </Box>

      <Box sx={{ backgroundColor: 'white', px: 1, pb: 1 }}>
        <Typography variant="h6" sx={{ mb: '4px' }}>
          Proyek
        </Typography>
        <Box className="grid grid-cols-4 gap-2">
          <KelasCard />
          <KelasCard />
        </Box>
      </Box>
    </Box>
  );
}
