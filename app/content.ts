export type Solution = {
  slug: string;
  code: string;
  name: string;
  headline: string;
  summary: string;
  roles: string;
  input: string;
  action: string;
  output: string;
  breaks: string[];
};

export type Industry = {
  slug: string;
  code: string;
  name: string;
  statement: string;
  actions: string[];
  boundary: string;
};

export const solutions: Solution[] = [
  {
    slug: "ai-assistant",
    code: "S01",
    name: "岗位智能助手",
    headline: "让一个具体岗位的资料与任务，成为可协作的工作入口。",
    summary: "面向销售、运营、项目、行政与客服岗位，把分散资料整理成可核对的工作草稿。",
    roles: "销售、运营、项目、行政、客服",
    input: "会议记录、邮件、客户资料、制度与项目文档",
    action: "检索参考、整理上下文、起草内容并标记待确认事实",
    output: "纪要、回复初稿、行动项、待确认事项",
    breaks: ["资料散落在多个入口", "每次都从空白开始", "行动项缺少责任边界", "对外回复难以复核"],
  },
  {
    slug: "knowledge-management",
    code: "S02",
    name: "企业知识入口",
    headline: "让制度、经验与项目资料，成为团队可维护的工作入口。",
    summary: "员工提问时获得带来源、能回到原文的回答，同时暴露资料缺口与版本问题。",
    roles: "知识管理员、业务人员、项目团队",
    input: "制度、项目文档、经验资料、版本信息",
    action: "按权限检索、引用原文、提示冲突与过期内容",
    output: "带来源的答案、原文入口、待更新资料清单",
    breaks: ["资料有但找不到", "版本口径不一致", "答案缺少来源", "经验依赖少数人"],
  },
  {
    slug: "workflow-automation",
    code: "S03",
    name: "业务流程优化",
    headline: "让提醒、汇总、分发与跟进，回到清楚的业务节奏里。",
    summary: "围绕触发条件与人工确认点编排重复协作，让异常先被看见。",
    roles: "运营、项目、行政、跨部门协作人员",
    input: "表单、订单、任务状态与业务规则",
    action: "识别触发条件、汇总状态、发送提醒、准备分发建议",
    output: "待办、异常清单、提醒、分发建议与交接记录",
    breaks: ["状态靠人工追问", "提醒时点不稳定", "交接缺少上下文", "异常发现得太晚"],
  },
  {
    slug: "customer-service",
    code: "S04",
    name: "客户服务提升",
    headline: "让服务资料、答复参考与团队协同，有一个清楚的共同起点。",
    summary: "从已确认资料生成答复建议，复杂问题保留上下文并交给正确岗位。",
    roles: "客服、售后、销售支持",
    input: "客户问题、服务资料、历史上下文",
    action: "识别意图、检索依据、准备答复、判断转交条件",
    output: "答复建议、引用资料、转交信息、待确认事项",
    breaks: ["口径随人员变化", "复杂问题反复转述", "答复依据不可追溯", "升级条件不清楚"],
  },
  {
    slug: "data-analysis",
    code: "S05",
    name: "经营数据分析",
    headline: "让日常数据与一线反馈，成为团队可讨论的经营信号。",
    summary: "汇总 ERP、CRM、表格和业务反馈，先核对口径，再形成讨论材料。",
    roles: "经营负责人、销售管理者、运营管理者",
    input: "ERP、CRM、表格与业务反馈",
    action: "统一口径、整理趋势、识别异常、关联一线说明",
    output: "经营摘要、趋势、异常提示、口径待确认项",
    breaks: ["数据口径不一致", "汇总耗时且易错", "异常缺少业务解释", "会议材料临时拼接"],
  },
  {
    slug: "business-system",
    code: "S06",
    name: "业务系统协同",
    headline: "让已有系统与现有工作方式，先在清楚的边界里协同。",
    summary: "通过 API 连接 CRM、ERP 与现有系统，在权限和字段边界内同步结果。",
    roles: "业务负责人、IT、系统管理员",
    input: "系统字段、API、权限与业务状态",
    action: "确认字段映射、权限范围、同步时机与失败处理",
    output: "字段映射、同步结果、异常记录、人工确认任务",
    breaks: ["系统之间重复录入", "字段含义对不上", "失败后无人处理", "权限边界难审计"],
  },
];

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    code: "I01",
    name: "制造业",
    statement: "先把设备资料、质量记录和项目跟进放回同一条协作链。",
    actions: ["设备资料查询", "质量异常整理", "项目进度汇总", "经营信息准备"],
    boundary: "不替代质量责任人、工程判断或生产安全流程。",
  },
  {
    slug: "trade",
    code: "I02",
    name: "外贸与跨境",
    statement: "让客户开发、产品资料与多语言沟通保持同一业务上下文。",
    actions: ["询盘整理", "产品资料匹配", "多语言回复草拟", "订单交接"],
    boundary: "价格、交期、合同与合规承诺必须由业务人员确认。",
  },
  {
    slug: "ecommerce",
    code: "I03",
    name: "电商与零售",
    statement: "把商品、内容、客服与经营信号组织成可持续的日常协作。",
    actions: ["商品资料整理", "客服答复参考", "内容任务编排", "经营异常提示"],
    boundary: "不虚构商品信息，不自动作出价格与售后承诺。",
  },
  {
    slug: "professional-services",
    code: "I04",
    name: "专业服务",
    statement: "让知识、文档与项目交付保留来源、版本和责任边界。",
    actions: ["资料检索", "文档初稿", "项目交付检查", "客户问题分发"],
    boundary: "专业结论与对外意见必须由具备责任的专业人员确认。",
  },
  {
    slug: "sales",
    code: "I05",
    name: "销售与客户管理",
    statement: "从一次客户沟通开始，形成可继续跟进的商机上下文。",
    actions: ["会议纪要", "商机信息整理", "报价协同", "销售复盘"],
    boundary: "客户承诺、价格、折扣与合同条件由销售负责人确认。",
  },
  {
    slug: "education",
    code: "I06",
    name: "教育培训",
    statement: "让内容、教学支持与学员服务围绕真实问题协同。",
    actions: ["内容资料管理", "教学答疑参考", "学员问题分流", "运营任务汇总"],
    boundary: "不替代教师评价，不对学习效果作保证。",
  },
  {
    slug: "healthcare",
    code: "I07",
    name: "医疗健康",
    statement: "只从非诊疗的知识查询、客户服务与内部协作开始。",
    actions: ["服务流程查询", "非诊疗知识入口", "客户问题分流", "内部任务协作"],
    boundary: "不提供诊疗结论，不替代医生或任何专业医疗判断。",
  },
  {
    slug: "construction",
    code: "I08",
    name: "建筑工程与供应链",
    statement: "让项目文件、进度信息与供应链沟通更容易追溯。",
    actions: ["文件版本查询", "进度汇总", "供应信息整理", "异常交接"],
    boundary: "不替代工程签字、安全管理、验收与采购决策。",
  },
  {
    slug: "local-services",
    code: "I09",
    name: "本地生活与服务",
    statement: "把客户服务、会员运营与门店协作放进清楚的日常节奏。",
    actions: ["客户咨询分流", "会员跟进提示", "门店任务汇总", "服务资料查询"],
    boundary: "不自动承诺价格、库存、服务时效或赔付。",
  },
  {
    slug: "more",
    code: "I10",
    name: "更多行业",
    statement: "不先套行业模板，从企业真实工作场景开始。",
    actions: ["梳理角色", "盘点资料", "识别高频任务", "定义首个验证范围"],
    boundary: "行业名称不是方案；没有业务证据时不预设收益。",
  },
];

export const scenarios = [
  "私域咨询承接与客户跟进",
  "B2B 销售询价与报价协同",
  "品牌内容与社媒矩阵运营",
  "企业知识查询与岗位支持",
  "业务流程提醒、汇总与分发",
  "经营数据汇总与业务讨论",
  "招聘筛选与候选人跟进",
  "CRM、ERP 与现有系统协同",
];

export const deliverySteps = [
  {
    code: "01",
    title: "业务诊断",
    action: "访谈业务负责人、一线岗位与 IT，梳理当前做法。",
    output: "问题清单、角色地图、资料清单",
  },
  {
    code: "02",
    title: "方案设计",
    action: "把优先场景拆成业务动作、人工确认点和系统边界。",
    output: "能力与流程蓝图、页面说明",
  },
  {
    code: "03",
    title: "应用建设",
    action: "配置助手、知识入口或流程智能体，完成一轮目标任务。",
    output: "可试用界面、流程原型、测试记录",
  },
  {
    code: "04",
    title: "持续优化",
    action: "汇总使用问题、资料缺口与异常记录，由业务负责人排优先级。",
    output: "反馈与迭代清单",
  },
];

export const navItems = [
  { href: "/", label: "首页" },
  { href: "/solutions", label: "AI 解决方案" },
  { href: "/industries", label: "行业方案" },
  { href: "/delivery", label: "交付方式" },
  { href: "/cases", label: "实践场景" },
];

export function findRoute(pathname: string) {
  const clean = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const solution = solutions.find((item) => clean === `/solutions/${item.slug}`);
  const industry = industries.find((item) => clean === `/industries/${item.slug}`);
  if (clean === "/") return { kind: "home" as const };
  if (clean === "/solutions") return { kind: "solutions" as const };
  if (solution) return { kind: "solution" as const, item: solution };
  if (clean === "/industries") return { kind: "industries" as const };
  if (industry) return { kind: "industry" as const, item: industry };
  if (clean === "/delivery") return { kind: "delivery" as const };
  if (clean === "/cases") return { kind: "cases" as const };
  return { kind: "not-found" as const };
}
