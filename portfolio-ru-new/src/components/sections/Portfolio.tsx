import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Section from '../ui/Section';
import { H2, H3, Body } from '../ui/Typography';
import Badge from '../ui/Badge';
import Modal from '../ui/Modal';
import type { Project } from '../../data/projects';
import { projects } from '../../data/projects';

type Category = 'all' | 'landing' | 'app' | 'ecommerce' | 'saas';

const categories = [
  { id: 'all' as Category, label: 'Все проекты' },
  { id: 'landing' as Category, label: 'Landing' },
  { id: 'ecommerce' as Category, label: 'E-commerce' },
  { id: 'app' as Category, label: 'Приложения' },
  { id: 'saas' as Category, label: 'SaaS' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Section id="portfolio" className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <H2 className="mb-4">Портфолио</H2>
            <Body className="max-w-2xl mx-auto">
              Избранные проекты, которые помогли клиентам достичь своих целей
            </Body>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                {/* Thumbnail */}
                <div
                  className="relative h-64 bg-gradient-to-br overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.colors.primary}, ${project.colors.secondary})`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/20 text-6xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-3">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <H3 className="mb-2 text-xl">{project.title}</H3>
                  <Body className="mb-4 text-sm line-clamp-2">
                    {project.shortDescription}
                  </Body>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="default" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Case Study Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="p-8">
            {/* Hero Image */}
            <div
              className="relative h-80 rounded-xl mb-8 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${selectedProject.colors.primary}, ${selectedProject.colors.secondary})`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/30 text-8xl font-bold">
                  {selectedProject.title.charAt(0)}
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="mb-8">
              <H2 className="mb-4">{selectedProject.title}</H2>
              <Body className="mb-6">{selectedProject.fullDescription}</Body>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-neutral-50 rounded-xl mb-8">
                {selectedProject.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="text-2xl font-bold font-display mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-neutral-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Details */}
            <div className="space-y-6">
              <div>
                <h4 className="font-display text-xl font-semibold mb-2">
                  Задача
                </h4>
                <Body>{selectedProject.caseDetails.challenge}</Body>
              </div>
              <div>
                <h4 className="font-display text-xl font-semibold mb-2">
                  Решение
                </h4>
                <Body>{selectedProject.caseDetails.solution}</Body>
              </div>
              <div>
                <h4 className="font-display text-xl font-semibold mb-2">
                  Результат
                </h4>
                <Body>{selectedProject.caseDetails.result}</Body>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
