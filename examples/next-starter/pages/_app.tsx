import type { AppProps } from "next/app";
import { Reshaped } from "reshaped";
import "reshaped/themes/reshaped/theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Reshaped theme="reshaped">
      <Component {...pageProps} />
    </Reshaped>
  );
}

export default MyApp;
