import React from "react";
// import { Facebook } from "./Facebook";
// import { Instagram } from "./Instagram";
// import { Linkedin } from "./Linkedin";
// import { Twitter } from "./Twitter";
// import { Youtube } from "./Youtube";
import "../styles/donate.css";
import "../styles/globals.css"
import "~/styles/styleguide.css";;
import Layout from "~/app/pageLayout";
import { DonateHero } from "~/app/_components/donate/hero";
import { Donate } from "~/app/_components/donate/donate";


const WrappedFrame = (): JSX.Element => {
    return (
        <Layout hero={<DonateHero />}>
            <Donate />
        </Layout>
    );
};


export default WrappedFrame;