import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import featuredCourses from '@/data/featuredCourses'; 
import { FeaturedCoursesProps } from "@/types/global"; 


const FeaturedCourses: React.FC = () => {
    return (
        <section className="">
            <div className="text-center py-4">
                <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-800">Featured Courses</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Discover our handpicked selection of courses designed to boost your skills.</p>
            </div>
            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                {featuredCourses.map((course: FeaturedCoursesProps, index: number) => {
                    const imageOnRight = index % 2 === 0;
                    return (
                        <div key={index} className={`flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 py-8 courseContainer`}>
                            <div className={`lg:col-span-4 ${imageOnRight ? 'lg:order-last' : ''}`}>
                                <Image src={course.image} alt={course.title} layout="responsive" width={250} height={200} className="responsiveImage" />
                            </div>
                            <div className="place-self-center lg:col-span-7">
                                <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-gray-700">
                                    {course.title}
                                </h1>
                                <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                    {course.description}
                                </p>
                                <Link href="#" passHref>
                                    <div className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#FFCC00] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                                        Get started
                                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FeaturedCourses;
