import type { Metadata } from "next";
import "../styles/base/_global.scss";
import { AppProvider } from "../providers/app/app.provider";
import { Providers } from "../providers/theme/theme.provider";
import { ChatProvider } from "../providers";

export const metadata: Metadata = {
  title: "FintechX",
  description:
    "FintechX é uma plataforma de gerenciamento financeiro pessoal que oferece uma visão abrangente das finanças dos usuários, permitindo que eles controlem seus gastos, economias e investimentos de forma eficiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <AppProvider>
          <ChatProvider>
            <Providers>{children}</Providers>
          </ChatProvider>
        </AppProvider>
      </body>
    </html>
  );
}
