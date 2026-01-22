import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Section from '../ui/Section';
import { H2, H3, Body } from '../ui/Typography';
import { services } from '../../data/content';

export default function Services() {
  return (
    <Section id="services" className="bg-neutral-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <H2 className="mb-4">Услуги</H2>
          <Body className="max-w-2xl mx-auto">
            Комплексная разработка веб-решений для вашего бизнеса
          </Body>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">
                <H3 className="mb-3">{service.name}</H3>
                <Body className="mb-4">{service.description}</Body>
                
                <div className="flex items-baseline gap-4 mb-2">
                  <div className="text-2xl font-bold font-display">
                    {service.priceRange}
                  </div>
                  <div className="text-neutral-600">
                    {service.timeline}
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-neutral-900 rounded-full">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
