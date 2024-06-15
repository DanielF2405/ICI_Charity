import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import "~/styles/checkout.css";

const CheckoutForm: React.FC<{ amount: number, currency: string }> = ({ amount, currency }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const { clientSecret } = await fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount, currency }),
        }).then(res => res.json());

        if (!clientSecret) {
            setError('Failed to create payment intent.');
            setLoading(false);
            return;
        }

        const cardElement = elements!.getElement(CardElement);

        const { error, paymentIntent } = await stripe!.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement!,
            },
        });

        if (error) {
            setError(error.message!);
            setLoading(false);
        } else if (paymentIntent!.status === 'succeeded') {
            // Payment succeeded, handle post-payment logic here
            alert('Payment succeeded!');
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit" disabled={!stripe || loading}>
                {loading ? 'Processing...' : 'Pay'}
            </button>
        </form>
    );
};

export default CheckoutForm;
