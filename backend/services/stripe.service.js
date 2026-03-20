import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);

export const createPaymentIntent = async (amount) => {
  return await stripe.paymentIntents.create({
    amount: amount * 100, // centavos
    currency: "usd"
  });
};
