import React from "react";
import { Button, Stack, Text } from "arcade";
import * as T from "./Menu.types";

const Menu = (props: T.Props) => {
  const { title, items } = props;

  return (
    <Stack gap={4} align="start">
      <Text variant="strong2">{title}</Text>
      {items.map((item) => (
        <Button variant="text" href={item.href} key={item.title}>
          {item.title}
        </Button>
      ))}
    </Stack>
  );
};

export default Menu;
