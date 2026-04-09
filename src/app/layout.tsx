import type { Metadata } from "next";
import "../styles/base/_global.scss";

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
    <html lang="pt-BR">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
