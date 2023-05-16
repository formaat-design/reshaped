import React from "react";
import { MenuItem, View, Icon, Text, Badge } from "reshaped";
import IconMessage from "../../icons/Message";
import IconMail from "../../icons/Mail";
import IconReply from "../../icons/Reply";

type Props = {
  status: "new" | "ongoing" | "awaiting";
  hasNewMessages?: boolean;
  name: string;
  lastReplyLabel: string;
  message: string;
  active?: boolean;
};

const iconMap = {
  new: IconMail,
  ongoing: IconMessage,
  awaiting: IconReply,
} as const;

const MessageItem = (props: Props) => {
  const { status, name, lastReplyLabel, message, hasNewMessages } = props;
  const icon = iconMap[status];
  const [bubbleActive, setBubbleActive] = React.useState(hasNewMessages);

  const handleClick = () => {
    setBubbleActive((prev) => !prev);
  };

  const startSlot = (
    <Badge.Container overlap>
      <Badge color="critical" rounded size="small" hidden={!bubbleActive} />
      <Icon svg={icon} size={5} color="neutral-faded" />
    </Badge.Container>
  );

  return (
    <MenuItem
      size="large"
      startSlot={startSlot}
      roundedCorners
      onClick={handleClick}
    >
      <View direction="row" gap={1}>
        <Text variant="body-3" weight="medium">
          {name}
        </Text>
        <View.Item>&middot;</View.Item>
        <Text variant="body-3" color="neutral-faded">
          {lastReplyLabel}
        </Text>
      </View>
      <Text variant="body-3" maxLines={1}>
        {message}
      </Text>
    </MenuItem>
  );
};

export default MessageItem;
