import TabContent from '../components/Tab/TabContent';
import UserPengaturanContent from './components/UserPengaturanContent';

export default function UserPostPage() {
  return (
    <TabContent value="pengaturan">
      <UserPengaturanContent />
    </TabContent>
  );
}
