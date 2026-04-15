# Pocket Flipcard Export

一个用于导出和管理 flipcard 数据的 React 数据管理工具，支持离线使用。

## 功能特点

- 📁 **数据导入**: 支持导入 JSON 和 SQLite 文件
- 🔍 **数据搜索**: 全文搜索和多重过滤
- 📊 **数据统计**: 查看数据概览和统计信息
- 📤 **数据导出**: 支持导出为 PDF、CSV、HTML 等格式
- 💾 **离线存储**: 所有数据存储在浏览器本地
- 🚫 **无需网络**: 完全离线运行

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
