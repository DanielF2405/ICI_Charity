import React from "react";
// import { Facebook } from "./Facebook";
// import { Instagram } from "./Instagram";
// import { Linkedin } from "./Linkedin";
// import { Twitter } from "./Twitter";
// import { Youtube } from "./Youtube";
// import "../../../styles/donate copy.css";
import "../../../styles/donate.css";
import Layout from "~/app/pageLayout";
import { DonateHero } from "~/app/_components/donate/hero";
import { DonateIntro } from "./info";
import { DonateForm } from "./form";

// export const Donate = (): JSX.Element => {
//     return (
//         <div className="frame">
//             <div>
//                 <div className="overlap-4">
//                     <div className="overlap-5">
//                         <div className="overlap-6">
//                             <Info />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <DonateForm />
//         </div>
//     );
// };
export const Donate: React.FC = () => {
    return (
        <div className="donate-page">
            <DonateIntro />
            <div className="donate-right">
                <DonateForm />
            </div>
        </div>
    );
};