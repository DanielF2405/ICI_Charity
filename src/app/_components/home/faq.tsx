// components/FAQ.tsx
import React from "react";

export const FAQ: React.FC = () => {
    return (
        <div className="FAQ">
            <div className="frequently-asked">
                Frequently Asked Questions (faq)
            </div>
            <div className="overlap-5">
                <div className="group-5">
                    <div className="overlap-6">
                        <div className="text-wrapper-6">1. Question 1?</div>
                        <img className="arrow" alt="Arrow" src="arrow-6.svg" />
                    </div>
                    <div className="overlap-7">
                        <div className="text-wrapper-7">2. Question 2?</div>
                        <img className="arrow" alt="Arrow" src="arrow-7.svg" />
                    </div>
                    <div className="overlap-8">
                        <div className="text-wrapper-7">3. Question 3?</div>
                        <img className="arrow" alt="Arrow" src="arrow-8.svg" />
                    </div>
                    <div className="overlap-group-2">
                        <div className="rectangle-2" />
                        <div className="text-wrapper-8">Answer.</div>
                    </div>
                </div>
                <div className="rectangle-3" />
            </div>
        </div>
    );
};
