import { Reshaped, View, Hidden } from "reshaped";
import "./themes/plain/theme.css";
import Sidebar from "./components/Sidebar";
import UserInfo from "./components/UserInfo";
import IssueDetail from "./components/IssueDetail";

function AppInner() {
  return (
    <View direction="row" height="100vh" align="stretch" divided>
      <Hidden hide={{ s: true, l: false }}>
        {(className) => (
          <View
            backgroundColor="neutral-faded"
            padding={4}
            width={{ s: "33%", xl: "25%" }}
            className={className}
          >
            <Sidebar />
          </View>
        )}
      </Hidden>
      <View.Item grow>
        <IssueDetail />
      </View.Item>
      <Hidden hide={{ s: true, xl: false }}>
        {(className) => (
          <View width="25%" className={className}>
            <UserInfo />
          </View>
        )}
      </Hidden>
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
