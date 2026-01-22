import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import { H1, Body } from '../ui/Typography';
import { bio } from '../../data/content';

export default function Hero() {
  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-accent-pink/10 to-accent-orange/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent-blue" />
            <span className="text-sm font-medium">Доступен для новых проектов</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <H1 className="mb-6">
              Создаю современные сайты,
              <br />
              <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
                которые продают
              </span>
            </H1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Body className="mb-8 max-w-2xl mx-auto text-lg">
              {bio.description}
            </Body>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => handleScrollToSection('#contact')}
              className="group"
            >
              Заказать проект
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleScrollToSection('#portfolio')}
            >
              Смотреть портфолио
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold font-display mb-1">
                {bio.yearsExperience}
              </div>
              <div className="text-sm text-neutral-600">Лет опыта</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold font-display mb-1">
                {bio.projectsCompleted}
              </div>
              <div className="text-sm text-neutral-600">Проектов</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold font-display mb-1">
                {bio.happyClients}
              </div>
              <div className="text-sm text-neutral-600">Клиентов</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
