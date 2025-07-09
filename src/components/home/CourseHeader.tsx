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
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white shadow-lg">
        <div className="flex items-start gap-6">
          {/* Course Icon */}
          <div className="bg-white/20 p-4 rounded-lg">
            <Database className="h-12 w-12" />
          </div>

          {/* Course Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-3">
              Les Bases de Données
            </h1>
            <p className="text-blue-100 mb-6 text-lg">
              Maîtrisez la conception et la normalisation des bases de données relationnelles. 
              Apprenez les concepts fondamentaux, les anomalies et les formes normales.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <Users className="h-4 w-4" />
                Expert
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <Clock className="h-4 w-4" />
                3h 30min
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                3 sections
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}