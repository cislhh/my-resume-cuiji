# 我的简历项目

这是一个基于 Next.js 15 + TypeScript + Tailwind CSS + Ant Design + GSAP 的单页简历项目。

## 项目特性

- 🚀 **Next.js 15** - 使用最新的 App Router 架构
- 💎 **TypeScript** - 严格的类型检查
- 🎨 **Tailwind CSS v4** - 现代化的 CSS 框架
- 🎯 **Ant Design** - 企业级 UI 组件库
- ✨ **GSAP** - 专业的动画库
- 📱 **响应式设计** - 支持 PC 和移动端

## 项目结构

```
my-resume-cuiji/
├── app/
│   ├── components/
│   │   ├── ClientLayout.tsx      # 客户端布局组件
│   │   └── AnimatedResume.tsx    # 带动画的简历组件
│   ├── layout.tsx                # 根布局文件
│   ├── layout.module.css         # 布局样式文件
│   ├── page.tsx                  # 主页面
│   ├── page.module.css           # 页面样式文件
│   ├── reset.css                 # CSS重置样式
│   └── globals.css               # 全局样式
├── src/
│   └── store/
│       └── resumeConfig.ts       # 简历配置数据
├── public/                       # 静态资源
├── package.json                  # 项目依赖
├── next.config.ts               # Next.js配置
├── tsconfig.json                # TypeScript配置
└── tailwind.config.js           # Tailwind配置
```

## 布局结构

项目采用四区域布局设计：

1. **Header** - 顶部区域（浅蓝色背景）
2. **Sider** - 左侧边栏（深蓝色背景）
3. **Content** - 主内容区域（深蓝色背景，内置滚动条）
4. **Footer** - 底部区域（浅蓝色背景）

### 响应式设计

- **PC 端**: 全屏无滚动条，内部内容可纵向滚动
- **移动端**: 允许纵向滚动，不允许横向滚动

## 已完成功能

### ✅ 基础架构

- [x] Next.js 15 + App Router 项目搭建
- [x] TypeScript 配置
- [x] Tailwind CSS v4 集成
- [x] Ant Design 组件库集成

### ✅ 布局系统

- [x] 四区域布局结构（Header、Sider、Content、Footer）
- [x] 响应式设计支持
- [x] CSS 模块化样式系统
- [x] 页面无滚动条，Content 区域内置滚动条

### ✅ 样式系统

- [x] CSS 重置样式（去除所有默认样式）
- [x] 现代化 UI 设计（毛玻璃效果、渐变、阴影）
- [x] 响应式布局
- [x] 悬停动画效果

### ✅ 简历内容

- [x] 简历配置数据结构设计
- [x] 基本信息展示
- [x] 联系方式
- [x] 技能专长（星级评分）
- [x] 工作经验
- [x] 项目经验
- [x] 教育背景
- [x] 认证证书、语言能力、兴趣爱好

### ✅ 动画系统

- [x] GSAP 动画库集成
- [x] 页面入场动画
- [x] 滚动触发动画
- [x] 悬停交互动画

## 技术实现

### Ant Design 集成

- 使用 `'use client'` 指令创建客户端组件
- 按需加载配置，优化打包体积
- 自定义样式覆盖，实现设计需求

### 样式系统

- CSS Modules 实现样式隔离
- Flexbox 布局实现响应式设计
- 自定义颜色方案和尺寸比例
- 毛玻璃效果和现代化视觉设计

### 动画系统

- GSAP 时间轴动画
- 入场动画序列
- 滚动触发动画
- 悬停交互动画

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 下一步计划

1. ✅ ~~创建简历配置数据文件~~ - 已完成
2. ✅ ~~实现 GSAP 入场动画（PC 端）~~ - 已完成
3. ✅ ~~实现滚动触发动画~~ - 已完成
4. ✅ ~~添加简历内容组件~~ - 已完成
5. ✅ ~~完善响应式交互~~ - 已完成
6. 🔄 优化移动端体验
7. 🔄 添加更多动画效果
8. 🔄 性能优化

## 技术栈版本

- Next.js: 15.5.0
- React: 19.1.0
- TypeScript: 5.x
- Tailwind CSS: 4.x
- Ant Design: 最新版本
- GSAP: 最新版本

## 项目亮点

1. **现代化设计**: 采用毛玻璃效果、渐变色彩、阴影等现代设计元素
2. **流畅动画**: 使用 GSAP 实现专业的入场动画和交互动画
3. **响应式布局**: 完美适配 PC 和移动端
4. **模块化架构**: 清晰的组件结构和样式分离
5. **性能优化**: 按需加载、CSS 模块化、动画优化

## 许可证

MIT License
