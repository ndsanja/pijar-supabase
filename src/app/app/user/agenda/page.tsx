import TabContent from '../components/Tab/TabContent';
import UserAgendaContent from './components/UserAgendaContent';

export default function UserPostPage() {
  return (
    <TabContent value="agenda">
      <UserAgendaContent />
    </TabContent>
  );
}
