import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, solutions } from "../content";
import { SiteClient } from "../site-client";

type RouteProps = {
  params: Promise<{ slug: string[] }>;
};

function getPath(slug: string[]) {
  return `/${slug.join("/")}`;
}

export async function generateStaticParams() {
  return [
    { slug: ["solutions"] },
    ...solutions.map((item) => ({ slug: ["solutions", item.slug] })),
    { slug: ["industries"] },
    ...industries.map((item) => ({ slug: ["industries", item.slug] })),
    { slug: ["delivery"] },
    { slug: ["cases"] },
  ];
}

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const pathname = getPath(slug);
  const solution = solutions.find(
    (item) => pathname === `/solutions/${item.slug}`,
  );
  const industry = industries.find(
    (item) => pathname === `/industries/${item.slug}`,
  );

  if (solution) {
    return {
      title: `${solution.name}｜OVOPS 原点向量`,
      description: solution.summary,
    };
  }

  if (industry) {
    return {
      title: `${industry.name}企业 AI 方案｜OVOPS 原点向量`,
      description: `${industry.statement} ${industry.boundary}`,
    };
  }

  const pages: Record<string, [string, string]> = {
    "/solutions": [
      "企业 AI 解决方案｜OVOPS 原点向量",
      "从岗位、知识、流程、服务、经营与系统问题选择企业 AI 的进入方式。",
    ],
    "/industries": [
      "行业方案｜OVOPS 原点向量",
      "在行业语境里寻找 AI 真正可以从小范围落地的位置。",
    ],
    "/delivery": [
      "交付方式｜OVOPS 原点向量",
      "通过业务诊断、方案设计、应用建设与持续优化，让 AI 从想法走向实际使用。",
    ],
    "/cases": [
      "实践场景｜OVOPS 原点向量",
      "用典型业务场景讨论企业 AI 怎样进入真实工作，不虚构客户案例或效果。",
    ],
  };

  const [title, description] = pages[pathname] ?? [
    "页面未找到｜OVOPS 原点向量",
    "你访问的页面不存在，请返回 OVOPS 首页。",
  ];
  return { title, description };
}

export default async function RoutePage({ params }: RouteProps) {
  const { slug } = await params;
  const pathname = getPath(slug);
  const valid =
    pathname === "/solutions" ||
    pathname === "/industries" ||
    pathname === "/delivery" ||
    pathname === "/cases" ||
    solutions.some((item) => pathname === `/solutions/${item.slug}`) ||
    industries.some((item) => pathname === `/industries/${item.slug}`);
  if (!valid) notFound();
  return <SiteClient pathname={pathname} />;
}
