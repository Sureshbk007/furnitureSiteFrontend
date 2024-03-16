import React from "react";
import esewa from "../assets/esewa_logo.png";
function Checkout() {
  return (
    <div className="bg-gray-100 ">
      <div className="w-full max-w-3xl mx-auto p-8">
        <div className="bg-white  p-8 rounded-lg shadow-md border-2 ">
          <h1 className="text-2xl font-bold text-gray-800  mb-4">Checkout</h1>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700  mb-2">
              Shipping Address
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-gray-700  mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="w-full rounded-lg border-2 py-2 px-3 "
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-gray-700  mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="w-full rounded-lg border-2 py-2 px-3 "
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="address" className="block text-gray-700  mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full rounded-lg border-2 py-2 px-3 "
              />
            </div>

            <div className="mt-4">
              <label htmlFor="city" className="block text-gray-700   mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                className="w-full rounded-lg border-2 py-2 px-3 "
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="state" className="block text-gray-700  mb-1">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="w-full rounded-lg border-2 py-2 px-3 "
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-gray-700  mb-1">
                  Contact
                </label>
                <input
                  type="text"
                  id="contact"
                  className="w-full rounded-lg border-2 py-2 px-3 "
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700  mb-2">
              Payment Information
            </h2>
            <div className="mt-4">
              <span className="inline-block font-semibold p-4 mt-2 rounded-lg bg-green-400">
                Pay with
                <img src={esewa} />
              </span>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 ">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
