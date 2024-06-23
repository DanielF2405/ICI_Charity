import React from "react";
import "~/styles/donate.css";
import "~/styles/globals.css"
import "~/styles/styleguide.css";;
import Layout from "~/app/pageLayout";
import { DonateHero } from "~/app/donate/hero";
import { Donate } from "~/app/donate/donate";


const WrappedFrame = (): JSX.Element => {
    return (
        <Layout hero={<DonateHero />}>
            <Donate />
        </Layout>
    );
};


export default WrappedFrame;