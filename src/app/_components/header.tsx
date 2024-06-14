import Link from "next/link";
import React from "react";
import "~/styles/header.css";

export function Header({ children }: { children: React.ReactNode }) {
    const links = [
        { name: "Home", url: "/" },
        { name: "Donate", url: "/donate" },
        { name: "About Us", url: "/about" },
        { name: "Contact", url: "/contact" },
        { name: "Partners", url: "/partners" },
        { name: "Feedback", url: "/feedback" },
    ];
    return (
        <div className="header">
            {/* <nav className="navigation-menu">
            <div className="ellipse-7" />
                <div className="frame-2">
                    <div className="text-wrapper-23">Login</div>
                </div>
                <div className="frame-3">
                    <div className="text-wrapper-24">Signup</div>
                </div>
                <div className="navbar">
                    {links.map((link) => (
                        <div key={link.url} className="text-wrapper-25">{link.name}</div>
                    ))}
                </div>
            </nav> */}
            <nav className="navigation-menu">
                <div className="ellipse-7" />
                <div className="navbar">
                    {links.map((link) => (
                        <div key={link.url} className="nav-link">
                            <Link href={link.url}>
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="auth-buttons">
                <div className="frame login-frame">
                    <div className="text-wrapper">Login</div>
                </div>
                <div className="frame signup-frame">
                    <div className="text-wrapper">Signup</div>
                </div>
                </div>
            </nav>
            {children}
        </div>
    );
}
