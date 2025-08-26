import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';
import ClientLayout from './components/ClientLayout';
import $styles from './layout.module.css';

export const metadata: Metadata = {
    title: '王立雨/5年/前端/本科/长春',
    description: '个人简历项目',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
      <html lang="zh-CN">
          <body>
              <ClientLayout className={$styles.mainLayout}>
                  {children}
              </ClientLayout>
          </body>
      </html>
  );
};

export default RootLayout;
