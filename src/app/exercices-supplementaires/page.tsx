'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BookOpen, ChevronDown, ChevronRight, ArrowLeft, Lightbulb, Database } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Exercise {
  id: number;
  title: string;
  context: string;
  questions: string[];
  solution?: string[];
  tips?: string[];
  type: 'modeling' | 'theory' | 'nosql';
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Exercice 1 - Cabinet médical (Rappel sur la modélisation)",
    type: 'modeling',
    context: `On s'intéresse à la conception d'une base de données (BDD) d'un cabinet médical. Cette BDD doit permettre de répondre aux exigences suivantes :
    
• Chaque médecin qui travaille dans le cabinet possède un numéro professionnel unique servant d'identifiant
• Outre les coordonnées classiques (nom, prénom, adresse, téléphone, ...) il est nécessaire de mentionner sa spécialité médicale (médecine générale, pédiatrie, cardiologie ...)
• Les dossiers patients du cabinet sont identifiés par le numéro de sécurité sociale du patient, et comportent les données usuelles d'identification
• Les patients peuvent avoir des consultations avec les médecins du cabinet médical
• Les consultations sont identifiées par un code numérique, se font à une date donnée, ont une heure de début, une durée et un objet
• L'heure de début et la durée sont déterminées par le secrétariat lors de la prise de rendez-vous
• À la fin de la consultation, le médecin peut prescrire des médicaments
• Pour chaque médicament prescrit, il faut mentionner la durée de prise du médicament et la quantité
• Les médicaments sont caractérisés par un nom technique qui permet de les identifier et un simple nom commercial, un prix, une substance active, s'il est générique ou non et le nom du laboratoire qui l'a produit`,
    questions: [
      "1) Définir la notion de BDD normalisée",
      "2) Indiquer son utilité dans le cadre du SI d'une organisation",
      "3) Rappeler la notion de SGBDR et la notion de contrainte d'intégrité référentielle",
      "4) Modélisez cette base de données selon une approche relationnelle en détaillant les étapes. Ne pas hésiter à faire des hypothèses et à justifier vos solutions"
    ],
    solution: [
      "1) BDD normalisée : Base de données respectant les règles de normalisation (1NF, 2NF, 3NF) pour éviter les anomalies",
      "2) Utilité : Évite la redondance, garantit la cohérence, facilite la maintenance, optimise l'espace de stockage",
      "3) SGBDR : Système de Gestion de Base de Données Relationnelle. Contrainte d'intégrité référentielle : assure que les clés étrangères référencent des clés primaires existantes",
      "4) Modèle proposé :",
      "MEDECIN(NumProfessionnel, Nom, Prenom, Adresse, Telephone, Specialite)",
      "PATIENT(NumSecuSociale, Nom, Prenom, DateNaissance, Adresse, Telephone)",
      "CONSULTATION(CodeConsultation, Date, HeureDebut, Duree, Objet, #NumProfessionnel, #NumSecuSociale)",
      "MEDICAMENT(NomTechnique, NomCommercial, Prix, SubstanceActive, EstGenerique, Laboratoire)",
      "PRESCRIRE(#CodeConsultation, #NomTechnique, DureePrise, Quantite)"
    ],
    tips: [
      "Identifiez d'abord les entités principales",
      "Déterminez les relations entre entités",
      "Vérifiez que chaque table respecte la 3NF",
      "N'oubliez pas les tables de liaison pour les relations many-to-many"
    ]
  },
  {
    id: 2,
    title: "Exercice 2 - Gestion des projets informatiques",
    type: 'modeling',
    context: `La gestion des projets informatiques d'une entreprise s'organise de la façon suivante :
    
• Les participants aux projets sont des membres de l'entreprise, identifiés par leur matricule, leur nom, leur prénom, leur salaire journalier
• Un projet est constitué par un numéro, un intitulé, un budget et une date de fin prévue
• Tout projet est placé sous l'autorité d'un des participants, qui est le chef de projet
• Chaque projet se compose de livrables, qui correspondent à des grandes phases du projet (étude préalable, analyse technique, développement ...)
• Un livrable est désigné par un numéro unique et correspond de façon spécifique à un projet
• Un livrable contient également le Coût Prévu, l'état (En cours/Achevé)
• L'objectif de la base de données est de déterminer l'affectation des participants au projet
• Certains participants peuvent intervenir sur différents projets, et on indique alors le pourcentage de leur temps d'intervention sur chaque projet`,
    questions: [
      "1) Établissez le modèle relationnel des données correspondant au descriptif suivant"
    ],
    solution: [
      "PARTICIPANT(Matricule, Nom, Prenom, SalaireJournalier)",
      "PROJET(NumProjet, Intitule, Budget, DateFinPrevue, #MatriculeChef)",
      "LIVRABLE(NumLivrable, #NumProjet, CoutPrevu, Etat)",
      "AFFECTER(#Matricule, #NumProjet, PourcentageTemps)",
      "",
      "Contraintes :",
      "- MatriculeChef dans PROJET référence Matricule dans PARTICIPANT",
      "- Un livrable appartient à un seul projet",
      "- Un participant peut être affecté à plusieurs projets avec des pourcentages différents"
    ],
    tips: [
      "Attention à la relation chef de projet (auto-référence dans PARTICIPANT)",
      "Les livrables sont spécifiques à un projet",
      "La table AFFECTER gère les affectations avec pourcentages",
      "Vérifiez que la somme des pourcentages par participant ne dépasse pas 100%"
    ]
  },
  {
    id: 3,
    title: "Exercice 3 - Le NoSQL",
    type: 'nosql',
    context: `Pour comprendre la pertinence des solutions NoSQL, la meilleure stratégie consiste à comprendre, dans un premier temps, ce qui a assuré le succès et la pérennité des bases relationnelles.
    
**Bases relationnelles, les raisons d'une domination**

Voici bientôt un demi-siècle que les bases de données relationnelles règnent sans partage sur l'informatique de gestion. Des données structurées en tables, des enregistrements reliés implicitement par des clés étrangères et des schémas de données stricts.

Le langage SQL permet de formuler des requêtes en spécifiant ce que l'on cherche (langage déclaratif), et non pas comment on va le chercher.

**Atouts des SGBDR :**
• Élaboration automatique d'un plan de recherche des données
• Isolation des applications de la structure physique des données (découplage physique)
• Utilisation non-anticipée des données (découplage logique)
• Garantie de cohérence par les contraintes d'intégrité
• Gestion des accès concurrents par les transactions

**Limites identifiées :**
• Difficulté de répartir les traitements sur un grand nombre de nœuds serveurs
• Inadéquation avec la programmation orientée objet
• Complexité des frameworks de mapping objet-relationnel

**L'émergence du NoSQL :**
Avec le web, l'e-commerce, les réseaux sociaux et le big data, de nouveaux besoins sont apparus :
• Exigences de disponibilité et de montée en charge
• Données non-structurées (logs, fichiers audio, etc.)
• Possibilité de distribuer sur des milliers de machines

**Caractéristiques NoSQL :**
• Clusterisables
• Dépourvus de schémas
• Dépourvus de transactions
• Non-relationnels
• Proposés en open-source`,
    questions: [
      "1) Repérez les enjeux d'une base distribuée",
      "2) Qu'apportent les SGBDR aux autres applications ?",
      "3) Caractérisez le NoSQL",
      "4) Peut-on en déduire la fin des bases de données relationnelles ?"
    ],
    solution: [
      "1) Enjeux d'une base distribuée :",
      "- Disponibilité et tolérance aux pannes",
      "- Montée en charge (scalabilité horizontale)",
      "- Performance sur de gros volumes",
      "- Gestion de la cohérence entre nœuds",
      "- Coût des échanges entre serveurs",
      "",
      "2) Apports des SGBDR :",
      "- Découplage physique et logique",
      "- Optimisation automatique des requêtes",
      "- Garantie de cohérence (ACID)",
      "- Gestion des accès concurrents",
      "- Langage déclaratif (SQL)",
      "",
      "3) Caractéristiques NoSQL :",
      "- Clusterisables (distribution)",
      "- Sans schéma fixe (flexibilité)",
      "- Sans transactions ACID",
      "- Non-relationnels",
      "- Open-source",
      "- Eventual consistency",
      "",
      "4) Coexistence plutôt que remplacement :",
      "- SGBDR pour applications nécessitant cohérence forte",
      "- NoSQL pour applications web, big data, haute disponibilité",
      "- Choix basé sur les compromis acceptables",
      "- Décision autant commerciale que technique"
    ],
    tips: [
      "Analysez les besoins spécifiques de chaque contexte",
      "Comprenez les compromis entre cohérence et disponibilité",
      "Le NoSQL n'est pas une solution universelle",
      "Évaluez les coûts de migration et de formation"
    ]
  }
];

export default function ExercicesSupplementaires() {
  const [expandedExercise, setExpandedExercise] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>({});
  const [showTips, setShowTips] = useState<{ [key: number]: boolean }>({});

  const toggleExercise = (id: number) => {
    setExpandedExercise(expandedExercise === id ? null : id);
  };

  const toggleSolution = (id: number) => {
    setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleTips = (id: number) => {
    setShowTips(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'modeling': return 'bg-blue-100 text-blue-800';
      case 'theory': return 'bg-green-100 text-green-800';
      case 'nosql': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'modeling': return 'Modélisation';
      case 'theory': return 'Théorie';
      case 'nosql': return 'NoSQL';
      default: return 'Autre';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-orange-100 p-3 rounded-lg">
              <BookOpen className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Exercices supplémentaires</h1>
              <p className="text-gray-600">Exercices complets du chapitre avec solutions détaillées</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
            <h3 className="text-lg font-semibold text-orange-900 mb-2">📚 Contenu du chapitre</h3>
            <p className="text-orange-800">
              Cette section contient tous les exercices présents dans le document original du chapitre, 
              incluant les exercices de modélisation, les questions théoriques et l&apos;analyse du NoSQL.
            </p>
          </div>

          {/* Exercises */}
          <div className="space-y-6">
            {exercises.map((exercise) => (
              <div key={exercise.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleExercise(exercise.id)}
                  className="w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exercise.type)}`}>
                      {getTypeLabel(exercise.type)}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">{exercise.title}</h3>
                  </div>
                  {expandedExercise === exercise.id ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedExercise === exercise.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 border-t border-gray-200">
                        {/* Context */}
                        <div className="mb-6">
                          <h4 className="text-md font-semibold text-gray-900 mb-3">📋 Contexte</h4>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
                              {exercise.context}
                            </pre>
                          </div>
                        </div>

                        {/* Questions */}
                        <div className="mb-6">
                          <h4 className="text-md font-semibold text-gray-900 mb-3">❓ Questions</h4>
                          <div className="space-y-2">
                            {exercise.questions.map((question, index) => (
                              <div key={index} className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                                <p className="text-blue-900 text-sm">{question}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-4 mb-6">
                          {exercise.tips && (
                            <button
                              onClick={() => toggleTips(exercise.id)}
                              className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                            >
                              <Lightbulb className="h-4 w-4" />
                              {showTips[exercise.id] ? 'Masquer les conseils' : 'Voir les conseils'}
                            </button>
                          )}
                          {exercise.solution && (
                            <button
                              onClick={() => toggleSolution(exercise.id)}
                              className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                            >
                              <Database className="h-4 w-4" />
                              {showSolution[exercise.id] ? 'Masquer la solution' : 'Voir la solution'}
                            </button>
                          )}
                        </div>

                        {/* Tips */}
                        <AnimatePresence>
                          {showTips[exercise.id] && exercise.tips && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mb-6"
                            >
                              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                <h5 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                                  <Lightbulb className="h-4 w-4" />
                                  Conseils
                                </h5>
                                <ul className="space-y-1 text-yellow-800 text-sm">
                                  {exercise.tips.map((tip, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                      <span className="text-yellow-600 mt-1">•</span>
                                      <span>{tip}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Solution */}
                        <AnimatePresence>
                          {showSolution[exercise.id] && exercise.solution && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                            >
                              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <h5 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                                  <Database className="h-4 w-4" />
                                  Solution détaillée
                                </h5>
                                <div className="space-y-2">
                                  {exercise.solution.map((line, index) => (
                                    <div key={index} className="text-green-800 text-sm">
                                      {line.startsWith('MEDECIN(') || line.startsWith('PATIENT(') || 
                                       line.startsWith('CONSULTATION(') || line.startsWith('MEDICAMENT(') ||
                                       line.startsWith('PRESCRIRE(') || line.startsWith('PARTICIPANT(') ||
                                       line.startsWith('PROJET(') || line.startsWith('LIVRABLE(') ||
                                       line.startsWith('AFFECTER(') ? (
                                        <code className="bg-green-100 px-2 py-1 rounded font-mono text-xs">
                                          {line}
                                        </code>
                                      ) : (
                                        <span className={line === '' ? 'block h-2' : ''}>{line}</span>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/questions-dscg"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Exercices DSCG
            </Link>
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Retour au plan de cours
              <BookOpen className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}