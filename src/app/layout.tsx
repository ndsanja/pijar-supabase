import MuiContext from './context/MuiContext';
import SupabaseProvider from './context/SupabaseProvider';
import './globals.css';

export const metadata = {
  title: 'Pijar | Sekolah Terbuka',
  description: 'Sekolah Terbuka by Pijar',
  viewport: 'initial-scale=1, width=device-width',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SupabaseProvider>
          <MuiContext>{children}</MuiContext>
        </SupabaseProvider>
      </body>
    </html>
  );
}
