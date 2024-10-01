import { FiLogOut, FiHome, FiUser } from "react-icons/fi";
import { IoMdPin } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";


const Account = () => {
  const user = {
    id: 1,
    name: "Nikhil Wankhade",
    email: "nikhil@gmail.com",
    imgSrc:
      "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    address: "Chatanya Colony, Amravati",
  };

  const orders = [
    {
      id: 1,
      orderNumber: "ORD12345",
      items: ["Laptop", "Wireless Mouse"],
      status: "Shipped",
      trackingId: "TRACK123456",
      location: "Mumbai Warehouse",
    },
    {
      id: 2,
      orderNumber: "ORD12346",
      items: ["Smartphone", "Screen Protector"],
      status: "Out for Delivery",
      trackingId: "TRACK123457",
      location: "Near Your Address",
    },
  ];

  return (
    <section className="mt-16 w-[89%] mx-auto min-h-screen flex flex-col lg:flex-row justify-center gap-6 p-4">
      {/* Left Side: User Details */}
      <div className="lg:w-1/4 w-full bg-white p-6 border border-gray-200 ">
        <div className="flex flex-col space-y-6">
          {/* Profile Section */}
          <div className="flex items-center space-x-3">
            <img
              src={user.imgSrc}
              alt={user.name}
              className="w-14 h-14 object-cover rounded-full"
            />
            <div>
              <h2 className="text-md font-medium text-gray-800">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col space-y-4">
            {/* Profile Link */}
            <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-all cursor-pointer">
              <FiUser size={18} />
              <span className="text-sm font-semibold">mobile no</span>
              <p className="text-sm text-slate-500"> +91<span>959480462</span></p>
            </div>

            {/* Saved Addresses */}
            <div className="flex justify-between items-center text-gray-600 hover:text-gray-900 transition-all cursor-pointer">
              <div className="flex items-center space-x-2">
                <FiHome size={18} />
                <span className="text-sm font-semibold">Saved Addresses</span>
              </div>
              <p className="text-xs text-gray-400">{user.address}</p>
            </div>

            {/* Edit Link */}
            <div className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 transition-all cursor-pointer">
              <FaRegEdit size={18} />
              <span className="text-sm font-semibold">Edit</span>
            </div>

            {/* Logout Link */}
            <div className="flex items-center space-x-2 text-red-500 hover:text-red-700 transition-all cursor-pointer">
              <FiLogOut size={18} />
              <span className="text-sm font-semibold">Logout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Orders Tracking */}
      <div className="lg:w-3/4 w-full  p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Tracking</h2>

        {orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order.id}
              className="bg-yellow-500 border border-gray-900 rounded-lg  p-6 mt-4"
            >
              <div className="flex flex-col md:flex-row justify-between">
                {/* Order Details */}
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Order: {order.orderNumber}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Status: <span className="font-semibold">{order.status}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Tracking ID:{" "}
                    <span className="font-semibold">{order.trackingId}</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Items: {order.items.join(", ")}
                  </p>
                </div>

                {/* Product Location (Map-like Feature) */}
                <div className="flex items-center mt-4 md:mt-0">
                  <IoMdPin size={24} className="text-red-500" />
                  <span className="text-gray-700 ml-2">{order.location}</span>
                </div>
              </div>

              {/* Placeholder for Map */}
              <div className="w-full h-48 mt-4 bg-gray-200 rounded-lg">
                <p className="text-center text-gray-500 pt-16">
                  Map of Product Location
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 mt-4">No orders to track.</p>
        )}
      </div>
    </section>
  );
};

export default Account;
