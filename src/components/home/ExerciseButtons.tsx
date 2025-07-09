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
    <div className="max-w-4xl mx-auto mb-12">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Accès rapide aux exercices
        </h3>
        <p className="text-gray-600">
          Choisissez le type d&apos;exercice qui vous convient
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {exerciseButtons.map((button) => {
          const IconComponent = button.icon;
          return (
            <Link
              key={button.href}
              href={button.href}
              className={`${button.color} ${button.textColor} rounded-xl p-6 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl`}
            >
              <div className="flex flex-col items-center text-center">
                <IconComponent className="h-8 w-8 mb-3" />
                <h4 className="font-bold text-lg mb-2">{button.title}</h4>
                <p className="text-sm opacity-90">{button.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}