import { createPaymentIntent } from "../services/stripe.service.js";

export const createPayment = async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await createPaymentIntent(amount);

    res.json({
      clientSecret: paymentIntent.client_secret
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
