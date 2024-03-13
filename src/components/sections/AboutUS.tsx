import React from 'react';
import Link from 'next/link';

const AboutUs: React.FC = () => {
    return (
        <section className="bg-gray-200" id="aboutus">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-800 ">Empowering Your Learning Journey</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Our platform revolutionizes the way you learn and share knowledge. With a focus on technology and innovation, we provide a comprehensive Learning Management and Knowledge Sharing System designed to enhance your educational journey.</p>
                <Link href="#featured-courses">
                    <div className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                        <span className="text-xs bg-[#FFCC00] rounded-full text-white px-4 py-1.5 mr-3">Explore</span> <span className="text-sm font-medium">Featured Courses</span>
                        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </div>
                </Link>                
                <div className="max-w-screen-xl px-4 py-2 mx-auto text-center">
                    <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73k+</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">students</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">6+</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">Countries</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">10+</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">courses</dd>
                        </div>
                    </dl>
                </div>
            </div>           
        </section>
    );
};

export default AboutUs;
