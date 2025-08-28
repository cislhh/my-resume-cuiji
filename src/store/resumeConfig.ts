/**
 * 简历配置数据
 * 包含所有简历内容的配置信息
 */

// Section 标识符常量 - 统一管理所有 section 的 ID
export const SECTION_IDS = {
  BASIC_INFO: "basic-info",
  CONTACT: "contact",
  SKILLS: "skills",
  EXPERIENCES: "experiences",
  PROJECTS: "projects",
  EDUCATION: "education",
  OTHER_INFO: "other-info",
} as const;

// Section 配置对象 - 配置驱动的导航菜单
export interface SectionConfig {
  id: string;
  label: string;
  icon: string;
  order: number;
  hasChildren?: boolean;
}

export const RESUME_SECTIONS_CONFIG: Record<string, SectionConfig> = {
  [SECTION_IDS.BASIC_INFO]: {
    id: SECTION_IDS.BASIC_INFO,
    label: "基本信息",
    icon: "UserOutlined",
    order: 1,
  },
  [SECTION_IDS.CONTACT]: {
    id: SECTION_IDS.CONTACT,
    label: "联系方式",
    icon: "ContactsOutlined",
    order: 2,
  },
  [SECTION_IDS.SKILLS]: {
    id: SECTION_IDS.SKILLS,
    label: "技能专长",
    icon: "ToolOutlined",
    order: 3,
  },
  [SECTION_IDS.EXPERIENCES]: {
    id: SECTION_IDS.EXPERIENCES,
    label: "工作经验",
    icon: "BankOutlined",
    order: 4,
    hasChildren: true,
  },
  [SECTION_IDS.PROJECTS]: {
    id: SECTION_IDS.PROJECTS,
    label: "项目经验",
    icon: "ProjectOutlined",
    order: 5,
    hasChildren: true,
  },
  [SECTION_IDS.EDUCATION]: {
    id: SECTION_IDS.EDUCATION,
    label: "教育背景",
    icon: "BookOutlined",
    order: 6,
  },
  [SECTION_IDS.OTHER_INFO]: {
    id: SECTION_IDS.OTHER_INFO,
    label: "其他信息",
    icon: "TrophyOutlined",
    order: 7,
  },
} as const;

export interface Skill {
  name: string;
  level: number; // 1-5级
  category: "frontend" | "backend" | "devops" | "other";
  description?: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
  achievements: string[];
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  role: string;
  startDate: string;
  endDate?: string;
  link?: string;
  highlights: string[];
}

export interface Contact {
  email: string;
  phone: string;
  github?: string;
  linkedin?: string;
  website?: string;
}

export interface ResumeConfig {
  // 基本信息
  basicInfo: {
    name: string;
    title: string;
    summary: string;
    avatar?: string;
    location: string;
    yearsOfExperience: number;
    education: string;
  };

  // 联系方式
  contact: Contact;

  // 技能
  skills: Skill[];

  // 工作经验
  experiences: Experience[];

  // 教育背景
  education: Education;

  // 项目经验
  projects: Project[];

  // 其他信息
  certifications?: string[];
  languages?: string[];
  interests?: string[];
}

// 简历配置数据
export const resumeConfig: ResumeConfig = {
  basicInfo: {
    name: "王立雨",
    title: "高级前端开发工程师",
    summary:
      "5年前端开发经验，专注于现代Web应用开发，熟练掌握React、Vue、TypeScript等技术栈，具备良好的代码质量和用户体验意识。",
    location: "长春",
    yearsOfExperience: 5,
    education: "本科",
  },

  contact: {
    email: "wangliyu@example.com",
    phone: "138-0000-0000",
    github: "https://github.com/wangliyu",
    linkedin: "https://linkedin.com/in/wangliyu",
    website: "https://wangliyu.dev",
  },

  skills: [
    {
      name: "React",
      level: 5,
      category: "frontend",
      description: "熟练掌握React Hooks、Context、性能优化等",
    },
    {
      name: "Vue.js",
      level: 4,
      category: "frontend",
      description: "熟练使用Vue 2/3，了解Composition API",
    },
    {
      name: "TypeScript",
      level: 4,
      category: "frontend",
      description: "熟练使用TS进行类型定义和开发",
    },
    {
      name: "Next.js",
      level: 4,
      category: "frontend",
      description: "熟练使用App Router和SSR/SSG",
    },
    {
      name: "Tailwind CSS",
      level: 5,
      category: "frontend",
      description: "熟练使用Tailwind进行响应式设计",
    },
    {
      name: "Node.js",
      level: 3,
      category: "backend",
      description: "了解Express、Koa等后端框架",
    },
    {
      name: "Git",
      level: 4,
      category: "devops",
      description: "熟练使用Git进行版本控制",
    },
    {
      name: "Docker",
      level: 3,
      category: "devops",
      description: "了解容器化部署",
    },
  ],

  experiences: [
    {
      company: "某互联网公司",
      position: "高级前端开发工程师",
      startDate: "2022-03",
      endDate: "2024-01",
      description: [
        "负责公司核心产品的前端架构设计和开发",
        "带领3-5人前端团队，制定开发规范和最佳实践",
        "优化前端性能，提升用户体验",
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GSAP"],
      achievements: [
        "重构前端架构，提升页面加载速度30%",
        "建立前端组件库，提升开发效率",
        "获得年度最佳员工奖",
      ],
    },
    {
      company: "某科技公司",
      position: "前端开发工程师",
      startDate: "2020-06",
      endDate: "2022-02",
      description: [
        "参与多个Web应用的前端开发",
        "与设计团队协作，实现高质量的用户界面",
        "参与前端技术选型和架构讨论",
      ],
      technologies: ["Vue.js", "JavaScript", "SCSS", "Webpack"],
      achievements: [
        "完成5个重要项目的前端开发",
        "优化构建流程，减少构建时间50%",
        "获得季度优秀员工奖",
      ],
    },
    {
      company: "某创业公司",
      position: "前端开发工程师",
      startDate: "2019-07",
      endDate: "2020-05",
      description: [
        "负责公司官网和后台管理系统的前端开发",
        "参与产品需求分析和功能设计",
        "协助后端API接口设计",
      ],
      technologies: ["React", "JavaScript", "CSS3", "Axios"],
      achievements: [
        "独立完成公司官网开发",
        "实现响应式设计，支持多端访问",
        "获得团队认可奖",
      ],
    },
  ],

  education: {
    school: "某大学",
    degree: "学士学位",
    major: "计算机科学与技术",
    startDate: "2015-09",
    endDate: "2019-06",
    description:
      "主修课程包括数据结构、算法、计算机网络、操作系统等计算机基础课程",
  },

  projects: [
    {
      name: "企业级管理系统",
      description:
        "基于React + TypeScript的企业级后台管理系统，包含用户管理、权限控制、数据统计等功能",
      technologies: ["React", "TypeScript", "Ant Design", "Redux", "Axios"],
      role: "前端负责人",
      startDate: "2023-01",
      endDate: "2023-06",
      highlights: [
        "使用TypeScript提升代码质量",
        "实现复杂的权限控制逻辑",
        "优化大数据量表格性能",
      ],
    },
    {
      name: "电商平台",
      description: "响应式电商网站，支持商品展示、购物车、订单管理等功能",
      technologies: ["Vue.js", "Vuex", "SCSS", "Element UI"],
      role: "前端开发",
      startDate: "2021-03",
      endDate: "2021-08",
      highlights: ["实现响应式设计", "集成支付接口", "优化移动端体验"],
    },
    {
      name: "数据可视化大屏",
      description: "基于ECharts的数据可视化项目，展示公司业务数据",
      technologies: ["Vue.js", "ECharts", "WebSocket", "Canvas"],
      role: "前端开发",
      startDate: "2020-09",
      endDate: "2020-12",
      highlights: ["实现实时数据更新", "设计美观的图表样式", "优化大屏适配"],
    },
  ],

  certifications: [
    "PMP项目管理认证",
    "AWS解决方案架构师认证",
    "Google前端开发认证",
  ],

  languages: ["中文（母语）", "英语（熟练）"],

  interests: ["前端新技术探索", "开源项目贡献", "技术博客写作", "摄影和旅行"],
};

export default resumeConfig;
