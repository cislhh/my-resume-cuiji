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
import { resumeConfig } from '../../src/store/resumeConfig';
import styles from './AnchorNavigation.module.css';

const { Panel } = Collapse;

interface AnchorNavigationProps {
  onNavigate: (sectionId: string) => void;
}

const AnchorNavigation: React.FC<AnchorNavigationProps> = ({ onNavigate }) => {
  // 控制哪些菜单项是展开状态
  const [expandedKeys, setExpandedKeys] = useState<string[]>(['experiences', 'projects']);

  // 导航菜单项配置
  const menuItems: MenuProps['items'] = [
    {
      key: 'basic-info',
      icon: <UserOutlined />,
      label: '基本信息',
      onClick: () => onNavigate('basic-info'),
    },
    {
      key: 'contact',
      icon: <ContactsOutlined />,
      label: '联系方式',
      onClick: () => onNavigate('contact'),
    },
    {
      key: 'skills',
      icon: <ToolOutlined />,
      label: '技能专长',
      onClick: () => onNavigate('skills'),
    },
    {
      key: 'experiences',
      icon: <BankOutlined />,
      label: '工作经验',
      children: resumeConfig.experiences.map((exp, index) => ({
        key: `experience-${index}`,
        label: exp.company,
        onClick: () => onNavigate(`experience-${index}`), // 跳转到具体的公司
      })),
    },
    {
      key: 'projects',
      icon: <ProjectOutlined />,
      label: '项目经验',
      children: resumeConfig.projects.map((project, index) => ({
        key: `project-${index}`,
        label: project.name,
        onClick: () => onNavigate(`project-${index}`), // 跳转到具体的项目
      })),
    },
    {
      key: 'education',
      icon: <BookOutlined />,
      label: '教育背景',
      onClick: () => onNavigate('education'),
    },
    {
      key: 'other-info',
      icon: <TrophyOutlined />,
      label: '其他信息',
      onClick: () => onNavigate('other-info'),
    },
  ];

  // 处理菜单点击事件
  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    // 如果是子菜单项（工作经验或项目经验的子项），直接跳转
    if (key.startsWith('experience-') || key.startsWith('project-')) {
      return; // 子项点击由 onClick 处理，这里不需要额外逻辑
    }
    
    // 如果是父菜单项（experiences 或 projects），切换展开状态
    if (['experiences', 'projects'].includes(key)) {
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
          <Panel header="工作经验" key="experiences">
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
          
          <Panel header="项目经验" key="projects">
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