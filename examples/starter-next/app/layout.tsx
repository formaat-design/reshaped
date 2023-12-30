import App from "../components/App";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-rs-theme="reshaped" data-rs-color-mode="light">
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
