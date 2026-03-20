import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);

export const createCheckoutSession = async (amount) => {
  return await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Pedido PinolApp"
          },
          unit_amount: amount * 100
        },
        quantity: 1
      }
    ],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel"
  });
};
