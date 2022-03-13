import React from "react";
import {
  Popover,
  Icon,
  Switch,
  SwitchProps,
  Stack,
  Text,
  Button,
} from "reshaped";
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
              <Icon color="neutral-faded" svg={IconWork} size={4} autoWidth />
            </Button>
          </Button.Aligner>
        )}
      </Popover.Trigger>

      <Popover.Content>
        <Stack divided>
          <Stack direction="row">
            <Text
              color={available ? "neutral-faded" : "primary"}
              variant="body-medium-2"
            >
              Not available
            </Text>
            <Switch name="availability" onChange={handleChange} />
            <Text
              color={available ? "primary" : "neutral-faded"}
              variant="body-medium-2"
            >
              Available for work
            </Text>
          </Stack>

          <Button variant="ghost" href="#" fullWidth>
            Edit work preferences
          </Button>
        </Stack>
      </Popover.Content>
    </Popover>
  );
};

export default HeaderWorkPreference;
