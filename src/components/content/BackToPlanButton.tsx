import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BackToPlanButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-6"
    >
      <ArrowLeft className="h-4 w-4" />
      Retour au plan du cours
    </Link>
  );
}