import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";

const CheckoutForm = ({ cart, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState(" ");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        // console.log("client secret data", res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    setProcessing(false);
    console.log("payment intent", paymentIntent);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // TODO: next steps
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,

        date: new Date(),
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        menuItems: cart.map((item) => item.menuItemId),
        itemName: cart.map((item) => item.name),
        status: "service pending",
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.result.insertedId) {
          // TODO: showing success alert
        }
      });
    }
  };
  return (
    <div>
      <form className="w-2/3" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-10"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
        {cardError && <p className="text-error mt-6">{cardError}</p>}
        {transactionId && (
          <p className="text-success mt-6">
            Payment Succeeded with TransactionId: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
