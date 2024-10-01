import { useState } from 'react';

const SideBar = () => {
    const [selected, setSelected] = useState(""); // Initialize selected

    const sortValue = [
        { id: 1, name: "Popular" },
        { id: 2, name: "Average" },
        { id: 3, name: "Worst" },
    ];

    return (
        <div className="">
            {/* Sidebar */}
            <div
                className="bg-gray-700 text-gray-100 w-[20%] h-[calc(100vh-80px)] overflow-y-auto py-8 px-3 fixed top-[80px] left-0"
                id="sidebar"
            >
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-medium">Sort by</h2>

                    <select
                        className="rounded border border-gray-300 p-2 text-gray-800 bg-white"
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                    >
                        {sortValue.map(({ id, name }) => (
                            <option key={id} value={name} className="text-gray-800">
                                {name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Sidebar Links */}
                <ul className="space-y-4 mt-6 text-sm">
                    <li className="cursor-pointer hover:text-black">New Collection</li>
                    <li className="cursor-pointer hover:text-black">All Products</li>
                    <li className="cursor-pointer hover:text-black">Discounted Products</li>
                </ul>

                {/* Filter Section */}
                <div className="mt-24 px-3 ">
                    <h1 className="text-lg font-medium">Filter:</h1>
                    <ul className="space-y-3 mt-3 text-sm">
                        <li className="cursor-pointer hover:text-black">Availability</li>
                        <li className="cursor-pointer hover:text-black">Discount</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
