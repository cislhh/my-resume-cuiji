'use client';

import { Layout } from 'antd';
import type { FC, PropsWithChildren } from 'react';
import $styles from '../layout.module.css';

const { Header, Sider, Content, Footer } = Layout;

interface ClientLayoutProps extends PropsWithChildren {
  className?: string;
}

const ClientLayout: FC<ClientLayoutProps> = ({ children, className }) => {
  return (
    <Layout className={className}>
      <Header className={$styles.header}>
        <div className={$styles.headerContent}>Header</div>
      </Header>
      <Layout className={$styles.middleSection}>
        <Sider className={$styles.sider}>
          <div className={$styles.siderContent}>Sider</div>
        </Sider>
        <Content className={$styles.content}>
          <div className={$styles.contentWrapper}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ClientLayout; 