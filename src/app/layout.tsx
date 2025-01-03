import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider/provider";

export const metadata: Metadata = {
  title: "Victor's Portfolio",
  description:
    "Showcasing Victor's expertise in frontend development, specializing in React.js, Next.js, and modern web technologies.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
