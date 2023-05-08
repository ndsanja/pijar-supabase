'use client';

import { Box, Chip } from '@mui/material';
import { useState } from 'react';

type Props = {
  label: string;
};
export default function Category({ label }: Props) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Box className="flex items-center justify-start space-x-2">
      <Chip
        label={label}
        variant={active ? 'filled' : 'outlined'}
        color="primary"
        onClick={handleClick}
      />
    </Box>
  );
}
