"use client";

import { loadStripe } from "@stripe/stripe-js";
import API from "../../lib/api";

const stripePromise = loadStripe("pk_test_xxxxx"); // tu clave pública

export default function Checkout() {

  const handlePayment = async () => {
    const stripe = await stripePromise;

    const res = await API.post("/payments", {
      amount: 50
    });

    const result = await stripe.redirectToCheckout({
      sessionId: res.data.id
    });

    console.log(result);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Pago</h2>

      <button onClick={handlePayment}>
        Pagar
      </button>
    </div>
  );
}
