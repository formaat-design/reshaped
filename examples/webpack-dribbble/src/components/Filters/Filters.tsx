import React from "react";
import { Stack, DropdownMenu, Button, Tabs, Frame } from "arcade";
import IconChevronDown from "icons/ChevronDown";
import IconFilter from "icons/Filter";

const Filters = () => {
  return (
    <Stack direction="row">
      <DropdownMenu>
        <DropdownMenu.Trigger>
          {(attributes) => (
            <Button
              variant="outlined"
              attributes={attributes}
              iconPosition="end"
              icon={IconChevronDown}
            >
              Following
            </Button>
          )}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Section>
            <DropdownMenu.Item selected>Following</DropdownMenu.Item>
            <DropdownMenu.Item>Popular</DropdownMenu.Item>
            <DropdownMenu.Item>New & Noteworthy</DropdownMenu.Item>
          </DropdownMenu.Section>
          <DropdownMenu.Section>
            <DropdownMenu.Item>Goods for sale</DropdownMenu.Item>
          </DropdownMenu.Section>
        </DropdownMenu.Content>
      </DropdownMenu>

      <Stack.Item grow>
        <Frame align="center">
          <Tabs variant="pills">
            <Tabs.List>
              <Tabs.Item value="all">All</Tabs.Item>
              <Tabs.Item value="animation">Animation</Tabs.Item>
              <Tabs.Item value="branding">Branding</Tabs.Item>
              <Tabs.Item value="illustration">Illustration</Tabs.Item>
              <Tabs.Item value="mobile">Mobile</Tabs.Item>
              <Tabs.Item value="print">Print</Tabs.Item>
              <Tabs.Item value="product-design">Product design</Tabs.Item>
              <Tabs.Item value="typography">Typography</Tabs.Item>
              <Tabs.Item value="web-design">Web design</Tabs.Item>
            </Tabs.List>
          </Tabs>
        </Frame>
      </Stack.Item>

      <Button variant="outlined" icon={IconFilter}>
        Filters
      </Button>
    </Stack>
  );
};

export default Filters;
