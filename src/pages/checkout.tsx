import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '~/app/_components/checkout/checkout';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
const stripePromise = loadStripe('asdfw');

const CheckoutPage: React.FC = () => {
    const amount = 5000; // Example amount in the smallest currency unit (e.g., cents)
    const currency = 'usd'; // Example currency

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm amount={amount} currency={currency} />
        </Elements>
    );
};

export default CheckoutPage;
