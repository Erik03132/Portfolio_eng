export interface Service {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  timeline: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export interface ContactInfo {
  email: string;
  telegram: string;
  whatsapp: string;
  calendar: string;
}

export const bio = {
  name: 'Эрик',
  title: 'Frontend разработчик',
  description: 'Создаю современные веб-сайты и приложения, которые решают бизнес-задачи. Специализируюсь на React, TypeScript и адаптивном дизайне.',
  yearsExperience: '3+',
  projectsCompleted: '50+',
  happyClients: '30+',
};

export const services: Service[] = [
  {
    id: 'landing',
    name: 'Landing Page',
    description: 'Продающий одностраничный сайт с адаптивным дизайном и высокой конверсией',
    priceRange: 'от 30,000₽',
    timeline: '5-7 дней',
    features: [
      'Современный дизайн',
      'Адаптивная верстка',
      'Анимации и эффекты',
      'Форма обратной связи',
      'SEO оптимизация',
      'Интеграция с аналитикой',
    ],
  },
  {
    id: 'corporate',
    name: 'Корпоративный сайт',
    description: 'Многостраничный сайт для компании с системой управления контентом',
    priceRange: 'от 60,000₽',
    timeline: '2-3 недели',
    features: [
      'До 10 страниц',
      'CMS для управления',
      'Блог/новости',
      'Мультиязычность',
      'Каталог услуг',
      'Интеграция с CRM',
    ],
  },
  {
    id: 'ecommerce',
    name: 'Интернет-магазин',
    description: 'Полнофункциональный магазин с корзиной и приемом платежей',
    priceRange: 'от 100,000₽',
    timeline: '3-4 недели',
    features: [
      'Каталог товаров',
      'Корзина и заказы',
      'Платежные системы',
      'Личный кабинет',
      'Админ-панель',
      'Интеграция с 1С',
    ],
  },
  {
    id: 'webapp',
    name: 'Веб-приложение',
    description: 'SaaS платформа или внутренняя система для автоматизации бизнеса',
    priceRange: 'от 150,000₽',
    timeline: '4-8 недель',
    features: [
      'Сложная логика',
      'База данных',
      'Авторизация',
      'API интеграции',
      'Панель управления',
      'Масштабируемость',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Алексей Иванов',
    role: 'CEO',
    company: 'TechStart',
    text: 'Эрик создал для нас потрясающий лендинг, который конвертирует на 40% лучше предыдущего. Работал быстро и учитывал все наши пожелания.',
    rating: 5,
  },
  {
    id: '2',
    author: 'Мария Петрова',
    role: 'Marketing Director',
    company: 'Fashion House',
    text: 'Интернет-магазин превзошел все ожидания! Красивый дизайн, удобный интерфейс, продажи выросли на 60%. Рекомендую!',
    rating: 5,
  },
  {
    id: '3',
    author: 'Дмитрий Соколов',
    role: 'Product Owner',
    company: 'FinTech Solutions',
    text: 'Профессиональный подход к разработке. Эрик не просто кодит, а предлагает решения для бизнеса. Наша платформа работает стабильно и быстро.',
    rating: 5,
  },
  {
    id: '4',
    author: 'Анна Смирнова',
    role: 'Founder',
    company: 'EduPlatform',
    text: 'Отличная коммуникация на всех этапах проекта. Все сделано в срок и качественно. Обязательно обратимся снова!',
    rating: 5,
  },
];

export const skills = [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'Framer Motion',
  'Node.js',
  'PostgreSQL',
  'REST API',
  'Git',
  'Figma',
  'Responsive Design',
  'SEO',
];

export const contactInfo: ContactInfo = {
  email: 'erik@example.com',
  telegram: 'https://t.me/erikdev',
  whatsapp: 'https://wa.me/1234567890',
  calendar: 'https://calendly.com/erikdev',
};

export const socialLinks = {
  github: 'https://github.com/Erik03132',
  linkedin: 'https://linkedin.com/in/erikdev',
  behance: 'https://behance.net/erikdev',
};
