import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-04-10',
});

export const checkoutRouter = createTRPCRouter({
    createCheckoutSession: protectedProcedure
        .input(z.object({
            amount: z.number(),
            currency: z.string(),
            frequency: z.string(),
            anonymous: z.boolean(),
            message: z.string(),
        }))
        .mutation(async ({ input, ctx }) => {
            const { amount, currency, frequency, anonymous, message } = input;
            const userId = ctx.session?.user?.id || null;

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency,
                            product_data: {
                                name: `Donation - ${frequency} ${anonymous ? '(Anonymous)' : ''}`,
                            },
                            unit_amount: amount * 100, // Stripe expects the amount in cents
                        },
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
                cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
                metadata: {
                  userId,
                  anonymous: anonymous.toString(),
                  frequency,
                  message: message || '',
                },
            });

            return { id: session.id, url: session.url };
        }),
});



