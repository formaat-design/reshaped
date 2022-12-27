import React from "react";
import { Link, Stack, Text } from "reshaped";
import * as T from "./Menu.types";

const Menu = (props: T.Props) => {
  const { title, items } = props;

  return (
    <Stack gap={4} align="start">
      <Text variant="body-strong-2">{title}</Text>
      {items.map((item) => (
        <Text variant="body-medium-2" key={item.title}>
          <Link href={item.href} color="inherit" variant="plain">
            {item.title}
          </Link>
        </Text>
      ))}
    </Stack>
  );
};

export default Menu;
