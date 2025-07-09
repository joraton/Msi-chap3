'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Award, ChevronDown, ChevronRight, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Exercise {
  id: number;
  title: string;
  context: string;
  question: string;
  solution: string[];
  tips: string[];
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Conception d'une base de données - Cabinet médical",
    context: `On s'intéresse à la conception d'une base de données d'un cabinet médical. Cette BDD doit permettre de répondre aux exigences suivantes :
    
• Chaque médecin possède un numéro professionnel unique servant d'identifiant
• Coordonnées classiques (nom, prénom, adresse, téléphone) et spécialité médicale
• Dossiers patients identifiés par le numéro de sécurité sociale
• Consultations avec code numérique, date, heure de début, durée et objet
• Prescriptions de médicaments avec durée de prise et quantité
• Médicaments caractérisés par nom technique, nom commercial, prix, substance active, générique ou non, laboratoire`,
    question: "Proposez un modèle relationnel normalisé (3NF) pour ce cabinet médical.",
    solution: [
      "MEDECIN(NumProfessionnel, Nom, Prenom, Adresse, Telephone, Specialite)",
      "PATIENT(NumSecuSociale, Nom, Prenom, DateNaissance, Adresse, Telephone)",
      "CONSULTATION(CodeConsultation, Date, HeureDebut, Duree, Objet, #NumProfessionnel, #NumSecuSociale)",
      "MEDICAMENT(NomTechnique, NomCommercial, Prix, SubstanceActive, EstGenerique, Laboratoire)",
      "PRESCRIRE(#CodeConsultation, #NomTechnique, DureePrise, Quantite)"
    ],
    tips: [
      "Identifiez d'abord les entités principales : MEDECIN, PATIENT, CONSULTATION, MEDICAMENT",
      "Les consultations créent une relation entre médecins et patients",
      "Les prescriptions créent une relation entre consultations et médicaments",
      "Vérifiez que chaque table respecte la 3NF"
    ]
  },
  {
    id: 2,
    title: "Normalisation d'une table - Gestion des commandes",
    context: `Soit la table suivante :
COMMANDE(NumCommande, DateCommande, NomClient, AdresseClient, CodeProduit, LibelleProduit, PrixUnitaire, Quantite, MontantLigne)
    
Cette table présente plusieurs anomalies de normalisation.`,
    question: "Normalisez cette table jusqu'à la 3NF en justifiant chaque étape.",
    solution: [
      "1NF : Supprimer MontantLigne (attribut calculé = PrixUnitaire × Quantite)",
      "2NF : Séparer les données client et produit qui ne dépendent que partiellement de la clé",
      "CLIENT(CodeClient, NomClient, AdresseClient)",
      "PRODUIT(CodeProduit, LibelleProduit, PrixUnitaire)",
      "COMMANDE(NumCommande, DateCommande, #CodeClient)",
      "LIGNE_COMMANDE(#NumCommande, #CodeProduit, Quantite)"
    ],
    tips: [
      "Identifiez d'abord les violations de chaque forme normale",
      "La clé primaire composite (NumCommande, CodeProduit) crée des dépendances partielles",
      "Séparez les entités CLIENT et PRODUIT",
      "Créez une table de liaison LIGNE_COMMANDE"
    ]
  },
  {
    id: 3,
    title: "Identification des anomalies",
    context: `Soit la table EMPLOYE_PROJET :
EMPLOYE_PROJET(NumEmploye, NomEmploye, CodeProjet, NomProjet, DateDebut, NbHeures, TauxHoraire, SalaireBase)
    
Où :
• Un employé peut travailler sur plusieurs projets
• Un projet peut avoir plusieurs employés
• Le salaire de base dépend uniquement de l'employé
• Le taux horaire dépend du projet`,
    question: "Identifiez toutes les anomalies présentes et proposez une solution normalisée.",
    solution: [
      "Anomalies identifiées :",
      "• Insertion : impossible d'ajouter un employé sans projet",
      "• Mise à jour : changer le nom d'un projet nécessite plusieurs modifications",
      "• Suppression : supprimer le dernier projet d'un employé fait perdre ses données",
      "• Espace : répétition des données employé et projet",
      "",
      "Solution normalisée :",
      "EMPLOYE(NumEmploye, NomEmploye, SalaireBase)",
      "PROJET(CodeProjet, NomProjet, TauxHoraire)",
      "AFFECTER(#NumEmploye, #CodeProjet, DateDebut, NbHeures)"
    ],
    tips: [
      "Analysez chaque type d'anomalie systématiquement",
      "La clé primaire est composite : (NumEmploye, CodeProjet)",
      "SalaireBase ne dépend que de NumEmploye (violation 2NF)",
      "TauxHoraire ne dépend que de CodeProjet (violation 2NF)"
    ]
  },
  {
    id: 4,
    title: "Gestion d'une bibliothèque universitaire",
    context: `Une bibliothèque universitaire souhaite informatiser sa gestion. Les contraintes sont :
    
• Chaque livre est identifié par un ISBN unique
• Informations livre : titre, auteur(s), éditeur, année de publication, nombre de pages
• Plusieurs exemplaires peuvent exister pour un même livre
• Chaque exemplaire a un numéro unique et un état (neuf, bon, abîmé)
• Les étudiants sont identifiés par leur numéro étudiant
• Emprunts avec date de début, date de retour prévue et date de retour effective
• Un étudiant peut emprunter plusieurs livres, un exemplaire ne peut être emprunté que par un étudiant à la fois`,
    question: "Concevez le modèle relationnel normalisé pour cette bibliothèque.",
    solution: [
      "LIVRE(ISBN, Titre, Editeur, AnneePublication, NbPages)",
      "AUTEUR(CodeAuteur, NomAuteur, PrenomAuteur)",
      "ECRIRE(#ISBN, #CodeAuteur)",
      "EXEMPLAIRE(NumExemplaire, Etat, #ISBN)",
      "ETUDIANT(NumEtudiant, Nom, Prenom, Email, Promotion)",
      "EMPRUNTER(#NumEtudiant, #NumExemplaire, DateDebut, DateRetourPrevue, DateRetourEffective)"
    ],
    tips: [
      "Attention à la relation many-to-many entre LIVRE et AUTEUR",
      "Distinguez bien LIVRE (modèle) et EXEMPLAIRE (instance physique)",
      "La table EMPRUNTER gère l'historique des emprunts",
      "DateRetourEffective peut être NULL si le livre n'est pas encore rendu"
    ]
  },
  {
    id: 5,
    title: "Système de réservation hôtelière",
    context: `Un groupe hôtelier veut créer un système de réservation. Spécifications :
    
• Plusieurs hôtels dans différentes villes
• Chaque hôtel a des chambres de différents types (simple, double, suite)
• Chaque type de chambre a un prix par nuit qui peut varier selon la saison
• Les clients peuvent faire des réservations pour plusieurs chambres
• Une réservation concerne un client, un hôtel, des dates d'arrivée et de départ
• Chaque réservation peut inclure plusieurs chambres du même hôtel
• Les clients ont un numéro unique, nom, prénom, téléphone, email`,
    question: "Modélisez cette base de données en respectant la 3NF.",
    solution: [
      "HOTEL(CodeHotel, NomHotel, Adresse, Ville, NbEtoiles)",
      "TYPE_CHAMBRE(CodeType, LibelleType, CapaciteMax)",
      "CHAMBRE(NumChambre, #CodeHotel, #CodeType)",
      "TARIF(#CodeHotel, #CodeType, DateDebut, DateFin, PrixNuit)",
      "CLIENT(NumClient, Nom, Prenom, Telephone, Email)",
      "RESERVATION(NumReservation, DateArrivee, DateDepart, #NumClient, #CodeHotel)",
      "RESERVER_CHAMBRE(#NumReservation, #NumChambre, NbPersonnes)"
    ],
    tips: [
      "Séparez la gestion des tarifs qui varient selon les périodes",
      "Une réservation concerne un seul hôtel mais peut inclure plusieurs chambres",
      "La table TARIF permet de gérer les prix saisonniers",
      "RESERVER_CHAMBRE fait le lien entre réservations et chambres spécifiques"
    ]
  },
  {
    id: 6,
    title: "Gestion d'un centre de formation",
    context: `Un centre de formation propose des sessions de cours. Organisation :
    
• Différents cours identifiés par un code (ex: COMPTA01, INFO02)
• Chaque cours a un titre, une durée en heures, un niveau (débutant, intermédiaire, avancé)
• Les formateurs sont identifiés par un numéro, avec nom, prénom, spécialités
• Les sessions sont des instances de cours avec dates de début/fin, lieu, formateur
• Les stagiaires s'inscrivent aux sessions (pas aux cours directement)
• Chaque inscription a une date et un statut (confirmée, en attente, annulée)
• Un formateur peut animer plusieurs cours, un cours peut être animé par plusieurs formateurs`,
    question: "Proposez le modèle relationnel normalisé pour ce centre de formation.",
    solution: [
      "COURS(CodeCours, TitreCours, DureeHeures, Niveau)",
      "FORMATEUR(NumFormateur, Nom, Prenom, Email, Telephone)",
      "SPECIALITE(CodeSpecialite, LibelleSpecialite)",
      "AVOIR_SPECIALITE(#NumFormateur, #CodeSpecialite)",
      "SESSION(NumSession, DateDebut, DateFin, Lieu, #CodeCours, #NumFormateur)",
      "STAGIAIRE(NumStagiaire, Nom, Prenom, Email, Entreprise)",
      "INSCRIPTION(#NumStagiaire, #NumSession, DateInscription, Statut)"
    ],
    tips: [
      "Distinguez COURS (modèle pédagogique) et SESSION (instance planifiée)",
      "Gérez les spécialités des formateurs avec une table séparée",
      "Une session correspond à un cours donné par un formateur à des dates précises",
      "Le statut d'inscription permet de gérer les listes d'attente"
    ]
  }
];

export default function CasPratiques() {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cas pratiques</h1>
              <p className="text-gray-600">Cas pratiques et applications pour l&apos;examen</p>
            </div>
          </div>

          {/* Methodology */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">📋 Méthodologie DSCG</h3>
            <div className="text-blue-800 space-y-2">
              <p><strong>1. Analyse du contexte :</strong> Identifiez les entités et leurs relations</p>
              <p><strong>2. Modélisation :</strong> Créez le MRD en respectant les contraintes</p>
              <p><strong>3. Normalisation :</strong> Vérifiez et appliquez les 3 formes normales</p>
              <p><strong>4. Validation :</strong> Contrôlez l&apos;absence d&apos;anomalies</p>
            </div>
          </div>

          {/* Exercises */}
          <div className="space-y-6">
            {exercises.map((exercise, index) => (
              <div key={exercise.id} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Exercise Header */}
                <button
                  onClick={() => toggleExercise(exercise.id)}
                  className="w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Ex. {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {exercise.title}
                    </h3>
                  </div>
                  {expandedExercise === exercise.id ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {/* Exercise Content */}
                <AnimatePresence>
                  {expandedExercise === exercise.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 border-t border-gray-200">
                        {/* Context */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">📄 Contexte</h4>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
                              {exercise.context}
                            </pre>
                          </div>
                        </div>

                        {/* Question */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">❓ Question</h4>
                          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                            <p className="text-blue-800 font-medium">{exercise.question}</p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mb-6">
                          <button
                            onClick={() => toggleTips(exercise.id)}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          >
                            {showTips[exercise.id] ? 'Masquer les conseils' : 'Voir les conseils'}
                          </button>
                          <button
                            onClick={() => toggleSolution(exercise.id)}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          >
                            {showSolution[exercise.id] ? 'Masquer la solution' : 'Voir la solution'}
                          </button>
                        </div>

                        {/* Tips */}
                        <AnimatePresence>
                          {showTips[exercise.id] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mb-6"
                            >
                              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                                <h5 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                                  💡 Conseils méthodologiques
                                </h5>
                                <ul className="text-yellow-800 space-y-2">
                                  {exercise.tips.map((tip, tipIndex) => (
                                    <li key={tipIndex} className="flex items-start gap-2">
                                      <span className="text-yellow-600 mt-1">•</span>
                                      <span className="text-sm">{tip}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Solution */}
                        <AnimatePresence>
                          {showSolution[exercise.id] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                            >
                              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                                <h5 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5" />
                                  Solution détaillée
                                </h5>
                                <div className="text-green-800 space-y-2">
                                  {exercise.solution.map((line, lineIndex) => (
                                    <div key={lineIndex} className="text-sm">
                                      {line.startsWith('•') ? (
                                        <div className="flex items-start gap-2">
                                          <span className="text-green-600 mt-1">•</span>
                                          <span>{line.substring(1).trim()}</span>
                                        </div>
                                      ) : line === '' ? (
                                        <div className="h-2"></div>
                                      ) : line.includes('(') && line.includes(')') ? (
                                        <div className="font-mono bg-white p-2 rounded border text-gray-800">
                                          {line}
                                        </div>
                                      ) : (
                                        <div className={line.endsWith(':') ? 'font-semibold' : ''}>
                                          {line}
                                        </div>
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

          {/* Final Tips */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mt-8">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">🎯 Conseils pour l&apos;examen DSCG</h3>
            <div className="text-purple-800 space-y-2 text-sm">
              <p>• <strong>Lisez attentivement</strong> l&apos;énoncé pour identifier toutes les contraintes</p>
              <p>• <strong>Dessinez d&apos;abord</strong> un schéma conceptuel avant le MRD</p>
              <p>• <strong>Vérifiez systématiquement</strong> les 3 formes normales</p>
              <p>• <strong>Justifiez vos choix</strong> de clés primaires et étrangères</p>
              <p>• <strong>Contrôlez l&apos;absence d&apos;anomalies</strong> dans votre solution finale</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/quiz"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Quiz
            </Link>
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Retour au plan du cours
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}