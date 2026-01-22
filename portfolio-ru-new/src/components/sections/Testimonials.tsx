import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Section from '../ui/Section';
import { H2, Body } from '../ui/Typography';
import { testimonials } from '../../data/content';

export default function Testimonials() {
  return (
    <Section className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <H2 className="mb-4">Отзывы клиентов</H2>
          <Body className="max-w-2xl mx-auto">
            Что говорят о работе со мной
          </Body>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-50 rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-neutral-200" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <Body className="mb-6 relative z-10">
                "{testimonial.text}"
              </Body>

              {/* Author */}
              <div>
                <div className="font-semibold text-neutral-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-neutral-600">
                  {testimonial.role} • {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
