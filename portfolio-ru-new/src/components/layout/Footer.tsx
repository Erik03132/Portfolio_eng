import { Github, Linkedin, Dribbble } from 'lucide-react';
import { socialLinks } from '../../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-neutral-400 text-sm">
            © {currentYear} Erik. Все права защищены.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label="Behance"
            >
              <Dribbble className="w-5 h-5" />
            </a>
          </div>

          {/* Additional Links */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
