import React from "react";
import {
  Avatar,
  Popover,
  Actionable,
  Button,
  Badge,
  Stack,
  MenuItem,
} from "arcade";
import IconHeart from "icons/Heart";
import IconCollection from "icons/Collection";

const HeaderProfile = () => {
  return (
    <Popover triggerType="hover">
      <Popover.Trigger>
        {(attributes) => (
          <Actionable attributes={attributes}>
            <Avatar
              src="https://cdn.dribbble.com/users/226667/avatars/normal/4c24342634cf5c822f3f23cfd803a66b.jpg?1461685850"
              size="small"
            />
          </Actionable>
        )}
      </Popover.Trigger>
      <Popover.Content>
        <Stack>
          <Button variant="outlined" fullWidth>
            <Stack direction="row" align="center" gap={2}>
              <Badge color="primary">Pro</Badge>
              Resume Subscription
            </Stack>
          </Button>

          <Stack gap={1} divided>
            <MenuItem href="#" size="small">
              Profile
            </MenuItem>

            <>
              <MenuItem href="#" size="small">
                Edit Profile
              </MenuItem>
              <MenuItem href="#" size="small">
                Edit Work Preferences
              </MenuItem>
            </>

            <>
              <MenuItem href="#" size="small" icon={IconHeart}>
                My Likes
              </MenuItem>
              <MenuItem href="#" size="small" icon={IconCollection}>
                My Collections
              </MenuItem>
            </>

            <>
              <MenuItem href="#" size="small">
                Account Settings
              </MenuItem>
              <MenuItem href="#" size="small">
                Sign Out
              </MenuItem>
            </>
          </Stack>
        </Stack>
      </Popover.Content>
    </Popover>
  );
};

export default HeaderProfile;
