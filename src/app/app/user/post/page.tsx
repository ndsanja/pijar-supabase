import TabContent from '../components/Tab/TabContent';
import UserPostContent from './components/UserPostContent';

export default function UserPostPage() {
  return (
    <TabContent value="post">
      <UserPostContent />
    </TabContent>
  );
}
