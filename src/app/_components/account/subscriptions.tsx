import React from "react";
import { Donation } from "@prisma/client";

const SubscriptionsSection: React.FC<{
    donations: Donation[];
    selectedSubscriptionId: string | null;
    onSubscriptionClick: (id: string) => void;
}> = ({ donations, selectedSubscriptionId, onSubscriptionClick }) => {
    const subscriptionDonations = donations.filter(
        (donation) => donation.frequency !== "onetime"
    );

    return (
        <div>
            <h2>Subscriptions</h2>
            {subscriptionDonations.length > 0 ? (
                <ul>
                    {subscriptionDonations.map((donation) => (
                        <li
                            key={donation.id}
                            className="donation-item"
                            onClick={() => onSubscriptionClick(donation.id)}
                        >
                            <div className="donation-details">
                                <p className="donation-amount">
                                    {donation.currency} {donation.amount}
                                </p>
                                <p className="donation-frequency">
                                    Frequency: {donation.frequency}
                                </p>
                                <p className="donation-status">Status: {donation.status}</p>
                                <p className="donation-date">
                                    Date: {new Date(donation.createdAt).toDateString()}
                                </p>
                            </div>
                            {selectedSubscriptionId === donation.id && (
                                <div className="subscription-management">
                                    <h3>Manage Subscription</h3>
                                    <p>
                                        Subscription for: {donation.currency} {donation.amount}{" "}
                                        {donation.frequency}
                                    </p>
                                    <button onClick={() => alert("Change subscription")}>
                                        Change subscription
                                    </button>
                                    <button onClick={() => alert("Cancel subscription")}>
                                        Cancel subscription
                                    </button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No subscriptions found.</p>
            )}
        </div>
    );
};

export default SubscriptionsSection;
