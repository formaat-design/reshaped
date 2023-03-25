"use client";
import { Reshaped } from "reshaped";
import "reshaped/themes/reshaped/theme.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-rs-theme="reshaped">
        <Reshaped theme="reshaped">{children}</Reshaped>
      </body>
    </html>
  );
}
