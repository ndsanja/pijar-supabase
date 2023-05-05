'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/utils/theme/createEmotionCache';
import { theme } from '@/utils/theme/themeConfig';
import { Paper } from '@mui/material';
import { grey } from '@mui/material/colors';

const clientSideEmotionCache = createEmotionCache();

const MuiContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper
          elevation={0}
          sx={{ background: grey[200], borderRadius: 0, minHeight: '100vh' }}
        >
          {children}
        </Paper>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default MuiContext;
