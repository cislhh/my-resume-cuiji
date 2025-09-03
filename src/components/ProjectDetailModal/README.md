# 项目详情功能

这个功能模块为简历项目添加了详细的项目展示能力，包括项目详情、截图展示和技术栈饼状图。

## 功能特性

### 🎯 核心功能

- **项目详情展示**：完整的项目信息展示，包括概述、功能、挑战、解决方案、成果等
- **截图展示**：支持项目截图的缩略图预览和全屏查看
- **技术栈可视化**：使用 ECharts 展示项目技术栈构成的饼状图
- **响应式设计**：完美适配 PC 和移动端

### 📱 交互体验

- **模态框展示**：点击项目卡片可打开详情模态框
- **标签页切换**：不同信息分类展示，便于浏览
- **图片预览**：支持缩略图和全屏预览
- **导航功能**：截图预览支持前后切换

## 文件结构

```
src/components/ProjectDetailModal/
├── README.md                    # 说明文档
├── index.ts                     # 组件导出
├── usage-example.tsx            # 使用示例
├── ProjectDetailModal.tsx       # 主组件
├── ProjectDetailModal.module.css # 主组件样式
├── TechStackChart.tsx           # 技术栈图表组件
├── TechStackChart.module.css    # 图表组件样式
├── ScreenshotGallery.tsx        # 截图展示组件
└── ScreenshotGallery.module.css # 截图组件样式
```

## 配置结构

### 项目配置文件 (`src/store/projectConfig.ts`)

```typescript
interface ProjectDetail {
  id: string; // 项目唯一标识
  name: string; // 项目名称
  overview: string; // 项目概述
  description: string; // 详细描述
  features: string[]; // 核心功能列表
  challenges: string[]; // 技术挑战
  solutions: string[]; // 解决方案
  results: string[]; // 项目成果
  technologies: TechStackItem[]; // 技术栈配置
  screenshots: ProjectScreenshot[]; // 截图配置
  demoUrl?: string; // 演示链接
  githubUrl?: string; // 源码链接
  duration: string; // 项目周期
  teamSize: number; // 团队规模
  role: string; // 担任角色
  responsibilities: string[]; // 主要职责
}
```

### 技术栈配置

```typescript
interface TechStackItem {
  name: string; // 技术名称
  percentage: number; // 占比百分比
  color: string; // 显示颜色
  category: "frontend" | "backend" | "database" | "devops" | "other";
  description?: string; // 技术描述
}
```

### 截图配置

```typescript
interface ProjectScreenshot {
  id: string; // 截图唯一标识
  title: string; // 截图标题
  description: string; // 截图描述
  imageUrl: string; // 主图片URL
  thumbnailUrl?: string; // 缩略图URL
  alt: string; // 图片alt属性
}
```

## 使用方法

### 1. 基本使用

```tsx
import { ProjectDetailModal } from "@/components/ProjectDetailModal";

const MyComponent = () => {
  const [visible, setVisible] = useState(false);
  const [projectId, setProjectId] = useState<string | null>(null);

  const handleViewProject = (id: string) => {
    setProjectId(id);
    setVisible(true);
  };

  return (
    <ProjectDetailModal
      visible={visible}
      projectId={projectId}
      onClose={() => setVisible(false)}
    />
  );
};
```

### 2. 在项目列表中使用

```tsx
import { Project } from "@/store/resumeConfig";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";

const ProjectCard = ({ project }: { project: Project }) => {
  const [detailVisible, setDetailVisible] = useState(false);

  return (
    <>
      <Card
        title={project.name}
        extra={
          project.hasDetails && (
            <Button onClick={() => setDetailVisible(true)}>查看详情</Button>
          )
        }
      >
        {/* 项目卡片内容 */}
      </Card>

      {project.hasDetails && (
        <ProjectDetailModal
          visible={detailVisible}
          projectId={project.detailId}
          onClose={() => setDetailVisible(false)}
        />
      )}
    </>
  );
};
```

## 配置项目详情

### 1. 添加新项目详情

在 `src/store/projectConfig.ts` 中添加新的项目配置：

```typescript
export const projectDetailsConfig: Record<string, ProjectDetail> = {
  新项目名称: {
    id: "新项目名称",
    name: "新项目名称",
    overview: "项目概述...",
    description: "详细描述...",
    features: ["功能1", "功能2"],
    challenges: ["挑战1", "挑战2"],
    solutions: ["解决方案1", "解决方案2"],
    results: ["成果1", "成果2"],
    technologies: [
      { name: "Vue3", percentage: 40, color: "#4FC08D", category: "frontend" },
    ],
    screenshots: [
      {
        id: "screenshot1",
        title: "截图标题",
        description: "截图描述",
        imageUrl: "/images/projects/screenshot1.png",
        thumbnailUrl: "/images/projects/thumbnails/screenshot1-thumb.png",
        alt: "截图描述",
      },
    ],
    duration: "2024.01 - 2024.06",
    teamSize: 3,
    role: "前端开发工程师",
    responsibilities: ["职责1", "职责2"],
  },
};
```

### 2. 更新简历配置

在 `src/store/resumeConfig.ts` 中为项目添加详情标识：

```typescript
{
  name: "新项目名称",
  // ... 其他配置
  hasDetails: true,
  detailId: "新项目名称"
}
```

### 3. 添加项目截图

1. 将截图文件放入 `public/images/projects/` 目录
2. 将缩略图放入 `public/images/projects/thumbnails/` 目录
3. 在项目配置中引用正确的图片路径

## 样式定制

### 主题色彩

可以通过修改 CSS 变量来定制主题色彩：

```css
:root {
  --primary-color: #1890ff;
  --success-color: #52c41a;
  --warning-color: #faad14;
  --error-color: #f5222d;
  --text-color: #333;
  --text-color-secondary: #666;
}
```

### 响应式断点

```css
/* 平板 */
@media (max-width: 1024px) {
}

/* 手机 */
@media (max-width: 768px) {
}

/* 小屏手机 */
@media (max-width: 480px) {
}
```

## 依赖项

- **React**: 18+
- **Ant Design**: 5+
- **ECharts**: 5+
- **TypeScript**: 4+

## 注意事项

1. **图片优化**：建议使用 WebP 格式并压缩图片以提升加载速度
2. **SEO 友好**：确保图片有合适的 alt 属性
3. **性能考虑**：大量截图时考虑懒加载
4. **浏览器兼容**：确保目标浏览器支持使用的 CSS 特性

## 扩展功能

### 可能的扩展方向

1. **视频展示**：支持项目演示视频
2. **代码展示**：集成代码高亮展示
3. **交互式演示**：嵌入可交互的项目演示
4. **评论系统**：添加项目评价和反馈
5. **分享功能**：支持项目详情分享

### 自定义组件

可以通过继承基础组件来创建自定义的项目展示组件：

```tsx
import { ProjectDetailModal } from "@/components/ProjectDetailModal";

class CustomProjectModal extends ProjectDetailModal {
  // 自定义实现
}
```
