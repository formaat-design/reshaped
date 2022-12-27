import { View, Text, Button, Icon, Avatar, MenuItem, Badge } from "reshaped";
import IconSnooze from "../../icons/Snooze";
import IconCheckCircle from "../../icons/CheckCircle";
import IconClipboard from "../../icons/Clipboard";
import IconPlus from "../../icons/Plus";
import IconRefresh from "../../icons/Refresh";
import StatusBadge from "../StatusBadge";
import UsageCard from "../UsageCard";

const data = {
  name: "Marie Wagner",
  contacts: [{ name: "marie@getresolve.io" }, { name: "marie-wagner" }],
  assignee: "Kim Downee",
  issues: [
    {
      code: "I-432",
      title: "Usage limit reached",
    },
  ],
  plan: {
    type: "Starter",
    expirationDate: "07 Jan, 2023",
    eventsSent: 593,
    eventsSentYesterday: 36,
  },
};

const UserInfoHeader = () => (
  <View gap={2} padding={[4, 6]}>
    <Text variant="title-3">{data.name}</Text>
    <View gap={1}>
      {data.contacts.map((contact) => (
        <View gap={1} direction="row" align="center" key={contact.name}>
          <Icon color="neutral-faded" svg={IconClipboard} size={4} />
          <Text color="neutral-faded">{contact.name}</Text>
        </View>
      ))}
    </View>
    <View.Item gapBefore={10}>
      <View gap={2} direction="row" align="center">
        <Avatar size={8} initials="K" />
        <Text variant="body-medium-2">Assigned to {data.assignee}</Text>
      </View>
    </View.Item>
  </View>
);

const UserInfoIssues = () => (
  <View gap={2} padding={[4, 6]}>
    <View direction="row" gap={4} align="center">
      <View.Item grow>
        <Text variant="body-medium-2">Open issues</Text>
      </View.Item>
      <Button.Aligner>
        <Button startIcon={IconPlus} variant="ghost" />
      </Button.Aligner>
    </View>
    <View gap={1}>
      {data.issues.map((issue) => (
        <MenuItem.Aligner key={issue.code}>
          <MenuItem
            size="small"
            roundedCorners
            startSlot={
              <Avatar size={6} initials="I" squared color="neutral-faded" />
            }
          >
            <Text variant="body-2" as="span">
              {issue.title}
            </Text>
            &nbsp;
            <Text variant="caption-1" as="span" color="neutral-faded">
              {issue.code}
            </Text>
          </MenuItem>
        </MenuItem.Aligner>
      ))}
    </View>
  </View>
);

const UserInfoPlan = () => (
  <View padding={[4, 6]} gap={4}>
    <View direction="row" gap={4} align="center">
      <View.Item grow>
        <Text variant="body-medium-2">Plan details</Text>
      </View.Item>
      <Button.Aligner>
        <Button startIcon={IconRefresh} variant="ghost" />
      </Button.Aligner>
    </View>

    <View direction="row" gap={4}>
      <View.Item grow>
        <Text variant="body-2" color="neutral-faded">
          Plan
        </Text>
      </View.Item>
      <StatusBadge>{data.plan.type}</StatusBadge>
    </View>

    <View direction="row" gap={4}>
      <View.Item grow>
        <Text variant="body-2" color="neutral-faded">
          Expires
        </Text>
      </View.Item>
      <Text>{data.plan.expirationDate}</Text>
    </View>
  </View>
);

const UserInfoUsage = () => (
  <View padding={[4, 6]} gap={4}>
    <View direction="row" gap={4} align="center">
      <View.Item grow>
        <Text variant="body-medium-2">Usage</Text>
      </View.Item>
      <Button.Aligner>
        <Button startIcon={IconRefresh} variant="ghost" />
      </Button.Aligner>
    </View>

    <UsageCard
      eventsSent={data.plan.eventsSent}
      eventsSentYesterday={data.plan.eventsSentYesterday}
    />
  </View>
);

const UserInfoActions = () => (
  <View padding={[4, 6]} gap={2}>
    <Button fullWidth variant="outline" startIcon={IconSnooze}>
      Snooze
    </Button>
    <Button fullWidth variant="outline" startIcon={IconCheckCircle}>
      Mark as helped
    </Button>
  </View>
);

const UserInfo = () => {
  return (
    <View height="100%" divided>
      <View.Item grow>
        <View divided>
          <UserInfoHeader />
          <UserInfoIssues />
          <UserInfoPlan />
          <UserInfoUsage />
        </View>
      </View.Item>

      <UserInfoActions />
    </View>
  );
};

export default UserInfo;
