import React from "react";
import { IconProps, View, Icon, Text, Avatar } from "reshaped";

type Props = {
  fromAuthor?: boolean;
  icon?: IconProps["svg"];
  title: string;
  subtitle: string;
  message?: string;
  children?: React.ReactNode;
};

const ChatItem = (props: Props) => {
  const { fromAuthor, icon, title, subtitle, message, children } = props;

  return (
    <View gap={3}>
      <View direction="row" gap={3} align="stretch">
        <View width="40px" align="end" justify={icon ? "center" : "start"}>
          {icon ? (
            <Icon svg={icon} size={4} color="neutral-faded" />
          ) : (
            <Avatar
              squared={fromAuthor}
              color={fromAuthor ? "primary" : "neutral-faded"}
              size={fromAuthor ? 10 : 8}
              initials={title.charAt(0).toUpperCase()}
            />
          )}
        </View>
        <View.Item grow>
          <View gap={2}>
            <View gap={1} direction="row">
              <Text
                variant={icon ? "body-2" : "body-medium-2"}
                color={icon ? "neutral-faded" : "neutral"}
              >
                {title}
              </Text>
              <View.Item>&middot;</View.Item>
              <Text color="neutral-faded">{subtitle}</Text>
            </View>

            {message && <Text>{message}</Text>}
          </View>
        </View.Item>
      </View>
      {children && (
        <View gap={3} direction="row">
          <View width="40px" />
          <View.Item grow>{children}</View.Item>
        </View>
      )}
    </View>
  );
};

export default ChatItem;
