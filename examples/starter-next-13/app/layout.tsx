"use client";
import { Reshaped } from "reshaped";
import "reshaped/themes/reshaped/theme.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-rs-theme="reshaped" data-rs-color-mode="light">
      <body>
        <Reshaped theme="reshaped">{children}</Reshaped>
        {children}
      </body>
    </html>
  );
}
