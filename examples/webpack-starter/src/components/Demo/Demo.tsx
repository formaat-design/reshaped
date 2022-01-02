import React from "react";
import { Arcade, Button, Container, Frame, Text, Stack } from "arcade";
import * as theme from "arcade/themes/arcade.module.css";
import * as s from "./Demo.module.css";

const Demo = () => {
  return (
    <Arcade theme={theme}>
      <Frame align="center" justify="center" height="100vh">
        <Container size="smallest">
          <Stack align="center">
            <Text variant="display-1">🎉</Text>
            <Text variant="display-2">Welcome to Arcade</Text>
            <Text variant="featured-2" align="center">
              Arcade is a professionally crafted design system for high‑quality
              product development. In this example repository we're using it
              together with Webpack.
            </Text>
            <Stack.Item gap={6}>
              <Button
                size="large"
                color="primary"
                href="https://arcade.design"
                attributes={{ target: "_blank" }}
              >
                Check our website
              </Button>
            </Stack.Item>
            <div className={s.customComponent}>
              Custom component with styles
            </div>
          </Stack>
        </Container>
      </Frame>
    </Arcade>
  );
};

export default Demo;
