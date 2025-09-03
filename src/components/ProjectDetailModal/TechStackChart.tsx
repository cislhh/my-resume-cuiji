/**
 * 技术栈饼状图组件
 * 使用ECharts展示项目技术栈构成
 */

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { TechStackItem } from '../../store/projectConfig';
import styles from './TechStackChart.module.css';

interface TechStackChartProps {
  technologies: TechStackItem[];
}

const TechStackChart: React.FC<TechStackChartProps> = ({ technologies }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (chartRef.current && technologies.length > 0) {
      // 初始化图表
      chartInstance.current = echarts.init(chartRef.current);

      // 准备数据
      const chartData = technologies.map(tech => ({
        name: tech.name,
        value: tech.percentage,
        itemStyle: {
          color: tech.color
        }
      }));

      // 配置选项
      const option = {
        title: {
          text: '技术栈构成',
          left: 'center',
          textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: (params: { name: string; percent: number }) => {
            const tech = technologies.find(t => t.name === params.name);
            return `
              <div style="padding: 8px;">
                <div style="font-weight: bold; margin-bottom: 4px;">${params.name}</div>
                <div style="margin-bottom: 2px;">占比: ${params.percent}%</div>
                ${tech?.description ? `<div style="color: #666; font-size: 12px;">${tech.description}</div>` : ''}
              </div>
            `;
          }
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          top: 'middle',
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            fontSize: 12
          },
          formatter: (name: string) => {
            const tech = technologies.find(t => t.name === name);
            return `${name} (${tech?.percentage}%)`;
          }
        },
        series: [
          {
            name: '技术栈',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['60%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 8,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 16,
                fontWeight: 'bold',
                formatter: (params: { name: string; percent: number }) => {
                  return `${params.name}\n${params.percent}%`;
                }
              },
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            labelLine: {
              show: false
            },
            data: chartData
          }
        ]
      };

      // 设置配置项
      chartInstance.current.setOption(option);

      // 响应式处理
      const handleResize = () => {
        if (chartInstance.current) {
          chartInstance.current.resize();
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (chartInstance.current) {
          chartInstance.current.dispose();
        }
      };
    }
  }, [technologies]);

  // 按分类统计技术栈
  const categoryStats = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = {
        total: 0,
        items: [],
        color: tech.color
      };
    }
    acc[tech.category].total += tech.percentage;
    acc[tech.category].items.push(tech);
    return acc;
  }, {} as Record<string, { total: number; items: TechStackItem[]; color: string }>);

  const categoryLabels: Record<string, string> = {
    frontend: '前端技术',
    backend: '后端技术',
    database: '数据库',
    devops: '运维部署',
    other: '其他'
  };

  return (
    <div className={styles.techStackContainer}>
      <div className={styles.chartWrapper}>
        <div ref={chartRef} className={styles.chart} />
      </div>
      
      <div className={styles.categoryStats}>
        <h4 className={styles.categoryTitle}>技术分类统计</h4>
        <div className={styles.categoryList}>
          {Object.entries(categoryStats).map(([category, stats]) => (
            <div key={category} className={styles.categoryItem}>
              <div className={styles.categoryHeader}>
                <div 
                  className={styles.categoryColor} 
                  style={{ backgroundColor: stats.color }}
                />
                <span className={styles.categoryName}>
                  {categoryLabels[category] || category}
                </span>
                <span className={styles.categoryPercentage}>
                  {stats.total}%
                </span>
              </div>
              <div className={styles.techList}>
                {stats.items.map((tech, index) => (
                  <div key={index} className={styles.techItem}>
                    <span className={styles.techName}>{tech.name}</span>
                    <span className={styles.techPercentage}>{tech.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackChart;