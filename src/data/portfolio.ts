import type { Experience, Project, SkillGroup } from '@/types/portfolio'

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
    category: 'Editorial website · 2026',
    description: '以「日系雜誌風格」為靈感，透過留白、圓形構圖與柔和色彩，營造輕盈、靜謐的氛圍。 在簡單中感受到細節，在距離中感受到溫度。',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=90',
    imageAlt: '柔和光線下的極簡室內空間',
    technologies: ['Vue 3', 'GSAP', 'Contentful'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'nami-stay',
    number: '02',
    title: 'Nami Stay',
    category: 'Booking experience · 2024',
    description: '讓住宿預訂回到直覺與感受；從探索到確認，每一步都安靜而清晰。',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90',
    imageAlt: '簡約住宅客廳與大型窗景',
    technologies: ['Vue 3', 'Pinia', 'Figma'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'kanso-shop',
    number: '03',
    title: 'Kanso Objects',
    category: 'E-commerce · 2023',
    description: '為日常器物設計一處安靜的展示空間，讓商品自己說話。',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=90',
    imageAlt: '明亮的設計工作室',
    technologies: ['Vue 3', 'SCSS', 'Shopify'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
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
