import { Header } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Practice",
  description: "Next Practice",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
