import { motion } from 'framer-motion';
import { Code2, Palette, Zap } from 'lucide-react';
import Section from '../ui/Section';
import { H2, Body } from '../ui/Typography';
import Badge from '../ui/Badge';
import { bio, skills } from '../../data/content';

export default function About() {
  return (
    <Section id="about" className="bg-neutral-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <H2 className="mb-4">Обо мне</H2>
          <Body className="max-w-2xl mx-auto">
            Frontend разработчик с опытом создания эффективных веб-решений
          </Body>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div>
            <Body className="mb-6">
              Привет! Я {bio.name}, frontend разработчик с {bio.yearsExperience} опытом.
              Специализируюсь на создании современных веб-сайтов и приложений, 
              которые не только красиво выглядят, но и решают реальные бизнес-задачи.
            </Body>
            <Body className="mb-8">
              Работаю с технологиями React, TypeScript, Next.js и современными 
              инструментами разработки. Уделяю особое внимание производительности, 
              доступности и пользовательскому опыту.
            </Body>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <Code2 className="w-6 h-6 text-accent-blue" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Чистый код</div>
                  <div className="text-sm text-neutral-600">
                    Пишу понятный и поддерживаемый код с использованием лучших практик
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <Palette className="w-6 h-6 text-accent-purple" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Дизайн и UX</div>
                  <div className="text-sm text-neutral-600">
                    Создаю интуитивные интерфейсы с вниманием к деталям
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <Zap className="w-6 h-6 text-accent-orange" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Производительность</div>
                  <div className="text-sm text-neutral-600">
                    Оптимизирую скорость загрузки и работы приложений
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold mb-6">
                Технологии и инструменты
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold mb-2">
                Готов к сотрудничеству
              </h3>
              <Body className="mb-6 text-neutral-300">
                Открыт для новых проектов и интересных предложений
              </Body>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-neutral-900 rounded-lg font-medium hover:bg-neutral-100 transition-colors"
              >
                Написать мне
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
