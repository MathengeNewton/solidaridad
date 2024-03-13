import React from 'react';
import { StudentSpotlightProps } from "@/types/global";
import Image from 'next/image';

const Student: React.FC<StudentSpotlightProps> = ({ imageUrl, name, position, description }) => {
  return (
    // Added flex-col for mobile and kept existing styles for larger screens unchanged
    <div className="flex flex-col sm:flex-row items-center bg-gray-50 rounded-lg">
      <div className="w-full sm:flex-none sm:w-44 h-48 relative mb-4 sm:mb-0">
        <Image
          src={imageUrl}
          alt={`${name} Avatar`}
          layout="fill" 
          objectFit="cover" 
          className="rounded-t-lg sm:rounded-l-lg" // Adjust rounding for mobile
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900">
          {name}
        </h3>
        <span className="text-gray-500">{position}</span>
        <p className="mt-3 mb-4 font-light text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Student;
