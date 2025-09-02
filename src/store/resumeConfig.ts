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
  personalAdvantages?: string[];
}

// 简历配置数据
export const resumeConfig: ResumeConfig = {
  basicInfo: {
    name: "王立雨",
    title: "Web 前端开发工程师",
    summary:
      "资深前端工程师，6年实战经验，精通Vue、React及全栈开发，主导过多个SaaS项目从0到1搭建，擅长团队协作与性能优化，追求极致用户体验。",
    location: "南关区",
    yearsOfExperience: 6,
    education: "本科",
  },

  contact: {
    email: "1353761785@qq.com",
    phone: "18644933476",
    github: "https://github.com/wangliyu",
    linkedin: "https://linkedin.com/in/wangliyu",
    website: "https://wangliyu.dev",
  },

  skills: [
    {
      name: "HTML+CSS",
      level: 5,
      category: "frontend",
      description:
        "熟练HTML+CSS/HTML5+CSS3，响应式布局/移动端页面布局、flex、浮动布局等布局模式",
    },
    {
      name: "JavaScript",
      level: 5,
      category: "frontend",
      description: "熟练ES5，熟悉ES6特性，掌握现代JavaScript开发",
    },
    {
      name: "Vue.js",
      level: 5,
      category: "frontend",
      description: "熟练使用Vue2/3框架及Vue全家桶，掌握Composition API",
    },
    {
      name: "React",
      level: 4,
      category: "frontend",
      description: "熟练使用React（React-Hook）搭配Ant Design搭建应用",
    },
    {
      name: "Nuxt3",
      level: 4,
      category: "frontend",
      description: "使用Nuxt3开发网站，掌握SSR和全栈开发",
    },
    {
      name: "TypeScript",
      level: 4,
      category: "frontend",
      description: "熟练使用TypeScript进行类型定义和开发",
    },
    {
      name: "Ant Design",
      level: 5,
      category: "frontend",
      description:
        "熟悉Ant Design、Ant Design Pro、Element-UI/PLUS等第三方组件库",
    },
    {
      name: "Axios",
      level: 5,
      category: "frontend",
      description: "熟练使用Axios、umi-request等快速完成数据交互",
    },
    {
      name: "Git",
      level: 5,
      category: "devops",
      description: "熟练使用Git管理仓库，掌握版本控制最佳实践",
    },
    {
      name: "Bootstrap4",
      level: 3,
      category: "frontend",
      description: "Bootstrap4基础使用，快速构建响应式界面",
    },
    {
      name: "团队管理",
      level: 4,
      category: "other",
      description: "小团队管理，项目把控进度从不延期",
    },
  ],

  experiences: [
    {
      company: "沈阳丰星科技股份有限公司",
      position: "前端开发工程师",
      startDate: "2024-12",
      endDate: "至今",
      description: [
        "任职期间对新SaaS项目（客服系统）前端技术体系从0到1搭建（工单，系统，人员，工作流）",
        "技术选型与架构定型：主导项目初期前端技术栈论证，基于Vue3 + TypeScript + Vite构建高性能技术方案，替代传统Vue2选项式API，提升代码可维护性及开发效率30%",
        "模块化工程架构：设计并落地分层模块化架构（核心业务层/通用组件层/工具服务层），实现40+可复用业务组件，封装统一请求拦截、权限控制、错误监控等基础服务模块，降低业务代码耦合度",
        "编写项目专用技术文档，培训新进人员，帮助实习生尽快融入项目开发，为项目组的人员更替节省时间",
        "用Nuxt开发部分中间件",
      ],
      technologies: [
        "Vue3",
        "TypeScript",
        "Vite",
        "Nuxt",
        "Pinia",
        "Element Plus",
      ],
      achievements: [
        "主导SaaS客服系统前端架构从0到1搭建",
        "提升代码可维护性及开发效率30%",
        "实现40+可复用业务组件",
        "建立完善的技术文档和培训体系",
      ],
    },
    {
      company: "北京世标认证中心有限公司吉林省分公司",
      position: "前端工程师",
      startDate: "2023-02",
      endDate: "2024-11",
      description: [
        "主要负责公司三大项目的前端项目搭建以及重构开发工作",
        "次要工作是带实习生以及小组成员完成既定的工作",
        "在项目开发以外，优化原有审核系统功能，更改系统交互，性能问题",
        "公司内部认证审核统计系统（PC），使用技术栈是Vue2+ElementUI",
        "CRM认证客户管理管理系统（PC, H5），使用技术栈是Vue3+ElementPlus+Vant",
        "总公司官网系统维护，重构为Nuxt开发，优化SEO",
      ],
      technologies: [
        "Vue2",
        "Vue3",
        "ElementUI",
        "ElementPlus",
        "Vant",
        "Nuxt",
      ],
      achievements: [
        "完成公司三大项目的前端搭建和重构",
        "带领团队按时高质量完成项目开发",
        "优化系统性能和用户体验",
        "重构官网系统，提升SEO效果",
      ],
    },
    {
      company: "北京沃丰时代数据科技有限公司",
      position: "前端开发工程师",
      startDate: "2021-07",
      endDate: "2022-11",
      description: [
        "主要负责开发工单应用平台，根据客户需求持续迭代主项目",
        "日常维护公司官网，根据市场部需求进行修改，用Next替换原官网旧技术",
        "独立开发公司服务中间件技术PaaS，为公司提供低代码平台操作搭建页面和接口调用，简单培训实施人员即可上手使用",
        "参与公司前端底层重构，将原有Ember技术替换为React Hooks为主的代码框架",
        "独立开发公司新工单SDK移动端，可以对接入网页插件，客服对话窗口等",
      ],
      technologies: [
        "React",
        "React Hooks",
        "Next.js",
        "Ember",
        "PaaS",
        "低代码",
      ],
      achievements: [
        "工单项目迭代期间少有bug产生，在职期间没有出现过故障、回滚的致命错误",
        "产品需求按时上线，UI优化获得客户好评",
        "统筹官网更新计划，解决多项原有加载缓慢问题，为公司提供SEO优化方案，提升客户点击率",
        "独立开发公司服务中间件技术PaaS，将原有需要外包出去的中间件服务改为公司内部消化，节省大量成本",
        "将平台包装提供有需求的客户尝试购买使用",
      ],
    },
    {
      company: "北京融易通信息技术有限公司",
      position: "前端开发工程师",
      startDate: "2020-11",
      endDate: "2021-07",
      description: [
        "在职期间担任项目组小组长，和组员按时高质完成迭代项目",
        "从页面开发，接口联调，逐一进行，取得了完美的成绩",
        "本人在项目中的主要贡献是开发组件，客户端调试，页面书写以及接口调试",
      ],
      technologies: ["前端开发", "组件开发", "接口联调", "团队协作"],
      achievements: [
        "担任项目组小组长，带领团队按时高质量完成迭代项目",
        "在页面开发、接口联调等方面取得完美成绩",
        "负责组件开发、客户端调试、页面书写以及接口调试",
      ],
    },
    {
      company: "荣高广告",
      position: "前端工程师",
      startDate: "2018-10",
      endDate: "2019-12",
      description: [
        "和设计师，产品工程师紧密配合，实现产品的前端UI和交互方面的开发需求，确保不同平台的优秀用户体验",
        "配合后端工程师进行数据交互",
        "根据设计师的图稿增加页面的JS交互和CSS排版",
        "持续对用户体验进行优化，保证页面的执行效率",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX", "响应式设计"],
      achievements: [
        "与设计师、产品工程师紧密配合，实现优秀的前端UI和交互",
        "确保不同平台的优秀用户体验",
        "持续优化用户体验，保证页面执行效率",
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
      name: "智服工单云平台",
      description:
        "我和另外一名前端经理从零主导构建了基于Vue3技术栈的SaaS级智能客服系统，全面负责前端架构设计和工单核心模块开发。项目采用Vue3+TypeScript+Vite技术方案替代传统Vue2，设计分层模块化架构：基础服务层封装权限控制；业务组件层开发40+高复用组件（如动态表单/高级搜索）。工单核心层解耦为三大模块（表单命令/状态机/数据看板）。在全栈能力延伸方面，运用Nuxt.js实现服务端渲染看板模块，将首屏加载时间优化至0.9秒。工单模块核心技术包括：开发基于Vue3 Reactive API的动态表单引擎，支持20+字段类型及规则驱动渲染（如紧急工单自动触发SLA倒计时）；使用Pinia设计多层状态树管理工单全生命周期（8种状态），实现可视化状态流引擎；针对万级工单数据实施虚拟滚动+分片加载方案，使列表渲染性能提升；开发复合查询构建器支持15+条件组合搜索并实现URL参数持久化；通过Nuxt.js+ECharts构建SSR数据看板，实现工单响应热力图、客服饱和度环形图。",
      technologies: [
        "Vue3",
        "TypeScript",
        "Vite",
        "Nuxt.js",
        "Pinia",
        "ECharts",
        "SSR",
      ],
      role: "前端架构师",
      startDate: "2024-12",
      endDate: "至今",
      highlights: [
        "从零主导构建SaaS级智能客服系统前端架构",
        "实现40+高复用业务组件",
        "首屏加载时间优化至0.9秒",
        "支持20+字段类型的动态表单引擎",
        "万级工单数据虚拟滚动+分片加载",
        "15+条件组合搜索构建器",
        "SSR数据看板实现工单响应热力图",
      ],
    },
    {
      name: "模板化网站定制系统",
      description:
        "由于总公司在各地的分公司众多，分公司没有可以宣传当地特色的官方网站，因此制作一个既定模板化的网站定制系统，该系统可以解决其他分公司没有IT从事人员，也可以在很短的时间内通过简单操作搭建出一个自己分公司的官方网站。该项目为了极大增加查询度，增加SEO搜索率，决定使用NUXT3为主框架进行开发，对于PC端使用ElementPlus以及部分个人独立开发UI模板，对于移动端使用Nuxt。目前项目大部分开发完毕，在长春公司进行试运营，后续会逐渐推广到各个分公司。",
      technologies: ["Nuxt3", "ElementPlus", "SEO", "响应式设计", "模板化"],
      role: "前端开发负责人",
      startDate: "2023-08",
      endDate: "2024-11",
      highlights: [
        "解决分公司官网建设难题",
        "使用Nuxt3提升SEO搜索率",
        "实现模板化快速建站",
        "PC端和移动端适配",
        "在长春公司试运营成功",
      ],
    },
    {
      name: "认证审核统计系统",
      description:
        "为了解决认证流程人员涉及复杂，流程多的问题，设计此系统，该系统主要是用来对各地分公司的认证项目进行自动化统计和事实推送，任务定时处理等功能。在安排审核员去各地工作需要复杂的人力进行电话沟通安排，通常一个团队会有多人通知，繁琐。使用系统后可以实现统合当前项目涉及的工作人员在一个临时群组，仅需要对群组进行操作，就可以及时通知到涉及人员进行工作，极大的缩短计调安排人员工作量。由于认证的特殊性，大部分情况会有尾款时限很长，导致财务人员需要费时费力手动记录每一个客户的缴费次数，剩余款项，使用系统后财务可以不用实时跟踪所有任务的进度，只需要等待项目经理完结项目后的通知，系统会自动整理当前客户设计项目的所有款项，财务只需要进行二次人工审核即可。",
      technologies: ["Vue2", "ElementUI", "自动化统计", "任务调度", "财务管理"],
      role: "前端开发工程师",
      startDate: "2023-02",
      endDate: "2023-08",
      highlights: [
        "解决认证流程复杂问题",
        "实现自动化统计和推送",
        "建立临时群组通知机制",
        "自动化财务款项整理",
        "极大缩短计调安排工作量",
      ],
    },
    {
      name: "UDESK工单系统",
      description:
        "工单系统为Udesk工单主系统，系统优点在于流程界面自动化配置，智能人工解决重复任务，跨平台多渠道处理，多端客户服务。个人在项目中担任前端研发，主要工作是根据客户的需求或者私有化定制来开发和优化工单系统，达到客户0阻碍满意使用。",
      technologies: [
        "前端开发",
        "工单系统",
        "私有化定制",
        "跨平台",
        "多端服务",
      ],
      role: "前端研发工程师",
      startDate: "2021-07",
      endDate: "2022-11",
      highlights: [
        "流程界面自动化配置",
        "智能人工解决重复任务",
        "跨平台多渠道处理",
        "多端客户服务支持",
        "私有化定制开发",
      ],
    },
    {
      name: "北京银行信用卡APP",
      description:
        "该项目是北京银行信用卡APP6.0新版本开发，在5.0版本基础上增加定制首页，授权登录，卡片管理等多项便民功能，对当前5.0现存版本的功能进行重构更新，增加多项优化，加大用户体验，在6.0版本可以更轻松的使用银行各种核心功能，该项目总共前端开发人员8名，本人同时担当组长角色，和组员一同协作开发，高质保时提交迭代任务。",
      technologies: [
        "移动端开发",
        "银行APP",
        "团队管理",
        "功能重构",
        "用户体验优化",
      ],
      role: "前端开发组长",
      startDate: "2020-11",
      endDate: "2021-05",
      highlights: [
        "带领8人前端团队开发银行APP6.0",
        "增加定制首页、授权登录、卡片管理等功能",
        "重构5.0版本功能并优化用户体验",
        "高质保时提交迭代任务",
        "获得客户好评",
      ],
    },
    {
      name: "UMPAAS中间件服务",
      description:
        "根据公司常有中间件需求，之前只能交给外包进行开发，成本过大，因此制作该平台，集合接口，脚本，amis低代码平台等，可以简单培训实施人员就制作成型的中间件，相比代码开发，大大减少成本的支出和时间的支出。本人担任前端研发，从调研平台使用框架，搭建，低代码等技术，到上线使用，后期维护迭代，培训。",
      technologies: ["PaaS", "低代码", "amis", "中间件", "接口集成"],
      role: "前端研发工程师",
      startDate: "2020-04",
      endDate: "2022-08",
      highlights: [
        "解决中间件外包成本高问题",
        "集成接口、脚本、amis低代码平台",
        "简单培训即可制作中间件",
        "大大减少成本和时间支出",
        "从调研到上线全流程负责",
      ],
    },
    {
      name: "商品系统管理平台",
      description:
        "该项目是电商优惠券发放管理系统，系统支持商品资源查看，管理员管理，商品分类管理，商品管理，可以帮助厂商管理商品分类，提高客户的体验度。主要负责商品模块；通过页面组件整体布局，使用Vue框架开发；使用Axios请求数据，完成页面的渲染；配合其他同事实现平台运转。利用Element-UI实现模块布局；使用技术HTML5+CSS3+JS+Vuex+Vue-CLI+Vue-Router+Axios等。",
      technologies: [
        "Vue",
        "Element-UI",
        "Vuex",
        "Vue-Router",
        "Axios",
        "电商系统",
      ],
      role: "前端开发工程师",
      startDate: "2019-07",
      endDate: "2019-12",
      highlights: [
        "电商优惠券发放管理系统",
        "商品资源查看和管理",
        "管理员和商品分类管理",
        "提高客户体验度",
        "使用Vue全家桶技术栈",
      ],
    },
    {
      name: "优享(PC端)",
      description:
        "项目分为主页、登录、注册、购物车、会员中心五大模块。是一家只做优惠券代理整合的网站，提供各大电商的网站的优惠群整合。负责项目的首页开发以及会员中心；首页模块包括全部商品分类、优惠券、品牌推荐、试饮、图书、积分商城、优惠活动、轮播图、精选活动、底部内容；利用Element-UI插件实现轮播等效果；使用技术HTML5+CSS3+JQ+JS+Vuex+Vue-CLI+Vue-Router+Axios等。",
      technologies: [
        "Vue",
        "Element-UI",
        "Vuex",
        "Vue-Router",
        "Axios",
        "优惠券系统",
      ],
      role: "前端开发工程师",
      startDate: "2019-03",
      endDate: "2019-08",
      highlights: [
        "优惠券代理整合网站",
        "五大核心模块开发",
        "首页和会员中心负责",
        "丰富的首页功能模块",
        "使用Vue全家桶技术栈",
      ],
    },
    {
      name: "优享(移动端)",
      description:
        "项目分为首页、分类、购物车、我的四个模块。模拟苏宁商城移动端的优惠购物网站，多以整合购物券为主要服务。负责首页、分类的页面布局以及数据请求；首页包括搜索、轮播图、新品上新、来拼团、商品列表、今日爆款、钻石会员、新人专享、限时抢购、好物推荐、底部导航栏等功能；开发主要用到Vant-UI；使用技术HTML5+CSS3+JS+Vuex+Vue-CLI+Vue-Router+Axios等。",
      technologies: [
        "Vue",
        "Vant-UI",
        "Vuex",
        "Vue-Router",
        "Axios",
        "移动端开发",
      ],
      role: "前端开发工程师",
      startDate: "2018-10",
      endDate: "2019-01",
      highlights: [
        "移动端优惠购物网站",
        "四大核心模块开发",
        "丰富的首页功能",
        "使用Vant-UI移动端组件库",
        "模拟苏宁商城移动端体验",
      ],
    },
  ],

  certifications: [
    "PMP项目管理认证",
    "AWS解决方案架构师认证",
    "Google前端开发认证",
  ],

  languages: [
    "中文（母语）",
    "英语（听说能力：熟练 | 读写能力：良好）",
    "日语（听说能力：一般 | 读写能力：一般）",
  ],

  interests: ["前端新技术探索", "开源项目贡献", "技术博客写作", "摄影和旅行"],

  personalAdvantages: [
    "熟练HTML+CSS/HTML5+CSS3",
    "熟练响应式布局/移动端页面布局、flex、浮动布局等布局模式",
    "熟练ES5，熟悉ES6特性",
    "熟练使用Git管理仓库",
    "熟练使用Vue2/3框架及Vue全家桶",
    "熟练使用Axios、umi-request等快速完成数据交互",
    "熟悉Ant Design、Ant Design Pro、Element-UI/PLUS等第三方插件提升用户体验",
    "熟练使用React（React-Hook）搭配Ant Design搭建",
    "使用Nuxt3开发网站",
    "小团队管理，项目把控进度从不延期",
  ],
};

export default resumeConfig;
