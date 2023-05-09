'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/utils/theme/createEmotionCache';
import { theme } from '@/utils/theme/themeConfig';
import { Paper } from '@mui/material';
import { grey } from '@mui/material/colors';

const MuiContext = ({ children }: { children: React.ReactNode }) => {
  const clientSideEmotionCache = createEmotionCache();
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main style={{ background: grey[200], minHeight: '100vh' }}>
          {children}
        </main>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default MuiContext;
