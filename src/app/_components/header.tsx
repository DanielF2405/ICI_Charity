import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "~/server/auth";
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
        <div className="header-container">
            <nav className="navigation-menu">
                <div className="ellipse-decoration" />
                <div className="navbar-container">
                    {links.map((link) => (
                        <div key={link.url} className="nav-link">
                            <Link href={link.url}>
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </div>
                <AuthButtons />
            </nav>
            {children}
        </div>
    );
}

function AuthButtons() {
    const { data: session } = useSession();
    return (
        <div className="auth-buttons-container">
      {session ? (
        <div className="user-dropdown">
          <span>Logged in as {session.user?.name}</span>
          <div className="dropdown-content">
            <Link href="/account">My Account</Link>
            <Link href="/api/auth/signout">Logout</Link>
          </div>
        </div>
      ) : (
        <>
          <Link href="/api/auth/signin" className="button-frame login-frame">
            <div className="text-content">Login</div>
          </Link>
          <Link href="/signup" className="button-frame signup-frame">
            <div className="text-content">Signup</div>
          </Link>
        </>
      )}
    </div>
    );

}