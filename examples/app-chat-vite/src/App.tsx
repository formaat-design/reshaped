import { Reshaped, View } from "reshaped";
import "./themes/plain/theme.css";
import Sidebar from "./components/Sidebar";
import UserInfo from "./components/UserInfo";
import IssueDetail from "./components/IssueDetail";

function AppInner() {
  return (
    <View direction="row" height="100vh" align="stretch" divided>
      <View backgroundColor="neutral-faded" padding={4} width="25%">
        <Sidebar />
      </View>
      <View.Item grow>
        <IssueDetail />
      </View.Item>
      <View width="25%">
        <UserInfo />
      </View>
    </View>
  );
}

function App() {
  return (
    <Reshaped theme="plain">
      <AppInner />
    </Reshaped>
  );
}

export default App;
