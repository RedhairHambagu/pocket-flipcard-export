# Flipcard 离线模式部署指南

## 概述

这个项目提供了一个独立的离线模式，可以单独部署到GitHub Pages，让用户无需完整应用即可使用离线数据管理功能。

## 功能特性

- 📁 数据导入：支持JSON和SQLite文件导入
- 🔍 数据搜索：全文搜索和多重过滤
- 📊 数据统计：查看数据概览和统计信息
- 📤 数据导出：支持PDF、CSV、HTML等多种格式导出
- 💾 离线存储：所有数据存储在浏览器本地
- 🚫 无网络依赖：完全离线运行

## 本地开发

### 构建离线模式
```bash
npm run build:offline
```

### 预览离线模式
```bash
npm run preview:offline
```

## GitHub Pages 部署

### 自动部署

1. 将代码推送到GitHub仓库的`main`或`master`分支
2. GitHub Actions会自动构建和部署离线模式到GitHub Pages
3. 访问 `https://[你的用户名].github.io/[仓库名]/` 即可使用离线功能

### 手动启用GitHub Pages

如果是第一次部署，需要在仓库设置中启用GitHub Pages：

1. 进入仓库的Settings页面
2. 找到"Pages"设置
3. 在"Source"中选择"GitHub Actions"
4. 保存设置

### 访问地址

部署成功后，可通过以下地址访问：
- **离线模式首页**: `https://[你的用户名].github.io/[仓库名]/`

## 使用说明

1. **首次使用**: 访问离线模式页面，导入你的数据文件
2. **数据导入**: 支持拖拽导入JSON或SQLite数据文件
3. **数据查看**: 导入成功后可以浏览、搜索和过滤数据
4. **数据导出**: 可以将数据导出为PDF、CSV、HTML等格式

## 技术细节

- **框架**: React + TypeScript + Vite
- **样式**: Tailwind CSS
- **存储**: IndexedDB (浏览器本地存储)
- **构建**: 独立构建配置，不包含在线功能
- **部署**: GitHub Actions + GitHub Pages

## 文件结构

```
├── src/
│   ├── offline-main.tsx          # 离线模式入口文件
│   ├── OfflineApp.tsx             # 离线模式应用组件
│   └── components/
│       ├── OfflineModePage.tsx    # 离线模式主页
│       ├── Dashboard.tsx          # 数据展示页面
│       └── FileDropZone.tsx       # 文件导入组件
├── offline.html                   # 离线模式HTML模板
├── vite.config.offline.ts         # 离线模式Vite配置
└── .github/workflows/
    └── deploy-offline.yml         # GitHub Actions部署配置
```

## 常见问题

**Q: 数据是否安全？**
A: 所有数据仅存储在您的浏览器本地，不会上传到任何服务器。

**Q: 可以在手机上使用吗？**
A: 可以，离线模式支持响应式设计，可在手机和平板上使用。

**Q: 数据导入有大小限制吗？**
A: 受浏览器存储限制，建议单个文件不超过100MB。


部署构建文件到独立GitHub仓库的方案

方案概述

1. 本地构建：在当前项目中构建离线模式
2. 推送构建文件：将 dist-offline 目录的内容推送到您的干净仓库
3. GitHub Pages部署：在目标仓库启用Pages功能

具体步骤

1. 本地构建离线模式

npm run build:offline
cd dist-offline && cp offline.html index.html  # 创建GitHub Pages需要的index.html

2. 推送到目标仓库

# 进入构建目录
cd dist-offline

# 初始化git（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Deploy offline mode"

# 添加远程仓库（替换为您的仓库地址）
git remote add origin https://github.com/yourusername/your-clean-repo.git

# 推送到main分支
git push -u origin main

3. 在目标仓库启用GitHub Pages

- 仓库设置 → Pages → Source选择"Deploy from a branch"
- 选择main分支，根目录

