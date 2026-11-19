---
title: 孤立测速素材与历史待核实品牌审计（快狸 / 宇宙云 / 灵动云 / 浪网 / EdgeNova）
shortTitle: 孤立素材与历史审计
description: 公开记录测速资料包中缺少价格注册信息的「快狸」截图核查，以及 2026-08-09 历史批次品牌（宇宙云、灵动云、浪网、EdgeNova）的当前核实边界。
date: '2026-11-19'
updatedDate: '2026-11-19'
category: 资源与情报
pillar: /resources/
keywords:
  - 快狸测速
  - 历史待核实机场
  - 机场数据审计
brands:
  - yuzhou
  - lingdong
  - langwang
  - edgenova
author: 翻墙梯子数据审计组
faq:
  - q: 既然测速包里有“快狸-节点测速实测.png”，为什么品牌数据库里没有把快狸列入 31 家品牌？
    a: 因为《32家机场品牌清单.txt》中完全没有收录快狸的官网注册地址、套餐价格、协议类型与退款政策，本站严禁根据单张测速截图凭空编造套餐价目或跳转入口，因此暂将其列入待补全观察记录。
  - q: 标记为“历史待核实”的四家品牌还能购买吗？
    a: 宇宙云、灵动云、浪网、EdgeNova 的价格和入口源自 2026-08-09 历史品牌库，当前是否更名、调价或维护尚未重新核验，即使访问历史入口也绝不建议首单购买年付。
---

# 孤立测速素材与历史待核实品牌审计档案

> **直接结论：** 严谨的知识库必须把**“有图但缺档案”**与**“有档案但时间偏早”**的边界透明化。本页集中存档未能进入主力推荐榜单的特殊核查对象。

## 一、孤立测速素材：「快狸」核查记录

在 `机场测速实测资料包_2026-08-11_发布整理版_V2.zip` 与桌面 `logos/` 中存在以下真实素材：

- **测速原图（Web 优化版）**：`/images/speedtest/快狸-节点测速实测.jpg`（原始压缩归档源图：`快狸-节点测速实测.png`）
- **品牌图标**：`/images/logos/kuaili_logo.png`
- **测试时间戳**：`2026-08-11 19:52:22 CST`
- **图中协议与环境**：`VLESS` · 主端 `4.3.3（696）` / 喵速 `4.7.0（A11-32）`（珠海联通 9Gbps，32 线程）
- **未收录原因**：`32家机场品牌清单.txt` 中无快狸官方入口、套餐价格、流量规格与优惠码信息，缺口过大无法建档。

<figure style="margin: 1.25rem 0; background: #0b1220; padding: 1rem; border-radius: 10px; border: 1px solid #1e293b;">
  <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
    <img src="/images/logos/kuaili_logo.png" alt="快狸原始图标" width="36" height="36" loading="lazy" decoding="async" style="border-radius: 8px; background: #ffffff; border: 1px solid #334155;" />
    <span style="color: #e2e8f0; font-size: 14px; font-weight: 600;">快狸（Kuaili）孤立测速素材留档</span>
  </div>
  <img src="/images/speedtest/快狸-节点测速实测.jpg" alt="快狸 2026-08-11 VLESS 节点测速原始截图" loading="lazy" decoding="async" style="max-width: 560px; width: 100%; border-radius: 6px; display: block;" />
  <figcaption style="margin-top: 0.5rem; font-size: 13px; color: #94a3b8;">快狸 2026-08-11 19:52:22 CST VLESS 测速截图留档（无对应价目与注册资料，暂不纳入可注册推荐）</figcaption>
</figure>

## 二、2026-08-09 历史批次待核实品牌

| 品牌名称 | 档案状态 | 主要数据缺口或历史瑕疵 | 档案与评测入口 |
| --- | --- | --- | --- |
| **宇宙云** | 历史待核实 | 仅知 ¥96/年起与 VLESS；无完整套餐明细，有 08-11 21:04 晚间 VLESS 截图 | [宇宙云档案](/brands/yuzhou) · [评测](/reviews/yuzhou) |
| **灵动云** | 历史待核实 | 2026-07 实测显示 OpenAI 解锁良好但 TikTok 失败、台湾落地偏欧、美国01 节点失效 | [灵动云档案](/brands/lingdong) · [复盘评测](/reviews/lingdong) |
| **浪网** | 历史待核实 | 入门档流量标注“截150G”存在截图遮挡；协议、设备数与测速均未实测 | [浪网档案](/brands/langwang) · [评测](/reviews/langwang) |
| **边缘节点 EdgeNova** | 历史待核实 | 缺逐地区测速与 AI/流媒体独立测试结果，不可推断支持 | [EdgeNova 档案](/brands/edgenova) · [评测](/reviews/edgenova) |

## 三、数据准入标准：为什么“孤立截图”不能直接上推荐榜？

在整理网络测速资料包时，技术上很容易只凭一张高带宽测速图（例如快狸在珠海联通 9Gbps 环境下的 VLESS 截图）就把品牌列进推荐列表。但从消费风险控制与 E-E-A-T 数据可追溯原则出发，仅有单张测试图而缺少配套文字档案会带来三类严重盲区：

1. **无法核对计费倍率与续费价格**：单张测速图只能说明某个时间点某条节点可用，无法确认节点是否按 `2×`/`3×` 高倍率扣减流量，更看不到实际月付起步价与年付退款条款。
2. **无法判断客户端准入门槛**：即使图中显示协议为 VLESS，仍无法区分该品牌到底向普通用户开放通用订阅导入，还是强制使用自研封闭客户端。
3. **缺少可验证售后入口与近期变更记录**：2026-08-09 历史批次与孤立图片之间可能存在官网域名迁移、套餐合并或已停服情况；在重新核验到完整官网价格表前，将其单独留在审计档案而非推荐榜，能最大程度避免读者踏空或踩坑。

<BrandComparison :slugs="['yuzhou', 'lingdong', 'langwang', 'edgenova']" caption="历史批次待核实四家品牌现存字段对比" />

## 四、给普通用户的实操核对清单

- 若你的目标只是稳定使用日常办公、OpenAI 与流媒体，**直接跳过“有图无价目”及“历史待核实”区间**，优先参考具备完整价格与可点击最新评测的主力品牌（如[光速云深度评测](/reviews/guangsuyun)或[微风网络评测](/reviews/weifeng)）。
- 如果自己手头已有某款未入库小众品牌的账号，也可自行参考 [代理节点自测与延迟丢包验证](/resources/node-check/speed-and-latency-tools) 与 [流媒体及 AI 解锁自检教程](/resources/node-check/unlock-and-ip-check) 在本地跑一次 21:00 晚高峰测试再决定是否续费。

<FaqSection />
