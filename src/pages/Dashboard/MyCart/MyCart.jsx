import useCart from "../../../hooks/useCart/useCart";

const MyCart = () => {
  const [cart] = useCart();
  const result = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <h1 className="text-2xl font-bold">My Cart: {cart?.length}</h1>
      <h1 className="text-2xl font-bold">Total Price: {result}</h1>
    </div>
  );
};

export default MyCart;
