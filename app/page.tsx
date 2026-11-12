import type { Metadata } from "next";
import { SiteClient } from "./site-client";

export const metadata: Metadata = {
  title: "OVOPS 原点向量｜从企业问题出发，让 AI 进入业务",
  description:
    "OVOPS 是企业 AI 解决方案伙伴，从真实业务问题出发，组合岗位助手、知识入口、流程、数据与系统协同能力。",
};

export default function HomePage() {
  return <SiteClient pathname="/" />;
}
