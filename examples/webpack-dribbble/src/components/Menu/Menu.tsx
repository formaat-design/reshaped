import React from "react";
import { Link, Stack, Text } from "arcade";
import * as T from "./Menu.types";

const Menu = (props: T.Props) => {
  const { title, items } = props;

  return (
    <Stack gap={4} align="start">
      <Text variant="strong2">{title}</Text>
      {items.map((item) => (
        <Text variant="medium2" key={item.title}>
          <Link href={item.href} color="inherit" variant="plain">
            {item.title}
          </Link>
        </Text>
      ))}
    </Stack>
  );
};

export default Menu;
