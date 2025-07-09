import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Database, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Database className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Introduction aux Bases de Données</h1>
              <p className="text-gray-600">Concepts fondamentaux et représentations</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">🎯 Objectifs du chapitre</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Identifier les anomalies d&apos;une base de données mal construite</li>
                <li>• Comprendre les règles de normalisation (1NF, 2NF, 3NF)</li>
                <li>• Appliquer ces règles pour concevoir des bases opérationnelles</li>
                <li>• Maîtriser la modélisation relationnelle</li>
                <li>• Distinguer les formalismes conceptuel et relationnel</li>
                <li>• Comprendre les notions d&apos;extension et d&apos;intention</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-2">💡 Définition</h3>
              <p className="text-green-800">
                Le système d&apos;information utilise en permanence les bases de données. 
                Ces dernières constituent le socle indispensable à tout traitement de l&apos;information, 
                préalable à la prise de décision.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Concepts fondamentaux</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Formalisme conceptuel et relationnel
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-indigo-800 mb-2">📊 Formalisme conceptuel</h4>
                    <p className="text-indigo-700 text-sm mb-2">
                      Représentation abstraite des données et de leurs relations, indépendante de l&apos;implémentation.
                    </p>
                    <ul className="text-indigo-600 text-xs space-y-1">
                      <li>• Modèle Entité-Association</li>
                      <li>• Diagrammes UML</li>
                      <li>• Analyse des besoins métier</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-indigo-800 mb-2">🗃️ Formalisme relationnel</h4>
                    <p className="text-indigo-700 text-sm mb-2">
                      Implémentation concrète sous forme de tables avec clés primaires et étrangères.
                    </p>
                    <ul className="text-indigo-600 text-xs space-y-1">
                      <li>• Tables et attributs</li>
                      <li>• Clés primaires et étrangères</li>
                      <li>• Contraintes d&apos;intégrité</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-teal-900 mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Extension et Intention
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-teal-800 mb-2">📋 Extension (contenu)</h4>
                    <p className="text-teal-700 text-sm mb-2">
                      L&apos;ensemble des données actuellement stockées dans la base.
                    </p>
                    <div className="bg-teal-50 p-2 rounded text-xs">
                      <strong>Exemple :</strong> Les 1000 clients actuellement enregistrés
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-teal-800 mb-2">🏗️ Intention (structure)</h4>
                    <p className="text-teal-700 text-sm mb-2">
                      La structure et les règles qui définissent comment les données peuvent être organisées.
                    </p>
                    <div className="bg-teal-50 p-2 rounded text-xs">
                      <strong>Exemple :</strong> La table CLIENT avec ses attributs et contraintes
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Les formalismes de représentation</h2>
            
            <p className="mb-6">
              Une base est en fait constituée de blocs, reliés les uns aux autres. 
              Plusieurs formalismes coexistent pour représenter visuellement une base. 
              On distingue en particulier :
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3">🎯 Formalisme Conceptuel</h3>
                <p className="text-green-800">
                  Son objectif est de proposer une représentation de la base de données 
                  indépendamment de tout enjeux de mise en œuvre concrète. Cela permet 
                  d&apos;aboutir à un schéma de la base qu&apos;il est possible ensuite de discuter, 
                  de corriger en fonction des avis et besoins de chacun.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">⚙️ Formalisme Relationnel</h3>
                <p className="text-purple-800">
                  Son objectif est de disposer d&apos;une représentation de la base prête à être 
                  implémentée sur un logiciel. Sous cette forme, la base est compréhensible 
                  par une machine, tandis que dans sa forme conceptuelle, elle était 
                  compréhensible par des êtres humains.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Modèle Relationnel de Données (MRD)</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">📊 Représentation en intention</h3>
              <p className="text-yellow-800 mb-4">
                On préférera la représentation en intention, c&apos;est-à-dire en ne faisant 
                apparaître que les données et leur structure.
              </p>
              <div className="bg-white p-4 rounded border font-mono text-sm">
                <div className="mb-2">CLIENT(<strong><u>Numero</u></strong>, Nom, Prenom, Rue, CodePostal, Ville, adresse courriel)</div>
                <div className="mb-2">DESTINATION(<strong><u>CodeDestination</u></strong>, Libelle)</div>
                <div className="mb-2">SEJOUR(<strong><u>CodeSejour</u></strong>, NbrMaxi, Prix, DateDepart, Duree, #CodeDestination)</div>
                <div>RESERVER(#<strong><u>NumClient, #NumSejour</u></strong>, DateReservation, NbPersonne, TauxRemise)</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Les 4 éléments clés du MRD</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">🗂️ TABLE (RELATION)</h4>
                <p className="text-blue-800 text-sm">Contient un ensemble de données homogènes</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">📋 ATTRIBUTS</h4>
                <p className="text-green-800 text-sm">Correspondent aux données présentes dans les tables</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">🔑 CLÉ PRIMAIRE</h4>
                <p className="text-purple-800 text-sm">Premier attribut qui permet d&apos;identifier de façon unique chaque occurrence</p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-900 mb-2">🔗 CLÉ ÉTRANGÈRE (#)</h4>
                <p className="text-orange-800 text-sm">Clé primaire d&apos;une table injectée dans une autre pour permettre le lien</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <div></div>
            <Link
              href="/section-1"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Section I - Les anomalies
              <BookOpen className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}