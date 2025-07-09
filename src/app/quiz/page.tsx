'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle anomalie se produit quand on ne peut pas ajouter un fournisseur sans produit ?",
    options: [
      "Anomalie de mise à jour",
      "Anomalie d'insertion",
      "Anomalie de suppression",
      "Anomalie d'espace"
    ],
    correct: 1,
    explanation: "L'anomalie d'insertion empêche d'ajouter certaines données indépendamment d'autres données."
  },
  {
    id: 2,
    question: "Que signifie qu'une base est en première forme normale (1NF) ?",
    options: [
      "Tous les attributs dépendent de la clé primaire",
      "Tous les attributs sont décomposés",
      "Il n'y a pas de dépendance transitive",
      "Chaque table a une clé primaire"
    ],
    correct: 1,
    explanation: "La 1NF exige que tous les attributs soient décomposés (pas d'attributs composites ou calculés)."
  },
  {
    id: 3,
    question: "Dans le MRD, que représente le symbole # devant un attribut ?",
    options: [
      "Un attribut obligatoire",
      "Une clé primaire",
      "Une clé étrangère",
      "Un attribut calculé"
    ],
    correct: 2,
    explanation: "Le symbole # indique une clé étrangère, qui est une clé primaire d'une autre table."
  },
  {
    id: 4,
    question: "Quelle forme normale évite les dépendances transitives ?",
    options: [
      "Première forme normale (1NF)",
      "Deuxième forme normale (2NF)",
      "Troisième forme normale (3NF)",
      "Aucune des réponses"
    ],
    correct: 2,
    explanation: "La 3NF exige que tous les attributs dépendent directement de la clé primaire (pas de transitivité)."
  },
  {
    id: 5,
    question: "Combien y a-t-il de types d'anomalies dans une base de données mal conçue ?",
    options: [
      "3 types",
      "4 types",
      "5 types",
      "6 types"
    ],
    correct: 2,
    explanation: "Il y a 5 types d'anomalies : insertion, mise à jour, suppression, espace et confusion."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const score = selectedAnswers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BackToPlanButton />
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <div className="mb-8">
                <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4 ${
                  percentage >= 80 ? 'bg-green-100' : percentage >= 60 ? 'bg-yellow-100' : 'bg-red-100'
                }`}>
                  {percentage >= 80 ? (
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  ) : (
                    <XCircle className="h-12 w-12 text-red-600" />
                  )}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Résultats du Quiz</h1>
                <p className="text-xl text-gray-600">
                  Vous avez obtenu {score}/{questions.length} ({percentage}%)
                </p>
              </div>

              <div className={`p-6 rounded-lg mb-8 ${
                percentage >= 80 ? 'bg-green-50 border border-green-200' : 
                percentage >= 60 ? 'bg-yellow-50 border border-yellow-200' : 
                'bg-red-50 border border-red-200'
              }`}>
                <p className={`text-lg font-medium ${
                  percentage >= 80 ? 'text-green-800' : 
                  percentage >= 60 ? 'text-yellow-800' : 
                  'text-red-800'
                }`}>
                  {percentage >= 80 ? '🎉 Excellent ! Vous maîtrisez bien les concepts.' :
                   percentage >= 60 ? '👍 Bien ! Quelques révisions seraient bénéfiques.' :
                   '📚 Il serait bon de revoir le cours avant de continuer.'}
                </p>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={resetQuiz}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Recommencer
                </button>
                <Link
                  href="/questions-dscg"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  Exercices DSCG
                  <BookOpen className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const isCorrect = selectedAnswers[currentQuestion] === question.correct;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-orange-100 p-3 rounded-lg">
              <HelpCircle className="h-8 w-8 text-orange-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">Quiz - Bases de Données</h1>
              <p className="text-gray-600">Question {currentQuestion + 1} sur {questions.length}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Score actuel</div>
              <div className="text-2xl font-bold text-blue-600">
                {selectedAnswers.filter((answer, index) => answer === questions[index]?.correct).length}/{currentQuestion + (isAnswered ? 1 : 0)}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + (isAnswered ? 1 : 0)) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mb-8"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {question.question}
              </h2>

              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestion] === index;
                  const isCorrectOption = index === question.correct;
                  
                  let buttonClass = "w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ";
                  
                  if (!isAnswered) {
                    buttonClass += "border-gray-200 hover:border-blue-300 hover:bg-blue-50";
                  } else {
                    if (isSelected) {
                      buttonClass += isCorrectOption 
                        ? "border-green-500 bg-green-50 text-green-800" 
                        : "border-red-500 bg-red-50 text-red-800";
                    } else if (isCorrectOption) {
                      buttonClass += "border-green-500 bg-green-50 text-green-800";
                    } else {
                      buttonClass += "border-gray-200 bg-gray-50 text-gray-500";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => !isAnswered && handleAnswer(index)}
                      disabled={isAnswered}
                      className={buttonClass}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-medium">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        <span>{option}</span>
                        {isAnswered && isSelected && (
                          isCorrectOption ? (
                            <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-600 ml-auto" />
                          )
                        )}
                        {isAnswered && !isSelected && isCorrectOption && (
                          <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`p-4 rounded-lg mb-6 ${
                  isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  )}
                  <div>
                    <p className={`font-medium mb-1 ${
                      isCorrect ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {isCorrect ? 'Correct !' : 'Incorrect'}
                    </p>
                    <p className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <Link
              href="/section-2"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Section II
            </Link>
            
            {showExplanation && (
              <button
                onClick={nextQuestion}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}