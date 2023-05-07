import TabContent from '../components/Tab/TabContent';
import UserElearningContent from './components/UserElearningContent';

export default function UserPostPage() {
  return (
    <TabContent value="elearning">
      <UserElearningContent />
    </TabContent>
  );
}
