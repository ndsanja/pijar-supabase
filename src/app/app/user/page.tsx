import UserPageClient from './UserPage';
import Header from './components/Header';
import TabsMenu from './components/TabsMenu';

export default function UserPage() {
  return (
    <div>
      <Header />
      <TabsMenu />
      <UserPageClient />
    </div>
  );
}
