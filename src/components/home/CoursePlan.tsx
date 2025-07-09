'use client';

import { Target } from 'lucide-react';
import SectionBlock from './SectionBlock';

const sections = [
  {
    title: 'Introduction',
    description: 'Concepts de base et définitions des bases de données',
    href: '/introduction',
    iconName: 'Rocket',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Section I - Les anomalies',
    description: 'Comprendre les différents types d\'anomalies dans les bases de données',
    href: '/section-1',
    iconName: 'BarChart3',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Section II - La normalisation',
    description: 'Maîtriser les formes normales et la normalisation du MRD',
    href: '/section-2',
    iconName: 'Database',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Quiz',
    description: 'Évaluez vos connaissances avec des questions interactives',
    href: '/quiz',
    iconName: 'HelpCircle',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Cas pratiques',
    description: 'Cas pratiques et exercices d\'application pour le DSCG',
    href: '/questions-dscg',
    iconName: 'Award',
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    title: 'Exercices supplémentaires',
    description: 'Tous les exercices du chapitre avec solutions complètes',
    href: '/exercices-supplementaires',
    iconName: 'BookOpen',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  }
];

export default function CoursePlan() {
  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-0">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Plan du cours
          </h2>
        </div>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-4 sm:px-0">
          Suivez le parcours structuré pour maîtriser les bases de données
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-3 sm:space-y-4">
        {sections.map((section, index) => (
          <SectionBlock
            key={section.href}
            {...section}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}