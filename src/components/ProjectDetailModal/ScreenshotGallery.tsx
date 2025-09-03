/**
 * 项目截图展示组件
 * 支持缩略图预览和全屏查看
 */

import React, { useState } from 'react';
import { Image, Card, Row, Col, Modal, Typography, Space } from 'antd';
import { EyeOutlined, FullscreenOutlined } from '@ant-design/icons';
import { ProjectScreenshot } from '../../store/projectConfig';
import styles from './ScreenshotGallery.module.css';

const { Title, Text } = Typography;

interface ScreenshotGalleryProps {
  screenshots: ProjectScreenshot[];
}

const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({ screenshots }) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState<ProjectScreenshot | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreview = (screenshot: ProjectScreenshot, index: number) => {
    setPreviewImage(screenshot);
    setCurrentIndex(index);
    setPreviewVisible(true);
  };

  const handleClose = () => {
    setPreviewVisible(false);
    setPreviewImage(null);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : screenshots.length - 1;
    setCurrentIndex(prevIndex);
    setPreviewImage(screenshots[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = currentIndex < screenshots.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(nextIndex);
    setPreviewImage(screenshots[nextIndex]);
  };

  if (screenshots.length === 0) {
    return (
      <div className={styles.emptyState}>
        <Text type="secondary">暂无项目截图</Text>
      </div>
    );
  }

  return (
    <div className={styles.screenshotGallery}>
      <Row gutter={[16, 16]}>
        {screenshots.map((screenshot, index) => (
          <Col 
            xs={24} 
            sm={12} 
            md={8} 
            lg={6} 
            key={screenshot.id}
            className={styles.screenshotCol}
          >
            <Card
              hoverable
              className={styles.screenshotCard}
              cover={
                <div className={styles.imageContainer}>
                  <Image
                    src={screenshot.thumbnailUrl || screenshot.imageUrl}
                    alt={screenshot.alt}
                    className={styles.screenshotImage}
                    preview={false}
                    loading="lazy"
                  />
                  <div className={styles.imageOverlay}>
                    <Space>
                      <EyeOutlined 
                        className={styles.overlayIcon}
                        onClick={() => handlePreview(screenshot, index)}
                      />
                      <FullscreenOutlined 
                        className={styles.overlayIcon}
                        onClick={() => handlePreview(screenshot, index)}
                      />
                    </Space>
                  </div>
                </div>
              }
              bodyStyle={{ padding: '12px' }}
            >
              <div className={styles.screenshotInfo}>
                <Title level={5} className={styles.screenshotTitle}>
                  {screenshot.title}
                </Title>
                <Text type="secondary" className={styles.screenshotDescription}>
                  {screenshot.description}
                </Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 全屏预览模态框 */}
      <Modal
        open={previewVisible}
        onCancel={handleClose}
        footer={null}
        width="90%"
        style={{ top: 20 }}
        className={styles.previewModal}
        destroyOnClose
      >
        {previewImage && (
          <div className={styles.previewContainer}>
            <div className={styles.previewHeader}>
              <Title level={3} className={styles.previewTitle}>
                {previewImage.title}
              </Title>
              <Text type="secondary" className={styles.previewDescription}>
                {previewImage.description}
              </Text>
            </div>
            
            <div className={styles.previewImageContainer}>
              <Image
                src={previewImage.imageUrl}
                alt={previewImage.alt}
                className={styles.previewImage}
                preview={false}
              />
              
              {/* 导航按钮 */}
              {screenshots.length > 1 && (
                <>
                  <div 
                    className={`${styles.navButton} ${styles.prevButton}`}
                    onClick={handlePrev}
                  >
                    ‹
                  </div>
                  <div 
                    className={`${styles.navButton} ${styles.nextButton}`}
                    onClick={handleNext}
                  >
                    ›
                  </div>
                </>
              )}
            </div>
            
            {/* 缩略图导航 */}
            {screenshots.length > 1 && (
              <div className={styles.thumbnailNav}>
                {screenshots.map((screenshot, index) => (
                  <div
                    key={screenshot.id}
                    className={`${styles.thumbnail} ${
                      index === currentIndex ? styles.activeThumbnail : ''
                    }`}
                    onClick={() => {
                      setCurrentIndex(index);
                      setPreviewImage(screenshot);
                    }}
                  >
                    <Image
                      src={screenshot.thumbnailUrl || screenshot.imageUrl}
                      alt={screenshot.alt}
                      className={styles.thumbnailImage}
                      preview={false}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ScreenshotGallery;