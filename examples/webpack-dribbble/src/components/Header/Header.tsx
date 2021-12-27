import React from "react";
import {
  Actionable,
  ActionBar,
  Stack,
  Button,
  Popover,
  Frame,
  Hidden,
  Link,
  Text,
} from "arcade";
import Logo from "icons/Logo";
import Menu from "components/Menu";
import header from "data/header";
import HeaderNavItem from "./HeaderNavItem";
import HeaderProfile from "./HeaderProfile";
import HeaderActivity from "./HeaderActivity";
import HeaderWorkPreference from "./HeaderWorkPreference";
import HeaderSearch from "./HeaderSearch";
import HeaderMobileMenu from "./HeaderMobileMenu";
import s from "./Header.module.css";

const Header = () => {
  return (
    <ActionBar position="top" size="large">
      <Stack direction="row" gap={6} align="center">
        <Hidden hide={{ s: false, l: true }}>
          <HeaderMobileMenu />
        </Hidden>

        <Stack.Item grow={{ s: true, l: false }}>
          <Frame align="center">
            <Actionable className={s.logo}>
              <Logo />
            </Actionable>
          </Frame>
        </Stack.Item>

        <Hidden hide={{ s: true, l: false }}>
          <Stack.Item grow>
            <Stack direction="row" gap={6}>
              {header.map((navItem) => {
                if (!navItem.items) {
                  return (
                    <Text variant="body-medium-2" key={navItem.title}>
                      <Link variant="plain" color="inherit">
                        {navItem.title}
                      </Link>
                    </Text>
                  );
                }

                return (
                  <Popover
                    triggerType="hover"
                    key={navItem.title}
                    position="bottom-start"
                    width="600px"
                    padding={0}
                  >
                    <Popover.Trigger>
                      {(attributes) => (
                        <Text variant="body-medium-2" key={navItem.title}>
                          <Link
                            variant="plain"
                            color="inherit"
                            attributes={attributes}
                          >
                            {navItem.title}
                          </Link>
                        </Text>
                      )}
                    </Popover.Trigger>
                    <Popover.Content>
                      <Stack direction="row" gap={0} align="stretch">
                        <Stack.Item grow>
                          <Frame padding={4}>
                            <Stack gap={1}>
                              {navItem.items.map((menuItem) => (
                                <HeaderNavItem
                                  {...menuItem}
                                  key={menuItem.title}
                                />
                              ))}
                            </Stack>
                          </Frame>
                        </Stack.Item>
                        {navItem.categories && (
                          <Frame
                            backgroundColor="neutral-faded"
                            width="200px"
                            padding={6}
                          >
                            <Menu
                              title="Browse categories"
                              items={navItem.categories}
                            />
                          </Frame>
                        )}
                      </Stack>
                    </Popover.Content>
                  </Popover>
                );
              })}
            </Stack>
          </Stack.Item>
        </Hidden>

        <HeaderSearch />
        <HeaderWorkPreference />
        <HeaderActivity />

        <Hidden hide={{ s: true, l: false }}>
          <HeaderProfile />
        </Hidden>

        <Hidden hide={{ s: true, l: false }}>
          <Button color="primary" href="#">
            Upload
          </Button>
        </Hidden>
      </Stack>
    </ActionBar>
  );
};

export default Header;
