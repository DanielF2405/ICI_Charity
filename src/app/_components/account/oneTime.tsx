import React from "react";
import { Donation } from "@prisma/client";

const OneTimeDonationsSection: React.FC<{ donations: Donation[] }> = ({
  donations,
}) => {
  const oneTimeDonations = donations.filter(
    (donation) => donation.frequency === "onetime"
  );

  return (
    <div>
      <h2>One-Time Donations</h2>
      {oneTimeDonations.length > 0 ? (
        <ul>
          {oneTimeDonations.map((donation) => (
            <li key={donation.id} className="donation-item">
              <div className="donation-details">
                <p className="donation-amount">
                  {donation.currency} {donation.amount}
                </p>
                <p className="donation-status">Status: {donation.status}</p>
                <p className="donation-message">
                  Message: {donation.message || "No message provided"}
                </p>
                <p className="donation-date">
                  Date: {new Date(donation.createdAt).toDateString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No one-time donations found.</p>
      )}
    </div>
  );
};

export default OneTimeDonationsSection;
