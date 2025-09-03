'use client';
/**
 * 动画组件
 */
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { resumeConfig, SECTION_IDS } from '../../src/store/resumeConfig';
import { useSectionContext } from './ClientLayout';
import { ProjectDetailModal } from '../../src/components/ProjectDetailModal';
import styles from '../page.module.css';

const AnimatedResume = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const { registerSection } = useSectionContext();
  
  // 项目详情弹窗状态
  const [projectDetailVisible, setProjectDetailVisible] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // 处理项目点击
  const handleProjectClick = (project: { hasDetails?: boolean; detailId?: string }) => {
    if (project.hasDetails && project.detailId) {
      setSelectedProjectId(project.detailId);
      setProjectDetailVisible(true);
    }
  };

  // 关闭项目详情弹窗
  const handleCloseProjectDetail = () => {
    setProjectDetailVisible(false);
    setSelectedProjectId(null);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // 初始化GSAP
    gsap.set(sectionsRef.current, { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    });

    // 创建时间轴
    const tl = gsap.timeline({
      defaults: { 
        duration: 0.8, 
        ease: "power3.out",
        stagger: 0.2
      }
    });

    // 入场动画序列
    tl.to(sectionsRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.15,
      ease: "back.out(1.7)"
    })
    .to(sectionsRef.current, {
      y: -5,
      duration: 0.3,
      ease: "power2.out",
      stagger: 0.05
    }, "-=0.5")
    .to(sectionsRef.current, {
      y: 0,
      duration: 0.3,
      ease: "bounce.out"
    }, "-=0.2");

    // 添加滚动触发的动画
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out"
            });
          } else {
            gsap.to(entry.target, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    // 观察所有section
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // 清理函数
    return () => {
      observer.disconnect();
      tl.kill();
    };
  }, []);

  // 添加section引用的函数
  const addSectionRef = (el: HTMLElement | null, index: number) => {
    sectionsRef.current[index] = el;
  };

  return (
    <div ref={containerRef} className={styles.resumeContent}>
      {/* 基本信息 */}
      <section 
        id={SECTION_IDS.BASIC_INFO}
        ref={(el) => {
          addSectionRef(el, 0);
          registerSection(SECTION_IDS.BASIC_INFO, el);
        }} 
        className={styles.basicInfo}
      >
        <h1 className={styles.name}>{resumeConfig.basicInfo.name}</h1>
        <h2 className={styles.title}>{resumeConfig.basicInfo.title}</h2>
        <p className={styles.summary}>{resumeConfig.basicInfo.summary}</p>
        <div className={styles.meta}>
          <span>📍 {resumeConfig.basicInfo.location}</span>
          <span>💼 {resumeConfig.basicInfo.yearsOfExperience}年经验</span>
          <span>🎓 {resumeConfig.basicInfo.education}</span>
        </div>
      </section>

      {/* 联系方式 */}
      <section 
        id={SECTION_IDS.CONTACT}
        ref={(el) => {
          addSectionRef(el, 1);
          registerSection(SECTION_IDS.CONTACT, el);
        }} 
        className={styles.contact}
      >
        <h3 className={styles.contactTitle}>联系方式</h3>
        <div className={styles.contactItems}>
          <span>📧 {resumeConfig.contact.email}</span>
          <span>📱 {resumeConfig.contact.phone}</span>
          {resumeConfig.contact.github && (
            <span>🔗 <a href={resumeConfig.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></span>
          )}
        </div>
      </section>

      {/* 技能专长 */}
      <section 
        id={SECTION_IDS.SKILLS}
        ref={(el) => {
          addSectionRef(el, 2);
          registerSection(SECTION_IDS.SKILLS, el);
        }} 
        className={styles.skills}
      >
        <h3 className={styles.skillsTitle}>技能专长</h3>
        <div className={styles.skillsGrid}>
          {resumeConfig.skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillLevel}>{'★'.repeat(skill.level)}</span>
              </div>
              <p className={styles.skillDescription}>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 工作经验 */}
      <section 
        id={SECTION_IDS.EXPERIENCES}
        ref={(el) => {
          addSectionRef(el, 3);
          registerSection(SECTION_IDS.EXPERIENCES, el);
        }} 
        className={styles.experiences}
      >
        <h3 className={styles.experiencesTitle}>工作经验</h3>
        <div className={styles.experienceList}>
          {resumeConfig.experiences.map((experience, index) => (
            <div 
              key={index} 
              id={`experience-${index}`}
              ref={(el) => registerSection(`experience-${index}`, el)}
              className={styles.experienceItem}
            >
              <div className={styles.experienceHeader}>
                <h4 className={styles.company}>{experience.company}</h4>
                <span className={styles.position}>{experience.position}</span>
                <span className={styles.period}>{experience.startDate} - {experience.endDate || '进行中'}</span>
              </div>
              <ul className={styles.descriptionList}>
                {experience.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
              <div className={styles.technologies}>
                <strong>技术栈：</strong>
                {experience.technologies.join(', ')}
              </div>
              <div className={styles.achievements}>
                <strong>主要成就：</strong>
                <ul>
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 项目经验 */}
      <section 
        id={SECTION_IDS.PROJECTS}
        ref={(el) => {
          addSectionRef(el, 4);
          registerSection(SECTION_IDS.PROJECTS, el);
        }} 
        className={styles.projects}
      >
        <h3 className={styles.projectsTitle}>项目经验</h3>
        <div className={styles.projectList}>
          {resumeConfig.projects.map((project, index) => (
            <div 
              key={index} 
              id={`project-${index}`}
              ref={(el) => registerSection(`project-${index}`, el)}
              className={`${styles.projectItem} ${project.hasDetails ? styles.clickableProject : ''}`}
              onClick={() => handleProjectClick(project)}
            >
              <div className={styles.projectHeader}>
                <div className={styles.projectTitleRow}>
                  <h4 className={styles.projectName}>{project.name}</h4>
                  {project.hasDetails && (
                    <div className={styles.detailButton}>
                      <span className={styles.detailIcon}>👁️</span>
                      <span className={styles.detailText}>查看详情</span>
                    </div>
                  )}
                </div>
                <div className={styles.projectMeta}>
                  <span className={styles.projectRole}>{project.role}</span>
                  <span className={styles.projectPeriod}>{project.startDate} - {project.endDate || '进行中'}</span>
                </div>
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTech}>
                <strong>技术栈：</strong>
                {project.technologies.join(', ')}
              </div>
              <div className={styles.projectHighlights}>
                <strong>项目亮点：</strong>
                <ul>
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 教育背景 */}
      <section 
        id={SECTION_IDS.EDUCATION}
        ref={(el) => {
          addSectionRef(el, 5);
          registerSection(SECTION_IDS.EDUCATION, el);
        }} 
        className={styles.education}
      >
        <h3 className={styles.educationTitle}>教育背景</h3>
        <div className={styles.educationItem}>
          <h4>{resumeConfig.education.school}</h4>
          <p className={styles.degree}>{resumeConfig.education.degree} - {resumeConfig.education.major}</p>
          <p className={styles.period}>{resumeConfig.education.startDate} - {resumeConfig.education.endDate}</p>
          {resumeConfig.education.description && (
            <p className={styles.description}>{resumeConfig.education.description}</p>
          )}
        </div>
      </section>

      {/* 其他信息 */}
      <section 
        id={SECTION_IDS.OTHER_INFO}
        ref={(el) => {
          addSectionRef(el, 6);
          registerSection(SECTION_IDS.OTHER_INFO, el);
        }} 
        className={styles.otherInfo}
      >
        {resumeConfig.certifications && (
          <div className={styles.certifications}>
            <h3>认证证书</h3>
            <ul>
              {resumeConfig.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        )}
        
        {resumeConfig.languages && (
          <div className={styles.languages}>
            <h3>语言能力</h3>
            <ul>
              {resumeConfig.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
        )}
        
        {resumeConfig.interests && (
          <div className={styles.interests}>
            <h3>兴趣爱好</h3>
            <ul>
              {resumeConfig.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* 项目详情弹窗 */}
      <ProjectDetailModal
        visible={projectDetailVisible}
        projectId={selectedProjectId}
        onClose={handleCloseProjectDetail}
      />
    </div>
  );
};

export default AnimatedResume; 