import TabContent from './components/Tab/TabContent';
import UserPageContent from './components/UserPageContent';

export default function UserPage() {
  return (
    <div>
      <TabContent value="dashboard">
        <UserPageContent />
      </TabContent>
    </div>
  );
}
