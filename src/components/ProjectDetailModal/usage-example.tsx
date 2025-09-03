/**
 * 项目详情模态框使用示例
 * 展示如何在项目列表组件中集成项目详情功能
 */

import React, { useState } from 'react';
import { Card, Button, Space, Typography } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { ProjectDetailModal } from './index';
import { Project } from '../../store/resumeConfig';

const { Title, Paragraph } = Typography;

// 示例：项目卡片组件
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [detailVisible, setDetailVisible] = useState(false);

  const handleViewDetails = () => {
    setDetailVisible(true);
  };

  const handleCloseDetails = () => {
    setDetailVisible(false);
  };

  return (
    <>
      <Card
        title={project.name}
        extra={
          project.hasDetails ? (
            <Button
              type="primary"
              icon={<EyeOutlined />}
              onClick={handleViewDetails}
            >
              查看详情
            </Button>
          ) : null
        }
        style={{ marginBottom: 16 }}
      >
        <Paragraph ellipsis={{ rows: 3 }}>
          {project.description}
        </Paragraph>
        
        <div style={{ marginTop: 16 }}>
          <Title level={5}>技术栈：</Title>
          <Space wrap>
            {project.technologies.map((tech, index) => (
              <span key={index} style={{ 
                background: '#f0f0f0', 
                padding: '2px 8px', 
                borderRadius: '4px',
                fontSize: '12px'
              }}>
                {tech}
              </span>
            ))}
          </Space>
        </div>

        <div style={{ marginTop: 16 }}>
          <Title level={5}>项目亮点：</Title>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {project.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} style={{ fontSize: '14px', marginBottom: '4px' }}>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </Card>

      {/* 项目详情模态框 */}
      {project.hasDetails && (
        <ProjectDetailModal
          visible={detailVisible}
          projectId={project.detailId || null}
          onClose={handleCloseDetails}
        />
      )}
    </>
  );
};

// 示例：项目列表组件
interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div>
      <Title level={2}>项目经验</Title>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;

// 使用示例：
/*
import { resumeConfig } from '@/store/resumeConfig';
import ProjectList from './usage-example';

const App = () => {
  return (
    <div>
      <ProjectList projects={resumeConfig.projects} />
    </div>
  );
};
*/