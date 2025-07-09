import CourseHeader from '@/components/home/CourseHeader';
import CoursePlan from '@/components/home/CoursePlan';
import ExerciseButtons from '@/components/home/ExerciseButtons';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <CourseHeader />
        <ExerciseButtons />
        <CoursePlan />
      </div>
    </div>
  );
}
