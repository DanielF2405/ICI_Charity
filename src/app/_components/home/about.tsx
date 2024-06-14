import React from "react";
import "~/styles/about.css";

// export const AboutUs: React.FC = () => {
//     return (
//         <div className="about">
//             <div className="primary-value">
//                 <div className="text-wrapper-22">About Us</div>
//             </div>
//             <p className="at-charity-name-our">
//                 At [charity Name], Our Mission Is To Bring Positive Change To
//                 Communities In Need Through Compassionate Action And Sustainable
//                 Solutions. We Believe That Everyone Deserves Access To Basic
//                 Necessities, Education, And Opportunities For A Better Future.
//                 Our Dedicated Team Works Tirelessly To Empower Individuals,
//                 Support Families, And Uplift Entire Communities.
//             </p>
//         </div>
//     );
// };

export const AboutUs: React.FC = () => {
    return (
        <div className="about-us">
            <div className="about-us__header">
                <h2>About Us</h2>
            </div>
            <p className="about-us__content">
                At [charity Name], Our Mission Is To Bring Positive Change To
                Communities In Need Through Compassionate Action And Sustainable
                Solutions. We Believe That Everyone Deserves Access To Basic
                Necessities, Education, And Opportunities For A Better Future.
                Our Dedicated Team Works Tirelessly To Empower Individuals,
                Support Families, And Uplift Entire Communities.
            </p>
        </div>
    );
};