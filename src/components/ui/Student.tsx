import React from 'react';
import { StudentSpotlightProps } from "@/types/global";
import Image from 'next/image';

const Student: React.FC<StudentSpotlightProps> = ({ imageUrl, name, position, description }) => {
  return (
    <div className="flex items-center bg-gray-50 rounded-lg ">
      <div className="flex-none w-44 h-48 relative">
        <Image
          src={imageUrl}
          alt={`${name} Avatar`}
          layout="fill" 
          objectFit="cover" 
          className="rounded-l-lg" 
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h3>
        <span className="text-gray-500 dark:text-gray-400">{position}</span>
        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Student;
