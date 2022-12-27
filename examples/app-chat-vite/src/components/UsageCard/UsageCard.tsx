import { Card, View, Text, Button } from "reshaped";
import StatusBadge from "../StatusBadge";

type Props = {
  eventsSent: number;
  eventsSentYesterday: number;
};

const UsageCard = (props: Props) => (
  <Card>
    <View gap={3} divided>
      <View direction="row" align="center" gap={2}>
        <View.Item grow>
          <Text>Events sent</Text>
          <Text variant="caption-1" color="neutral-faded">
            This billing period
          </Text>
        </View.Item>
        <StatusBadge color="positive">{props.eventsSent} of 1000</StatusBadge>
      </View>
      <View gap={1}>
        <Text variant="caption-1" color="neutral-faded">
          Sent in the last 24 hours
        </Text>
        <Text>{props.eventsSentYesterday}</Text>
        <View.Item gapBefore={3}>
          <Button size="small" variant="outline">
            View in admin tool
          </Button>
        </View.Item>
      </View>
    </View>
  </Card>
);

export default UsageCard;
