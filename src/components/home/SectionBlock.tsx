'use client';

import Link from 'next/link';
import { Rocket, BarChart3, Database, HelpCircle, Award, BookOpen, AlertTriangle, Settings, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  iconName: string;
  color: string;
  bgColor: string;
  index: number;
}

const iconMap = {
  'Rocket': Rocket,
  'BarChart3': BarChart3,
  'Database': Database,
  'HelpCircle': HelpCircle,
  'Award': Award,
  'BookOpen': BookOpen,
  'AlertTriangle': AlertTriangle,
  'Settings': Settings,
  'Brain': Brain
};

export default function SectionBlock({
  title,
  description,
  href,
  iconName,
  color,
  bgColor,
  index
}: SectionBlockProps) {
  const Icon = iconMap[iconName as keyof typeof iconMap];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className={`${bgColor} p-3 rounded-full`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {title}
            </h3>
            <p className="text-gray-600">
              {description}
            </p>
          </div>
        </div>

        {/* Button */}
        <Link
          href={href}
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-sm"
        >
          Commencer
        </Link>
      </div>
    </motion.div>
  );
}