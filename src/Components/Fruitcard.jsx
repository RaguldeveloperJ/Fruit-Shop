import React from "react";

const Fruitcard = ({ fruit }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg transform group hover:scale-110 duration-100  relative">
      <img
        src={new URL(`../assets/${fruit.image}.jpeg`, import.meta.url).href}
        alt={fruit.name} className="w-full h-52 object-cover"
      />
      <div className="flex flex-col items-center my-2 py-2 space-y-1">
        <span className="text-slate-500 block">{fruit.name}</span>
        <span className="text-slate-500">₹{fruit.price}</span>
        <span className="text-white invisible text-sm px-2 group-hover:visible border-gray-400 bg-blue-500 p-1 rounded-lg">Add to cart</span>
      </div>
      <span className="absolute top-3 right-3 bg-sky-300 text-white rounded-lg border-sky-300 p-1 text-sm">1% off</span>
    </div>
  );
};

export default Fruitcard;
