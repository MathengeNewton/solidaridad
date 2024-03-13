import React from 'react';
import Feature from "@/components/ui/Features";
import featuresData from "@/data/features";
import { FeatureProps} from "@/types/global"


const ProductCatalogue: React.FC = () => {
    return (
        <section className="dark:bg-gray-900" id="course-category">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Explore Our Course Categories
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                    Our meticulously curated courses are designed to fuel your curiosity, enhance your skills, and propel your career forward.
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {featuresData.map((feature: FeatureProps, index: number) => (
                    <Feature
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                    />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCatalogue;