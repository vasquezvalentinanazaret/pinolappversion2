import { createCheckoutSession } from "../services/stripe.service.js";

export const createPayment = async (req, res) => {
  const { amount } = req.body;

  const session = await createCheckoutSession(amount);

  res.json({ id: session.id });
};
