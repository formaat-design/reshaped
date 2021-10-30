import { Arcade, Button, Container, Frame, Text, Stack } from "arcade";
import theme from "arcade/themes/arcade";

const App = () => {
  return (
    <Arcade theme={theme}>
      <Frame align="center" justify="center" height="100vh">
        <Container size="smallest">
          <Stack align="center">
            <Text variant="display1">🎉</Text>
            <Text variant="display2">Welcome to Arcade</Text>
            <Text variant="featured2" align="center">
              Arcade is a professionally crafted design system for high‑quality
              product development. In this example repository we're using it
              together with Vite.
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
          </Stack>
        </Container>
      </Frame>
    </Arcade>
  );
};

export default App;
