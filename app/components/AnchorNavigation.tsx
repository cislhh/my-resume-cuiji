'use client';

import { useState } from 'react';
import { Menu, Collapse } from 'antd';
import type { MenuProps } from 'antd';
import { 
  UserOutlined, 
  ContactsOutlined, 
  ToolOutlined, 
  BankOutlined, 
  ProjectOutlined, 
  BookOutlined, 
  TrophyOutlined 
} from '@ant-design/icons';
import { resumeConfig, RESUME_SECTIONS_CONFIG, SECTION_IDS } from '../../src/store/resumeConfig';
import styles from './AnchorNavigation.module.css';

const { Panel } = Collapse;

// 图标映射对象
const iconMap = {
  UserOutlined,
  ContactsOutlined,
  ToolOutlined,
  BankOutlined,
  ProjectOutlined,
  BookOutlined,
  TrophyOutlined,
};

interface AnchorNavigationProps {
  onNavigate: (sectionId: string) => void;
}

const AnchorNavigation: React.FC<AnchorNavigationProps> = ({ onNavigate }) => {
  // 控制哪些菜单项是展开状态
  const [expandedKeys, setExpandedKeys] = useState<string[]>([SECTION_IDS.EXPERIENCES, SECTION_IDS.PROJECTS]);

  // 根据配置生成导航菜单项
  const generateMenuItems = (): MenuProps['items'] => {
    return Object.values(RESUME_SECTIONS_CONFIG)
      .sort((a, b) => a.order - b.order)
      .map(section => {
        const IconComponent = iconMap[section.icon as keyof typeof iconMap];
        
        if (section.hasChildren) {
          // 有子菜单的项（工作经验、项目经验）
          if (section.id === SECTION_IDS.EXPERIENCES) {
            return {
              key: section.id,
              icon: <IconComponent />,
              label: section.label,
              children: resumeConfig.experiences.map((exp, index) => ({
                key: `experience-${index}`,
                label: exp.company,
                onClick: () => onNavigate(`experience-${index}`),
              })),
            };
          } else if (section.id === SECTION_IDS.PROJECTS) {
            return {
              key: section.id,
              icon: <IconComponent />,
              label: section.label,
              children: resumeConfig.projects.map((project, index) => ({
                key: `project-${index}`,
                label: project.name,
                onClick: () => onNavigate(`project-${index}`),
              })),
            };
          }
        }
        
        // 普通菜单项
        return {
          key: section.id,
          icon: <IconComponent />,
          label: section.label,
          onClick: () => onNavigate(section.id),
        };
      });
  };

  // 导航菜单项配置
  const menuItems: MenuProps['items'] = generateMenuItems();

  // 处理菜单点击事件
  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    // 如果是子菜单项（工作经验或项目经验的子项），直接跳转
    if (key.startsWith('experience-') || key.startsWith('project-')) {
      return; // 子项点击由 onClick 处理，这里不需要额外逻辑
    }
    
    // 如果是父菜单项（experiences 或 projects），切换展开状态
    if (key === SECTION_IDS.EXPERIENCES || key === SECTION_IDS.PROJECTS) {
      setExpandedKeys(prev => 
        prev.includes(key) 
          ? prev.filter(k => k !== key)  // 如果已展开，则收起
          : [...prev, key]               // 如果已收起，则展开
      );
    }
  };

  return (
    <div className={styles.navigationContainer}>
      <div className={styles.navigationHeader}>
        <h3>简历导航</h3>
        <p>快速跳转到对应模块</p>
      </div>
      
      <Menu
        mode="inline"
        items={menuItems}
        onClick={handleMenuClick}
        expandIcon={({ isOpen }) => (
          <span className={styles.expandIcon}>
            {isOpen ? '▼' : '▶'}
          </span>
        )}
        className={styles.navigationMenu}
      />
      
      {/* 移动端折叠面板版本 */}
      <div className={styles.mobileCollapse}>
        <Collapse 
          activeKey={expandedKeys}
          onChange={setExpandedKeys}
          ghost
          className={styles.mobileCollapsePanel}
        >
          <Panel header={RESUME_SECTIONS_CONFIG[SECTION_IDS.EXPERIENCES].label} key={SECTION_IDS.EXPERIENCES}>
            <div className={styles.mobileSubItems}>
              {resumeConfig.experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={styles.mobileSubItem}
                  onClick={() => onNavigate(`experience-${index}`)}
                >
                  <span className={styles.companyName}>{exp.company}</span>
                  <span className={styles.position}>{exp.position}</span>
                </div>
              ))}
            </div>
          </Panel>
          
          <Panel header={RESUME_SECTIONS_CONFIG[SECTION_IDS.PROJECTS].label} key={SECTION_IDS.PROJECTS}>
            <div className={styles.mobileSubItems}>
              {resumeConfig.projects.map((project, index) => (
                <div 
                  key={index} 
                  className={styles.mobileSubItem}
                  onClick={() => onNavigate(`project-${index}`)}
                >
                  <span className={styles.projectName}>{project.name}</span>
                  <span className={styles.projectRole}>{project.role}</span>
                </div>
              ))}
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default AnchorNavigation; 