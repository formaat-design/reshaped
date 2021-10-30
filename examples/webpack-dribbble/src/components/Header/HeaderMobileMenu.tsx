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
  Link,
} from "arcade";
import IconMenu from "icons/Menu";
import header from "data/header";
import HeaderSearch from "./HeaderSearch";

const HeaderMobileMenu = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  return (
    <>
      <Actionable onClick={() => setMenuActive(true)}>
        <Icon svg={IconMenu} size={4} color="neutral-faded" />
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
          <MenuItem>{item.title}</MenuItem>
        ))}

        <Divider />

        <MenuItem
          startSlot={
            <Avatar
              src="https://cdn.dribbble.com/users/226667/avatars/normal/4c24342634cf5c822f3f23cfd803a66b.jpg?1461685850"
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
                <Link color="inherit" variant="plain">
                  Profile
                </Link>
                <Link color="inherit" variant="plain">
                  Work preferences
                </Link>
              </Stack>
            </Stack.Item>

            <Stack.Item size={6}>
              <Stack align="start">
                <Link color="inherit" variant="plain">
                  My likes
                </Link>
                <Link color="inherit" variant="plain">
                  My collections
                </Link>
              </Stack>
            </Stack.Item>
          </Stack>
        </Frame>

        <Divider />

        <Frame padding={4}>
          <Link color="inherit" variant="plain">
            Sign out
          </Link>
        </Frame>
      </Drawer>
    </>
  );
};

export default HeaderMobileMenu;
