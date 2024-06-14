// components/Impact.tsx
import React from "react";

// export const Impact: React.FC = () => {
//     return (
//         <div className="advance-value">
//             <div className="group-26">
//                 <div className="text-wrapper-18">Our Impact</div>
//                 <div className="group-27">
//                     <div className="overlap-17">
//                         <div className="group-28">
//                             <div className="text-wrapper-19">
//                                 Empowering Local Communities
//                             </div>
//                             <p className="we-provide-essential">
//                                 We Provide Essential Resources And Support To
//                                 Help Local Communities Thrive.
//                             </p>
//                             <div className="group-29" />
//                         </div>
//                     </div>
//                     <div className="overlap-18">
//                         <div className="group-30">
//                             <div className="group-31" />
//                             <div className="text-wrapper-20">
//                                 Protecting Our Planet
//                             </div>
//                             <p className="our-conservation">
//                                 Our Conservation Efforts Focus On Preserving
//                                 Natural Resources And Promoting Sustainable
//                                 Practices.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="overlap-19">
//                         <div className="group-32">
//                             <div className="text-wrapper-21">
//                                 Building Brighter Futures
//                             </div>
//                             <p className="our-educational">
//                                 Our Educational Initiatives Offer Children And
//                                 Adults The Tools They Need To Succeed.
//                             </p>
//                             <div className="group-33" />
//                         </div>
//                     </div>
//                     <div className="overlap-group-6">
//                         <div className="group-34">
//                             <div className="group-35" />
//                             <div className="responding-to-crises">
//                                 Responding To Crises
//                             </div>
//                             <p className="in-times-of-disaster">
//                                 In Times Of Disaster, We Provide Immediate
//                                 Relief And Long-term Support To Help Communities
//                                 Recover.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="overlap-20">
//                         <div className="group-36">
//                             <div className="text-wrapper-19">
//                                 Promoting Health And Well-being
//                             </div>
//                             <p className="we-offer-health">
//                                 We Offer Health Services And Support To
//                                 Undeserved Populations.,
//                             </p>
//                             <div className="group-37" />
//                         </div>
//                     </div>
//                     <div className="overlap-21">
//                         <div className="group-38">
//                             <div className="group-39" />
//                             <div className="text-wrapper-19">
//                                 Championing Important Causes
//                             </div>
//                             <p className="we-raise-awareness">
//                                 We Raise Awareness About Critical Social Issues
//                                 And Advocate For Policies That Promote Justice,
//                                 Equality, And Positive Change.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


export const Impact: React.FC = () => {
    const impacts = [
        {
            title: "Empowering Local Communities",
            description: "We Provide Essential Resources And Support To Help Local Communities Thrive.",
        },
        {
            title: "Protecting Our Planet",
            description: "Our Conservation Efforts Focus On Preserving Natural Resources And Promoting Sustainable Practices.",
        },
        {
            title: "Building Brighter Futures",
            description: "Our Educational Initiatives Offer Children And Adults The Tools They Need To Succeed.",
        },
        {
            title: "Responding To Crises",
            description: "In Times Of Disaster, We Provide Immediate Relief And Long-term Support To Help Communities Recover.",
        },
        {
            title: "Promoting Health And Well-being",
            description: "We Offer Health Services And Support To Undeserved Populations.",
        },
        {
            title: "Championing Important Causes",
            description: "We Raise Awareness About Critical Social Issues And Advocate For Policies That Promote Justice, Equality, And Positive Change.",
        }
    ];

    return (
        <div className="advance-value">
            <div className="group-26">
                <div className="text-wrapper-18">Our Impact</div>
                <div className="group-27">
                    {impacts.map((impact, index) => (
                        <div className="impact-card" key={index}>
                            <div className="impact-icon"></div>
                            <div className="title">{impact.title}</div>
                            <div className="description">{impact.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};