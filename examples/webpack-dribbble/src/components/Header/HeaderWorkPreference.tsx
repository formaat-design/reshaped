import React from "react";
import {
  Popover,
  Icon,
  Switch,
  SwitchProps,
  Stack,
  Text,
  Button,
} from "arcade";
import IconWork from "icons/Work";

const HeaderWorkPreference = () => {
  const [available, setAvailable] = React.useState(false);

  const handleChange: SwitchProps["onChange"] = ({ checked }) => {
    setAvailable(checked);
  };

  return (
    <Popover triggerType="hover">
      <Popover.Trigger>
        {(attributes) => (
          <Button.Aligner position={["start", "end"]}>
            <Button variant="ghost" attributes={attributes}>
              <Icon
                color="neutral-faded"
                svg={IconWork}
                size="small"
                autoWidth
              />
            </Button>
          </Button.Aligner>
        )}
      </Popover.Trigger>

      <Popover.Content>
        <Stack divided>
          <Stack direction="row">
            <Text
              color={available ? "neutral-faded" : "primary"}
              variant="medium2"
            >
              Not available
            </Text>
            <Switch name="availability" onChange={handleChange} />
            <Text
              color={available ? "primary" : "neutral-faded"}
              variant="medium2"
            >
              Available for work
            </Text>
          </Stack>

          <Button variant="text" href="#">
            Edit work preferences
          </Button>
        </Stack>
      </Popover.Content>
    </Popover>
  );
};

export default HeaderWorkPreference;
