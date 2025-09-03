/**
 * 项目详情模态框组件
 * 全屏弹窗：左侧轮播图，右侧项目详情和技术栈
 */

import React, { useState, useEffect } from 'react';
import { Modal, Button, Typography, Space, Carousel } from 'antd';
import Image from 'next/image';
import { 
  CloseOutlined, 
  LinkOutlined, 
  GithubOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import { getProjectDetail, ProjectDetail } from '../../store/projectConfig';
import TechStackChart from './TechStackChart';
import styles from './ProjectDetailModal.module.css';

const { Title, Paragraph, Text } = Typography;

interface ProjectDetailModalProps {
  visible: boolean;
  projectId: string | null;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  visible,
  projectId,
  onClose
}) => {
  const [projectDetail, setProjectDetail] = useState<ProjectDetail | null>(null);

  useEffect(() => {
    if (visible && projectId) {
      const detail = getProjectDetail(projectId);
      setProjectDetail(detail);
    }
  }, [visible, projectId]);

  if (!projectDetail) {
    return null;
  }

  const handleClose = () => {
    onClose();
  };

  // 渲染轮播图
  const renderCarousel = () => {
    if (!projectDetail.screenshots || projectDetail.screenshots.length === 0) {
      return (
        <div className={styles.placeholderImage}>
          <div className={styles.placeholderContent}>
            <Text type="secondary">暂无项目截图</Text>
          </div>
        </div>
      );
    }

    return (
      <Carousel
        autoplay
        autoplaySpeed={5000}
        dots={{ className: styles.carouselDots }}
        arrows
        prevArrow={<LeftOutlined className={styles.carouselArrow} />}
        nextArrow={<RightOutlined className={styles.carouselArrow} />}
        className={styles.projectCarousel}
      >
        {projectDetail.screenshots.map((screenshot) => (
          <div key={screenshot.id} className={styles.carouselItem}>
            <div className={styles.carouselImageContainer}>
              <Image
                src={screenshot.imageUrl}
                alt={screenshot.alt}
                fill
                className={styles.carouselImage}
                style={{ objectFit: 'contain' }}
                onError={(e) => {
                  // 图片加载失败时显示占位图
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuWbvueJh+WKoOi9veWksei0pTwvdGV4dD48L3N2Zz4=';
                }}
              />
              <div className={styles.carouselOverlay}>
                <div className={styles.carouselInfo}>
                  <Title level={4} className={styles.carouselTitle}>
                    {screenshot.title}
                  </Title>
                  <Text className={styles.carouselDescription}>
                    {screenshot.description}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    );
  };

  // 渲染项目详情
  const renderProjectDetails = () => (
    <div className={styles.projectDetails}>
      <div className={styles.projectHeader}>
        <Title level={2} className={styles.projectTitle}>
          {projectDetail.name}
        </Title>
        <Space className={styles.projectActions}>
          {projectDetail.demoUrl && (
            <Button 
              type="primary" 
              icon={<LinkOutlined />}
              href={projectDetail.demoUrl}
              target="_blank"
              className={styles.actionButton}
            >
              在线演示
            </Button>
          )}
          {projectDetail.githubUrl && (
            <Button 
              icon={<GithubOutlined />}
              href={projectDetail.githubUrl}
              target="_blank"
              className={styles.actionButton}
            >
              源码
            </Button>
          )}
        </Space>
      </div>

      <div className={styles.projectInfo}>
        <div className={styles.infoItem}>
          <Text strong>项目周期：</Text>
          <Text>{projectDetail.duration}</Text>
        </div>
        <div className={styles.infoItem}>
          <Text strong>团队规模：</Text>
          <Text>{projectDetail.teamSize}人</Text>
        </div>
        <div className={styles.infoItem}>
          <Text strong>担任角色：</Text>
          <Text>{projectDetail.role}</Text>
        </div>
      </div>

      <div className={styles.projectOverview}>
        <Title level={4}>项目概述</Title>
        <Paragraph className={styles.overviewText}>
          {projectDetail.overview}
        </Paragraph>
      </div>

      <div className={styles.projectDescription}>
        <Title level={4}>项目描述</Title>
        <Paragraph className={styles.descriptionText}>
          {projectDetail.description}
        </Paragraph>
      </div>

      <div className={styles.projectFeatures}>
        <Title level={4}>核心功能</Title>
        <ul className={styles.featuresList}>
          {projectDetail.features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.projectResults}>
        <Title level={4}>项目成果</Title>
        <ul className={styles.resultsList}>
          {projectDetail.results.map((result, index) => (
            <li key={index} className={styles.resultItem}>
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <Modal
      open={visible}
      onCancel={handleClose}
      footer={null}
      width="100%"
      style={{ 
        top: 0,
        paddingBottom: 0,
        maxWidth: '100vw'
      }}
      className={styles.projectDetailModal}
      destroyOnClose
      closable={false}
    >
      <div className={styles.modalContent}>
        {/* 关闭按钮 */}
        <Button 
          icon={<CloseOutlined />}
          onClick={handleClose}
          className={styles.closeButton}
          size="large"
        />
        
        {/* 主要内容区域 */}
        <div className={styles.mainContent}>
          {/* 左侧轮播图区域 - 占2/3 */}
          <div className={styles.leftSection}>
            {renderCarousel()}
          </div>
          
          {/* 右侧内容区域 - 占1/3 */}
          <div className={styles.rightSection}>
            {/* 上半部分：项目详情 */}
            <div className={styles.detailsSection}>
              {renderProjectDetails()}
            </div>
            
            {/* 下半部分：技术栈饼状图 */}
            <div className={styles.techStackSection}>
              <Title level={4}>技术栈构成</Title>
              <TechStackChart technologies={projectDetail.technologies} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailModal;