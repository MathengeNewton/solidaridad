import React from 'react';
import  { FeatureProps } from "@/types/global";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => {
    return (
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#FFCC00] lg:h-12 lg:w-12 ">
           <FontAwesomeIcon icon={icon} />
        </div>
        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    );
  };

export default Feature;