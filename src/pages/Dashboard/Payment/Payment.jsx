import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseInt(total);
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
          <CheckoutForm cart={cart} price={price} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
