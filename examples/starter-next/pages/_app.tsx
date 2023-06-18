import React from "react";
import type { AppProps } from "next/app";
import {
  Reshaped,
  ReshapedProps,
  useTheme,
  View,
  Button,
} from "reshaped/bundle";
import "reshaped/themes/reshaped/theme.css";
import "reshaped/bundle.css";

/**
 * Includes example of how to pick color mode from the local storage
 */

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

// Custom hook for syncing color mode with local storage
const useStoredColorMode = () => {
  const theme = useTheme();

  React.useEffect(() => {
    localStorage.setItem("__reshaped-mode", theme.colorMode);
  }, [theme.colorMode]);

  return theme;
};

// Inner component that has access to the Reshaped theming context
const AppInner: React.FC<React.PropsWithChildren> = (props) => {
  const { setColorMode, invertColorMode } = useStoredColorMode();
  const [mounted, setMounted] = React.useState(false);

  // Get the color mode from the browser environment
  useIsomorphicLayoutEffect(() => {
    const storedColorMode = localStorage.getItem(
      "__reshaped-mode"
    ) as ReshapedProps["defaultColorMode"];

    if (storedColorMode) {
      setColorMode(storedColorMode);
      return;
    }

    const mqDark = window.matchMedia?.("(prefers-color-scheme: dark)");
    setColorMode(mqDark ? "dark" : "light");
  }, [setColorMode]);

  // Render the content, effect always runs after layout effects
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <View position="absolute" insetTop={4} insetEnd={4} zIndex={100}>
        <Button onClick={invertColorMode}>Toggle color mode</Button>
      </View>
      {props.children}
    </>
  );
};

function App({ Component, pageProps }: AppProps) {
  return (
    <Reshaped theme="reshaped">
      <AppInner>
        <Component {...pageProps} />
      </AppInner>
    </Reshaped>
  );
}

export default App;
