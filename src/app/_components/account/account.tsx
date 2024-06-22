import React, { useEffect, useState } from "react";
import "~/styles/account.css"; // Create a CSS file for custom styles
import { useSession, signIn } from "next-auth/react";
import { api } from "~/trpc/react"; // Adjust the import according to your setup

const donations: any = []

const Account: React.FC = () => {
    const { data: session, status } = useSession();
    // const [donations, setDonations] = useState([]);

    useEffect(() => {
        if (status === "authenticated") {
            const fetchDonations = async () => {
                try {
                    // const response = await api.donations.getUserDonations();
                    // setDonations(response);
                } catch (error) {
                    console.error("Failed to fetch donations:", error);
                }
            };

            fetchDonations();
        }
        else if (status === "unauthenticated") {
            signIn(); // Redirect to login if not authenticated
        }
    }, [status]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <div className="account-page">
            <h1>My Account</h1>
            {session && (
                <div className="account-details">
                    <p>
                        Logged in as <strong>{session.user?.name}</strong>
                    </p>
                    <p>Email: {session.user?.email}</p>
                </div>
            )}
            <div className="donations-section">
                <h2>My Donations</h2>
                {donations.length > 0 ? (
                    <ul className="donations-list">
                        {donations.map((donation, index) => (
                            <li key={index} className="donation-item">
                                <p>Amount: {donation.amount}</p>
                                <p>Date: {new Date(donation.date).toLocaleDateString()}</p>
                                <p>Currency: {donation.currency}</p>
                                <p>Frequency: {donation.frequency}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No donations found.</p>
                )}
            </div>
            <div className="account-actions">
                <button onClick={() => signIn()} className="action-button">Edit Profile</button>
                <button onClick={() => signIn()} className="action-button">Change Password</button>
                <button onClick={() => signIn()} className="action-button">Logout</button>
            </div>
        </div>
    );
};

export default Account;
