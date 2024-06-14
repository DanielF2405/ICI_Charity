import React from "react";
// import { Facebook } from "./Facebook";
// import { Instagram } from "./Instagram";
// import { Linkedin } from "./Linkedin";
// import { Twitter } from "./Twitter";
// import { Youtube } from "./Youtube";
import "../styles/donate.css";
import Layout from "~/app/pageLayout";
import { Hero } from "~/app/_components/donate/hero";
import { Frame } from "~/app/_components/donate/donate";


const WrappedFrame = (): JSX.Element => {
    return (
        <Layout hero={Hero}>
            <Frame />
        </Layout>
    )
}

export default WrappedFrame;