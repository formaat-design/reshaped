import {
  View,
  Avatar,
  Text,
  Button,
  Divider,
  Tabs,
  Card,
  Modal,
  Hidden,
  useToggle,
  useToast
} from "reshaped";
import UserInfo from "../UserInfo";
import Sidebar from "../Sidebar";
import ChatItem from "../ChatItem";
import IconDocument from "../../icons/Document";
import IconUpload from "../../icons/Upload";
import IconReply from "../../icons/Reply";
import IconMessage from "../../icons/Message";
import IconAddPerson from "../../icons/AddPerson";
import IconCheckCircle from "../../icons/CheckCircle";
import IconPersonCircle from "../../icons/PersonCircle";
import IconMenu from "../../icons/Menu";
import s from "./IssueDetail.module.css";

const data = {
  company: {
    name: "Event-a-tron",
  },
  issue: { createdLabel: "2d ago", description: "Customer exceeded free tier" },
  plan: {
    eventsSent: 592,
    eventsLimit: 500,
  },
};

const IssueDetailHeader = () => {
  const userInfoToggle = useToggle();
  const inboxToggle = useToggle();

  return (
    <>
      <View paddingBlock={4} paddingInline={8} gap={4} direction="row">
        <Avatar
          initials={data.company.name.charAt(0).toUpperCase()}
          size={8}
          squared
        />
        <View.Item grow>
          <View gap={3} align="start">
            <View direction="row" gap={1}>
              <Text variant="body-3" weight="medium">
                {data.company.name}
              </Text>
              <View.Item>&middot;</View.Item>
              <Text variant="body-3" color="neutral-faded">
                {data.issue.createdLabel}
              </Text>
            </View>
            <View.Item gapBefore={2}>
              <Text>{data.issue.description}</Text>
            </View.Item>
            <View>
              <Text variant="caption-1" color="neutral-faded">
                Events sent
              </Text>
              <Text color="critical">
                {data.plan.eventsSent} of {data.plan.eventsLimit}
              </Text>
            </View>
            <Button variant="outline">View customer in Admin</Button>
          </View>
        </View.Item>
        <Hidden hide={{ s: false, l: true }}>
          <Button.Aligner>
            <Button
              size="large"
              onClick={inboxToggle.activate}
              icon={IconMenu}
              variant="ghost"
            />
          </Button.Aligner>
        </Hidden>
        <Hidden hide={{ s: false, xl: true }}>
          <Button.Aligner>
            <Button
              size="large"
              onClick={userInfoToggle.activate}
              icon={IconPersonCircle}
              variant="ghost"
            />
          </Button.Aligner>
        </Hidden>
      </View>
      <Modal
        padding={0}
        position="end"
        active={userInfoToggle.active}
        onClose={userInfoToggle.deactivate}
      >
        <UserInfo />
      </Modal>
      <Modal
        position="start"
        active={inboxToggle.active}
        onClose={inboxToggle.deactivate}
      >
        <Sidebar />
      </Modal>
    </>
  );
};

const ChatTimeline = () => (
  <View paddingBlock={4} paddingInline={8} gap={5}>
    <Text variant="body-3" weight="medium">
      Today
    </Text>
    <ChatItem
      fromAuthor
      title="Marie Wagner"
      subtitle="6m ago via Chat"
      message="Hey, our events have stopped appearing in Logtastic. The last event we received was at 2:34pm on Tuesday"
    />
    <ChatItem
      icon={IconAddPerson}
      title="Kim Downe started helping"
      subtitle="5m ago"
    />
    <ChatItem
      icon={IconCheckCircle}
      title="Issue I-432 opened by Kim Downe"
      subtitle="5m ago"
    >
      <Card padding={3}>
        <View direction="row" align="center">
          <View.Item grow>
            <View direction="row" gap={2} align="center">
              <Avatar
                size={6}
                initials="I"
                squared
                color="critical"
                variant="faded"
              />
              <View.Item grow>Usage limit reached</View.Item>
            </View>
          </View.Item>
          <Button size="small" variant="outline">
            Open
          </Button>
        </View>
      </Card>
    </ChatItem>
    <ChatItem
      title="Kim Downe"
      subtitle="4m ago"
      message="Sorry to hear that. It looks like you've reached the limits of Starter tier. We've just added an extra 500 events to your account for this month. Happy testing!"
    />
    <ChatItem
      fromAuthor
      title="Marie Wagner"
      subtitle="Just now"
      message="Amazing, thank you!"
    />
  </View>
);

const ChatField = () => {
  const toast = useToast();

  return (
    <View paddingBlock={4} paddingInline={8} gap={4}>
      <Tabs value="chat" variant="pills">
        <Tabs.List>
          <Tabs.Item value="email">Email</Tabs.Item>
          <Tabs.Item value="chat" icon={IconMessage}>
            Chat
          </Tabs.Item>
          <Tabs.Item value="note">Note</Tabs.Item>
        </Tabs.List>
      </Tabs>
      <textarea className={s.textarea} placeholder="Reply to Marie Wagner" />
      <View direction="row" gap={2} align="center">
        <Button icon={IconDocument} variant="ghost" />
        <Button icon={IconUpload} variant="ghost" />
        <View.Item gapBefore="auto">
          <Button color="primary" icon={IconReply} onClick={() => toast.show({ text: 'Something went wrong', color: 'critical', position: 'top' })}>
            Send to chat
          </Button>
        </View.Item>
      </View>
    </View>
  );
};

const IssueDetail = () => {
  return (
    <View height="100%">
      <IssueDetailHeader />
      <View.Item grow>
        <View height="100%">
          <View.Item grow className={s.content}>
            <ChatTimeline />
          </View.Item>
          <View.Item>
            <Divider blank />
            <ChatField />
          </View.Item>
        </View>
      </View.Item>
    </View>
  );
};

export default IssueDetail;
