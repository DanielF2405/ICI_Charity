import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
// import styles from "./index.module.css";
import "~/styles/styles.css";
import { Home as HomePage }  from "~/app/_components/home" 
import { Footer } from "./_components/footer";
import { FAQ } from "./_components/faq";
import { Pricing } from "./_components/pricing";
import { Review } from "./_components/review";
import { Impact } from "./_components/impact";

export default async function Home() {
    const hello = await api.post.hello({ text: "from tRPC" });
    const session = await getServerAuthSession();

    return (
        // <HomePage />
        <CharityLandingPage />
    );
}

async function CrudShowcase() {
    const session = await getServerAuthSession();
    if (!session?.user) return null;

    const latestPost = await api.post.getLatest();

    return (
        <div className={styles.showcaseContainer}>
            {latestPost ? (
                <p className={styles.showcaseText}>
                    Your most recent post: {latestPost.name}
                </p>
            ) : (
                <p className={styles.showcaseText}>You have no posts yet.</p>
            )}

            <CreatePost />
        </div>
    );
}


export function CharityLandingPage(){
  return (
    <div className="charity-landing-page">
      <div className="div">
        <Footer />
        <div className="overlap-4">
          <FAQ />
          <Pricing />
          <Review />
          <div className="frame">
            <div className="group-24">
              <div className="overlap-group-5">
                <p className="text-wrapper-15">People Served Through Our Community Programs</p>
                <div className="element-k">100k+</div>
              </div>
            </div>
            <div className="group-24">
              <div className="overlap-group-5">
                <p className="text-wrapper-15">Educational Institutions Partnered With Us</p>
                <div className="text-wrapper-16">50+</div>
              </div>
            </div>
            <div className="group-25">
              <div className="overlap-group-5">
                <div className="text-wrapper-15">Healthcare Clinics Supported</div>
                <div className="text-wrapper-17">200+</div>
              </div>
            </div>
          </div>
          <Impact />
        </div>
        <div className="primary-value">
          <div className="text-wrapper-22">About Us</div>
        </div>
        <div className="primary-value-2">
          <div className="text-wrapper-22">Partners</div>
        </div>
        <div className="overlap-22">
          <div className="mask-group-2">
            <div className="overlap-23">
              <div className="rectangle-6" />
              <div className="ellipse-6" />
              <img className="mask-group-2" alt="Mask group" src="mask-group.png" />
              <img className="mask-group-2" alt="Mask group" src="mask-group-2.png" />
            </div>
          </div>
          <div className="rectangle-7" />
          <div className="rectangle-8" />
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
        </div>
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
          {/* <AsanaLogoColour className="asana-logo-colour-instance" />
          <AbstractLogoColour className="abstract-logo-colour-instance" />
          <AdobeLogoColour className="adobe-logo-colour-instance" />
          <AirtableLogoColour className="airtable-logo-colour-instance" />
          <LogitechLogoColour className="logitech-logo-colour-instance" /> */}
        </div>
      </div>
    </div>
  );
};
