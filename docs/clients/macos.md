---
title: macOS 苹果电脑代理客户端指南（Intel 与 Apple Silicon M 芯片区分）
shortTitle: macOS 客户端
description: 涵盖 Clash Verge Rev、FlClash、Clash Nyanpasu、v2rayN、Karing、Surge Mac 与 sing-box (SFM) 的 macOS 安装与架构区分教程。
date: '2026-11-19'
updatedDate: '2026-11-19'
category: 客户端文档
schemaType: SoftwareApplication
operatingSystem: macOS
keywords:
  - macOS Clash Verge
  - Mac 代理软件
  - Apple Silicon arm64
  - Surge Mac
author: 翻墙梯子技术组
faq:
  - q: Apple M1/M2/M3/M4 芯片的 MacBook 该下载哪个前缀的 Clash Verge 安装包？
    a: 务必选择文件名包含 aarch64 或 arm64 的 .dmg 安装包（原生 ARM64 编译性能更省电）；仅有 Intel Core 处理器的旧款 Mac 才选择 x64 / x86_64 版本。
  - q: 双击 DMG 安装后提示“已损坏，无法打开”或终端 git pull 依然不走代理怎么办？
    a: 开源软件未经苹果公证时可通过「系统设置 → 隐私与安全性 → 仍要打开」放行（先核验 GitHub 官方下载来源）；终端命令行请使用软件内“复制终端代理命令”或直接打开 TUN 模式。
---

# macOS 苹果电脑代理客户端指南（2026）

**直接结论：** MacBook / iMac 用户首选 **Clash Verge Rev** 或 **FlClash**；若需要与 iPhone iCloud 同步 Clash 配置可选 **Stash**，重度开发者抓包调试可选 **Surge Mac**。下载 DMG 前**务必先核对电脑芯片是 Apple Silicon (M1–M4) 还是 Intel**。

## macOS 主流客户端清单

<ClientDownloadCard platform="macos" />

## Intel 与 Apple Silicon 架构一眼识别法

点击屏幕左上角 ** 苹果图标 → 关于本机**：
- 若芯片显示 **Apple M1 / M2 / M3 / M4** 系列 → 下载文件名包含 **`aarch64`** 或 **`arm64`** 的 `.dmg` 安装包。
- 若处理器显示 **Intel Core i5 / i7 / i9** → 下载文件名包含 **`x64`** 或 **`x86_64`** 的 `.dmg` 安装包。

## macOS 常见问题提示

- **提示“应用已损坏，无法打开”**：非 App Store 签名的 GitHub 开源 DMG 首次打开常触发系统 Gatekeeper 拦截，需核对 SHA-256 确认来源官方后，通过“系统设置 → 隐私与安全性 → 仍要打开”或终端移除隔离属性放行。
- **终端命令行走代理**：macOS 默认终端（zsh / bash）通常不会自动继承系统代理，需点击 Clash Verge Rev 中的“复制终端代理命令”在当前会话注入 `http_proxy` 与 `https_proxy` 环境变量，或直接开启 TUN 虚拟网卡模式。

<FaqSection />

> 延伸阅读：[Clash Verge Rev 核心功能全解](/clash/verge/verge-core-features) · [系统代理与 TUN 虚拟网卡模式排查](/clash/troubleshoot/system-and-tun-errors) · [开发者终端代理配置指南](/vpn/accelerator/accelerator-vs-proxy) · [新手分步上手流程](/clash/tutorial/step-by-step-onboarding)
