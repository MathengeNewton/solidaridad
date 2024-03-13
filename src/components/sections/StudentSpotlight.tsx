import React from 'react';
import Student from "@/components/ui/Student";
import students from "@/data/students";
import { StudentSpotlightProps } from "@/types/global"; 

const StudentSpotlight: React.FC = () => {
  return (
    <section className="bg-white " id="students-spotlight">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Student Spotlight</h2>
          <p className="font-light text-gray-500 sm:text-xl">
            Embark on the journeys of our students projects in their various faculties. 
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {students.map((student: StudentSpotlightProps, index: number) => (
            <Student
              key={index}
              imageUrl={student.imageUrl}
              name={student.name}
              position={student.position}
              description={student.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentSpotlight;
