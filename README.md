# Pocket Flipcard Export

一个用于导出和管理 flipcard 数据的 React 数据管理工具，支持离线使用。

> ⚠️ 本项目仅供学习交流，禁止用于商业盈利目的。

> ⚠️ 登录信息会保存在浏览器本地，请勿在公共设备使用，使用完毕后请及时登出或清除浏览器缓存。

## 功能特点

- 🔄 **数据同步**: 同步口袋48翻牌数据
- 📤 **多种导出**: 支持 CSV、JSON、SQL 等格式导出
- 🎵 **媒体导出**: 支持语音、视频翻牌文件导出
- 🔍 **智能搜索**: 多维度筛选和搜索
- 📊 **数据统计**: 按成员、鸡腿等维度统计
- 💾 **离线模式**: 导出静态 HTML，离线浏览
- 📱 **响应式设计**: 支持移动端和桌面端
- 🔐 **多账号**: 验证码登录、小号切换

## 技术栈

- React + TypeScript + Vite
- Tailwind CSS
- IndexedDB 本地存储
- jsPDF PDF 导出

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 构建离线版本
npm run build:offline
```

## 项目结构

```
src/
├── components/          # React 组件
├── utils/               # 工具函数
├── config/              # 配置文件
├── types/               # TypeScript 类型定义
├── App.tsx              # 主应用入口
├── main.tsx             # 应用启动文件
├── OfflineApp.tsx       # 离线模式应用
└── offline-main.tsx     # 离线模式启动文件
```
