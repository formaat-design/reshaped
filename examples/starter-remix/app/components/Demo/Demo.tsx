import { Button, Container, View, Text } from "reshaped";
import styles from "./Demo.module.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const Demo = () => {
  return (
    <View align="center" justify="center" height="100vh">
      <Container width="800px">
        <View gap={3} align="center">
          <Text variant="display-1">🎉</Text>
          <Text variant="display-2">Welcome to Reshaped</Text>
          <Text variant="featured-2" align="center">
            Reshaped is a professionally crafted design system for everyday
            product development made to match your brand. In this example
            repository we&apos;re using it together with Remix
          </Text>
          <View.Item gapBefore={6}>
            <Button
              size="large"
              color="primary"
              href="https://reshaped.so"
              attributes={{ target: "_blank" }}
            >
              Check our website
            </Button>
          </View.Item>
          <div className={styles.customComponent}>
            Custom component with styles
          </div>
        </View>
      </Container>
    </View>
  );
};

export default Demo;
