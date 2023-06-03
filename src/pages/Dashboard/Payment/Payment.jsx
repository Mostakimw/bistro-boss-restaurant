import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);

const Payment = () => {
  return (
    <div className="px-10">
      <Helmet>
        <title>Make Payment || Bistro Boss</title>
      </Helmet>
      <SectionTitle
        title="make process"
        subtitle="Make a Payment"
      ></SectionTitle>
      <h2 className="mb-6">tk tk</h2>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
