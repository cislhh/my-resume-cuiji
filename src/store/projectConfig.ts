/**
 * 项目详情配置数据
 * 专门管理项目的详细信息、截图、技术栈等
 */

export interface ProjectScreenshot {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  thumbnailUrl?: string;
  alt: string;
}

export interface TechStackItem {
  name: string;
  percentage: number;
  color: string;
  category: "frontend" | "backend" | "database" | "devops" | "other";
  description?: string;
}

export interface ProjectDetail {
  id: string;
  name: string;
  overview: string;
  description: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  technologies: TechStackItem[];
  screenshots: ProjectScreenshot[];
  demoUrl?: string;
  githubUrl?: string;
  duration: string;
  teamSize: number;
  role: string;
  responsibilities: string[];
}

// 项目详情配置数据
export const projectDetailsConfig: Record<string, ProjectDetail> = {
  智服工单云平台: {
    id: "智服工单云平台",
    name: "智服工单云平台",
    overview:
      "基于Vue3技术栈的SaaS级智能客服系统，从零主导构建前端架构设计和工单核心模块开发",
    description:
      "这是一个企业级的智能客服工单管理系统，采用现代化的前端技术栈，实现了高性能、高可用的SaaS服务。系统支持工单全生命周期管理，从创建、分配到解决、关闭的完整流程，同时提供强大的数据分析和可视化功能。",
    features: [
      "动态表单引擎，支持20+字段类型及规则驱动渲染",
      "可视化状态流引擎，管理工单8种状态转换",
      "万级工单数据虚拟滚动+分片加载",
      "复合查询构建器，支持15+条件组合搜索",
      "SSR数据看板，实现工单响应热力图",
      "客服饱和度环形图等数据可视化",
      "紧急工单自动触发SLA倒计时",
      "URL参数持久化，支持深度链接",
    ],
    challenges: [
      "万级工单数据的性能优化问题",
      "复杂业务逻辑的状态管理",
      "多端适配和响应式设计",
      "实时数据同步和状态更新",
      "首屏加载时间优化",
    ],
    solutions: [
      "采用虚拟滚动技术，实现大数据量列表的高性能渲染",
      "使用Pinia设计多层状态树，解耦业务逻辑",
      "基于Vue3 Composition API重构组件架构",
      "实施分片加载策略，优化数据获取性能",
      "运用Nuxt.js实现SSR，将首屏加载时间优化至0.9秒",
    ],
    results: [
      "首屏加载时间从3.2秒优化至0.9秒，提升72%",
      "实现40+高复用业务组件，提升开发效率30%",
      "支持万级工单数据流畅操作，无卡顿现象",
      "建立完善的技术文档和培训体系",
      "获得客户高度认可，系统稳定性达99.9%",
    ],
    technologies: [
      {
        name: "Vue3",
        percentage: 35,
        color: "#4FC08D",
        category: "frontend",
        description: "核心前端框架",
      },
      {
        name: "TypeScript",
        percentage: 20,
        color: "#3178C6",
        category: "frontend",
        description: "类型安全",
      },
      {
        name: "Vite",
        percentage: 10,
        color: "#646CFF",
        category: "frontend",
        description: "构建工具",
      },
      {
        name: "Nuxt.js",
        percentage: 15,
        color: "#00DC82",
        category: "frontend",
        description: "SSR框架",
      },
      {
        name: "Pinia",
        percentage: 10,
        color: "#FFD700",
        category: "frontend",
        description: "状态管理",
      },
      {
        name: "ECharts",
        percentage: 5,
        color: "#AA4643",
        category: "frontend",
        description: "数据可视化",
      },
      {
        name: "Element Plus",
        percentage: 5,
        color: "#409EFF",
        category: "frontend",
        description: "UI组件库",
      },
    ],
    screenshots: [
      {
        id: "dashboard",
        title: "工单管理仪表板",
        description: "展示工单统计、状态分布和关键指标",
        imageUrl: "/images/projects/placeholder.svg",
        thumbnailUrl: "/images/projects/placeholder.svg",
        alt: "智服工单云平台仪表板",
      },
      {
        id: "ticket-list",
        title: "工单列表页面",
        description: "支持虚拟滚动的工单列表，可处理万级数据",
        imageUrl: "/images/projects/placeholder.svg",
        thumbnailUrl: "/images/projects/placeholder.svg",
        alt: "工单列表页面",
      },
      {
        id: "dynamic-form",
        title: "动态表单引擎",
        description: "支持20+字段类型的动态表单配置",
        imageUrl: "/images/projects/placeholder.svg",
        thumbnailUrl: "/images/projects/placeholder.svg",
        alt: "动态表单引擎",
      },
      {
        id: "data-visualization",
        title: "数据可视化看板",
        description: "工单响应热力图和客服饱和度分析",
        imageUrl: "/images/projects/placeholder.svg",
        thumbnailUrl: "/images/projects/placeholder.svg",
        alt: "数据可视化看板",
      },
    ],
    demoUrl: "https://demo.zhifu.com",
    duration: "2024.12 - 至今",
    teamSize: 2,
    role: "前端架构师",
    responsibilities: [
      "主导前端技术栈选型和架构设计",
      "开发核心业务组件和通用组件",
      "优化系统性能和用户体验",
      "编写技术文档和培训团队成员",
      "与后端团队协作完成接口设计",
    ],
  },

  模板化网站定制系统: {
    id: "模板化网站定制系统",
    name: "模板化网站定制系统",
    overview:
      "为分公司快速搭建官方网站的模板化系统，解决分公司缺乏IT人员的问题",
    description:
      "这是一个创新的网站建设解决方案，专为大型企业的各地分公司设计。系统提供丰富的模板和组件，让非技术人员也能在短时间内搭建出专业的官方网站，大大降低了企业官网建设的门槛和成本。",
    features: [
      "丰富的网站模板库，涵盖多种行业和风格",
      "拖拽式页面编辑器，所见即所得",
      "SEO优化配置，提升搜索引擎排名",
      "响应式设计，完美适配PC和移动端",
      "内容管理系统，支持多语言",
      "域名绑定和SSL证书配置",
      "网站性能监控和分析",
      "一键发布和版本管理",
    ],
    challenges: [
      "非技术人员的易用性设计",
      "SEO优化和搜索引擎友好性",
      "多端适配和性能优化",
      "模板的灵活性和可定制性",
      "系统的稳定性和安全性",
    ],
    solutions: [
      "采用Nuxt3框架，内置SEO优化功能",
      "设计直观的拖拽式编辑器界面",
      "实现响应式模板系统，自动适配不同设备",
      "建立完善的权限管理和安全机制",
      "提供详细的使用文档和视频教程",
    ],
    results: [
      "分公司官网建设时间从2周缩短至2天",
      "SEO搜索率提升300%",
      "在长春公司试运营成功，获得好评",
      "预计推广到20+分公司，节省成本50万+",
      "建立标准化网站建设流程",
    ],
    technologies: [
      {
        name: "Nuxt3",
        percentage: 40,
        color: "#00DC82",
        category: "frontend",
        description: "SSR框架",
      },
      {
        name: "Vue3",
        percentage: 25,
        color: "#4FC08D",
        category: "frontend",
        description: "前端框架",
      },
      {
        name: "Element Plus",
        percentage: 15,
        color: "#409EFF",
        category: "frontend",
        description: "UI组件库",
      },
      {
        name: "TypeScript",
        percentage: 10,
        color: "#3178C6",
        category: "frontend",
        description: "类型系统",
      },
      {
        name: "Tailwind CSS",
        percentage: 5,
        color: "#06B6D4",
        category: "frontend",
        description: "样式框架",
      },
      {
        name: "Node.js",
        percentage: 5,
        color: "#339933",
        category: "backend",
        description: "后端服务",
      },
    ],
    screenshots: [
      {
        id: "template-gallery",
        title: "模板库展示",
        description: "丰富的网站模板，涵盖多种行业和风格",
        imageUrl: "/images/projects/placeholder.svg",
        thumbnailUrl: "/images/projects/placeholder.svg",
        alt: "模板库展示",
      },
      {
        id: "page-editor",
        title: "页面编辑器",
        description: "拖拽式编辑器，所见即所得",
        imageUrl: "/images/projects/placeholder.svg",
        thumbnailUrl: "/images/projects/placeholder.svg",
        alt: "页面编辑器",
      },
      {
        id: "seo-config",
        title: "SEO配置",
        description: "专业的SEO优化配置界面",
        imageUrl: "/images/projects/placeholder.svg",
        thumbnailUrl: "/images/projects/placeholder.svg",
        alt: "SEO配置界面",
      },
      {
        id: "responsive-preview",
        title: "响应式预览",
        description: "实时预览不同设备下的显示效果",
        imageUrl: "/images/projects/placeholder.svg",
        thumbnailUrl: "/images/projects/placeholder.svg",
        alt: "响应式预览",
      },
    ],
    duration: "2023.08 - 2024.11",
    teamSize: 3,
    role: "前端开发负责人",
    responsibilities: [
      "负责系统整体架构设计",
      "开发核心编辑器和模板系统",
      "实现SEO优化和性能优化",
      "设计用户友好的操作界面",
      "编写技术文档和用户手册",
    ],
  },

  认证审核统计系统: {
    id: "认证审核统计系统",
    name: "认证审核统计系统",
    overview: "解决认证流程复杂问题的自动化统计和推送系统",
    description:
      "这是一个专门为认证行业设计的业务管理系统，通过自动化流程和智能统计，大幅提升了认证工作的效率和准确性。系统解决了传统认证流程中人员协调复杂、财务跟踪困难等痛点问题。",
    features: [
      "自动化项目统计和实时推送",
      "智能任务调度和人员安排",
      "临时群组管理和通知系统",
      "财务款项自动整理和跟踪",
      "项目进度可视化监控",
      "多角色权限管理",
      "数据报表和分析功能",
      "移动端支持",
    ],
    challenges: [
      "复杂的认证流程梳理和优化",
      "多部门协作的沟通效率问题",
      "财务数据的准确性和实时性",
      "系统集成和数据同步",
      "用户体验的简化设计",
    ],
    solutions: [
      "设计灵活的流程配置引擎",
      "建立统一的消息通知机制",
      "实现财务数据的自动化处理",
      "采用微服务架构，提高系统可扩展性",
      "优化界面设计，降低学习成本",
    ],
    results: [
      "计调安排人员工作量减少70%",
      "财务处理效率提升80%",
      "项目完成时间缩短30%",
      "系统错误率降低至0.1%",
      "用户满意度达到95%",
    ],
    technologies: [
      {
        name: "Vue2",
        percentage: 30,
        color: "#4FC08D",
        category: "frontend",
        description: "前端框架",
      },
      {
        name: "ElementUI",
        percentage: 20,
        color: "#409EFF",
        category: "frontend",
        description: "UI组件库",
      },
      {
        name: "Vuex",
        percentage: 15,
        color: "#4FC08D",
        category: "frontend",
        description: "状态管理",
      },
      {
        name: "Axios",
        percentage: 10,
        color: "#5A29E4",
        category: "frontend",
        description: "HTTP客户端",
      },
      {
        name: "Node.js",
        percentage: 15,
        color: "#339933",
        category: "backend",
        description: "后端服务",
      },
      {
        name: "MySQL",
        percentage: 10,
        color: "#4479A1",
        category: "database",
        description: "数据库",
      },
    ],
    screenshots: [
      {
        id: "project-dashboard",
        title: "项目仪表板",
        description: "展示项目统计和关键指标",
        imageUrl: "/images/projects/placeholder.svg",
        thumbnailUrl: "/images/projects/placeholder.svg",
        alt: "认证审核统计系统仪表板",
      },
      {
        id: "task-scheduling",
        title: "任务调度",
        description: "智能任务分配和人员安排",
        imageUrl: "/images/projects/placeholder.svg",
        thumbnailUrl: "/images/projects/placeholder.svg",
        alt: "任务调度界面",
      },
      {
        id: "financial-tracking",
        title: "财务跟踪",
        description: "自动化的财务款项管理",
        imageUrl: "/images/projects/placeholder.svg",
        thumbnailUrl: "/images/projects/placeholder.svg",
        alt: "财务跟踪界面",
      },
      {
        id: "notification-center",
        title: "通知中心",
        description: "统一的消息通知和管理",
        imageUrl: "/images/projects/placeholder.svg",
        thumbnailUrl: "/images/projects/placeholder.svg",
        alt: "通知中心",
      },
    ],
    duration: "2023.02 - 2023.08",
    teamSize: 4,
    role: "前端开发工程师",
    responsibilities: [
      "负责前端界面设计和开发",
      "实现用户交互和数据处理",
      "优化系统性能和用户体验",
      "与后端团队协作完成接口对接",
      "参与系统测试和问题修复",
    ],
  },
};

// 获取项目详情的工具函数
export const getProjectDetail = (projectName: string): ProjectDetail | null => {
  return projectDetailsConfig[projectName] || null;
};

// 获取所有项目详情列表
export const getAllProjectDetails = (): ProjectDetail[] => {
  return Object.values(projectDetailsConfig);
};

// 获取技术栈分类统计
export const getTechStackStats = (projectName: string) => {
  const project = getProjectDetail(projectName);
  if (!project) return null;

  const stats = project.technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = { total: 0, items: [] };
    }
    acc[tech.category].total += tech.percentage;
    acc[tech.category].items.push(tech);
    return acc;
  }, {} as Record<string, { total: number; items: TechStackItem[] }>);

  return stats;
};

export default projectDetailsConfig;
