import { Database, Clock, Users, BookOpen } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <span>Accueil</span>
        <span className="mx-2">{'>'}</span>
        <span>Cours</span>
        <span className="mx-2">{'>'}</span>
        <span className="text-blue-600">Les Bases de Données</span>
      </nav>

      {/* Course Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 sm:p-6 lg:p-8 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Course Icon */}
          <div className="bg-white/20 p-3 sm:p-4 rounded-lg mx-auto sm:mx-0">
            <Database className="h-10 w-10 sm:h-12 sm:w-12" />
          </div>

          {/* Course Info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
              Les Bases de Données
            </h1>
            <p className="text-blue-100 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
              Maîtrisez la conception et la normalisation des bases de données relationnelles. 
              Apprenez les concepts fondamentaux, les anomalies et les formes normales.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
              <div className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                Expert
              </div>
              <div className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                3h 30min
              </div>
              <div className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                3 sections
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}