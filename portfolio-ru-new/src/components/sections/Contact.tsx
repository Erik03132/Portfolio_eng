import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare, Calendar } from 'lucide-react';
import Section from '../ui/Section';
import { H2, Body } from '../ui/Typography';
import Input, { Textarea } from '../ui/Input';
import Button from '../ui/Button';
import { contactInfo } from '../../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', budget: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Section id="contact" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <H2 className="mb-4">Связаться со мной</H2>
          <Body className="max-w-2xl mx-auto">
            Обсудим ваш проект и найдем лучшее решение
          </Body>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ivan@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">
                  Бюджет проекта
                </label>
                <Input
                  id="budget"
                  name="budget"
                  type="text"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="50,000 - 100,000₽"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Описание задачи
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Расскажите о вашем проекте..."
                  required
                />
              </div>

              {isSubmitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  Спасибо! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Отправка...'
                ) : (
                  <>
                    Отправить сообщение
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-neutral-50 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold mb-6">
                Другие способы связи
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                >
                  <div className="p-3 bg-neutral-100 rounded-lg group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-neutral-600">{contactInfo.email}</div>
                  </div>
                </a>

                <a
                  href={contactInfo.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                >
                  <div className="p-3 bg-neutral-100 rounded-lg group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">Telegram</div>
                    <div className="text-sm text-neutral-600">Написать в Telegram</div>
                  </div>
                </a>

                <a
                  href={contactInfo.calendar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                >
                  <div className="p-3 bg-neutral-100 rounded-lg group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">Запланировать встречу</div>
                    <div className="text-sm text-neutral-600">Выбрать удобное время</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold mb-2">
                Быстрый ответ
              </h3>
              <Body className="text-neutral-300 mb-4">
                Обычно отвечаю в течение 24 часов в рабочие дни
              </Body>
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Доступен для проектов
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
