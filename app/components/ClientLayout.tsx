'use client';

import { Layout } from 'antd';
import { useCallback, useRef, createContext, useContext } from 'react';
import type { FC, PropsWithChildren } from 'react';
import AnchorNavigation from './AnchorNavigation';
import $styles from '../layout.module.css';

const { Header, Sider, Content } = Layout;

// 创建 Context 来共享 section 引用
interface SectionContextType {
  registerSection: (id: string, element: HTMLElement | null) => void;
  scrollToSection: (sectionId: string) => void;
}
interface ClientLayoutProps extends PropsWithChildren {
  className?: string;
}

const SectionContext = createContext<SectionContextType | null>(null);

// Hook 来使用 section context
export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSectionContext must be used within a SectionProvider');
  }
  return context;
};


const ClientLayout: FC<ClientLayoutProps> = ({ children, className }) => {
  // 使用 useRef 存储所有 section 的引用
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // 注册 section 引用的函数
  const registerSection = useCallback((id: string, element: HTMLElement | null) => {
    sectionRefs.current[id] = element;
  }, []);

  // 锚点跳转处理函数
  const scrollToSection = useCallback((sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      // 平滑滚动到目标位置
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // 添加高亮效果
      element.style.transition = 'all 0.3s ease';
      element.style.transform = 'scale(1.02)';
      element.style.boxShadow = '0 0 20px rgba(135, 206, 235, 0.3)';
      
      // 移除高亮效果
      setTimeout(() => {
        element.style.transform = 'scale(1)';
        element.style.boxShadow = 'none';
      }, 1000);
    }
  }, []);

  // Context 值
  const contextValue: SectionContextType = {
    registerSection,
    scrollToSection,
  };

  return (
    <SectionContext.Provider value={contextValue}>
      <Layout className={className}>
        <Header className={$styles.header}>
          <div className={$styles.headerContent}>王立雨 - 个人简历</div>
        </Header>
        <Layout className={$styles.middleSection}>
          <Sider className={$styles.sider}>
            <AnchorNavigation onNavigate={scrollToSection} />
          </Sider>
          <Content className={$styles.content}>
            <div className={$styles.contentWrapper}>
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </SectionContext.Provider>
  );
};

export default ClientLayout; 