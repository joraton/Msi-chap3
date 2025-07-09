'use client';

import { BookOpen, Award, Brain } from 'lucide-react';
import Link from 'next/link';

const exerciseButtons = [
  {
    title: 'Quiz Interactif',
    description: 'Testez vos connaissances',
    href: '/quiz',
    icon: Brain,
    color: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
    textColor: 'text-white'
  },
  {
    title: 'Cas pratiques',
    description: 'Cas pratiques pour l&apos;examen',
    href: '/questions-dscg',
    icon: Award,
    color: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
    textColor: 'text-white'
  },
  {
    title: 'Exercices Complets',
    description: 'Tous les exercices avec solutions',
    href: '/exercices-supplementaires',
    icon: BookOpen,
    color: 'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
    textColor: 'text-white'
  }
];

export default function ExerciseButtons() {
  return (
    <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-0">
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          Accès rapide aux exercices
        </h3>
        <p className="text-sm sm:text-base text-gray-600">
          Choisissez le type d&apos;exercice qui vous convient
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {exerciseButtons.map((button) => {
          const IconComponent = button.icon;
          return (
            <Link
              key={button.href}
              href={button.href}
              className={`${button.color} ${button.textColor} rounded-xl p-4 sm:p-6 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl`}
            >
              <div className="flex flex-col items-center text-center">
                <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 mb-2 sm:mb-3" />
                <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{button.title}</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">{button.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}