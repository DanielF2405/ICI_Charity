// components/Footer.tsx
import React from "react";
import YouTubeIcon from "../../assets/youtube.png";
import FacebookIcon from "../../assets/facebook.png";
import TwitterIcon from "../../assets/twitter.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedInIcon from "../../assets/linkedin.png";
import "~/styles/styles.css";

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
          <div className="overlap">
            <div className="rectangle" />
            <div className="group">
              <div className="group-2">
                <div className="group-wrapper">
                  <div className="group-3">
                    <div className="text-wrapper">Foundation</div>
                    <p className="donate-about-us">
                      Donate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      About Us
                      <br />
                      Impact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAQs
                      <br />
                      Terms / Privacy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Help
                      center
                      <br />
                      Contact
                      us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      Partners
                    </p>
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                      <div className="overlap-2">
                        <div className="text-wrapper-2">Subscribe</div>
                      </div>
                      <div className="text-wrapper-3">Enter Your Email</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-icons">
                {/* <Youtube className="icon-jam-icons" color="white" />
                <Facebook className="icon-jam-icons" />
                <Twitter className="icon-jam-icons" color="white" />
                <Instagram className="icon-jam-icons" color="white" />
                <Linkedin className="icon-jam-icons" color="white" /> */}
              </div>
              <div className="text-wrapper-4">Join Us And ...</div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-3">
                <div className="group-4">
                  <div className="text-wrapper-5">Subscribe to our newsletter</div>
                  <img className="line" alt="Line" src="line-250.svg" />
                  <img className="img" alt="Line" src="line-249.svg" />
                  <p className="p">© Copyright 2022 – estac – All Rights Reserved.</p>
                </div>
                <img className="image" alt="Image" src="image-4.png" />
              </div>
            </div>
            <div className="ellipse" />
          </div>
        </footer>
    );
};
