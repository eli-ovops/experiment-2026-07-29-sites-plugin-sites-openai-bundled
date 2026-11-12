import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", metadataBase).toString();

  return {
    metadataBase,
    title: {
      default: "OVOPS 原点向量｜企业 AI",
      template: "%s",
    },
    description: "从企业问题出发，让 AI 进入业务。",
    applicationName: "OVOPS 原点向量",
    openGraph: {
      type: "website",
      locale: "zh_CN",
      siteName: "OVOPS 原点向量",
      title: "OVOPS 原点向量｜从企业问题出发，让 AI 进入业务",
      description: "企业 AI 解决方案伙伴，从真实工作开始验证。",
      images: [{ url: socialImage, width: 1680, height: 945 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "OVOPS 原点向量｜企业 AI",
      description: "从企业问题出发，让 AI 进入业务。",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
