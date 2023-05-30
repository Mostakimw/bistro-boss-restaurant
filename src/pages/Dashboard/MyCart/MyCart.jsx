import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart/useCart";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const result = cart.reduce((sum, item) => item.price + sum, 0);
  const handlerDeleteFromCart = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-9/12">
      <Helmet>
        <title>My-Cart | Bistro Boss</title>
      </Helmet>
      <div className="flex justify-between gap-20 mb-10 items-center">
        <h1 className="text-2xl font-bold">My Cart: {cart?.length}</h1>
        <h1 className="text-2xl font-bold">Total Price: {result}</h1>
        <button className="btn btn-xs">Pay</button>
      </div>
      <div className="overflow-x-auto w-full ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-20 h-20">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => handlerDeleteFromCart(item)}
                    className="btn btn-lg bg-red-400 border-0 hover:bg-red-500"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
