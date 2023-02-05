import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useShopContext } from "../context/ShopContext";
import { formato } from "../format";
import useProducts from "../Request";

export default function NavDaisy() {
  const { products } = useProducts();
  const { cartQuantity, cartItems } = useShopContext();
  return (
    <div className="navbar bg-base-200 sticky top-0 z-10  shadow-md">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/products">
          Products
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/contact">
          Contact
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator mr-2">
              <AiOutlineShoppingCart className=" text-4xl" />
              <span className="badge badge-sm indicator-item">
                {cartQuantity}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{cartQuantity} Items</span>
              <span className="text-info">
                Subtotal:{" "}
                {formato(
                  cartItems.reduce((total, cartItem) => {
                    const item = products?.find((i) => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </span>
              <div className="card-actions">
                <Link className="btn btn-primary btn-block" to="/cart">
                  <button className="text-xl">View cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
