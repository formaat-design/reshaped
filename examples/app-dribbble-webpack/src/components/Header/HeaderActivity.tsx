import React from "react";
import { Popover, Icon, Stack, Avatar, Text, Button, Link } from "reshaped";
import IconActivity from "icons/Activity";
import IconCollection from "icons/Collection";

const HeaderActivity = () => {
  return (
    <Popover triggerType="hover">
      <Popover.Trigger>
        {(attributes) => (
          <Button.Aligner position={["start", "end"]}>
            <Button variant="ghost" attributes={attributes}>
              <Icon
                color="neutral-faded"
                svg={IconActivity}
                size={3}
                autoWidth
              />
            </Button>
          </Button.Aligner>
        )}
      </Popover.Trigger>

      <Popover.Content>
        <Stack>
          <Stack direction="row">
            <Avatar size={6} icon={IconCollection} color="primary" />
            <Stack.Item grow>
              <Text variant="body-medium-2">
                <Link href="#" color="inherit" variant="plain">
                  Dmitry Belyaev
                </Link>{" "}
                added{" "}
                <Link href="#" color="inherit" variant="plain">
                  Timeloop - Productivity ecosystem
                </Link>
              </Text>
              <Text>about 1 month ago</Text>
            </Stack.Item>
          </Stack>

          <Stack direction="row">
            <Avatar size={6} icon={IconCollection} color="primary" />
            <Stack.Item grow>
              <Text variant="body-medium-2">
                <Link href="#" color="inherit" variant="plain">
                  Dmitry Belyaev
                </Link>{" "}
                added{" "}
                <Link href="#" color="inherit" variant="plain">
                  Timeloop - Productivity ecosystem
                </Link>
              </Text>
              <Text>about 1 month ago</Text>
            </Stack.Item>
          </Stack>

          <Button variant="ghost" fullWidth>
            See all incoming activity
          </Button>
        </Stack>
      </Popover.Content>
    </Popover>
  );
};

export default HeaderActivity;
