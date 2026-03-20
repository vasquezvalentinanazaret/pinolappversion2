"use client";

import { loadStripe } from "@stripe/stripe-js";
import API from "../../lib/api";

const stripePromise = loadStripe("pk_test_xxxxx");

export default function Checkout() {

  const handlePayment = async () => {
    const stripe = await stripePromise;

    const res = await API.post("/payments", {
      amount: 100
    });

    await stripe.redirectToCheckout({
      sessionId: res.data.id
    });
  };

  return (
    <div className="container">
      <h2>Confirmar pago</h2>

      <button className="button" onClick={handlePayment}>
        Pagar ahora 💳
      </button>
    </div>
  );
}
