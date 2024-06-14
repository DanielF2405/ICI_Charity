// components/Pricing.tsx
import React from "react";

// export const Pricing: React.FC = () => {
//   return (
//     <div className="pricing">
//             <div className="overlap-9">
//               <div className="group-6">
//                 <div className="group-7">
//                   <div className="overlap-group-3">
//                     <img className="group-8" alt="Group" src="group-427318974.png" />
//                     <div className="trait" />
//                     <div className="per-user-per-year">/month</div>
//                     <div className="element">£5</div>
//                     <div className="base">Bronze</div>
//                   </div>
//                   <div className="medium-wrapper">
//                     <div className="medium">Sign Up Now</div>
//                   </div>
//                 </div>
//                 <div className="group-9">
//                   <div className="overlap-10">
//                     <img className="group-10" alt="Group" src="group-427318975.png" />
//                     <div className="trait-2" />
//                     <div className="per-user-per-year-2">/month</div>
//                     <div className="element-2">£10</div>
//                     <div className="base-2">Silver</div>
//                   </div>
//                   <div className="overlap-11">
//                     <div className="medium-2">Sign Up Now</div>
//                   </div>
//                 </div>
//                 <div className="group-11">
//                   <div className="overlap-group-3">
//                     <img className="group-12" alt="Group" src="group-427318976.png" />
//                     <div className="trait-3" />
//                     <div className="per-user-per-year-3">/month</div>
//                     <div className="element-2">£15</div>
//                     <div className="base">Gold</div>
//                   </div>
//                   <div className="overlap-12">
//                     <div className="medium-3">Sign Up Now</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="group-13">
//                 <div className="overlap-13">
//                   <div className="text-wrapper-9">How To Help</div>
//                   <img className="button" alt="Button" src="button.png" />
//                 </div>
//               </div>
//             </div>
//           </div>
//   );
// };


export const Pricing: React.FC = () => {
    const bronzeFeatures = [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
        "Feature 7"
    ];
    const silverFeatures = [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
        "Feature 7"
    ];
    const goldFeatures = [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
        "Feature 7"
    ];
    return (
        <div className="pricing-section">
            <div className="pricing-header">
                <h2 className="pricing-title">How To Help</h2>
                <div className="pricing-toggle">
                    <button className="toggle-button">One Time</button>
                    <button className="toggle-button active">Monthly</button>
                    <button className="toggle-button">Yearly</button>
                </div>
            </div>
            <div className="pricing-cards">
                <div className="pricing-card bronze">
                    <h3 className="pricing-plan">Bronze</h3>
                    <div className="pricing-amount">£5</div>
                    <div className="pricing-period">/month</div>
                    <hr className="divider" />
                    <ul className="features-list">
                        {bronzeFeatures.map((feature, index) => (
                            <li key={index} className="feature-item">
                                ✔️ {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pricing-card silver highlighted">
                    <h3 className="pricing-plan">Silver</h3>
                    <div className="pricing-amount">£10</div>
                    <div className="pricing-period">/month</div>
                    <hr className="divider" />
                    <ul className="features-list">
                        {silverFeatures.map((feature, index) => (
                            <li key={index} className="feature-item">
                                ✔️ {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pricing-card gold">
                    <h3 className="pricing-plan">Gold</h3>
                    <div className="pricing-amount">£15</div>
                    <div className="pricing-period">/month</div>
                    <hr className="divider" />
                    <ul className="features-list">
                        {goldFeatures.map((feature, index) => (
                            <li key={index} className="feature-item">
                                ✔️ {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
