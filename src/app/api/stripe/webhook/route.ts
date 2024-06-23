// src/app/api/stripe/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { db } from '~/server/db'; // Adjust the import according to your setup

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-04-10',
});

export async function POST(req: NextRequest) {
    const rawBody = await req.text();
    const sig = req.headers.get('stripe-signature')!;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            rawBody,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err) {
        console.error(`Webhook Error: ${err.message}`);
        return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
    }
    console.log({ event })


    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed': {
            const session = event.data.object as Stripe.Checkout.Session;
            // Save payment info to your database here
            console.log({session})
            const metadata = session.metadata || {};
            const userId = metadata.userId || null; // or handle as needed
            const anonymous = metadata.anonymous === 'true';
            await db.donation.create({
                data: {
                    amount: session.amount_total! / 100, // Stripe amount is in cents
                    currency: session.currency || 'GBP',
                    status: session.payment_status,
                    message: metadata.message || '', // Assuming message is stored in metadata
                    userId,
                    frequency: metadata.frequency || 'onetime', // Assuming frequency is stored in metadata
                    anonymous,
                    stripeSessionId: session.id,
                },
            });
            break;
            // Add other event types as needed
        }
        case 'charge.updated': {
            const charge = event.data.object as Stripe.Charge;
            console.log('Charge updated:', charge);
            // Add your logic for handling charge updates here
            break;
        }
        default:
            console.warn(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
}
