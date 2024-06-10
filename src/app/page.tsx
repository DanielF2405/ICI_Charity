import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
// import styles from "./index.module.css";
// import "~/styles/styles.css";
import { Home as HomePage } from "~/app/_components/home/home";
import { Footer } from "./_components/footer";
import { FAQ } from "./_components/home/faq";
import { Pricing } from "./_components/home/pricing";
import { Review } from "./_components/home/review";
import { Impact } from "./_components/home/impact";
import { Stats } from "./_components/home/stats";
import { AboutUs } from "./_components/home/about";
import { Partners } from "./_components/home/partners";
import { Header } from "./_components/header";
import { Hero } from "./_components/home/hero";
import { Frame } from "./_components/donate/donate";

export default async function Home() {
    const hello = await api.post.hello({ text: "from tRPC" });
    const session = await getServerAuthSession();

    return (
        // <CharityLandingPage />
        <div className="charity-landing-page">
            <div className="div">
                <div>
                    <Header>
                        <Hero />
                    </Header>
                </div>
                {/* <HomePage /> */}
                <Frame />
                <Footer />
            </div>
        </div>
    );
}
