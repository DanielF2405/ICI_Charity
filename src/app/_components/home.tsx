// components/CharityLandingPage.tsx
import React from "react";
import { Footer } from "./footer";
import { FAQ } from "./faq";
import { Pricing } from "./pricing";
import { Review } from "./review";
import { Impact } from "./impact";

export const Home: React.FC = () => {
  return (
    <div className="charity-landing-page">
      <div className="div">
        <div className="navigation-menu">
          <div className="frame-2">
            <div className="text-wrapper-23">Login</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-24">Signup</div>
          </div>
          <div className="navbar">
            <div className="text-wrapper-25">Feedback</div>
            <div className="text-wrapper-26">Partners</div>
            <div className="text-wrapper-27">Contact</div>
            <div className="text-wrapper-28">About Us</div>
            <div className="text-wrapper-29">Donate</div>
            <div className="group-40">
              <div className="text-wrapper-30">Home</div>
            </div>
          </div>
        </div>
        <div className="ellipse-7" />
        <p className="join-us-in-making-a">Join Us In Making A Difference</p>
        <p className="text-wrapper-31">Together, We Can Create a Brighter Future for Communities in Need</p>
        <div className="frame-4">
          <div className="frame-5">
            <div className="text-wrapper-32">Donate Now!</div>
          </div>
          <button className="button-2">
            <div className="text-wrapper-33">Learn More</div>
          </button>
        </div>
        <div className="ellipse-8" />
        <p className="text-wrapper-34">Join us to today ...</p>
        <p className="at-charity-name-our">
          At [charity Name], Our Mission Is To Bring Positive Change To Communities In Need Through Compassionate Action
          And Sustainable Solutions. We Believe That Everyone Deserves Access To Basic Necessities, Education, And
          Opportunities For A Better Future. Our Dedicated Team Works Tirelessly To Empower Individuals, Support
          Families, And Uplift Entire Communities.
        </p>
        <p className="here-are-some-of-our">Here Are Some Of Our Top Partners</p>
        <div className="frame-6">
          <div className="text-wrapper-32">See All</div>
        </div>
        <div className="brand-logo">
          {/* Add partner logos here */}
        </div>
        <FAQ />
        <Pricing />
        <Review />
        <Impact />
        <Footer />
      </div>
    </div>
  );
};
