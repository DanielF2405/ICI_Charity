import Stripe from 'stripe';
import { db } from '../server/db'; // Adjust the import path as needed

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
});

export const syncStripePayments = async () => {
  try {
    let hasMore = true;
    let startingAfter: string | undefined = undefined;

    while (hasMore) {
      const charges = await stripe.charges.list({
        limit: 100,
        starting_after: startingAfter,
      });

      for (const charge of charges.data) {
        const existingDonation = await db.donation.findUnique({
          where: { stripeSessionId: charge.id },
        });

        if (!existingDonation) {
          await db.donation.create({
            data: {
              userId: charge.metadata.userId || null,
              amount: charge.amount / 100, // Convert from cents to dollars
              currency: charge.currency,
              frequency: charge.metadata.frequency || 'onetime',
              anonymous: charge.metadata.anonymous === 'true',
              message: charge.metadata.message || '',
              stripeSessionId: charge.id,
              status: charge.status,
              createdAt: new Date(charge.created * 1000), // Convert timestamp to Date
            },
          });
        }
      }

      hasMore = charges.has_more;
      if (hasMore) {
        startingAfter = charges.data[charges.data.length - 1].id;
      }
    }

    console.log('Stripe payments synced successfully.');
  } catch (error) {
    console.error('Error syncing Stripe payments:', error);
  }
};

// Only run the sync when this script is run directly.
// if (require.main === module) {
//   syncStripePayments().catch(console.error);
// }
