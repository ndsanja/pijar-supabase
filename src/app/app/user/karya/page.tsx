import TabContent from '../components/Tab/TabContent';
import UserKaryaContent from './components/UserKaryaContent';

export default function UserPostPage() {
  return (
    <TabContent value="karya">
      <UserKaryaContent />
    </TabContent>
  );
}
