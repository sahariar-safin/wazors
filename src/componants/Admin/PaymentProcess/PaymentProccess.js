import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimplePaymentForm from './SimplePaymentForm';

const stripePromise = loadStripe('pk_test_hsziEnmRPOLmQS5PTDcORl69000yX7AdaV');

const ProcessPayment = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <SimplePaymentForm handlePayment={handlePayment} ></SimplePaymentForm>
        </Elements>
    );
};

export default ProcessPayment;