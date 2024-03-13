import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


export interface SSOButtonProps {
  provider: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: IconDefinition;
}

export interface StudentSpotlightProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
}

export interface FeaturedCoursesProps {
  title: string;
  description: string;
  image: string; 
}