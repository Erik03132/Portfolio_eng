export interface Project {
  id: string;
  title: string;
  category: 'landing' | 'app' | 'ecommerce' | 'saas';
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  images: {
    thumbnail: string;
    hero: string;
    mobile?: string;
  };
  colors: {
    primary: string;
    secondary: string;
  };
  caseDetails: {
    challenge: string;
    solution: string;
    result: string;
  };
}

export const projects: Project[] = [
  {
    id: 'modern-ecommerce',
    title: 'Современный интернет-магазин',
    category: 'ecommerce',
    shortDescription: 'Полнофункциональный магазин с корзиной и оплатой',
    fullDescription: 'Разработал современный интернет-магазин с интуитивным интерфейсом, корзиной покупок и интеграцией платежных систем.',
    tags: ['React', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    metrics: [
      { label: 'Конверсия', value: '+35%' },
      { label: 'Скорость загрузки', value: '1.2s' },
      { label: 'Мобильный трафик', value: '68%' },
    ],
    images: {
      thumbnail: '/assets/thumbs/ecommerce.jpg',
      hero: '/assets/hero/ecommerce-hero.jpg',
      mobile: '/assets/cases/ecommerce-mobile.jpg',
    },
    colors: {
      primary: '#3b82f6',
      secondary: '#1e40af',
    },
    caseDetails: {
      challenge: 'Клиенту нужна была современная платформа для продаж с высокой конверсией и удобным процессом оформления заказа.',
      solution: 'Создал адаптивный магазин с быстрой загрузкой, простой навигацией и оптимизированным процессом покупки. Интегрировал Stripe для безопасных платежей.',
      result: 'Конверсия выросла на 35%, среднее время оформления заказа сократилось на 40%. Клиент отметил рост продаж на 50% в первый месяц.',
    },
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS панель управления',
    category: 'saas',
    shortDescription: 'Аналитическая панель для SaaS продукта',
    fullDescription: 'Создал интерактивную панель управления с визуализацией данных в реальном времени для SaaS платформы.',
    tags: ['React', 'Next.js', 'Chart.js', 'PostgreSQL'],
    metrics: [
      { label: 'Пользователи', value: '10k+' },
      { label: 'Производительность', value: '95/100' },
      { label: 'Удовлетворенность', value: '4.8/5' },
    ],
    images: {
      thumbnail: '/assets/thumbs/saas.jpg',
      hero: '/assets/hero/saas-hero.jpg',
    },
    colors: {
      primary: '#a855f7',
      secondary: '#7c3aed',
    },
    caseDetails: {
      challenge: 'Необходима была панель для визуализации сложных данных с возможностью работы в реальном времени.',
      solution: 'Разработал модульную систему с графиками, таблицами и фильтрами. Оптимизировал запросы к базе данных для быстрой работы.',
      result: 'Более 10,000 активных пользователей ежедневно. Оценка производительности 95/100. Клиенты отмечают удобство и скорость работы.',
    },
  },
  {
    id: 'landing-startup',
    title: 'Лендинг для стартапа',
    category: 'landing',
    shortDescription: 'Яркий лендинг с анимациями и формами',
    fullDescription: 'Разработал продающий лендинг для технологического стартапа с акцентом на визуал и конверсию.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    metrics: [
      { label: 'Заявки', value: '+120%' },
      { label: 'Отказы', value: '-45%' },
      { label: 'Время на сайте', value: '+2.5 мин' },
    ],
    images: {
      thumbnail: '/assets/thumbs/landing.jpg',
      hero: '/assets/hero/landing-hero.jpg',
      mobile: '/assets/cases/landing-mobile.jpg',
    },
    colors: {
      primary: '#ec4899',
      secondary: '#db2777',
    },
    caseDetails: {
      challenge: 'Стартапу нужен был современный лендинг, который бы выделялся среди конкурентов и привлекал инвесторов.',
      solution: 'Создал яркий дизайн с плавными анимациями, четкими CTA и оптимизированными формами. Сделал акцент на преимуществах продукта.',
      result: 'Количество заявок выросло на 120%, показатель отказов снизился на 45%. Стартап успешно привлек инвестиции.',
    },
  },
  {
    id: 'mobile-app',
    title: 'Мобильное приложение',
    category: 'app',
    shortDescription: 'Кроссплатформенное приложение для iOS и Android',
    fullDescription: 'Разработал кроссплатформенное мобильное приложение с нативным UX.',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    metrics: [
      { label: 'Загрузки', value: '50k+' },
      { label: 'Рейтинг', value: '4.7/5' },
      { label: 'Активные пользователи', value: '15k' },
    ],
    images: {
      thumbnail: '/assets/thumbs/app.jpg',
      hero: '/assets/hero/app-hero.jpg',
      mobile: '/assets/cases/app-mobile.jpg',
    },
    colors: {
      primary: '#10b981',
      secondary: '#059669',
    },
    caseDetails: {
      challenge: 'Нужно было создать приложение для iOS и Android с единой кодовой базой и нативным опытом.',
      solution: 'Использовал React Native для разработки кроссплатформенного решения. Интегрировал Firebase для аутентификации и хранения данных.',
      result: 'Более 50,000 загрузок за первые 3 месяца. Рейтинг 4.7/5 в обоих сторах. 15,000 активных пользователей ежемесячно.',
    },
  },
  {
    id: 'corporate-website',
    title: 'Корпоративный сайт',
    category: 'landing',
    shortDescription: 'Многостраничный сайт для крупной компании',
    fullDescription: 'Создал корпоративный сайт с современным дизайном и удобной навигацией.',
    tags: ['Next.js', 'TypeScript', 'Sanity CMS', 'Tailwind CSS'],
    metrics: [
      { label: 'Посещаемость', value: '+85%' },
      { label: 'SEO рейтинг', value: '92/100' },
      { label: 'Время загрузки', value: '0.9s' },
    ],
    images: {
      thumbnail: '/assets/thumbs/corporate.jpg',
      hero: '/assets/hero/corporate-hero.jpg',
    },
    colors: {
      primary: '#f97316',
      secondary: '#ea580c',
    },
    caseDetails: {
      challenge: 'Компании требовался представительский сайт с возможностью самостоятельного обновления контента.',
      solution: 'Разработал сайт на Next.js с интеграцией CMS для управления контентом. Оптимизировал для SEO и скорости загрузки.',
      result: 'Посещаемость выросла на 85%, SEO рейтинг 92/100. Сайт загружается менее чем за секунду.',
    },
  },
  {
    id: 'fintech-platform',
    title: 'Финтех платформа',
    category: 'saas',
    shortDescription: 'Платформа для управления финансами',
    fullDescription: 'Разработал защищенную платформу для управления личными и корпоративными финансами.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    metrics: [
      { label: 'Транзакции/день', value: '100k+' },
      { label: 'Безопасность', value: 'A+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    images: {
      thumbnail: '/assets/thumbs/fintech.jpg',
      hero: '/assets/hero/fintech-hero.jpg',
    },
    colors: {
      primary: '#3b82f6',
      secondary: '#2563eb',
    },
    caseDetails: {
      challenge: 'Создание безопасной и масштабируемой платформы для обработки финансовых операций в реальном времени.',
      solution: 'Построил архитектуру с микросервисами, внедрил многоуровневую систему безопасности и шифрование данных.',
      result: 'Платформа обрабатывает более 100,000 транзакций ежедневно с uptime 99.9%. Получила сертификат безопасности A+.',
    },
  },
];
