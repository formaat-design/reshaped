import { Button, Container, View, Text, useTheme, Divider } from "reshaped";

const Demo = () => {
  const { invertColorMode } = useTheme();

  return (
    <View align="center" justify="center" height="100vh">
      <Container width="800px">
        <View align="center" gap={3}>
          <Text variant="display-1">🎉</Text>
          <Text variant="display-2">Welcome to Reshaped</Text>
          <Text variant="featured-2" align="center">
            Reshaped is a professionally crafted design system for everyday
            product development made to match your brand. In this example
            repository we're using it together with Vite.
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
          <div className="bg-elevated p-x4 l:p-x6 text-critical border border-neutral-faded rounded-medium shadow-elevated">
            Tailwind is used here with Reshaped tokens
          </div>
          <Button color="primary" variant="outline" onClick={invertColorMode}>
            Invert color mode
          </Button>
        </View>
      </Container>
    </View>
  );
};

export default Demo;
