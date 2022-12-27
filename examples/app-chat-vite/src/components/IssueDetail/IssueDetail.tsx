import { View, Avatar, Text, Button, Divider, Tabs, Card } from "reshaped";
import ChatItem from "../ChatItem";
import IconDocument from "../../icons/Document";
import IconUpload from "../../icons/Upload";
import IconReply from "../../icons/Reply";
import IconMessage from "../../icons/Message";
import IconAddPerson from "../../icons/AddPerson";
import IconCheckCircle from "../../icons/CheckCircle";
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

const IssueDetailHeader = () => (
  <View padding={[4, 8]} gap={4} direction="row">
    <Avatar
      initials={data.company.name.charAt(0).toUpperCase()}
      size={8}
      squared
    />
    <View.Item grow>
      <View gap={3} align="start">
        <View direction="row" gap={1}>
          <Text variant="body-medium-2">{data.company.name}</Text>
          <View.Item>&middot;</View.Item>
          <Text variant="body-2" color="neutral-faded">
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
  </View>
);

const ChatTimeline = () => (
  <View padding={[4, 8]} gap={5}>
    <Text variant="body-medium-2">Today</Text>
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
              <Avatar size={6} initials="I" squared color="critical-faded" />
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
  return (
    <View padding={[4, 8]} gap={4}>
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
        <Button startIcon={IconDocument} variant="ghost" />
        <Button startIcon={IconUpload} variant="ghost" />
        <View.Item gapBefore="auto">
          <Button color="primary" startIcon={IconReply}>
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
          <View.Item grow>
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
