import React from "react";
// import { Facebook } from "./Facebook";
// import { Instagram } from "./Instagram";
// import { Linkedin } from "./Linkedin";
// import { Twitter } from "./Twitter";
// import { Youtube } from "./Youtube";
import "../../../styles/donate.css";

export const Frame = (): JSX.Element => {
  return (
    <div className="frame">
      <div className="div">
        <div className="overlap-4">
          <div className="overlap-5">
            <div className="overlap-6">
              
              <div className="div-2">
                <div className="text-wrapper-16">Choose a donation amount</div>
                <div className="div-3">
                  <div className="div-4">
                    <div className="ellipse-wrapper">
                      <div className="ellipse-5" />
                    </div>
                    <div className="div-wrapper-4">
                      <div className="text-wrapper-17">£5</div>
                    </div>
                  </div>
                  <div className="div-4">
                    <div className="group-6" />
                    <div className="div-wrapper-4">
                      <div className="text-wrapper-17">£10</div>
                    </div>
                  </div>
                  <div className="div-4">
                    <div className="group-6" />
                    <div className="div-wrapper-4">
                      <div className="text-wrapper-17">£15</div>
                    </div>
                  </div>
                  <p className="text-wrapper-18">Enter a custom donation amount</p>
                </div>
              </div>
              <p className="text-wrapper-19">Welcome to _, Please fill out the form below.</p>
            </div>
            <div className="group-7">
              <div className="frame-wrapper">
                <div className="frame-wrapper-2">
                  <div className="div-5">
                    <div className="text-wrapper-20">Get Involved Today</div>
                    <p className="text-wrapper-21">
                      Your donation helps us provide essential services and support to those in need. Together, we can
                      make a difference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-5" />
          </div>
          <div className="div-6">
            <div className="text-wrapper-16">Choose a donation frequency</div>
            <div className="div-7">
              <div className="div-8">
                <div className="group-8">
                  <div className="ellipse-6" />
                </div>
                <div className="text-wrapper-22">Monthly</div>
              </div>
              <div className="div-9">
                <div className="group-9" />
                <div className="text-wrapper-23">Yearly</div>
              </div>
              <div className="div-9">
                <div className="group-9" />
                <div className="text-wrapper-23">One time</div>
              </div>
            </div>
          </div>
          <div className="div-10">
            <div className="group-9" />
            <div className="text-wrapper-24">Anonymous</div>
          </div>
          <p className="text-wrapper-25">Do you want your donation to be anonymous?</p>
          <div className="text-wrapper-26">Add a message!</div>
          <div className="component">
            <div className="overlap-8">
              <div className="rectangle-6" />
              <div className="text-wrapper-27">Your message...</div>
              <img className="line-2" alt="Line" src="line-171.svg" />
              <img className="line-3" alt="Line" src="line-172.svg" />
            </div>
          </div>
        </div>
        <div className="div-wrapper-5">
          <div className="text-wrapper-28">Cancel</div>
        </div>
        <div className="div-wrapper-6">
          <div className="text-wrapper-29">Checkout</div>
        </div>
      </div>
    </div>
  );
};
