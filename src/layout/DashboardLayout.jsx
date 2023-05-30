import { FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content uppercase">
          <li>
            <NavLink to="/dashboard/home">
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaHome /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment-history">
              <FaHome /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaShoppingCart /> Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/menu">
              <FaShoppingCart /> Menu
            </NavLink>
          </li>

          <li>
            <NavLink to="/food">
              <FaShoppingCart /> Shop
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
