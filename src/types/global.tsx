import React from 'react';

export interface SSOButtonProps {
  provider: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
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