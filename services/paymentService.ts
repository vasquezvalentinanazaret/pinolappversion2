import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function createPayment(amount: number) {
  return stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "usd",
  });
}
