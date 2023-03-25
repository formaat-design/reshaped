import type { AppProps } from "next/app";
import { Reshaped } from "reshaped/bundle";
import "reshaped/themes/reshaped/theme.css";
import "reshaped/bundle.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Reshaped theme="reshaped">
      <Component {...pageProps} />
    </Reshaped>
  );
}

export default MyApp;
