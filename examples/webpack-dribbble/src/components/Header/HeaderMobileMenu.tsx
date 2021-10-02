import React from "react";
import {
  Actionable,
  Drawer,
  Icon,
  Dismissible,
  Stack,
  MenuItem,
  Divider,
  Avatar,
  Text,
  Button,
  Frame,
} from "arcade";
import IconMenu from "icons/Menu";
import header from "data/header";
import HeaderSearch from "./HeaderSearch";

const HeaderMobileMenu = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  return (
    <>
      <Actionable onClick={() => setMenuActive(true)}>
        <Icon svg={IconMenu} size="medium" color="neutral-faded" />
      </Actionable>

      <Drawer
        active={menuActive}
        onClose={() => setMenuActive(false)}
        position="start"
        size={400}
        padded={false}
      >
        <Frame padding={4}>
          <Stack>
            <Dismissible
              closeAriaLabel="Close menu"
              onClose={() => setMenuActive(false)}
            />
            <HeaderSearch expanded />
          </Stack>
        </Frame>

        {header.map((item) => (
          <MenuItem fullWidth>{item.title}</MenuItem>
        ))}

        <Divider />

        <MenuItem
          fullWidth
          startSlot={
            <Avatar
              src="https://cdn.dribbble.com/users/226667/avatars/normal/4c24342634cf5c822f3f23cfd803a66b.jpg?1461685850"
              ariaLabel="Dmitry Belyaev"
              size="small"
            />
          }
        >
          <Text variant="strong1">Dmitry Belyaev</Text>
        </MenuItem>

        <Frame padding={4}>
          <Stack direction="row">
            <Stack.Item size={6}>
              <Stack align="start">
                <Button variant="text">Profile</Button>
                <Button variant="text">Work preferences</Button>
              </Stack>
            </Stack.Item>

            <Stack.Item size={6}>
              <Stack align="start">
                <Button variant="text">My likes</Button>
                <Button variant="text">My collections</Button>
              </Stack>
            </Stack.Item>
          </Stack>
        </Frame>

        <Divider />

        <Frame padding={4}>
          <Button variant="text">Sign out</Button>
        </Frame>
      </Drawer>
    </>
  );
};

export default HeaderMobileMenu;
