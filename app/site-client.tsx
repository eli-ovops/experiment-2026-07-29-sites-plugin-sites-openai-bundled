"use client";

import { useEffect, useRef, useState } from "react";
import {
  deliverySteps,
  findRoute,
  industries,
  navItems,
  scenarios,
  solutions,
  type Industry,
  type Solution,
} from "./content";

const workSteps = [
  ["业务输入", "资料、问题、角色与当前流程"],
  ["AI 处理", "检索、整理、起草、分析或任务编排"],
  ["人工确认", "核对事实、权限、业务判断与对外承诺"],
  ["工作输出", "知识答案、任务清单、分析摘要或流程状态"],
];

const capabilityLayers = [
  ["岗位层", "AI 助手、知识查询、内容起草、任务协作"],
  ["流程层", "智能体、提醒、汇总、分发、审批前核对"],
  ["系统层", "API、CRM、ERP、中台、数据治理与权限边界"],
  ["管理层", "经营信息整理、风险提示、可追溯的讨论材料"],
];

const faqs = [
  [
    "OVOPS 能先帮助判断哪些问题适合 AI 吗？",
    "可以从业务问题、流程、资料和使用角色出发，整理值得优先讨论的应用机会。",
  ],
  [
    "是否一定要先做一个很大的系统？",
    "不需要。更适合从高频、明确、团队能试用的场景开始，再根据反馈扩展。",
  ],
  [
    "这里的行业和实践是否代表已有客户项目？",
    "不是。当前展示方法和场景示例，不包含未经确认的客户或效果事实。",
  ],
];

function Brand() {
  return (
    <a className="brand" href="/" aria-label="OVOPS 原点向量首页">
      <span className="brand-mark" aria-hidden="true">
        OV
      </span>
      <span>
        <strong>OVOPS</strong>
        <small>原点向量 · 企业 AI</small>
      </span>
    </a>
  );
}

function Header({ pathname }: { pathname: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mega, setMega] = useState<"solutions" | "industries" | null>(null);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="主导航">
          <a className={pathname === "/" ? "active" : ""} href="/">
            首页
          </a>
          <button
            type="button"
            aria-expanded={mega === "solutions"}
            aria-controls="solutions-menu"
            className={pathname.startsWith("/solutions") ? "active" : ""}
            onClick={() =>
              setMega((value) => (value === "solutions" ? null : "solutions"))
            }
          >
            AI 解决方案 <span aria-hidden="true">⌄</span>
          </button>
          <button
            type="button"
            aria-expanded={mega === "industries"}
            aria-controls="industries-menu"
            className={pathname.startsWith("/industries") ? "active" : ""}
            onClick={() =>
              setMega((value) => (value === "industries" ? null : "industries"))
            }
          >
            行业方案 <span aria-hidden="true">⌄</span>
          </button>
          <a className={pathname === "/delivery" ? "active" : ""} href="/delivery">
            交付方式
          </a>
          <a className={pathname === "/cases" ? "active" : ""} href="/cases">
            实践场景
          </a>
          <a href="/#about">关于我们</a>
        </nav>
        <a className="button button-small header-cta" href="/#contact">
          免费企业 AI 诊断
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={mobileOpen ? "关闭导航" : "打开导航"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mega === "solutions" && (
        <div className="mega-menu" id="solutions-menu">
          <div className="mega-intro">
            <span className="eyebrow">AI SOLUTIONS</span>
            <strong>先选问题，再组合能力。</strong>
            <a href="/solutions">查看解决方案总览 <span aria-hidden="true">→</span></a>
          </div>
          <div className="mega-grid">
            {solutions.map((item) => (
              <a key={item.slug} href={`/solutions/${item.slug}`}>
                <span>{item.code}</span>
                <strong>{item.name}</strong>
                <small>{item.output}</small>
              </a>
            ))}
          </div>
        </div>
      )}

      {mega === "industries" && (
        <div className="mega-menu" id="industries-menu">
          <div className="mega-intro">
            <span className="eyebrow">INDUSTRIES</span>
            <strong>在行业语境里谈具体工作。</strong>
            <a href="/industries">查看行业总览 <span aria-hidden="true">→</span></a>
          </div>
          <div className="mega-grid industry-menu-grid">
            {industries.map((item) => (
              <a key={item.slug} href={`/industries/${item.slug}`}>
                <span>{item.code}</span>
                <strong>{item.name}</strong>
              </a>
            ))}
          </div>
        </div>
      )}

      {mobileOpen && (
        <nav className="mobile-nav" aria-label="移动端主导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}<span aria-hidden="true">→</span>
            </a>
          ))}
          <a href="/#about">关于我们<span aria-hidden="true">→</span></a>
          <a href="/#contact">免费企业 AI 诊断<span aria-hidden="true">→</span></a>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <Brand />
          <p>帮助企业发现 AI 应用机会，设计解决方案，完成项目落地。</p>
          <a className="footer-contact" href="mailto:[REDACTED_EMAIL]">
            [REDACTED_EMAIL] <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-links">
          <strong>能力</strong>
          {solutions.slice(0, 4).map((item) => (
            <a key={item.slug} href={`/solutions/${item.slug}`}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="footer-links">
          <strong>了解 OVOPS</strong>
          <a href="/delivery">交付方式</a>
          <a href="/cases">实践场景</a>
          <a href="/#about">关于我们</a>
        </div>
        <div className="qr-group" aria-label="社交媒体二维码占位">
          {["公众号", "企业微信客服", "抖音"].map((label) => (
            <div className="qr-item" key={label}>
              <div className="qr-placeholder" aria-label={`${label}二维码待确认素材`}>
                <span>待确认素材</span>
              </div>
              <small>{label}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 OVOPS 原点向量</span>
        <span>场景示例不代表客户案例或效果承诺</span>
      </div>
    </footer>
  );
}

function PageHero({
  eyebrow,
  title,
  intro,
  code = "OVOPS",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  code?: string;
}) {
  return (
    <section className="page-hero dark-section">
      <div className="page-hero-copy reveal">
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <div className="page-hero-code reveal" aria-hidden="true">
        <span>{code}</span>
        <i />
        <small>ENTERPRISE AI / VERIFIED PATH</small>
      </div>
    </section>
  );
}

function HeroNetwork() {
  const nodes = [
    ["制造业", "n1"],
    ["外贸", "n2"],
    ["电商", "n3"],
    ["专业服务", "n4"],
    ["销售", "n5"],
    ["教育", "n6"],
    ["医疗", "n7"],
    ["工程", "n8"],
    ["本地服务", "n9"],
  ];

  return (
    <div className="hero-network" aria-label="OVOPS 企业 AI 能力网络示意">
      <div className="network-orbit orbit-one" />
      <div className="network-orbit orbit-two" />
      <div className="network-core">
        <span>OVOPS</span>
        <strong>企业 AI<br />应用体系</strong>
      </div>
      {nodes.map(([label, className]) => (
        <div className={`network-node ${className}`} key={label}>
          <i />
          <span>{label}</span>
        </div>
      ))}
      <div className="network-signal signal-one" />
      <div className="network-signal signal-two" />
    </div>
  );
}

function Home() {
  const [workTab, setWorkTab] = useState(0);
  const [faqOpen, setFaqOpen] = useState(0);

  return (
    <>
      <section className="home-hero dark-section">
        <div className="hero-copy reveal">
          <span className="eyebrow light">OVOPS / 企业 AI 解决方案伙伴</span>
          <h1>从企业问题出发，<br />让 AI 进入业务</h1>
          <p>
            先理解真实工作，再选择典型场景、组合核心能力，并以可复核的方式验证下一步。
          </p>
          <div className="hero-actions">
            <a className="button" href="#contact">免费企业 AI 诊断</a>
            <a className="text-link light-link" href="/delivery">
              了解落地方式 <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="hero-proof">
            <span>先小范围验证</span>
            <span>保留人工判断</span>
            <span>输出可复核</span>
          </div>
        </div>
        <div className="hero-visual reveal">
          <HeroNetwork />
        </div>
      </section>

      <section className="section" id="solutions">
        <div className="section-heading reveal">
          <span className="eyebrow">AI SOLUTIONS</span>
          <h2>从业务问题出发，<br />让 AI 进入日常工作。</h2>
          <p>六类能力不是独立商品，而是可以按一项真实工作组合的模块。</p>
        </div>
        <div className="featured-solutions">
          {solutions.slice(0, 2).map((item, index) => (
            <a className="solution-feature reveal" href={`/solutions/${item.slug}`} key={item.slug}>
              <div>
                <span className="mono-label">{item.code}</span>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
              </div>
              <div className={`interface-demo interface-${index + 1}`} aria-hidden="true">
                <div className="demo-bar"><i /><i /><i /></div>
                <div className="demo-body">
                  <span />
                  <strong />
                  <span />
                  <i />
                  <span />
                </div>
              </div>
              <span className="card-link">了解能力 <i aria-hidden="true">→</i></span>
            </a>
          ))}
        </div>
        <div className="compact-solutions">
          {solutions.slice(2).map((item) => (
            <a className="compact-card reveal" href={`/solutions/${item.slug}`} key={item.slug}>
              <span className="mono-label">{item.code}</span>
              <h3>{item.name}</h3>
              <p>{item.output}</p>
              <i aria-hidden="true">→</i>
            </a>
          ))}
        </div>
      </section>

      <section className="section mist-section">
        <div className="section-heading split-heading reveal">
          <div>
            <span className="eyebrow">BUSINESS SCENARIOS</span>
            <h2>先从客户听得懂的<br />一项工作开始。</h2>
          </div>
          <p>场景把 AI 能力翻译成岗位、输入、动作与输出，而不是技术名词的堆叠。</p>
        </div>
        <div className="scenario-list">
          {scenarios.map((scenario, index) => (
            <a className="scenario-row reveal" href="/cases" key={scenario}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{scenario}</strong>
              <i aria-hidden="true">↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="section work-section">
        <div className="work-copy reveal">
          <span className="eyebrow">HUMAN + AI</span>
          <h2>AI 如何进入<br />一项工作。</h2>
          <div className="tab-list" role="tablist" aria-label="能力演示">
            {["岗位助手", "知识入口", "流程优化"].map((label, index) => (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={workTab === index}
                onClick={() => setWorkTab(index)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="work-steps">
            {workSteps.map(([title, copy], index) => (
              <div className={workTab === index % 3 ? "current" : ""} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p><strong>{title}</strong>{copy}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="work-interface reveal">
          <div className="interface-header">
            <span>OVOPS WORKSPACE</span>
            <i>人工确认中</i>
          </div>
          <div className="interface-layout">
            <aside>
              <span className="active" />
              <span />
              <span />
              <span />
            </aside>
            <div className="interface-content">
              <span className="interface-kicker">TASK / 04</span>
              <h3>{["客户会议跟进", "制度与项目问答", "跨部门状态汇总"][workTab]}</h3>
              <div className="source-row"><i /> 已引用 4 份确认资料</div>
              <div className="interface-lines"><b /><b /><b /><b /></div>
              <div className="confirmation-box">
                <span>需要人工确认</span>
                <strong>{["对外承诺与下次行动", "版本口径与引用范围", "异常责任人与发送范围"][workTab]}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="capability-section dark-section" id="about">
        <div className="capability-intro reveal">
          <span className="eyebrow light">ENTERPRISE CAPABILITY</span>
          <h2>不从工具清单开始，<br />而从可验证的企业能力开始。</h2>
          <p>知识、流程、助手、数据与系统能力，只有放进责任清楚的工作结构里才有意义。</p>
        </div>
        <div className="capability-grid">
          {capabilityLayers.map(([title, copy], index) => (
            <div className="capability-card reveal" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading reveal">
          <span className="eyebrow">INDUSTRIES</span>
          <h2>在行业语境里讨论<br />真正的业务场景。</h2>
        </div>
        <div className="industry-orbits">
          {industries.map((item) => (
            <a className="industry-orbit reveal" href={`/industries/${item.slug}`} key={item.slug}>
              <span>{item.code}</span>
              <strong>{item.name}</strong>
              <small>{item.actions[0]}</small>
            </a>
          ))}
        </div>
      </section>

      <DeliveryPreview />

      <section className="section practice-section">
        <div className="practice-statement reveal">
          <span className="eyebrow">PRACTICE & VERIFICATION</span>
          <h2>展示做事的方法，<br />不虚构还不存在的案例。</h2>
          <p>以下内容是场景示例，不代表客户案例或效果承诺。</p>
        </div>
        <div className="practice-stack">
          {["知识入口试用", "流程协同试用", "岗位助手试用"].map((label, index) => (
            <a href="/cases" className="practice-card reveal" key={label}>
              <span>DEMO / 0{index + 1}</span>
              <h3>{label}</h3>
              <p>围绕输入、AI 处理、人工确认和输出，完成一轮可观察验证。</p>
              <i aria-hidden="true">→</i>
            </a>
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading reveal">
          <span className="eyebrow">FAQ</span>
          <h2>常见问题</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <div className={`faq-item reveal ${faqOpen === index ? "open" : ""}`} key={question}>
              <button
                type="button"
                aria-expanded={faqOpen === index}
                onClick={() => setFaqOpen((value) => (value === index ? -1 : index))}
              >
                <span>{question}</span><i aria-hidden="true">{faqOpen === index ? "−" : "+"}</i>
              </button>
              {faqOpen === index && <p>{answer}</p>}
            </div>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}

function DeliveryPreview() {
  return (
    <section className="delivery-preview dark-section">
      <div className="section-heading reveal">
        <span className="eyebrow light">DELIVERY</span>
        <h2>四步，把 AI 从讨论<br />推进到使用。</h2>
      </div>
      <div className="delivery-track">
        {deliverySteps.map((step) => (
          <div className="delivery-step reveal" key={step.code}>
            <span>{step.code}</span>
            <h3>{step.title}</h3>
            <p>{step.action}</p>
            <small>输出 / {step.output}</small>
          </div>
        ))}
      </div>
      <a className="text-link light-link reveal" href="/delivery">
        查看完整交付方式 <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="contact-cta dark-section">
      <div className="reveal">
        <span className="eyebrow light">START WITH ONE REAL TASK</span>
        <h2>先找到一项值得验证的工作。</h2>
        <p>带着业务问题、现有资料和使用岗位开始，我们一起判断 AI 是否值得进入。</p>
      </div>
      <a className="button reveal" href="mailto:[REDACTED_EMAIL]?subject=企业 AI 诊断">
        免费企业 AI 诊断
      </a>
    </section>
  );
}

function SolutionsOverview() {
  return (
    <>
      <PageHero
        eyebrow="AI SOLUTIONS"
        title="让 AI 从一个业务问题，进入一组真实工作。"
        intro="从岗位、知识、流程、服务、经营或系统问题选择入口，再按业务组合能力。"
        code="S00"
      />
      <section className="section">
        <div className="principle-strip reveal">
          <span>选择入口</span><i>→</i><span>明确岗位与资料</span><i>→</i><span>定义人工确认点</span><i>→</i><span>验证工作输出</span>
        </div>
        <div className="overview-grid">
          {solutions.map((item) => (
            <a className="overview-card reveal" href={`/solutions/${item.slug}`} key={item.slug}>
              <span className="mono-label">{item.code}</span>
              <h2>{item.name}</h2>
              <p>{item.summary}</p>
              <dl>
                <div><dt>使用岗位</dt><dd>{item.roles}</dd></div>
                <div><dt>工作输出</dt><dd>{item.output}</dd></div>
              </dl>
              <i className="overview-arrow" aria-hidden="true">→</i>
            </a>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}

function SolutionDetail({ item }: { item: Solution }) {
  return (
    <>
      <PageHero eyebrow={`AI SOLUTIONS / ${item.name}`} title={item.headline} intro={item.summary} code={item.code} />
      <section className="section">
        <div className="section-heading reveal">
          <span className="eyebrow">CURRENT BREAKPOINTS</span>
          <h2>不是缺少工具，<br />而是工作上下文没有连起来。</h2>
        </div>
        <div className="break-grid">
          {item.breaks.map((text, index) => (
            <div className="break-item reveal" key={text}>
              <span>0{index + 1}</span><strong>{text}</strong>
            </div>
          ))}
        </div>
      </section>
      <section className="section mist-section">
        <div className="section-heading reveal">
          <span className="eyebrow">WORKING MODEL</span>
          <h2>把能力放进岗位、资料与责任边界。</h2>
        </div>
        <div className="work-model">
          {[
            ["使用岗位", item.roles],
            ["业务输入", item.input],
            ["AI 动作", item.action],
            ["工作输出", item.output],
            ["人工边界", "事实、权限、业务判断和对外承诺由对应岗位确认"],
          ].map(([label, copy], index) => (
            <div className="model-row reveal" key={label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{label}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>
      <DeliveryPreview />
      <section className="section">
        <div className="section-heading reveal">
          <span className="eyebrow">RELATED INDUSTRIES</span>
          <h2>从相关行业语境继续。</h2>
        </div>
        <div className="related-links">
          {industries.slice(0, 4).map((industry) => (
            <a href={`/industries/${industry.slug}`} className="reveal" key={industry.slug}>
              <span>{industry.code}</span><strong>{industry.name}</strong><i aria-hidden="true">→</i>
            </a>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}

function IndustriesOverview() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES"
        title="在行业场景中，寻找 AI 真正可以落地的位置。"
        intro="行业不是标签。我们从业务动作、资料、角色与责任边界识别首个验证范围。"
        code="I00"
      />
      <section className="section industry-overview">
        {industries.map((item) => (
          <a className="industry-panel reveal" href={`/industries/${item.slug}`} key={item.slug}>
            <span>{item.code}</span>
            <h2>{item.name}</h2>
            <p>{item.statement}</p>
            <ul>{item.actions.map((action) => <li key={action}>{action}</li>)}</ul>
            <i aria-hidden="true">↗</i>
          </a>
        ))}
      </section>
      <ContactCta />
    </>
  );
}

function IndustryDetail({ item }: { item: Industry }) {
  const related = solutions.slice(
    Number(item.code.slice(1)) % 3,
    Number(item.code.slice(1)) % 3 + 3,
  );
  return (
    <>
      <PageHero eyebrow={`INDUSTRIES / ${item.name}`} title={item.statement} intro={item.boundary} code={item.code} />
      <section className="section">
        <div className="section-heading reveal">
          <span className="eyebrow">COLLABORATION ISSUES</span>
          <h2>先把业务协作问题说具体。</h2>
        </div>
        <div className="break-grid">
          {["资料入口分散", "状态依赖人工追问", "关键口径不一致", "交接缺少责任与上下文"].map((text, index) => (
            <div className="break-item reveal" key={text}><span>0{index + 1}</span><strong>{text}</strong></div>
          ))}
        </div>
      </section>
      <section className="section mist-section">
        <div className="section-heading reveal">
          <span className="eyebrow">START SMALL</span>
          <h2>四个可以从小范围开始的场景。</h2>
        </div>
        <div className="industry-actions">
          {item.actions.map((action, index) => (
            <div className="action-card reveal" key={action}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{action}</h3>
              <p>先限定一个岗位、一组资料和一次工作输出，记录问题后再决定是否扩展。</p>
            </div>
          ))}
        </div>
        <div className="boundary-note reveal">
          <span>适用边界</span><strong>{item.boundary}</strong>
        </div>
      </section>
      <DeliveryPreview />
      <section className="section">
        <div className="section-heading reveal">
          <span className="eyebrow">RELATED SOLUTIONS</span>
          <h2>组合与当前工作相关的能力。</h2>
        </div>
        <div className="related-links">
          {related.map((solution) => (
            <a href={`/solutions/${solution.slug}`} className="reveal" key={solution.slug}>
              <span>{solution.code}</span><strong>{solution.name}</strong><i aria-hidden="true">→</i>
            </a>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}

function DeliveryPage() {
  return (
    <>
      <PageHero
        eyebrow="DELIVERY"
        title="让 AI 从想法，走向企业实际使用。"
        intro="能力先进入企业真实工作语境，再通过业务诊断、方案设计、应用建设与持续优化形成闭环。"
        code="D01"
      />
      <section className="section delivery-page">
        {deliverySteps.map((step) => (
          <article className="delivery-chapter reveal" key={step.code}>
            <div className="chapter-number">{step.code}</div>
            <div>
              <span className="eyebrow">STEP {step.code}</span>
              <h2>{step.title}</h2>
              <p>{step.action}</p>
            </div>
            <div className="chapter-output">
              <span>参与岗位</span>
              <strong>{step.code === "01" ? "业务负责人 / 一线岗位 / IT" : "业务负责人 / 产品 / 技术"}</strong>
              <span>阶段输出</span>
              <strong>{step.output}</strong>
            </div>
          </article>
        ))}
      </section>
      <section className="section mist-section system-boundary">
        <div className="section-heading reveal">
          <span className="eyebrow">SYSTEM BOUNDARY</span>
          <h2>连接系统之前，先说清数据、权限与人工确认点。</h2>
        </div>
        <div className="boundary-diagram reveal">
          {["现有系统", "受控连接", "AI 能力", "人工确认", "业务输出"].map((label, index) => (
            <div key={label}><span>0{index + 1}</span><strong>{label}</strong>{index < 4 && <i aria-hidden="true">→</i>}</div>
          ))}
        </div>
        <p className="section-note reveal">一次演示不是完整上线。真实使用仍需要权限、数据、测试、监控与运营责任闭环。</p>
      </section>
      <ContactCta />
    </>
  );
}

function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="PRACTICE SCENARIOS"
        title="用典型业务场景，讨论企业 AI 怎样进入真实工作。"
        intro="页面展示方法与验证范围，不把场景示例写成客户案例或效果承诺。"
        code="P01"
      />
      <section className="truth-boundary section">
        <div className="truth-item reveal">
          <span>真实客户案例</span><p>仅在获得授权且具备公开证据时展示。</p>
        </div>
        <div className="truth-item reveal">
          <span>匿名项目实践</span><p>仅在确实实施且可以安全公开时展示。</p>
        </div>
        <div className="truth-item active reveal">
          <span>典型业务场景</span><p>用于方法演示，不代表既有客户成果。</p>
        </div>
      </section>
      <section className="section cases-grid">
        {scenarios.map((scenario, index) => (
          <article className="case-card reveal" key={scenario}>
            <span className="mono-label">SCENE / {String(index + 1).padStart(2, "0")}</span>
            <h2>{scenario}</h2>
            <dl>
              <div><dt>适合岗位</dt><dd>{["销售与客服", "销售与售前", "品牌与运营", "知识管理员与业务人员"][index % 4]}</dd></div>
              <div><dt>AI 介入</dt><dd>检索、整理、起草或任务编排，并保留来源。</dd></div>
              <div><dt>人机边界</dt><dd>事实、权限、业务判断与对外承诺由人工确认。</dd></div>
              <div><dt>首个验证</dt><dd>一个岗位、一组资料、一次可核对输出。</dd></div>
            </dl>
            <div className="case-validation">
              <span>验证方式</span>
              <p>记录完成时间、资料缺口、错误类型与人工修改原因，不预设收益指标。</p>
            </div>
          </article>
        ))}
      </section>
      <ContactCta />
    </>
  );
}

function NotFound() {
  return (
    <section className="not-found dark-section">
      <span className="eyebrow light">404 / ROUTE NOT FOUND</span>
      <h1>这条路径暂时没有内容。</h1>
      <p>返回首页，或从解决方案与行业入口继续浏览。</p>
      <div><a className="button" href="/">返回首页</a><a className="text-link light-link" href="/solutions">查看解决方案 →</a></div>
    </section>
  );
}

export function SiteClient({ pathname }: { pathname: string }) {
  const root = useRef<HTMLDivElement>(null);
  const route = findRoute(pathname);

  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;

    async function enableMotion() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (disposed || !root.current) return;

      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        const mm = gsap.matchMedia();
        mm.add(
          {
            motion: "(prefers-reduced-motion: no-preference)",
            desktop: "(min-width: 768px)",
          },
          (mediaContext) => {
            if (!mediaContext.conditions?.motion) return;
            gsap.from(".site-header", {
              y: -18,
              autoAlpha: 0,
              duration: 0.55,
              ease: "power3.out",
            });
            ScrollTrigger.batch(".reveal", {
              start: "top 88%",
              once: true,
              batchMax: mediaContext.conditions.desktop ? 4 : 2,
              onEnter: (elements) =>
                gsap.fromTo(
                  elements,
                  { y: 26, autoAlpha: 0 },
                  {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.65,
                    ease: "power3.out",
                    stagger: 0.07,
                    overwrite: "auto",
                  },
                ),
            });
          },
        );
        cleanup = () => mm.revert();
      }, root);

      cleanup = (() => {
        const revertMedia = cleanup;
        return () => {
          revertMedia?.();
          context.revert();
        };
      })();
    }

    void enableMotion();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  let content;
  if (route.kind === "home") content = <Home />;
  else if (route.kind === "solutions") content = <SolutionsOverview />;
  else if (route.kind === "solution") content = <SolutionDetail item={route.item} />;
  else if (route.kind === "industries") content = <IndustriesOverview />;
  else if (route.kind === "industry") content = <IndustryDetail item={route.item} />;
  else if (route.kind === "delivery") content = <DeliveryPage />;
  else if (route.kind === "cases") content = <CasesPage />;
  else content = <NotFound />;

  return (
    <div ref={root}>
      <a className="skip-link" href="#main">跳到主要内容</a>
      <Header pathname={pathname} />
      <main id="main">{content}</main>
      {route.kind !== "not-found" && <Footer />}
    </div>
  );
}
