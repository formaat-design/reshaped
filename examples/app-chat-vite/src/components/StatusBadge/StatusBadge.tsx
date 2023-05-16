import { Badge, View, BadgeProps } from "reshaped";

type Props = {
  color?: Extract<BadgeProps["color"], "positive">;
  children: BadgeProps["children"];
};

const StatusBadge = (props: Props) => (
  <Badge color={props.color} variant="faded" rounded>
    <View gap={2} align="center" direction="row">
      <Badge color={props.color || "primary"} rounded size="small" />
      <View.Item>{props.children}</View.Item>
    </View>
  </Badge>
);

export default StatusBadge;
