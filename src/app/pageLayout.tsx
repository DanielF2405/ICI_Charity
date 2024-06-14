// "use client";
// Layout.js
import React, { use, useEffect } from "react";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const Layout = ({
    hero,
    children,
}: {
    hero: React.ReactNode;
    children: React.ReactNode;
}) => {
    
    return (
        <div className="charity-landing-page">
            <div className="main-content">
                <Header>{hero}</Header>
                <div className="content">{children}</div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
