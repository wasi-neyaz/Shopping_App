import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto px-4">
        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo.png" className="h-14" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <div className="hidden md:flex space-x-6">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative">
                <FaShoppingCart className="text-2xl" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                    {cart.length}
                  </span>
                )}
              </div>
            </NavLink>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 text-white space-y-4 py-4">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart" onClick={() => setIsOpen(false)}>
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
