"use client";
import React from "react";
import Link from "next/link";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";
import { IoBagCheckOutline } from "react-icons/io5";
import { useAppContext } from "@/context/globalContext";

const Checkout = () => {
  const { cart, addToCart, removeFromCart, subTotal } = useAppContext();
  return (
    <div className="flex flex-col">
      <h1 className="text-black text-center my-3 block font-bold text-3xl">
        Checkout
      </h1>

      {/* //-- */}
      <h2 className="text-black mt-3 md:text-lg font-bold md:mx-20 mx-12">
        1. Delivery Details
      </h2>
      <div className="flex sm:flex-row flex-col md:mx-24 mx-16">
        <div className="md:w-1/2 w-full mb-2 sm:me-1">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="md:w-1/2 w-full mb-2 sm:ms-1">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className=" md:mx-24 mx-16 ">
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">
          Address:
        </label>
        <textarea
          name="address"
          id="address"
          cols={30}
          rows={3}
          className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <div className="flex sm:flex-row flex-col md:mx-24 mx-16">
        <div className="md:w-1/2 w-full mb-2 sm:me-1">
          <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
            Phone:
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="md:w-1/2 w-full mb-2 sm:ms-1">
          <label htmlFor="city" className="leading-7 text-sm text-gray-600">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col md:mx-24 mx-16">
        <div className="md:w-1/2 w-full mb-2 sm:me-1">
          <label htmlFor="state" className="leading-7 text-sm text-gray-600">
            State:
          </label>
          <input
            type="text"
            id="state"
            name="state"
            className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="md:w-1/2 w-full mb-2 sm:ms-1">
          <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">
            PinCode
          </label>
          <input
            type="number"
            id="pincode"
            name="pincode"
            className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <h2 className="text-black mt-3 md:text-lg font-bold md:mx-20 mx-12">
        2. Review Cart Items
      </h2>
      <div className=" md:mx-24 mx-16 my-3 p-10 bg-pink-200 text-black rounded-md">
        {Object.keys(cart).length == 0 && (
          <p className="flex justify-center text-center font-semibold text-red-500">
            Your cart is empty!
          </p>
        )}
        <ol className="list-decimal text-sm font-semibold">
          {Object.keys(cart).map((itemCode: string) => (
            <li className="my-3" key={itemCode}>
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/3 ">{cart[itemCode].name}</div>
                <div className="sm:w-1/3 flex md:items-center md:justify-center justify-start">
                  <span className="text-lg text-red-700">
                    <HiMinusCircle
                      onClick={() => {
                        removeFromCart(itemCode);
                      }}
                      className="me-2 cursor-pointer"
                    />
                  </span>
                  {cart[itemCode].qty}
                  <span className="text-lg text-red-700">
                    <HiPlusCircle
                      onClick={() => {
                        addToCart(
                          itemCode,
                          cart[itemCode].name,
                          1,
                          cart[itemCode].color,
                          cart[itemCode].price,
                          cart[itemCode].size
                        );
                      }}
                      className="ms-2 cursor-pointer"
                    />
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <p className="font-bold mt-2">Subtotal is : ₹{subTotal}</p>
        <div className="buttons flex flex-col sm:flex-row">
          <Link href={"/"}>
            <button className="flex mx-auto mt-8 text-white bg-green-600 border-0 py-2 px-2  focus:outline-none hover:bg-green-500 rounded-md items-center text-sm font-semibold">
              <IoBagCheckOutline className="me-2 text-lg" />
              <span className="">Pay ₹{subTotal}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
