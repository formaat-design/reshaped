import type { AppProps } from "next/app";
import { Reshaped } from "reshaped/bundle";
import "reshaped/bundle.css";
import "reshaped/themes/reshaped/theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Reshaped theme="reshaped">
      <Component {...pageProps} />
    </Reshaped>
  );
}

export default MyApp;
