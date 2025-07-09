import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Settings, BookOpen, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Section2() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Settings className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Section II - La normalisation du MRD</h1>
              <p className="text-gray-600">Les trois règles cumulatives pour une base opérationnelle</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">🎯 Objectif de la normalisation</h3>
              <p className="text-purple-800">
                Cette normalisation correspond à trois règles cumulatives et hiérarchisées 
                nécessaires pour disposer d&apos;une base de données opérationnelle et éviter les anomalies.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Les 3 formes normales</h2>
            
            <div className="space-y-8 mb-8">
              {/* Première forme normale */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">1NF</span>
                  <h3 className="text-xl font-semibold text-blue-900">Première Forme Normale</h3>
                </div>
                
                <div className="bg-blue-100 p-4 rounded mb-4">
                  <p className="text-blue-800 font-medium">
                    Une base est en première forme normale si tous les attributs sont décomposés. 
                    Ne doivent apparaître ni attributs calculés ni attributs composites.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-blue-900">❌ Exemple non conforme :</h4>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    CLIENT(<strong><u>CodeCli</u></strong>, NomComplet, AdresseComplete, Age)
                  </div>
                  <p className="text-blue-700 text-sm">
                    <strong>Problèmes :</strong> NomComplet (composite), AdresseComplete (composite), Age (calculé)
                  </p>

                  <h4 className="font-semibold text-blue-900">✅ Exemple conforme :</h4>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    CLIENT(<strong><u>CodeCli</u></strong>, Nom, Prenom, Rue, Ville, CodePostal, DateNaissance)
                  </div>
                </div>
              </div>

              {/* Deuxième forme normale */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">2NF</span>
                  <h3 className="text-xl font-semibold text-green-900">Deuxième Forme Normale</h3>
                </div>
                
                <div className="bg-green-100 p-4 rounded mb-4">
                  <p className="text-green-800 font-medium">
                    Une base est en deuxième forme normale si, outre respecter la première forme normale, 
                    chaque attribut présent dépend intégralement de la clé primaire.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-green-900">❌ Exemple non conforme :</h4>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    CONTENIR(<strong><u>#CodeProduit, #CodeFacture</u></strong>, quantite, libelleProduit)
                  </div>
                  <p className="text-green-700 text-sm">
                    <strong>Problème :</strong> libelleProduit ne dépend que de CodeProduit, pas de la clé complète
                  </p>

                  <h4 className="font-semibold text-green-900">✅ Solution :</h4>
                  <div className="bg-white p-4 rounded border font-mono text-sm space-y-1">
                    <div>CONTENIR(<strong><u>#CodeProduit, #CodeFacture</u></strong>, quantite)</div>
                    <div>PRODUIT(<strong><u>CodeProduit</u></strong>, libelleProduit, prix)</div>
                  </div>
                </div>

                <div className="bg-green-100 p-4 rounded mt-4">
                  <h4 className="font-semibold text-green-900 mb-2">🔍 Notion de dépendance fonctionnelle</h4>
                  <p className="text-green-800 text-sm">
                    La clé primaire doit être une donnée source de l&apos;ensemble des attributs présents dans la table.
                  </p>
                </div>
              </div>

              {/* Troisième forme normale */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">3NF</span>
                  <h3 className="text-xl font-semibold text-orange-900">Troisième Forme Normale</h3>
                </div>
                
                <div className="bg-orange-100 p-4 rounded mb-4">
                  <p className="text-orange-800 font-medium">
                    Une base est en troisième forme normale si elle est déjà en deuxième forme normale 
                    et si, par ailleurs, tous les attributs présents dans une table dépendent 
                    directement de la clé primaire.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-orange-900">❌ Exemple non conforme :</h4>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    CLIENT(<strong><u>CodeCli</u></strong>, Nom, Prénom, #CodeZone, #CodeRegion)
                  </div>
                  <p className="text-orange-700 text-sm">
                    <strong>Problème :</strong> CodeRegion dépend de CodeZone, pas directement de CodeCli
                  </p>

                  <h4 className="font-semibold text-orange-900">✅ Solution :</h4>
                  <div className="bg-white p-4 rounded border font-mono text-sm space-y-1">
                    <div>CLIENT(<strong><u>CodeCli</u></strong>, Nom, Prénom, #CodeZone)</div>
                    <div>ZONE(<strong><u>CodeZone</u></strong>, LibelleZone, #CodeRegion)</div>
                    <div>REGION(<strong><u>CodeRegion</u></strong>, LibelleRegion)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📝 Moyen mnémotechnique</h3>
              <div className="bg-white p-4 rounded border">
                <p className="font-bold text-center text-lg text-gray-800 mb-4">&quot;La clé, toute la clé, rien que la clé&quot;</p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>1NF :</strong> Décomposer tous les attributs</p>
                  <p><strong>2NF :</strong> Dépendance de <em>toute la clé</em> (clé complète)</p>
                  <p><strong>3NF :</strong> Dépendance <em>directe</em> de la clé (pas de transitivité)</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Résultat de la normalisation
              </h3>
              <p className="text-green-800 mb-4">
                Une base normalisée évite les 5 anomalies identifiées précédemment :
              </p>
              <ul className="text-green-700 text-sm space-y-1">
                <li>✅ Pas d&apos;anomalie d&apos;insertion</li>
                <li>✅ Pas d&apos;anomalie de mise à jour</li>
                <li>✅ Pas d&apos;anomalie de suppression</li>
                <li>✅ Optimisation de l&apos;espace</li>
                <li>✅ Pas de confusion possible</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/section-1"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Section I - Les anomalies
            </Link>
            <Link
              href="/quiz"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Quiz d&apos;évaluation
              <BookOpen className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}