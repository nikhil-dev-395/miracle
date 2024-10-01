import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { FiMinusCircle } from "react-icons/fi";

const Cart = () => {
    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            imgSrc: "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const [count, setCount] = useState(1);

    // Constants for price calculation
    const discount = 10; // Discount in percentage
    const shippingFee = 20;
    const platformFee = 5;
    const totalMRP = products.reduce((acc, product) => acc + product.price * count, 0); // Total before discount
    const discountAmount = (totalMRP * discount) / 100;
    const netTotal = totalMRP - discountAmount + shippingFee + platformFee;

    return (
        <>
            <section className="min-h-screen w-full pt-24 px-10 bg-gray-100">
                <h1 className="text-xl font-medium mb-6">Your Cart</h1>
                <div className="grid grid-cols-2 gap-0 px-20 w-[1000px] mx-auto "> {/* Removed the gap */}
                    {/* Product Card */}
                    <div className="flex flex-col w-1/2">
                        {products.map((product) => (
                            <div key={product.id} className="    h-full bg-white rounded-lg shadow-sm">
                                <img
                                    src={product.imgSrc}
                                    alt={product.name}
                                    className="w-full h-40 rounded-t-lg object-cover"
                                />
                                {/* Product Details */}
                                <div className="p-4">
                                    <h3 className="text-md text-gray-900 font-medium">{product.name}</h3>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="text-sm text-gray-700">${product.price}</span>
                                        <div className="flex gap-2 items-center">
                                            <FiMinusCircle
                                                size={20}
                                                onClick={() => setCount(count > 1 ? count - 1 : 1)} // Prevent negative count
                                                className="text-gray-500 cursor-pointer"
                                            />
                                            <p className="text-sm text-gray-900">{count}</p>
                                            <IoIosAddCircle
                                                size={20}
                                                onClick={() => setCount(count + 1)}
                                                className="text-gray-500 cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                    {/* Net Total */}
                                    <div className="mt-4 text-sm text-yellow-600 flex justify-between">
                                        <span>Net Total</span>
                                        <span>${count * product.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Price Breakdown */}
                    <div className="w-full  p-6 rounded-lg">
                        <h2 className="text-lg font-medium mb-4 text-gray-800">Price Breakdown</h2>
                        <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex justify-between">Total MRP <span>${totalMRP}</span></li>
                            <li className="flex justify-between">Discount <span>- ${discountAmount.toFixed(2)}</span></li>
                            <li className="flex justify-between">Platform Fee <span>+ ${platformFee}</span></li>
                            <li className="flex justify-between">Shipping Fee <span>+ ${shippingFee}</span></li>
                        </ul>
                        <hr className="my-4 border-gray-200" />
                        <h2 className="text-lg font-semibold text-yellow-600 flex justify-between">
                            Total Payable <span>${netTotal.toFixed(2)}</span>
                        </h2>

                        <button className="mt-6 px-3 bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition duration-150">
                            Place Order
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;
