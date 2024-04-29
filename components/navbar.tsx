"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";
import { IoBagCheckOutline } from "react-icons/io5";
import { useAppContext } from "@/context/globalContext";
import { MdAccountCircle } from "react-icons/md";
import Image from "next/image";
const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { cart, addToCart, removeFromCart, clearCart, subTotal } =
    useAppContext();

  const toggleCart = () => {
    if (ref.current) {
      if (ref.current.classList.contains("translate-x-full")) {
        ref.current.classList.remove("translate-x-full");
      } else {
        ref.current.classList.add("translate-x-full");
      }
    }
  };

  return (
    <nav className="text-gray-400 bg-gray-900 body-font /**/ sticky top-0 z-10 shadow-xl">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-start">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <Image
            height={32}
            width={32}
            src="/logo.png"
            alt="attire_axis_logo"
          />
          <span className="ml-3 text-xl font-bold text-red-400">
            AttireAxis
          </span>
        </Link>
        <nav className="mx-5 flex flex-wrap items-center text-base font-bold justify-between">
          <Link className="mr-5 hover:text-white" href={"/tshirts"}>
            T-Shirts
          </Link>
          <Link className="mr-5 hover:text-white" href={"/hoodies"}>
            Hoodies
          </Link>
          <Link className="mr-5 hover:text-white" href={"/stickers"}>
            Stickers
          </Link>
          <Link className="mr-5 hover:text-white" href={"/mugs"}>
            Mugs
          </Link>
        </nav>
        <div className="flex  justify-center items-center md:absolute md:right-2">
          <Link
            href={"/login"}
            className="inline-flex items-center border-0 py-1 px-3 focus:outline-none  text-2xl me-1 hover:text-white /**/  font-bold"
          >
            <MdAccountCircle />
          </Link>
          <button
            onClick={toggleCart}
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 hover:text-black rounded text-base /**/   font-bold"
          >
            <span className="font-bold md:text-xl">
              <BsCart2 />
            </span>
          </button>
        </div>

        {/* SideCart */}
        <div
          ref={ref}
          className="sidebar absolute w-[70%] h-screen overflow-auto sm:w-72 top-0 right-0 p-10 bg-pink-200 text-black transform transition-transform duration-150 translate-x-full shadow-xl rounded-l-md"
        >
          <span
            onClick={toggleCart}
            className="absolute cursor-pointer text-xl top-2 right-2"
          >
            <IoMdCloseCircle />
          </span>
          <h1 className="font-bold text-lg text-center mb-3">Cart Items</h1>
          {Object.keys(cart).length == 0 && (
            <p className="flex justify-center text-center font-semibold text-red-500">
              Your cart is empty!
            </p>
          )}
          <ol className="list-decimal text-sm font-semibold">
            {Object.keys(cart).map((itemCode: string) => (
              <li className="my-3" key={itemCode}>
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-2/3 overflow-hidden">
                    {cart[itemCode].name}
                  </div>
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
            <Link href={"/checkout"}>
              <button className="flex mx-auto mt-8 text-white bg-green-600 border-0 py-2 px-2  focus:outline-none hover:bg-green-500 rounded-md items-center text-sm font-semibold">
                <IoBagCheckOutline className="me-2 text-lg" />
                <span className="">Checkout</span>
              </button>
            </Link>
            <button
              onClick={() => {
                clearCart();
              }}
              className="flex mx-auto sm:mt-8 mt-2 text-white bg-red-600 border-0 py-1 px-2 focus:outline-none hover:bg-red-700 rounded-md items-center text-sm font-semibold"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
