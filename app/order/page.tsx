import React from "react";
import Image from "next/image";
const order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Supercool & Co.
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Item Code #36740
              </h1>

              <p className="leading-relaxed mb-4">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutr
              </p>
              <div className="flex border-gray-200 py-2 mb-3 mt-2 font-semibold justify-between">
                <span className="text-center  text-gray-900">
                  Item Description
                </span>
                <span className="text-center  text-gray-900">Quantity</span>
                <span className="text-center  text-gray-900">Price</span>
              </div>
              <div className="flex border-t border-gray-200 py-2 justify-between">
                <span className="text-gray-500">Item1</span>
                <span className=" text-gray-900">3</span>
                <span className=" text-gray-900">₹499</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Item2</span>
                <span className="ml-auto text-gray-900">2</span>
                <span className="ml-auto text-gray-900">₹499</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Item3</span>

                <span className="ml-auto text-gray-900">4</span>
                <span className="ml-auto text-gray-900">₹499</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹58.00
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Track Order
                </button>
              </div>
            </div>
            <Image
              alt="ecommerce"
              height={1000}
              width={1200}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default order;
