// components/FAQ.tsx
import React, { useState } from "react";

// export const FAQ: React.FC = () => {
//     return (
//         <div className="FAQ">
//             <div className="frequently-asked">
//                 Frequently Asked Questions (faq)
//             </div>
//             <div className="overlap-5">
//                 <div className="group-5">
//                     <div className="overlap-6">
//                         <div className="text-wrapper-6">1. Question 1?</div>
//                         <img className="arrow" alt="Arrow" src="arrow-6.svg" />
//                     </div>
//                     <div className="overlap-7">
//                         <div className="text-wrapper-7">2. Question 2?</div>
//                         <img className="arrow" alt="Arrow" src="arrow-7.svg" />
//                     </div>
//                     <div className="overlap-8">
//                         <div className="text-wrapper-7">3. Question 3?</div>
//                         <img className="arrow" alt="Arrow" src="arrow-8.svg" />
//                     </div>
//                     <div className="overlap-group-2">
//                         <div className="rectangle-2" />
//                         <div className="text-wrapper-8">Answer.</div>
//                     </div>
//                 </div>
//                 <div className="rectangle-3" />
//             </div>
//         </div>
//     );
// };

export const FAQ: React.FC = () => {
    const [open, setOpen] = useState<number | null>(1);
  
    const toggleQuestion = (index: number) => {
      setOpen(open === index ? null : index);
    };
  
    return (
      <div className="faq">
        <h2 className="faq-title">Frequently Asked Questions (FAQ)</h2>
        <div className="faq-content">
          <div className="faq-item" onClick={() => toggleQuestion(1)}>
            <div className="faq-question">
              <span>1. Question 1?</span>
              <img
                className="faq-arrow"
                alt="Arrow"
                src={open === 1 ? "arrow-up.svg" : "arrow-down.svg"}
              />
            </div>
            {open === 1 && (
              <div className="faq-answer">
                <p>Answer.</p>
              </div>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleQuestion(2)}>
            <div className="faq-question">
              <span>2. Question 2?</span>
              <img
                className="faq-arrow"
                alt="Arrow"
                src={open === 2 ? "arrow-up.svg" : "arrow-down.svg"}
              />
            </div>
            {open === 2 && (
              <div className="faq-answer">
                <p>Answer.</p>
              </div>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleQuestion(3)}>
            <div className="faq-question">
              <span>3. Question 3?</span>
              <img
                className="faq-arrow"
                alt="Arrow"
                src={open === 3 ? "arrow-up.svg" : "arrow-down.svg"}
              />
            </div>
            {open === 3 && (
              <div className="faq-answer">
                <p>Answer.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };