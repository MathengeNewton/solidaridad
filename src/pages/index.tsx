import React from 'react';
import HeroSection from "@/components/sections/HeroSection";
import AboutUS from "@/components/sections/AboutUS";
import ProductCatalogue from "@/components/sections/CourseCategories";
import StudentSpotlight from "@/components/sections/StudentSpotlight";
import OurPartners from "@/components/sections/OurPartners";
import FeaturedCoures from "@/components/sections/FeaturedCourses";

export default function Home() {
  return (
      <main className="min-h-screen p-10">
          <HeroSection /> 
          <AboutUS />
          <ProductCatalogue />
          <FeaturedCoures />
          <StudentSpotlight />
          <OurPartners />
      </main>    
  );
}
