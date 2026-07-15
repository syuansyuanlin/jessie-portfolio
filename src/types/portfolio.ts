export interface SkillGroup {
  id: string
  label: string
  description: string
  icon: string
  skills: string[]
}

export interface Project {
  id: string
  number: string
  title: string
  category: string
  description: string
  image: string
  imageAlt: string
  technologies: string[]
  demoUrl: string
  githubUrl: string
}

export interface Experience {
  period: string
  role: string
  company: string
  description: string
}
