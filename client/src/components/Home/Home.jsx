import { IoIosAddCircle } from "react-icons/io";
import SideBar from "./SideBar";

const Home = () => {


  // Sample product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$99.99",
      imgSrc: "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$89.99",
      imgSrc: "https://images.unsplash.com/photo-1727175401105-5b4a6b455645?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$79.99",
      imgSrc: "https://plus.unsplash.com/premium_photo-1726862996228-8c1c6dc7136d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$89.99",
      imgSrc: "https://images.unsplash.com/photo-1714018359541-f2cd45daafc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$79.99",
      imgSrc: "https://images.unsplash.com/photo-1727088269392-486a739fcd53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="w-full h-full bg-white flex">

      <SideBar />
      {/* Right Products Section */}
      <div
        className="ml-[20%] w-[80%] h-[calc(100vh)] hide-scrollbar overflow-y-auto p-6 mt-24 grid grid-cols-4 gap-6"
      >
        {/* Product Card */}
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-150 ease-in-out"
          >
            <img
              src={product.imgSrc}
              alt={product.name}
              className="w-full h-[200px] rounded-t-lg object-cover"
            />
            {/* Product Details */}
            <div className="px-4 py-4">
              <h3 className="text-md text-gray-800 font-medium">{product.name}</h3>
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm font-medium text-yellow-600">{product.price}</span>
                <IoIosAddCircle size={24} className="text-gray-600 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
