import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Reshaped } from "reshaped";
import "reshaped/themes/reshaped/theme.css";

export default function App() {
  return (
    <html lang="en" data-rs-theme="reshaped" data-rs-color-mode="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Reshaped theme="reshaped">
          <Outlet />
        </Reshaped>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
