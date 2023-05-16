import { View, Text, Button, Icon, Avatar, MenuItem, Badge } from "reshaped";
import IconSnooze from "../../icons/Snooze";
import IconCheckCircle from "../../icons/CheckCircle";
import IconClipboard from "../../icons/Clipboard";
import IconPlus from "../../icons/Plus";
import IconRefresh from "../../icons/Refresh";
import StatusBadge from "../StatusBadge";
import UsageCard from "../UsageCard";
import s from "./UserInfo.module.css";

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
  <View gap={2} paddingInline={6} paddingBlock={4}>
    <Text variant="featured-3" weight="bold">
      {data.name}
    </Text>
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
        <Text variant="body-3" weight="medium">
          Assigned to {data.assignee}
        </Text>
      </View>
    </View.Item>
  </View>
);

const UserInfoIssues = () => (
  <View gap={2} paddingInline={6} paddingBlock={4}>
    <View direction="row" gap={4} align="center">
      <View.Item grow>
        <Text variant="body-3" weight="medium">
          Open issues
        </Text>
      </View.Item>
      <Button.Aligner>
        <Button icon={IconPlus} variant="ghost" />
      </Button.Aligner>
    </View>
    <View gap={1}>
      {data.issues.map((issue) => (
        <MenuItem.Aligner key={issue.code}>
          <MenuItem
            size="small"
            roundedCorners
            startSlot={
              <Avatar
                size={6}
                initials="I"
                squared
                color="neutral"
                variant="faded"
              />
            }
          >
            <Text variant="body-3" as="span">
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
  <View paddingInline={6} paddingBlock={4} gap={4}>
    <View direction="row" gap={4} align="center">
      <View.Item grow>
        <Text variant="body-3" weight="medium">
          Plan details
        </Text>
      </View.Item>
      <Button.Aligner>
        <Button icon={IconRefresh} variant="ghost" />
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
  <View paddingInline={6} paddingBlock={4} gap={4}>
    <View direction="row" gap={4} align="center">
      <View.Item grow>
        <Text variant="body-3" weight="medium">
          Usage
        </Text>
      </View.Item>
      <Button.Aligner>
        <Button icon={IconRefresh} variant="ghost" />
      </Button.Aligner>
    </View>

    <UsageCard
      eventsSent={data.plan.eventsSent}
      eventsSentYesterday={data.plan.eventsSentYesterday}
    />
  </View>
);

const UserInfoActions = () => (
  <View paddingBlock={4} paddingInline={6} gap={2}>
    <Button fullWidth variant="outline" icon={IconSnooze}>
      Snooze
    </Button>
    <Button fullWidth variant="outline" icon={IconCheckCircle}>
      Mark as helped
    </Button>
  </View>
);

const UserInfo = () => {
  return (
    <View height="100%" divided>
      <View.Item grow className={s.content}>
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
