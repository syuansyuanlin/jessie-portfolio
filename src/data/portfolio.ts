import type { Experience, Project, SkillGroup } from '@/types/portfolio'
import portfolioCoverImage from '@/assets/images/xxx.png'
import luminaCoverImage from '@/assets/images/lumina.png'
import subManagerCoverImage from '@/assets/images/sub-1.png'

export const navigation = [
  { label: 'About', target: '#about' },
  { label: 'Works', target: '#works' },
  { label: 'Experience', target: '#experience' },
  { label: 'Contact', target: '#contact' },
]

export const skills: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Web Development',
    description: '意圖與介面之間，清楚而可靠的轉譯。',
    icon: 'solar:code-square-linear',
    skills: ['Vue', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'design',
    label: 'Design',
    description: '為閱讀與使用留出剛好的餘白。',
    icon: 'solar:pen-new-square-linear',
    skills: ['Figma', 'Illustrator', 'Photoshop'],
  },
  {
    id: 'tools',
    label: 'Tools',
    description: '讓想法從草圖順利抵達上線。',
    icon: 'solar:widget-5-linear',
    skills: ['Git', 'WordPress', 'Vite'],
  },
]

export const projects: Project[] = [
  {
    id: 'mori-journal',
    number: '01',
    title: 'Portfolio Website Design',
    category: 'website · 2026',
    description: '以「日系雜誌風格」為靈感，透過留白、圓形構圖與柔和色彩，營造輕盈、靜謐的氛圍。 在簡單中感受到細節，在距離中感受到溫度。',
    image: portfolioCoverImage,
    imageAlt: 'Jessie 個人作品集首頁設計',
    technologies: ['Vue3', 'TypeScript', 'Vite', 'SCSS', 'GSAP'],
    demoUrl: '/works/portfolio-website-design',
  },
  {
    id: 'nami-stay',
    number: '02',
    title: 'Website Design',
    category: 'website · 2026',
    description: '以大地色系與溫潤木質調為基底，透過大面積留白與柔和圓角，為使用者打造無壓力的視覺呼吸空間，呈現如度假般放鬆的靜謐氛圍。',
    image: luminaCoverImage,
    imageAlt: 'Lumina 網站設計',
    technologies: ['WordPress', 'CSS', 'JavaScript'],
    demoUrl: '/works/lumina-website-design',
  },
  {
    id: 'submanager',
    number: '03',
    title: 'SubManager Objects',
    category: 'E-commerce · 2026',
    description: '與codex協作開發全端訂閱管理平台，使用 Vue3、TypeScript、Express、Prisma 與 PostgreSQL，實作 JWT 驗證、多幣別支出分析、付款紀錄及自動提醒排程。',
    image: subManagerCoverImage,
    imageAlt: 'SubManager 專案封面',
    imageFit: 'contain',
    technologies: ['Vue 3', 'SCSS', 'Node.js', 'PostgreSQL'],
    demoUrl: '/works/submanager',
  },
]

export const experiences: Experience[] = [
  {
    period: '2025 — Now',
    role: 'Web Developer',
    company: '旭海國際科技股份有限公司',
    description: '負責旅宿業 WordPress 網站建置與維護，依照客戶需求調整版型、功能及響應式介面，並進行外掛整合、效能優化、基礎 SEO 與異常排除。',
  },
  {
    period: '2023 — 2025',
    role: 'Front-End Developer',
    company: '云碩科技股份有限公司',
    description: '使用Microsoft Power Platform開發企業內部系統，並參與 React 前端專案，負責介面設計、功能開發及客戶需求溝通。',
  },
]
