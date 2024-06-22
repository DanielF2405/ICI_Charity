import React from "react";
import Layout from "~/app/pageLayout";
import { ComingSoonHero } from "~/app/comingSoon";
import  Account  from "~/app/_components/account/account";
import "../styles/globals.css";
import "~/styles/styleguide.css";
import { DonateHero } from "~/app/_components/donate/hero";

const WrappedComingSoon = (): JSX.Element => {
    return (
        <Layout hero={<DonateHero/>}>
        {/* <h1>Coming Soon</h1>
        <h1>Partners!</h1> */}
            <Account />
        </Layout>
    );
};

export default WrappedComingSoon;