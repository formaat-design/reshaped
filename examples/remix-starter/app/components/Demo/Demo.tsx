import { Button, Container, Frame, Text, Stack } from "reshaped/bundle";
import styles from "./Demo.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const Demo = () => {
  return (
    <Frame align="center" justify="center" height="100vh">
      <Container width="800px">
        <Stack align="center">
          <Text variant="display-1">🎉</Text>
          <Text variant="display-2">Welcome to Reshaped</Text>
          <Text variant="featured-2" align="center">
            Reshaped is a professionally crafted design system for everyday
            product development made to match your brand. In this example
            repository we're using it together with Remix.
          </Text>
          <Stack.Item gap={6}>
            <Button
              size="large"
              color="primary"
              href="https://reshaped.so"
              attributes={{ target: "_blank" }}
            >
              Check our website
            </Button>
          </Stack.Item>
          <div data-custom>Custom component with styles</div>
        </Stack>
      </Container>
    </Frame>
  );
};

export default Demo;
