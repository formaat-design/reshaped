import { Button, Text, Avatar, Badge, Tabs, View, useTheme } from "reshaped";
import MessageItem from "../MessageItem";
import IconArrowLeft from "../../icons/ArrowLeft";
import IconAddPerson from "../../icons/AddPerson";
import IconMoon from "../../icons/Moon";
import IconSun from "../../icons/Sun";

const data = [
  {
    name: "Ruby Franeski",
    lastReplyLabel: "10m",
    status: "new",
    message:
      "Hey, so the tracking code is still not working, can you help me with that?",
    hasNewMessages: true,
  },
  {
    name: "Marie Wagner",
    lastReplyLabel: "Replied just now",
    message: "Amazing, thank you",
    status: "awaiting",
  },
  {
    name: "Keneth Robel",
    lastReplyLabel: "18m",
    message: "Any updates on my missing items?",
    status: "ongoing",
  },
] as const;

const SidebarHeader = () => {
  const { invertColorMode, colorMode } = useTheme();

  return (
    <View direction="row" gap={4} align="center">
      <View.Item grow>
        <Button.Aligner position="start">
          <Button variant="ghost" startIcon={IconArrowLeft}>
            Back to Queue
          </Button>
        </Button.Aligner>
      </View.Item>

      <Button
        startIcon={colorMode === "dark" ? IconSun : IconMoon}
        variant="ghost"
        onClick={invertColorMode}
      />

      <Badge.Container position="bottom-end">
        <Badge color="positive" rounded size="small" />
        <Avatar initials="L" color="critical-faded" size={6} squared />
      </Badge.Container>
    </View>
  );
};

const SidebarFooter = () => {
  return (
    <View align="center" gap={1}>
      <Text color="neutral-faded">Someone is waiting for help</Text>
      <Button variant="outline" fullWidth startIcon={IconAddPerson}>
        Help next customer
      </Button>
    </View>
  );
};

const Sidebar = () => {
  return (
    <View gap={4} divided height="100%">
      <SidebarHeader />
      <View.Item grow>
        <View gap={4}>
          <Tabs
            variant="pills-elevated"
            defaultValue="helping"
            itemWidth="equal"
          >
            <Tabs.List>
              <Tabs.Item value="helping">
                <View direction="row" align="center" gap={2}>
                  <Text variant="body-medium-2">Helping</Text>
                  <Badge variant="outline" rounded size="small">
                    4
                  </Badge>
                </View>
              </Tabs.Item>
              <Tabs.Item value="snoozed">
                <View direction="row" align="center" gap={2}>
                  <Text variant="body-medium-2">Snoozed</Text>
                  <Badge variant="outline" rounded size="small">
                    4
                  </Badge>
                </View>
              </Tabs.Item>
            </Tabs.List>
          </Tabs>
          <View gap={1}>
            {data.map((item, index) => (
              <MessageItem {...item} active={index === 0} />
            ))}
          </View>
        </View>
      </View.Item>
      <SidebarFooter />
    </View>
  );
};

export default Sidebar;
