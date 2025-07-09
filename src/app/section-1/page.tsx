import BackToPlanButton from '@/components/content/BackToPlanButton';
import { AlertTriangle, BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Section1() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Section I - Les anomalies d&apos;une base</h1>
              <p className="text-gray-600">Identifier et comprendre les défauts d&apos;une base mal construite</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-2">⚠️ Problématique</h3>
              <p className="text-red-800">
                D&apos;un point de vue pratique, une base de données mal construite peut présenter 
                différents défauts qui vont nuire à son usage. Ces défauts peuvent être 
                essentiellement de cinq natures et correspondent à la notion d&apos;anomalie.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Les 5 types d&apos;anomalies</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-sm font-bold">1</span>
                  L&apos;anomalie d&apos;insertion
                </h3>
                <p className="text-orange-800">
                  Il n&apos;est pas possible d&apos;insérer certaines données indépendamment d&apos;autres données 
                  bien qu&apos;elles soient indépendantes.
                </p>
                <div className="mt-3 p-3 bg-orange-100 rounded text-sm text-orange-700">
                  <strong>Exemple :</strong> Impossible d&apos;ajouter un nouveau fournisseur sans avoir de produit à lui associer.
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm font-bold">2</span>
                  L&apos;anomalie de mise à jour
                </h3>
                <p className="text-blue-800">
                  Une mise à jour d&apos;une donnée doit être répétée plusieurs fois et non une seule.
                </p>
                <div className="mt-3 p-3 bg-blue-100 rounded text-sm text-blue-700">
                  <strong>Exemple :</strong> Changer l&apos;adresse de la FNAC nécessite de modifier plusieurs lignes dans la table.
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm font-bold">3</span>
                  L&apos;anomalie de suppression
                </h3>
                <p className="text-purple-800">
                  La suppression de certaines données entraîne la perte d&apos;autres données non concernées.
                </p>
                <div className="mt-3 p-3 bg-purple-100 rounded text-sm text-purple-700">
                  <strong>Exemple :</strong> Supprimer le dernier produit d&apos;un fournisseur fait perdre toutes les informations sur ce fournisseur.
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm font-bold">4</span>
                  L&apos;anomalie d&apos;espace
                </h3>
                <p className="text-green-800">
                  La taille mémoire nécessaire pour stocker la base n&apos;est pas minimalisée.
                </p>
                <div className="mt-3 p-3 bg-green-100 rounded text-sm text-green-700">
                  <strong>Exemple :</strong> Les informations du fournisseur sont répétées pour chaque produit qu&apos;il fournit.
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                  <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-sm font-bold">5</span>
                  L&apos;anomalie de confusion
                </h3>
                <p className="text-yellow-800">
                  Il n&apos;est pas possible de distinguer immédiatement des éléments de la base qui sont pourtant différents.
                </p>
                <div className="mt-3 p-3 bg-yellow-100 rounded text-sm text-yellow-700">
                  <strong>Exemple :</strong> Deux fournisseurs différents portent le même nom mais ont des adresses différentes.
                </div>
              </div>
            </div>

            <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📝 Moyen mnémotechnique</h3>
              <div className="bg-white p-4 rounded border">
                <p className="font-bold text-center text-lg text-gray-800 mb-2">I.M.S.E.C</p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p><strong>I</strong>nsertion - <strong>M</strong>ise à jour - <strong>S</strong>uppression - <strong>E</strong>space - <strong>C</strong>onfusion</p>
                  <p className="italic">&quot;Il Manque Souvent de l&apos;Espace pour Clarifier&quot;</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">🚨 Exemple de la pire base possible</h3>
              <p className="text-red-800 mb-4">
                Une table unique contenant 200 produits et 30 fournisseurs avec toutes les informations mélangées :
              </p>
              <div className="bg-white p-4 rounded border overflow-x-auto">
                <table className="min-w-full text-xs">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">CodeProduit</th>
                      <th className="border p-2">Libelle</th>
                      <th className="border p-2">Prix</th>
                      <th className="border p-2">NomFourn</th>
                      <th className="border p-2">Rue</th>
                      <th className="border p-2">Ville</th>
                      <th className="border p-2">CodePostal</th>
                      <th className="border p-2">Telephone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">P001</td>
                      <td className="border p-2">Stylo bleu</td>
                      <td className="border p-2">1,20 €</td>
                      <td className="border p-2">FNAC</td>
                      <td className="border p-2">12 rue Mars</td>
                      <td className="border p-2">Paris</td>
                      <td className="border p-2">75012</td>
                      <td className="border p-2">01 23 33 33 33</td>
                    </tr>
                    <tr>
                      <td className="border p-2">P003</td>
                      <td className="border p-2">Stylo rouge</td>
                      <td className="border p-2">1,15 €</td>
                      <td className="border p-2">FNAC</td>
                      <td className="border p-2">12 rue Mars</td>
                      <td className="border p-2">Paris</td>
                      <td className="border p-2">75012</td>
                      <td className="border p-2">01 23 33 33 33</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-2 text-center" colSpan={8}>... (répétition des données fournisseur)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-red-700 text-sm mt-3 italic">
                Cette table présente les 5 anomalies décrites précédemment !
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/introduction"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Introduction
            </Link>
            <Link
              href="/section-2"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Section II - La normalisation
              <BookOpen className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}